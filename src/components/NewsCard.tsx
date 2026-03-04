import { Link } from 'react-router-dom';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt?: string;
  image: string;
  category: string;
  categorySlug: string;
  date: string;
  author?: string;
  variant?: 'default' | 'horizontal' | 'compact' | 'hero';
}

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
};

export function NewsCard({
  id,
  title,
  excerpt,
  image,
  category,
  categorySlug,
  date,
  author,
  variant = 'default',
}: NewsCardProps) {
  const categoryClass = categoryColors[categorySlug] || 'category-economia';

  if (variant === 'hero') {
    return (
      <article className="news-card group relative overflow-hidden rounded-lg bg-card">
        <Link to={`/artigo/${id}`} className="block">
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="news-card-image w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-angola-black/90 via-angola-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className={`category-badge ${categoryClass}`}>
                {category}
              </span>
              <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground line-clamp-3 text-balance">
                {title}
              </h2>
              {excerpt && (
                <p className="mt-3 text-primary-foreground/80 text-sm md:text-base line-clamp-2 max-w-3xl">
                  {excerpt}
                </p>
              )}
              <div className="mt-4 flex items-center gap-3 text-xs md:text-sm text-primary-foreground/60">
                {author && <span>{author}</span>}
                {author && <span>•</span>}
                <time>{date}</time>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === 'horizontal') {
    return (
      <article className="news-card group flex gap-4 bg-card rounded-lg overflow-hidden border border-border">
        <Link to={`/artigo/${id}`} className="flex-shrink-0 w-32 md:w-48">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="news-card-image w-full h-full object-cover"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-center py-3 pr-4">
          <Link to={`/${categorySlug}`}>
            <span className={`category-badge ${categoryClass} inline-block`}>
              {category}
            </span>
          </Link>
          <Link to={`/artigo/${id}`}>
            <h3 className="mt-2 font-semibold text-sm md:text-base line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>
          <time className="mt-2 text-xs text-muted-foreground">{date}</time>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="news-card group flex gap-3 py-3 border-b border-border last:border-0">
        <Link to={`/artigo/${id}`} className="flex-shrink-0 w-20">
          <div className="aspect-square overflow-hidden rounded">
            <img
              src={image}
              alt={title}
              className="news-card-image w-full h-full object-cover"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-center">
          <Link to={`/artigo/${id}`}>
            <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h4>
          </Link>
          <time className="mt-1 text-xs text-muted-foreground">{date}</time>
        </div>
      </article>
    );
  }

  // Default variant
  return (
    <article className="news-card group bg-card rounded-lg overflow-hidden border border-border">
      <Link to={`/artigo/${id}`} className="block">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="news-card-image w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/${categorySlug}`}>
          <span className={`category-badge ${categoryClass}`}>
            {category}
          </span>
        </Link>
        <Link to={`/artigo/${id}`}>
          <h3 className="mt-2 font-semibold text-base md:text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        {excerpt && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {excerpt}
          </p>
        )}
        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          {author && <span>{author}</span>}
          {author && <span>•</span>}
          <time>{date}</time>
        </div>
      </div>
    </article>
  );
}
