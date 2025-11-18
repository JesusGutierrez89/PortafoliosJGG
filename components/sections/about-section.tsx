'use client';
import { useLanguage } from '@/context/language-context';

export default function AboutSection() {
  const { t } = useLanguage();
    return (
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t.about.title}</h2>
              <div className="space-y-4 max-w-[900px] text-muted-foreground text-justify md:text-lg/relaxed lg:text-lg/relaxed">
                <p>
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
  