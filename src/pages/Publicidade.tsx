import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Megaphone, Target, Share2, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Publicidade = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                <div className="container py-12">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Publicidade e Parcerias</h1>

                        <p className="text-xl text-muted-foreground mb-12">
                            Alcance a comunidade angolana global através do portal de notícias de referência para a diáspora.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <div className="p-8 bg-card border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                                    <Target className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Display Advertising</h3>
                                <p className="text-muted-foreground mb-4">
                                    Formatos de banners estratégicos em todo o portal, garantindo visibilidade máxima para a sua marca.
                                </p>
                                <ul className="text-sm space-y-2 text-muted-foreground">
                                    <li>• Leaderboard (728x90)</li>
                                    <li>• MPU (300x250)</li>
                                    <li>• Formatos Mobile Responsivos</li>
                                </ul>
                            </div>

                            <div className="p-8 bg-card border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                                    <Megaphone className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Conteúdo Patrocinado</h3>
                                <p className="text-muted-foreground mb-4">
                                    Publireportagens e artigos patrocinados redigidos com o rigor editorial do NnD para envolver a audiência.
                                </p>
                                <ul className="text-sm space-y-2 text-muted-foreground">
                                    <li>• Native Advertising</li>
                                    <li>• Artigos de Opinião</li>
                                    <li>• Entrevistas de Marca</li>
                                </ul>
                            </div>

                            <div className="p-8 bg-card border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                                    <Share2 className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Social Media</h3>
                                <p className="text-muted-foreground mb-4">
                                    Amplifique a sua mensagem através das nossas plataformas sociais (Facebook, Instagram, LinkedIn).
                                </p>
                            </div>

                            <div className="p-8 bg-card border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                                    <BarChart3 className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Relatórios e Métricas</h3>
                                <p className="text-muted-foreground mb-4">
                                    Acesso a estatísticas detalhadas sobre o desempenho das suas campanhas em tempo real.
                                </p>
                            </div>
                        </div>

                        <div className="bg-primary text-primary-foreground p-10 rounded-2xl text-center">
                            <h2 className="text-2xl font-bold mb-4 text-white">Pronto para anunciar no Nós na Diáspora?</h2>
                            <p className="mb-8 text-primary-foreground/90 max-w-xl mx-auto">
                                Solicite o nosso Media Kit atualizado e descubra como podemos ajudar a sua marca a crescer.
                            </p>
                            <Button size="lg" variant="secondary" asChild>
                                <a href="mailto:publicidade@nosnadiaspora.com">Contactar Departamento Comercial</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Publicidade;
