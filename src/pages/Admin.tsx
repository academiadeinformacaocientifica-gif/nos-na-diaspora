import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useNews } from '@/contexts/NewsContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { Trash2, Plus, List, Search as SearchIcon, Loader2, Edit, X } from 'lucide-react';
import { toast } from 'sonner';

const categories = [
  { name: 'Economia', slug: 'economia' },
  { name: 'Política', slug: 'politica' },
  { name: 'Sociedade', slug: 'sociedade' },
  { name: 'Ambiente', slug: 'ambiente' },
  { name: 'Indústria', slug: 'industria' },
  { name: 'Saúde', slug: 'saude' },
  { name: 'Tecnologia', slug: 'tecnologia' },
  { name: 'Educação', slug: 'educacao' },
  { name: 'Cultura', slug: 'cultura' },
  { name: 'Mundo', slug: 'mundo' },
];

const Admin = () => {
  const { isAuthenticated, logout, loading: authLoading } = useAuth();
  const { addNews, updateNews, allNews, deleteNews, loading: newsLoading } = useNews();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    categorySlug: '',
    image: '',
    images: '', // Adicionado para a galeria
    author: 'AngolaOnline',
    isFeatured: false,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const selectedCategory = categories.find(cat => cat.slug === formData.categorySlug);
    if (!selectedCategory) {
      toast.error('Selecione uma categoria válida');
      return;
    }

    setIsSubmitting(true);
    const newsData = {
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      category: selectedCategory.name,
      categorySlug: formData.categorySlug,
      image: formData.image,
      images: formData.images.split('\n').filter(url => url.trim() !== ''), // Converte string em array
      author: formData.author,
      isFeatured: formData.isFeatured,
    };

    if (editingId) {
      await updateNews(editingId, newsData);
    } else {
      await addNews({
        ...newsData,
        date: new Date().toLocaleDateString('pt-PT'),
      });
    }

    setIsSubmitting(false);
    resetForm();
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      categorySlug: '',
      image: '',
      images: '',
      author: 'AngolaOnline',
      isFeatured: false,
    });
  };

  const handleEdit = (news: any) => {
    setEditingId(news.id);
    setFormData({
      title: news.title,
      excerpt: news.excerpt,
      content: news.content || '',
      category: news.category,
      categorySlug: news.categorySlug,
      image: news.image,
      images: Array.isArray(news.images) ? news.images.join('\n') : '', // Converte array em string para o textarea
      author: news.author,
      isFeatured: news.isFeatured || false,
    });
    // Scroll to form tab
    const tabsList = document.querySelector('[role="tablist"]');
    const addTab = tabsList?.querySelector('[value="add"]') as HTMLElement;
    addTab?.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string, title: string) => {
    if (window.confirm(`Tem a certeza que deseja eliminar a notícia: "${title}"?`)) {
      await deleteNews(id);
    }
  };

  const handleCategoryChange = (value: string) => {
    const category = categories.find(cat => cat.slug === value);
    setFormData({
      ...formData,
      categorySlug: value,
      category: category ? category.name : '',
    });
  };

  const filteredNews = allNews.filter(news =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-5xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Gestão de Conteúdos</h1>
            <p className="text-muted-foreground">Administre o portal AngolaOnline via Supabase</p>
          </div>
          <Button onClick={logout} variant="outline" className="gap-2">
            Sair
          </Button>
        </div>

        <Tabs defaultValue="list" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="list" className="gap-2">
              <List className="w-4 h-4" /> Notícias
            </TabsTrigger>
            <TabsTrigger value="add" className="gap-2">
              {editingId ? <Edit size={16} /> : <Plus size={16} />}
              {editingId ? 'Editar Notícia' : 'Nova Notícia'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="list">
            <Card>
              <CardHeader>
                <CardTitle>Notícias Publicadas</CardTitle>
                <CardDescription>
                  Visualize e gira todas as notícias do portal em tempo real.
                </CardDescription>
                <div className="relative mt-2">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Filtrar por título ou categoria..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="w-[40%]">Título</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead className="text-right">Acções</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {newsLoading ? (
                        <TableRow>
                          <TableCell colSpan={4} className="h-24 text-center">
                            <Loader2 className="w-6 h-6 animate-spin mx-auto text-muted-foreground" />
                          </TableCell>
                        </TableRow>
                      ) : filteredNews.length > 0 ? (
                        filteredNews.map((news) => (
                          <TableRow key={news.id}>
                            <TableCell className="font-medium">
                              <span className="line-clamp-1">{news.title}</span>
                            </TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${news.isFeatured ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' : 'bg-primary/10 text-primary'
                                }`}>
                                {news.category} {news.isFeatured && '★'}
                              </span>
                            </TableCell>
                            <TableCell>{news.date}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                  onClick={() => handleEdit(news)}
                                >
                                  <Edit size={16} />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                                  onClick={() => handleDelete(news.id, news.title)}
                                >
                                  <Trash2 size={16} />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                            Nenhuma notícia encontrada.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="add">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>{editingId ? 'Editar Notícia' : 'Adicionar Nova Notícia'}</CardTitle>
                    <CardDescription>
                      {editingId ? 'Altere os campos abaixo para actualizar no Supabase.' : 'Preencha os campos abaixo para publicar no Supabase.'}
                    </CardDescription>
                  </div>
                  {editingId && (
                    <Button variant="ghost" size="sm" onClick={resetForm} className="gap-2 text-muted-foreground">
                      <X size={16} /> Cancelar Edição
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Título</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Categoria</Label>
                      <Select value={formData.categorySlug} onValueChange={handleCategoryChange} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.slug} value={cat.slug}>
                              {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Resumo</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content">Conteúdo Completo</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      rows={10}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="image">URL da Imagem de Capa</Label>
                      <Input
                        id="image"
                        placeholder="https://exemplo.com/imagem.jpg"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="images">Galeria de Imagens (uma URL por linha)</Label>
                      <Textarea
                        id="images"
                        placeholder="https://exemplo.com/foto1.jpg&#10;https://exemplo.com/foto2.jpg"
                        value={formData.images}
                        onChange={(e) => setFormData({ ...formData, images: e.target.value })}
                        rows={3}
                      />
                      <p className="text-xs text-muted-foreground">Insira as URLs das imagens adicionais, uma em cada linha.</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="author">Autor</Label>
                      <Input
                        id="author"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Switch
                      id="isFeatured"
                      checked={formData.isFeatured}
                      onCheckedChange={(checked) => setFormData({ ...formData, isFeatured: checked })}
                    />
                    <Label htmlFor="isFeatured" className="cursor-pointer">Destacar no Slider Principal</Label>
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {editingId ? 'A actualizar...' : 'A publicar...'}
                      </>
                    ) : (
                      editingId ? 'Salvar Alterações' : 'Publicar Notícia'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
