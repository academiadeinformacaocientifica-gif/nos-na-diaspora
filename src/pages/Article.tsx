import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { NewsCard } from '@/components/NewsCard';
import { ChevronLeft, Share2, Facebook, Twitter, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNews } from '@/contexts/NewsContext';
import CommentSection from '@/components/CommentSection';
import { ImageGallery } from '@/components/ImageGallery';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const { allNews, latestNews, popularNews, loading } = useNews();

  const article = allNews.find((n) => n.id === id);
  const relatedNews = allNews
    .filter((n) => n.categorySlug === article?.categorySlug && n.id !== id)
    .slice(0, 3);

  // Gerar tags dinâmicas baseadas na categoria e título
  const categoryTagMap: Record<string, string[]> = {
    economia: ['Economia', 'Investimento', 'Finanças', 'Negócios'],
    politica: ['Política', 'Governo', 'Diplomacia', 'Angola'],
    sociedade: ['Sociedade', 'Comunidade', 'Cidadãos', 'Angola'],
    ambiente: ['Ambiente', 'Sustentabilidade', 'Natureza', 'Ecologia'],
    industria: ['Indústria', 'Produção', 'Economia', 'Angola'],
    saude: ['Saúde', 'Medicina', 'Bem-estar', 'Angola'],
    tecnologia: ['Tecnologia', 'Inovação', 'Digital', 'IA'],
    cultura: ['Cultura', 'Arte', 'Tradição', 'Angola'],
    educacao: ['Educação', 'Ensino', 'Juventude', 'Angola'],
    mundo: ['Mundo', 'Internacional', 'África', 'Diplomacia'],
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Artigo não encontrado</h2>
          <Link to="/" className="text-primary hover:underline">Voltar à página inicial</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const articleTags = categoryTagMap[article.categorySlug] || ['Angola', 'Notícias'];

  const categoryColors: Record<string, string> = {
    economia: 'category-economia',
    politica: 'category-politica',
    sociedade: 'category-sociedade',
    ambiente: 'category-ambiente',
    industria: 'category-industria',
    saude: 'category-saude',
    tecnologia: 'category-tecnologia',
    cultura: 'category-cultura',
    educacao: 'category-educacao',
    mundo: 'category-mundo',
  };

  const categoryClass = categoryColors[article.categorySlug] || 'category-economia';

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article.title;
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`;
        break;
      case 'native':
        if (navigator.share) {
          navigator.share({ title, url }).catch(console.error);
          return;
        }
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Voltar à página inicial
            </Link>
          </nav>

          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            {/* Article Content */}
            <article className="bg-card rounded-lg border border-border overflow-hidden">
              {/* Article Header */}
              <div className="p-6 md:p-10">
                <span className={`category-badge ${categoryClass}`}>
                  {article.category}
                </span>

                <h1 className="mt-4 text-2xl md:text-4xl font-bold text-balance leading-tight">
                  {article.title}
                </h1>

                <p className="mt-4 text-lg text-muted-foreground">
                  {article.excerpt}
                </p>
              </div>

              {/* Featured Image */}
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Body */}
              <div className="p-6 md:p-10 prose-article">
                <div
                  className="prose prose-lg max-w-none mb-8 text-foreground/90 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: article.content || '' }}
                />

                {/* Image Gallery */}
                {article.images && article.images.length > 0 && (
                  <div className="mt-12 border-t pt-8">
                    <h3 className="text-xl font-bold mb-6">Galeria de Imagens</h3>
                    <ImageGallery images={article.images} />
                  </div>
                )}

                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{article.author}</span>
                  <span>•</span>
                  <time>{article.date}</time>
                </div>

                {/* Share buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-muted-foreground mr-2">Partilhar:</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                    onClick={() => handleShare('facebook')}
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 text-slate-900 hover:text-black hover:bg-slate-50"
                    onClick={() => handleShare('twitter')}
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 text-green-600 hover:text-green-700 hover:bg-green-50"
                    onClick={() => handleShare('whatsapp')}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.420L0 12.518v.002H24z" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => handleShare('native')}
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Body */}
              <div className="p-6 md:p-10 prose-article">
                {article.content ? (
                  article.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('"') && paragraph.endsWith('"')) {
                      return (
                        <blockquote key={index} className="border-l-4 border-primary pl-6 my-8 italic text-lg text-muted-foreground">
                          {paragraph}
                        </blockquote>
                      );
                    }
                    return (
                      <p key={index} className="text-lg leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    );
                  })
                ) : (
                  <p className="text-lg leading-relaxed">{article.excerpt}</p>
                )}
              </div>

              {/* Tags */}
              <div className="px-6 md:px-10 pb-6 md:pb-10 border-t border-border pt-6">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-muted-foreground mr-2">Tags:</span>
                  {articleTags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/${article.categorySlug}`}
                      className="px-3 py-1 text-sm bg-muted rounded-full hover:bg-muted/80 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              <CommentSection newsId={article.id} />
            </article>

            {/* Sidebar */}
            <div className="hidden lg:block">
              <Sidebar
                latestNews={latestNews.slice(0, 5)}
                popularNews={popularNews}
              />
            </div>
          </div>

          {/* Related Articles */}
          <section className="mt-12">
            <h2 className="text-xl md:text-2xl font-bold pb-2 border-b-4 border-primary mb-6">
              Artigos Relacionados
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedNews.map((news) => (
                <NewsCard key={news.id} {...news} variant="default" />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Article;
