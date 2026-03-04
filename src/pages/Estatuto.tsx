import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShieldCheck, Scale, FileText } from 'lucide-react';

const Estatuto = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                <div className="container py-12">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Estatuto Editorial</h1>

                        <div className="prose-article space-y-8 text-lg">
                            <section className="space-y-4">
                                <div className="flex items-center gap-3 text-primary">
                                    <ShieldCheck className="h-8 w-8" />
                                    <h2 className="text-2xl font-bold m-0 text-black">Independência e Rigor</h2>
                                </div>
                                <p>
                                    O <strong>Nós na Diáspora</strong> é um órgão de informação digital, generalista e independente, que se rege pelos princípios do rigor, isenção e pluralismo, em conformidade com a Lei de Imprensa angolana e os códigos de deontologia jornalística internacionais.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <div className="flex items-center gap-3 text-primary">
                                    <Scale className="h-8 w-8" />
                                    <h2 className="text-2xl font-bold m-0 text-black">Compromisso Ético</h2>
                                </div>
                                <p>
                                    1. O portal compromete-se a assegurar o respeito pelos princípios deontológicos e pela ética profissional dos jornalistas, assim como pela boa-fé dos leitores.
                                </p>
                                <p>
                                    2. Distinguimos claramente entre notícias (factos) e artigos de opinião, reservando o direito de emitir opiniões em espaços devidamente identificados para o efeito.
                                </p>
                                <p>
                                    3. Recusamos qualquer forma de sensacionalismo ou interferência de poderes políticos, económicos ou religiosos no nosso conteúdo editorial.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <div className="flex items-center gap-3 text-primary">
                                    <FileText className="h-8 w-8" />
                                    <h2 className="text-2xl font-bold m-0 text-black">Objetivos Editoriais</h2>
                                </div>
                                <p>
                                    O principal objetivo do <strong>Nós na Diáspora</strong> é informar com verdade e responsabilidade sobre a realidade angolana e as dinâmicas das comunidades na diáspora, promovendo a cidadania ativa e a união entre os angolanos.
                                </p>
                                <p>
                                    Nesse sentido, comprometemo-nos a:
                                </p>
                                <ul className="list-disc pl-6 space-y-3">
                                    <li>Promover a liberdade de expressão e o debate democrático.</li>
                                    <li>Incentivar a participação da comunidade em temas de interesse público.</li>
                                    <li>Dar voz aos angolanos em qualquer parte do globo, sem discriminação de qualquer natureza.</li>
                                    <li>Contribuir para a construção de uma opinião pública informada e crítica.</li>
                                </ul>
                            </section>

                            <div className="mt-12 p-8 border-t border-b bg-muted/50 text-center italic text-muted-foreground">
                                "Informar com verdade para unir com responsabilidade."
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Estatuto;
