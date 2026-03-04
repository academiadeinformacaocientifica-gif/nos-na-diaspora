import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-aon.png';

const footerLinks = {
  categories: [
    { name: 'Economia', href: '/economia' },
    { name: 'Política', href: '/politica' },
    { name: 'Sociedade', href: '/sociedade' },
    { name: 'Ambiente', href: '/ambiente' },
    { name: 'Indústria', href: '/industria' },
    { name: 'Mundo', href: '/mundo' },
  ],
  categories2: [
    { name: 'Banca & Seguros', href: '/banca-seguros' },
    { name: 'Saúde', href: '/saude' },
    { name: 'Tecnologia', href: '/tecnologia' },
    { name: 'Educação', href: '/educacao' },
    { name: 'Cultura', href: '/cultura' },
    { name: 'Desporto', href: '/desporto' },
  ],
  institutional: [
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Contactos', href: '/contactos' },
    { name: 'Publicidade', href: '/publicidade' },
    { name: 'Estatuto Editorial', href: '/estatuto' },
    { name: 'Ficha Técnica', href: '/ficha-tecnica' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-angola-black text-primary-foreground">
      {/* Newsletter section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">Subscreva a nossa Newsletter</h3>
              <p className="text-sm text-primary-foreground/70">
                Receba as últimas notícias directamente no seu email
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="O seu email"
                className="w-full md:w-64 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscrever
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo and social */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="AngolaOnline" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-primary-foreground/70 mb-4">
              O melhor de Angola, diariamente.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Categorias</h4>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">&nbsp;</h4>
            <ul className="space-y-2">
              {footerLinks.categories2.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Institucional</h4>
            <ul className="space-y-2">
              {footerLinks.institutional.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Contactos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Luanda, Angola</li>
              <li>redacao@angolaonline.co.ao</li>
              <li>+244 923 000 000</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© 2026 AngolaOnline. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacidade" className="hover:text-primary-foreground transition-colors">
              Privacidade
            </Link>
            <Link to="/termos" className="hover:text-primary-foreground transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
