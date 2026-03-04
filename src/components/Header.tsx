import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/assets/logo-aon.png';
import BreakingNews from './BreakingNews';

const mainCategories = [
  { name: 'Economia', href: '/economia' },
  { name: 'Política', href: '/politica' },
  { name: 'Sociedade', href: '/sociedade' },
  { name: 'Ambiente', href: '/ambiente' },
  { name: 'Indústria', href: '/industria' },
  { name: 'Saúde', href: '/saude' },
  { name: 'Tecnologia', href: '/tecnologia' },
  { name: 'Educação', href: '/educacao' },
  { name: 'Cultura', href: '/cultura' },
];

const languages = [
  { code: 'PT', label: 'Português' },
  { code: 'EN', label: 'English' },
  { code: 'FR', label: 'Français' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('PT');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) {
      navigate(`/pesquisa?q=${encodeURIComponent(q)}`);
      setSearchQuery('');
      setIsSearchOpen(false);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        {/* Top bar */}
        <div className="bg-angola-black text-primary-foreground">
          <div className="container flex items-center justify-between h-8 text-xs">
            <div className="hidden md:flex items-center gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className={`transition-colors ${currentLang === lang.code
                    ? 'text-secondary font-semibold'
                    : 'text-primary-foreground/70 hover:text-primary-foreground'
                    }`}
                >
                  {lang.code}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="X">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="container py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="AngolaOnline" className="h-12 md:h-16 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {mainCategories.slice(0, 7).map((category) => (
                <Link
                  key={category.name}
                  to={category.href}
                  className="header-nav-link"
                >
                  {category.name}
                </Link>
              ))}
              <div className="relative group">
                <button className="header-nav-link flex items-center gap-1">
                  Mais
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[160px]">
                  {mainCategories.slice(7).map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                  <Link to="/mundo" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                    Mundo
                  </Link>
                  <Link to="/opiniao" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                    Opinião
                  </Link>
                  <Link to="/multimedia" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                    Multimédia
                  </Link>
                </div>
              </div>
            </nav>

            {/* Search and Mobile menu */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="hidden md:flex items-center">
                {isSearchOpen ? (
                  <form onSubmit={handleSearch} className="flex items-center gap-2 animate-fade-in">
                    <Input
                      type="search"
                      placeholder="Pesquisar..."
                      className="w-48 lg:w-64"
                      autoFocus
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button type="submit" variant="ghost" size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </form>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                )}
              </div>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border animate-fade-in">
            <div className="container py-4">
              {/* Mobile search */}
              <div className="mb-4">
                <form onSubmit={handleSearch} className="flex gap-2">
                  <Input
                    type="search"
                    placeholder="Pesquisar..."
                    className="w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit" size="icon" variant="ghost">
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </div>

              {/* Mobile navigation */}
              <nav className="grid grid-cols-2 gap-2">
                {mainCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.href}
                    className="px-4 py-3 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link
                  to="/opiniao"
                  className="px-4 py-3 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Opinião
                </Link>
                <Link
                  to="/multimedia"
                  className="px-4 py-3 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Multimédia
                </Link>
              </nav>

              {/* Mobile language selector */}
              <div className="mt-4 pt-4 border-t border-border flex items-center gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={`text-sm ${currentLang === lang.code
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                      }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
      <BreakingNews />
    </>
  );
}
