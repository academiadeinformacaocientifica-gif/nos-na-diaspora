import { useNews } from '@/contexts/NewsContext';
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    const { latestNews } = useNews();
    const breakingItems = latestNews.slice(0, 5);

    if (breakingItems.length === 0) return null;

    return (
        <div className="bg-primary text-primary-foreground py-2 overflow-hidden border-b border-primary/20">
            <div className="container flex items-center">
                <div className="bg-red-600 px-3 py-0.5 rounded text-xs font-bold uppercase tracking-wider mr-4 shrink-0 animate-pulse">
                    Última Hora
                </div>
                <div className="flex-1 overflow-hidden">
                    <div className="flex whitespace-nowrap animate-marquee hover:pause whitespace-nowrap">
                        {breakingItems.map((item) => (
                            <Link
                                key={item.id}
                                to={`/article/${item.id}`}
                                className="mx-8 text-sm font-medium hover:underline flex items-center gap-2"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50 shrink-0" />
                                {item.title}
                            </Link>
                        ))}
                        {/* Duplicate for seamless loop if needed, but CSS animation handles basic scrolling */}
                        {breakingItems.map((item) => (
                            <Link
                                key={`${item.id}-dup`}
                                to={`/article/${item.id}`}
                                className="mx-8 text-sm font-medium hover:underline flex items-center gap-2"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50 shrink-0" />
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;
