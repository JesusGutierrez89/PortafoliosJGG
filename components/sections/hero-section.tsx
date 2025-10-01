'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowDown, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';

export default function HeroSection() {
  const { t } = useLanguage();
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile');
  const cvUrl = "https://www.dropbox.com/scl/fi/3hq58byzhqnhr7oegqvt1/CVJes-sGutierrez.pdf?rlkey=lr05l5qtsspaqkfmtmdw0hfuv&raw=1";

  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                Jesus Gutierrez Garcia
              </h1>
              <p 
                className="text-xl text-muted-foreground font-headline"
              >
                {t.hero.subtitle}
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {t.hero.description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">{t.hero.contactButton}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                 <Link href="#projects">
                    {t.hero.viewWorkButton}
                    <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <Link href="mailto:jesus.gutierrez.garcia@example.com" className="text-muted-foreground transition-colors hover:text-foreground">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="https://github.com/JesusGutierrez89" target="_blank" className="text-muted-foreground transition-colors hover:text-foreground">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/jesús-gutiérrez-garcía-83961a366" target="_blank" className="text-muted-foreground transition-colors hover:text-foreground">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href={cvUrl} target="_blank" download="CV-Jesus-Gutierrez.pdf" className="text-muted-foreground transition-colors hover:text-foreground">
                <FileDown className="h-6 w-6" />
                <span className="sr-only">Descargar CV</span>
              </Link>
            </div>
          </div>
          {profileImage && (
             <Image
              src={profileImage.imageUrl}
              alt={profileImage.description}
              data-ai-hint={profileImage.imageHint}
              width={400}
              height={400}
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover sm:w-full lg:order-last"
            />
          )}
        </div>
      </div>
    </section>
  );
}
