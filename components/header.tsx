'use client';
import Link from 'next/link';
import Image from 'next/image';
import { MountainIcon, FileDown } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { Button } from './ui/button';

export default function Header() {
  const { t, setLanguage } = useLanguage();

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="#home" className="mr-6 flex items-center space-x-2">
          <MountainIcon className="h-6 w-6" />
          <span className="font-bold sm:inline-block">J.G.G.</span>
        </Link>
        <nav className="flex flex-1 items-center gap-4 text-sm sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
            <Button asChild>
                <Link href={cvUrl} target="_blank" download="CV-Jesus-Gutierrez.pdf">
                    <FileDown className="mr-2 h-4 w-4" />
                    Descargar CV
                </Link>
            </Button>
            <Button
              variant="ghost"
              onClick={() => setLanguage('es')}
              className="h-10 w-10 p-0 rounded-full"
            >
              <Image
                src={esFlagUrl}
                alt="Bandera de España"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="sr-only">Español</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => setLanguage('en')}
              className="h-10 w-10 p-0 rounded-full"
            >
              <Image
                src={ukFlagUrl}
                alt="Bandera de Reino Unido"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="sr-only">English</span>
            </Button>
        </div>
      </div>
    </header>
  );
}
