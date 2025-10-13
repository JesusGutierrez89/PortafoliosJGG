'use client';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { FileDown, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const { t } = useLanguage();
  const cvUrl = "https://www.dropbox.com/scl/fi/3hq58byzhqnhr7oegqvt1/CVJes-sGutierrez.pdf?rlkey=lr05l5qtsspaqkfmtmdw0hfuv&raw=1";
  
  return (
    <footer className="w-full border-t bg-card text-card-foreground">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:py-12 lg:flex-row lg:gap-4">
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
            © {new Date().getFullYear()} Jesus Gutierrez Garcia. {t.footer.rights}
          </p>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
              <Link href="mailto:jesusgutierrezgarcia1989@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
              <Link href="https://github.com/JesusGutierrez89" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
              <Link href="https://linkedin.com/in/jesús-gutiérrez-garcía-83961a366" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
              <Link href={cvUrl} target="_blank" download="CV-Jesus-Gutierrez.pdf">
                <FileDown className="h-5 w-5" />
                <span className="sr-only">Descargar CV</span>
              </Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
