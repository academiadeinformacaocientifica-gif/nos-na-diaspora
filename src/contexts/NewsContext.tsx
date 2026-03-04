import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import { NewsArticle } from '@/data/mockNews';
import { toast } from 'sonner';

interface NewsContextType {
  latestNews: NewsArticle[];
  economyNews: NewsArticle[];
  politicsNews: NewsArticle[];
  societyNews: NewsArticle[];
  technologyNews: NewsArticle[];
  healthNews: NewsArticle[];
  ambienteNews: NewsArticle[];
  industriaNews: NewsArticle[];
  culturaNews: NewsArticle[];
  educacaoNews: NewsArticle[];
  mundoNews: NewsArticle[];
  popularNews: NewsArticle[];
  featuredNews: NewsArticle[];
  allNews: NewsArticle[];
  loading: boolean;
  addNews: (news: Omit<NewsArticle, 'id'>) => Promise<void>;
  updateNews: (id: string, news: Partial<NewsArticle>) => Promise<void>;
  deleteNews: (id: string) => Promise<void>;
  refreshNews: () => Promise<void>;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};

interface NewsProviderProps {
  children: ReactNode;
}

export const NewsProvider: React.FC<NewsProviderProps> = ({ children }) => {
  const [allNews, setAllNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Map database lowercase columns to camelCase expected by the UI
      const mappedData = (data || []).map((item: any) => ({
        ...item,
        categorySlug: item.categoryslug,
        isFeatured: item.is_featured,
        images: item.images || []
      }));

      setAllNews(mappedData);
    } catch (error: any) {
      console.error('Error fetching news:', error.message);
      toast.error('Erro ao carregar notícias: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const filterByCategory = (categorySlug: string) =>
    allNews.filter(article => article.categorySlug === categorySlug);

  const latestNews = allNews.slice(0, 10);
  const popularNews = allNews.slice(0, 5); // Simplificado: últimas 5 como populares por agora
  const economyNews = filterByCategory('economia');
  const politicsNews = filterByCategory('politica');
  const societyNews = filterByCategory('sociedade');
  const technologyNews = filterByCategory('tecnologia');
  const healthNews = filterByCategory('saude');
  const ambienteNews = filterByCategory('ambiente');
  const industriaNews = filterByCategory('industria');
  const culturaNews = filterByCategory('cultura');
  const educacaoNews = filterByCategory('educacao');
  const mundoNews = filterByCategory('mundo');

  const addNews = async (news: Omit<NewsArticle, 'id'>) => {
    try {
      const insertData: any = { ...news };
      if (insertData.categorySlug) {
        insertData.categoryslug = insertData.categorySlug;
        delete insertData.categorySlug;
      }
      if (insertData.isFeatured !== undefined) {
        insertData.is_featured = insertData.isFeatured;
        delete insertData.isFeatured;
      }
      if (insertData.images) {
        insertData.images = insertData.images;
      }

      const { error } = await supabase
        .from('news')
        .insert([insertData]);

      if (error) throw error;
      await fetchNews();
      toast.success('Notícia adicionada com sucesso!');
    } catch (error: any) {
      console.error('Error adding news:', error.message);
      toast.error('Erro ao adicionar notícia: ' + error.message);
    }
  };

  const updateNews = async (id: string, news: Partial<NewsArticle>) => {
    try {
      const updateData: any = { ...news };
      if (news.categorySlug) {
        updateData.categoryslug = news.categorySlug;
        delete updateData.categorySlug;
      }
      if (news.isFeatured !== undefined) {
        updateData.is_featured = news.isFeatured;
        delete news.isFeatured;
      }
      if (news.images) {
        updateData.images = news.images;
      }
      if (updateData.id) delete updateData.id;

      const { error } = await supabase
        .from('news')
        .update(updateData)
        .eq('id', id);

      if (error) throw error;
      await fetchNews();
      toast.success('Notícia actualizada com sucesso!');
    } catch (error: any) {
      console.error('Error updating news:', error.message);
      toast.error('Erro ao actualizar notícia: ' + error.message);
    }
  };

  const deleteNews = async (id: string) => {
    try {
      const { error } = await supabase
        .from('news')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchNews();
      toast.success('Notícia eliminada!');
    } catch (error: any) {
      console.error('Error deleting news:', error.message);
      toast.error('Erro ao eliminar notícia: ' + error.message);
    }
  };

  const featuredNews = allNews.filter(news => news.isFeatured);

  return (
    <NewsContext.Provider value={{
      latestNews,
      economyNews,
      politicsNews,
      societyNews,
      technologyNews,
      healthNews,
      ambienteNews,
      industriaNews,
      culturaNews,
      educacaoNews,
      mundoNews,
      popularNews,
      featuredNews,
      allNews,
      loading,
      addNews,
      updateNews,
      deleteNews,
      refreshNews: fetchNews,
    }}>
      {children}
    </NewsContext.Provider>
  );
};

