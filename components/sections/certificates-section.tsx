'use client';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { Award, Download, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function CertificatesSection() {
  const { t } = useLanguage();

  const certificates = [
    {
      title: t.certificates.cert1.title,
      url: "https://www.dropbox.com/scl/fi/flhxnrpd7h9o7rwm45oum/Resguardo-titulo-Grado-educaci-n-infantil-DNItapado.pdf?rlkey=nykyz2a5w2wlwiae86893e4l8&raw=1",
      icon: <GraduationCap className="h-10 w-10 text-primary" />
    },
    {
      title: t.certificates.cert2.title,
      url: "https://www.dropbox.com/scl/fi/fpx9jfvgh6v1w215mkp6t/Resguardo-titulo-master-investigaci-n-DNItapado.pdf?rlkey=zdxxwadhbbcic1uy3ad7ur86l&raw=1",
      icon: <GraduationCap className="h-10 w-10 text-primary" />
    },
    {
      title: t.certificates.cert3.title,
      url: "https://www.dropbox.com/scl/fi/n0nos8ctmjl37atqg2o38/XV-Olimpiadas.jpg?rlkey=9272b103eelzmxnmwc4xlbnno&raw=1",
      icon: <Award className="h-10 w-10 text-primary" />
    },
    {
      title: t.certificates.cert4.title,
      url: "https://www.dropbox.com/scl/fi/pjx94ce43im40b9b91aml/CER_FPTJ_Certificado-de-Titulo-FPJes-s-Gut-rrez-Garc-a-tachado.pdf?rlkey=se5wuxn9xypofre12h8grf90k&raw=1",
      icon: <GraduationCap className="h-10 w-10 text-primary" />
    },
    {
      title: t.certificates.cert5.title,
      url: "https://www.dropbox.com/scl/fi/xs4z8spbeu8wbg7qh6dty/JESUS-_jesusgutierrezgarcia1989-gmail.com.pdf?rlkey=oi6ngkkblfrmeg1rqd1l3zo8g&raw=1",
      icon: <Award className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <section id="certificates" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4 mb-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline uppercase">{(t.nav as any).certificates}</h2>
            <p className="max-w-3xl text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed">
              {t.certificates.subtitle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {certificates.map((cert, index) => (
            <Button
              key={index}
              asChild
              variant="outline"
              className="group relative flex h-auto items-center justify-start gap-4 sm:gap-6 rounded-lg bg-card p-4 sm:p-6 text-left transition-all duration-300 hover:outline hover:outline-2 hover:outline-primary hover:shadow-lg hover:-translate-y-1"
            >
              <Link href={cert.url} target="_blank" download>
                <div className="absolute left-0 top-0 h-full w-1 sm:w-1.5 bg-primary opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-2" />
                <div className="pl-3 sm:pl-4 flex items-center gap-4 sm:gap-6 w-full">
                  <div className="flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex flex-col flex-grow min-w-0">
                    <span className="text-base sm:text-lg font-semibold text-foreground leading-tight">{cert.title}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">{t.certificates.download}</span>
                  </div>
                  <Download className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
