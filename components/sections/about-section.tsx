'use client';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { Download, FileText } from 'lucide-react';
import Link from 'next/link';

export default function AboutSection() {
  const { t } = useLanguage();
  
  // URL de Dropbox para la carta de recomendación
  const recommendationUrl = "https://www.dropbox.com/scl/fi/ifg2mmmf5jycot9smhve7/Carta-de-Recomendaci-n.pdf?rlkey=gi6p7drhdclpdnx3sssklh3gp&st=hzg114vq&dl=1";

    return (
      <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">{t.about.title}</h2>
              <div className="space-y-4 max-w-4xl text-muted-foreground text-left sm:text-justify text-base sm:text-lg md:text-xl leading-relaxed">
                <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left first-letter:leading-none">
                  {t.about.p1}
                </p>
                <p>
                  {t.about.p2}
                </p>
                <p>
                  {t.about.p3}
                </p>
                <p>
                  {t.about.p4}
                </p>
                <p>
                  {t.about.p5}
                </p>
                <p>
                  {t.about.p6}
                </p>
                 <p>
                  {t.about.p7}
                </p>
                <p>
                  {(t.about as any).p8}
                </p>
              </div>
              
              {/* Carta de Recomendación integrada */}
              <div className="mt-12 pt-8 border-t border-muted-foreground/20">
                <h3 className="text-xl font-semibold mb-6 text-foreground">{t.recommendation.title}</h3>
                <div className="flex justify-center">
                  <div className="w-full max-w-md">
                    <Button
                      asChild
                      variant="outline"
                      className="group relative flex h-auto items-center justify-start gap-4 sm:gap-6 rounded-lg bg-background p-4 sm:p-6 text-left transition-all duration-300 hover:outline hover:outline-2 hover:outline-primary hover:shadow-lg hover:-translate-y-1 w-full"
                    >
                      <Link href={recommendationUrl} target="_blank" download>
                        <div className="absolute left-0 top-0 h-full w-1 sm:w-1.5 bg-primary opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-2" />
                        <div className="pl-3 sm:pl-4 flex items-center gap-4 sm:gap-6 w-full">
                          <div className="flex-shrink-0">
                            <FileText className="h-8 w-8 text-primary" />
                          </div>
                          <div className="flex flex-col flex-grow min-w-0">
                            <span className="text-sm sm:text-base font-semibold text-foreground leading-tight">
                              {t.recommendation.letterTitle}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {t.recommendation.download}
                            </span>
                          </div>
                          <Download className="flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                        </div>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  