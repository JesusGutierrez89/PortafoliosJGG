'use client';
import { useLanguage } from '@/context/language-context';
import { FileDown, Menu, MountainIcon, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';

export default function Header() {
  const { t, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#certificates', label: (t.nav as any).certificates },
    { href: '#contact', label: t.nav.contact },
  ];

  const cvUrl = "https://www.dropbox.com/scl/fi/3hq58byzhqnhr7oegqvt1/CVJes-sGutierrez.pdf?rlkey=lr05l5qtsspaqkfmtmdw0hfuv&raw=1";
  const esFlagUrl = "https://www.dropbox.com/scl/fi/8kviocmhoclbpr6znaz1d/espana.png?rlkey=7hlo2eguogirh9il6t0cx60op&raw=1";
  const ukFlagUrl = "https://www.dropbox.com/scl/fi/mrjvi1jxafor369m8lhdu/reino-unido.png?rlkey=h1jfpnwvupizi97wffnla1ynw&raw=1";

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 sm:px-6">
        <Link href="#home" className="flex items-center space-x-2">
          <MountainIcon className="h-6 w-6" />
          <span className="font-bold">J.G.G.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground/80 transition-colors hover:text-foreground whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button asChild size="sm" className="hidden lg:inline-flex">
            <Link href={cvUrl} target="_blank" download="CV-Jesus-Gutierrez.pdf">
              <FileDown className="mr-2 h-4 w-4" />
              <span className="hidden xl:inline">Descargar CV</span>
              <span className="xl:hidden">CV</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            onClick={() => setLanguage('es')}
            className="h-8 w-8 p-0 rounded-full"
          >
            <Image
              src={esFlagUrl}
              alt="Bandera de España"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="sr-only">Español</span>
          </Button>
          <Button
            variant="ghost"
            onClick={() => setLanguage('en')}
            className="h-8 w-8 p-0 rounded-full"
          >
            <Image
              src={ukFlagUrl}
              alt="Bandera de Reino Unido"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="sr-only">English</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 ml-auto md:hidden">
          <Button
            variant="ghost"
            onClick={() => setLanguage('es')}
            className="h-8 w-8 p-0 rounded-full"
          >
            <Image
              src={esFlagUrl}
              alt="ES"
              width={24}
              height={24}
              className="rounded-full"
            />
          </Button>
          <Button
            variant="ghost"
            onClick={() => setLanguage('en')}
            className="h-8 w-8 p-0 rounded-full"
          >
            <Image
              src={ukFlagUrl}
              alt="EN"
              width={24}
              height={24}
              className="rounded-full"
            />
          </Button>
          <Button
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-8 w-8 p-0"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t bg-background/95 backdrop-blur md:hidden">
          <nav className="container flex flex-col space-y-1 py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-3 py-2 text-sm text-muted-foreground/80 transition-colors hover:text-foreground hover:bg-accent rounded-md"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t">
              <Button asChild className="w-full" size="sm">
                <Link href={cvUrl} target="_blank" download="CV-Jesus-Gutierrez.pdf" onClick={handleLinkClick}>
                  <FileDown className="mr-2 h-4 w-4" />
                  Descargar CV
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
