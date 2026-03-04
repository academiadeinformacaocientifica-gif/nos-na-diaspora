import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { NewsCard } from '@/components/NewsCard';
import { useNews } from '@/contexts/NewsContext';

const categoryData: Record<string, { title: string; description: string }> = {
  economia: {
    title: 'Economia',
    description: 'Notícias sobre economia, negócios, finanças e mercados em Angola e no mundo.',
  },
  politica: {
    title: 'Política',
    description: 'Cobertura política nacional e internacional, governo e diplomacia.',
  },
  sociedade: {
    title: 'Sociedade',
    description: 'Notícias sobre a sociedade angolana, comunidades e questões sociais.',
  },
  ambiente: {
    title: 'Ambiente',
    description: 'Notícias sobre ambiente, sustentabilidade e alterações climáticas.',
  },
  industria: {
    title: 'Indústria',
    description: 'Cobertura do sector industrial, produção e manufactura em Angola.',
  },
  saude: {
    title: 'Saúde',
    description: 'Notícias sobre saúde pública, hospitais e avanços médicos.',
  },
  tecnologia: {
    title: 'Tecnologia',
    description: 'Inovação, tecnologia e transformação digital em Angola.',
  },
  cultura: {
    title: 'Cultura',
    description: 'Arte, música, cinema e expressões culturais angolanas.',
  },
  educacao: {
    title: 'Educação',
    description: 'Sistema educativo, universidades e formação profissional.',
  },
  mundo: {
    title: 'Mundo',
    description: 'Notícias internacionais, diplomacia e acontecimentos globais com impacto em Angola.',
  },
};

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const { allNews, latestNews, popularNews, loading } = useNews();

  const getCategoryNews = (slug: string) => {
    return allNews.filter(article => article.categorySlug === slug);
  };

  const category = categoryData[slug || 'economia'] || categoryData.economia;
  const news = getCategoryNews(slug || 'economia');

  const categoryBorderColors: Record<string, string> = {
    economia: 'border-category-economia',
    politica: 'border-category-politica',
    sociedade: 'border-category-sociedade',
    ambiente: 'border-category-ambiente',
    industria: 'border-category-industria',
    saude: 'border-category-saude',
    tecnologia: 'border-category-tecnologia',
    cultura: 'border-category-cultura',
    educacao: 'border-category-educacao',
  };

  const borderClass = categoryBorderColors[slug || 'economia'] || 'border-primary';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          {/* Category Header */}
          <div className={`mb-8 pb-6 border-b-4 ${borderClass}`}>
            <h1 className="text-3xl md:text-4xl font-bold">{category.title}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{category.description}</p>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            {/* Main Content */}
            <div>
              {/* Featured Article */}
              {news[0] && (
                <div className="mb-8">
                  <NewsCard {...news[0]} variant="hero" />
                </div>
              )}

              {/* News Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {news.slice(1).map((article) => (
                  <NewsCard key={article.id} {...article} variant="default" />
                ))}
              </div>

              {/* Pagination placeholder */}
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center gap-2">
                  <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded">
                    1
                  </button>
                  <button className="px-4 py-2 text-sm font-medium hover:bg-muted rounded transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 text-sm font-medium hover:bg-muted rounded transition-colors">
                    3
                  </button>
                  <span className="px-2">...</span>
                  <button className="px-4 py-2 text-sm font-medium hover:bg-muted rounded transition-colors">
                    10
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block">
              <Sidebar
                latestNews={latestNews.slice(0, 5)}
                popularNews={popularNews}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Category;
