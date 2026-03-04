import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { NewsArticle } from '@/data/mockNews';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSliderProps {
    news: NewsArticle[];
}

export const HeroSlider = ({ news }: HeroSliderProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    if (!news || news.length === 0) return null;

    return (
        <div className="relative group overflow-hidden rounded-xl bg-muted" ref={emblaRef}>
            <div className="flex">
                {news.map((article) => (
                    <div key={article.id} className="flex-[0_0_100%] min-w-0 relative h-[400px] md:h-[500px]">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10 text-white">
                            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-md w-fit mb-4">
                                {article.category}
                            </span>
                            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4 max-w-3xl">
                                {article.title}
                            </h2>
                            <p className="text-white/80 line-clamp-2 md:line-clamp-3 mb-6 max-w-2xl text-base md:text-lg">
                                {article.excerpt}
                            </p>
                            <Button asChild size="lg" className="w-fit">
                                <Link to={`/artigo/${article.id}`}>Ler Mais</Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {news.length > 1 && (
                <>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={scrollNext}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                </>
            )}
        </div>
    );
};
