import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NewsCard } from '@/components/NewsCard';
import { Sidebar } from '@/components/Sidebar';
import { CategorySection } from '@/components/CategorySection';
import { useNews } from '@/contexts/NewsContext';
import { HeroSlider } from '@/components/HeroSlider';
import { featuredNews as mockFeatured } from '@/data/mockNews';

const Index = () => {
  const { latestNews, economyNews, politicsNews, societyNews, technologyNews, healthNews, popularNews, featuredNews } = useNews();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-6">
          {featuredNews && featuredNews.length > 0 ? (
            <HeroSlider news={featuredNews} />
          ) : (
            <NewsCard {...mockFeatured} variant="hero" />
          )}
        </section>

        {/* Main Content Grid */}
        <div className="container py-8">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            {/* Main Column */}
            <div>
              {/* Latest News Grid */}
              <section className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold pb-2 border-b-4 border-primary mb-6">
                  Últimas Notícias
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {latestNews.slice(0, 4).map((article) => (
                    <NewsCard key={article.id} {...article} variant="default" />
                  ))}
                </div>
              </section>

              {/* Economy Section - Featured variant */}
              <CategorySection
                title="Economia"
                slug="economia"
                news={economyNews}
                variant="featured"
              />

              {/* Politics Section */}
              <CategorySection
                title="Política"
                slug="politica"
                news={politicsNews}
              />

              {/* Society Section - Featured variant */}
              <CategorySection
                title="Sociedade"
                slug="sociedade"
                news={societyNews}
                variant="featured"
              />

              {/* Technology Section */}
              <CategorySection
                title="Tecnologia"
                slug="tecnologia"
                news={technologyNews}
              />

              {/* Health Section */}
              <CategorySection
                title="Saúde"
                slug="saude"
                news={healthNews}
              />
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

        {/* Mobile Sidebar Content */}
        <div className="lg:hidden container pb-8">
          <div className="bg-card rounded-lg border border-border p-4 mb-6">
            <h3 className="text-lg font-bold mb-4 pb-2 border-b-4 border-secondary">
              Mais Lidas
            </h3>
            <div className="space-y-0">
              {popularNews.slice(0, 5).map((news, index) => (
                <article key={news.id} className="flex gap-3 py-3 border-b border-border last:border-0">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <a href={`/artigo/${news.id}`} className="flex-1 group">
                    <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                      {news.title}
                    </h4>
                    <time className="mt-1 text-xs text-muted-foreground">{news.date}</time>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
