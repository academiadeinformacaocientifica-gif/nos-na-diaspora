import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Sobre o AngolaOnline</h1>
            
            <div className="prose-article space-y-6 text-lg">
              <p>
                O <strong>AngolaOnline (AOn)</strong> é um portal institucional de notícias dedicado a informar sobre os acontecimentos mais relevantes de Angola e da região, com uma perspectiva que valoriza a credibilidade, a neutralidade e o profissionalismo jornalístico.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">A Nossa Missão</h2>
              <p>
                A nossa missão é fornecer informação de qualidade sobre economia, política, sociedade, cultura e outros temas de interesse público, servindo como uma fonte de referência para embaixadas, consulados, ministérios, organizações internacionais, órgãos de comunicação social, investidores e o público em geral.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">A Nossa Visão</h2>
              <p>
                Aspiramos a ser o principal portal de notícias de Angola, reconhecido pela excelência editorial, pela independência jornalística e pelo compromisso com a verdade e a transparência.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Os Nossos Valores</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Credibilidade:</strong> Verificamos rigorosamente todas as informações antes de publicar.</li>
                <li><strong>Neutralidade:</strong> Apresentamos os factos de forma equilibrada e imparcial.</li>
                <li><strong>Profissionalismo:</strong> Mantemos os mais altos padrões éticos do jornalismo.</li>
                <li><strong>Transparência:</strong> Somos claros sobre as nossas fontes e metodologias.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Cobertura Editorial</h2>
              <p>
                O AngolaOnline cobre uma vasta gama de temas, incluindo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Economia e Negócios</li>
                <li>Política Nacional e Internacional</li>
                <li>Sociedade e Cultura</li>
                <li>Ambiente e Sustentabilidade</li>
                <li>Tecnologia e Inovação</li>
                <li>Saúde e Educação</li>
                <li>Indústria e Construção</li>
              </ul>

              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Contacte-nos</h3>
                <p className="text-muted-foreground">
                  Para mais informações, parcerias ou questões editoriais, entre em contacto através do email: <a href="mailto:redacao@angolaonline.co.ao" className="text-primary hover:underline">redacao@angolaonline.co.ao</a>
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

export default About;
