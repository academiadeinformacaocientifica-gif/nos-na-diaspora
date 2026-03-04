import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Users, Building, Globe } from 'lucide-react';

const FichaTecnica = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                <div className="container py-12">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-primary">Ficha Técnica</h1>

                        <div className="space-y-12">
                            <section className="bg-card p-8 border rounded-2xl shadow-sm">
                                <div className="flex items-center gap-4 mb-6 text-primary">
                                    <Building className="h-7 w-7" />
                                    <h2 className="text-2xl font-bold text-foreground">Propriedade e Edição</h2>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-lg font-semibold">VASROUSE CREATIVE - COMUNICACAO E SERVICOS, LDA</p>
                                    <p className="text-muted-foreground">NIF: 5000554167</p>
                                    <p className="text-muted-foreground">Sede: Talatona Business Center, Luanda, Angola</p>
                                </div>
                            </section>

                            <section className="bg-card p-8 border rounded-2xl shadow-sm">
                                <div className="flex items-center gap-4 mb-6 text-primary">
                                    <Users className="h-7 w-7" />
                                    <h2 className="text-2xl font-bold text-foreground">Equipa Editorial</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-primary mb-3">Direção</h3>
                                        <p className="font-semibold text-lg">Diretor Geral</p>
                                        <p className="text-muted-foreground mb-4">Vasrouse Creative Team</p>

                                        <p className="font-semibold text-lg">Diretor Editorial</p>
                                        <p className="text-muted-foreground">Redação Central</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary mb-3">Redação</h3>
                                        <p className="text-muted-foreground">Editor Diáspora</p>
                                        <p className="text-muted-foreground">Editor Economia</p>
                                        <p className="text-muted-foreground">Editor Sociedade</p>
                                        <p className="text-muted-foreground">Correspondentes Internacionais</p>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-card p-8 border rounded-2xl shadow-sm">
                                <div className="flex items-center gap-4 mb-6 text-primary">
                                    <Globe className="h-7 w-7" />
                                    <h2 className="text-2xl font-bold text-foreground">Comercial e Marketing</h2>
                                </div>
                                <div>
                                    <p className="font-semibold">Departamento Comercial</p>
                                    <p className="text-muted-foreground">publicidade@nosnadiaspora.com</p>
                                    <p className="text-muted-foreground">+244 923 000 000</p>
                                </div>
                            </section>

                            <div className="text-center py-10">
                                <p className="text-muted-foreground text-sm">
                                    Registado no Ministério da Comunicação Social de Angola.<br />
                                    Número de Registo: XXX/XXX/XXXX
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default FichaTecnica;
