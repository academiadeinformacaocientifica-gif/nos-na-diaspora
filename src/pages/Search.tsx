import { useSearchParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NewsCard } from '@/components/NewsCard';
import { useNews } from '@/contexts/NewsContext';
import { featuredNews } from '@/data/mockNews';
import { Search } from 'lucide-react';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const { allNews, loading } = useNews();

    // O uniqueNews agora é o próprio allNews vindo do contexto
    const uniqueNews = allNews;

    // Filtrar por query (título, resumo, categoria)
    const results = query
        ? uniqueNews.filter((article) => {
            const q = query.toLowerCase();
            return (
                article.title.toLowerCase().includes(q) ||
                article.excerpt.toLowerCase().includes(q) ||
                article.category.toLowerCase().includes(q)
            );
        })
        : [];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                <div className="container py-8">
                    {/* Cabeçalho da pesquisa */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-2">
                            <Search className="h-6 w-6 text-primary" />
                            <h1 className="text-2xl md:text-3xl font-bold">
                                Resultados da Pesquisa
                            </h1>
                        </div>
                        {query && (
                            <p className="text-muted-foreground">
                                {results.length > 0
                                    ? `${results.length} resultado${results.length !== 1 ? 's' : ''} encontrado${results.length !== 1 ? 's' : ''} para `
                                    : `Nenhum resultado encontrado para `}
                                <span className="font-semibold text-foreground">"{query}"</span>
                            </p>
                        )}
                    </div>

                    {/* Resultados */}
                    {!query ? (
                        <div className="text-center py-20">
                            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                            <p className="text-xl text-muted-foreground">
                                Utilize a barra de pesquisa para encontrar notícias.
                            </p>
                        </div>
                    ) : results.length === 0 ? (
                        <div className="text-center py-20">
                            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                            <h2 className="text-xl font-semibold mb-2">Sem resultados</h2>
                            <p className="text-muted-foreground">
                                Não encontrámos notícias que correspondam a <strong>"{query}"</strong>.
                                <br />
                                Tente uma pesquisa diferente.
                            </p>
                        </div>
                    ) : (
                        <section>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {results.map((article) => (
                                    <NewsCard key={article.id} {...article} variant="default" />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SearchPage;
