'use client';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown, FileDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const { t } = useLanguage();
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile');
  const cvUrl = "https://www.dropbox.com/scl/fi/3hq58byzhqnhr7oegqvt1/CVJes-sGutierrez.pdf?rlkey=lr05l5qtsspaqkfmtmdw0hfuv&raw=1";

  return (
    <section id="home" className="w-full py-16 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_400px]">
          <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl font-headline">
                Jesus Gutierrez Garcia
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-headline">
                {t.hero.subtitle}
              </p>
              <p className="max-w-[600px] text-base sm:text-lg md:text-xl text-muted-foreground mx-auto lg:mx-0">
                {t.hero.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="#contact">{t.hero.contactButton}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                 <Link href="#projects">
                    {t.hero.viewWorkButton}
                    <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <Link href="mailto:jesusgutierrezgarcia1989@gmail.com" className="text-muted-foreground transition-colors hover:text-foreground hover:scale-110 transform">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="https://github.com/JesusGutierrez89" target="_blank" className="text-muted-foreground transition-colors hover:text-foreground hover:scale-110 transform">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/jesús-gutiérrez-garcía-83961a366" target="_blank" className="text-muted-foreground transition-colors hover:text-foreground hover:scale-110 transform">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href={cvUrl} target="_blank" download="CV-Jesus-Gutierrez.pdf" className="text-muted-foreground transition-colors hover:text-foreground hover:scale-110 transform">
                <FileDown className="h-6 w-6" />
                <span className="sr-only">Descargar CV</span>
              </Link>
            </div>
          </div>
          {profileImage && (
            <div className="flex justify-center order-1 lg:order-2">
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                data-ai-hint={profileImage.imageHint}
                width={300}
                height={300}
                className="aspect-square overflow-hidden rounded-full object-cover w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-full lg:max-w-[400px] lg:max-h-[400px] shadow-2xl"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
