import { Link } from 'react-router-dom';
import { NewsCard } from './NewsCard';
import { CurrencyWidget, WeatherWidget } from './Widgets';

interface SidebarProps {
  latestNews: Array<{
    id: string;
    title: string;
    image: string;
    category: string;
    categorySlug: string;
    date: string;
  }>;
  popularNews: Array<{
    id: string;
    title: string;
    image: string;
    category: string;
    categorySlug: string;
    date: string;
  }>;
}

export function Sidebar({ latestNews, popularNews }: SidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Visual Widgets */}
      <div className="space-y-4">
        <WeatherWidget />
        <CurrencyWidget />
      </div>

      {/* Ad placeholder 1 */}
      <div className="bg-muted rounded-lg p-4 text-center">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Publicidade</span>
        <div className="mt-2 bg-background rounded aspect-[300/250] flex items-center justify-center border border-border">
          <span className="text-sm text-muted-foreground">Espaço Publicitário</span>
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-card rounded-lg border border-border p-4">
        <h3 className="text-lg font-bold mb-4 pb-2 border-b-4 border-primary">
          Últimas Notícias
        </h3>
        <div className="space-y-0">
          {latestNews.map((news) => (
            <NewsCard
              key={news.id}
              {...news}
              variant="compact"
            />
          ))}
        </div>
        <Link
          to="/ultimas"
          className="mt-4 block text-center text-sm font-medium text-primary hover:underline"
        >
          Ver todas →
        </Link>
      </div>

      {/* Popular News */}
      <div className="bg-card rounded-lg border border-border p-4">
        <h3 className="text-lg font-bold mb-4 pb-2 border-b-4 border-secondary">
          Mais Lidas
        </h3>
        <div className="space-y-0">
          {popularNews.map((news, index) => (
            <article key={news.id} className="flex gap-3 py-3 border-b border-border last:border-0">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                {index + 1}
              </span>
              <Link to={`/artigo/${news.id}`} className="flex-1 group">
                <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h4>
                <time className="mt-1 text-xs text-muted-foreground">{news.date}</time>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Ad placeholder 2 */}
      <div className="bg-muted rounded-lg p-4 text-center sticky top-24">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Publicidade</span>
        <div className="mt-2 bg-background rounded aspect-[300/600] flex items-center justify-center border border-border">
          <span className="text-sm text-muted-foreground">Espaço Publicitário</span>
        </div>
      </div>
    </aside>
  );
}
