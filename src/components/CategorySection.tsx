import { Link } from 'react-router-dom';
import { NewsCard } from './NewsCard';
import { ChevronRight } from 'lucide-react';

interface CategorySectionProps {
  title: string;
  slug: string;
  news: Array<{
    id: string;
    title: string;
    excerpt?: string;
    image: string;
    category: string;
    categorySlug: string;
    date: string;
    author?: string;
  }>;
  variant?: 'default' | 'featured';
}

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

export function CategorySection({ title, slug, news, variant = 'default' }: CategorySectionProps) {
  const borderClass = categoryBorderColors[slug] || 'border-primary';

  if (variant === 'featured' && news.length >= 3) {
    return (
      <section className="py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl md:text-2xl font-bold pb-2 border-b-4 ${borderClass}`}>
            {title}
          </h2>
          <Link
            to={`/${slug}`}
            className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Ver mais <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Main featured article */}
          <div>
            <NewsCard {...news[0]} variant="default" />
          </div>
          {/* Secondary articles */}
          <div className="space-y-4">
            {news.slice(1, 4).map((article) => (
              <NewsCard key={article.id} {...article} variant="horizontal" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-xl md:text-2xl font-bold pb-2 border-b-4 ${borderClass}`}>
          {title}
        </h2>
        <Link
          to={`/${slug}`}
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Ver mais <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.slice(0, 3).map((article) => (
          <NewsCard key={article.id} {...article} variant="default" />
        ))}
      </div>
    </section>
  );
}
