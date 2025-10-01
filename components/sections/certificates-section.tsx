'use client';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { Award, GraduationCap, Download } from 'lucide-react';
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
    }
  ];

  return (
    <section id="certificates" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline uppercase">{(t.nav as any).certificates}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.certificates.subtitle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Button
              key={index}
              asChild
              variant="outline"
              className="group relative flex h-auto items-center justify-start gap-6 rounded-lg bg-card p-6 text-left transition-all duration-300 hover:outline hover:outline-1 hover:outline-primary"
            >
              <Link href={cert.url} target="_blank" download>
                <div className="absolute left-0 top-0 h-full w-1.5 bg-primary opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pl-4 flex items-center gap-6">
                  {cert.icon}
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-foreground">{cert.title}</span>
                    <span className="text-sm text-muted-foreground">{t.certificates.download}</span>
                  </div>
                  <Download className="ml-auto h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
