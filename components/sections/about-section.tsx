'use client';
import { useLanguage } from '@/context/language-context';

export default function AboutSection() {
  const { t } = useLanguage();
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
            </div>
          </div>
        </div>
      </section>
    );
  }
  