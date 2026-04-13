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
      url: "https://www.dropbox.com/scl/fi/eansm0knjm5bqp0txjvgb/Resguardo-titulo-Grado-educaci-n-infantil-DNItapado.pdf?rlkey=gvx78yvwjjnyxeo0pel45oneh&st=x082wakz&raw=1",
      icon: <GraduationCap className="h-10 w-10 text-primary" />
    },
    {
      title: t.certificates.cert2.title,
      url: "https://www.dropbox.com/scl/fi/rmpl8budzbxibetj70kki/Resguardo-titulo-master-investigaci-n-DNItapado.pdf?rlkey=x3hnur8zlzrskhadsd7vo0ery&st=equzoame&raw=1",
      icon: <GraduationCap className="h-10 w-10 text-primary" />
    },
    {
      title: t.certificates.cert3.title,
      url: "https://www.dropbox.com/scl/fi/n0nos8ctmjl37atqg2o38/XV-Olimpiadas.jpg?rlkey=9272b103eelzmxnmwc4xlbnno&raw=1",
      icon: <Award className="h-10 w-10 text-primary" />
    },
    {
      title: t.certificates.cert4.title,
      url: "https://www.dropbox.com/scl/fi/v8zjkrrsiwp8qyiyqbzks/Titulo-FPJes-s-Gut-rrez-Garc-a-tachado.pdf?rlkey=do1v7fxtbm2galk4zzq9jl2cy&st=wtryp4fo&raw=1",
      icon: <GraduationCap className="h-10 w-10 text-primary" />
    },
    {
      title: t.certificates.cert5.title,
      url: "https://www.dropbox.com/scl/fi/xs4z8spbeu8wbg7qh6dty/JESUS-_jesusgutierrezgarcia1989-gmail.com.pdf?rlkey=oi6ngkkblfrmeg1rqd1l3zo8g&raw=1",
      icon: <Award className="h-10 w-10 text-primary" />
    },
    {
      title: t.certificates.cert6.title,
      url: "https://www.dropbox.com/scl/fi/pi9mpwb1r4m7eoeul572l/MASTER-en-JavaScript-2026.pdf?rlkey=idz87fvvdqglo5dh5s9mogsjr&st=u3ezb6i2&raw=1",
      icon: <Award className="h-10 w-10 text-primary" />
    },
    {
      title: "Certificado Ciberseguridad y Hacking Ético",
      url: "https://www.dropbox.com/scl/fi/ei17qotb65xfqffkmrkfb/Certificado_CiberSeguridad.pdf?rlkey=b2jtdfx9hd0n168h88m64skjo&st=299mq20d&raw=1",
      icon: <Award className="h-10 w-10 text-primary" />
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
              className="group relative flex h-auto items-center justify-start gap-6 rounded-lg bg-card p-6 text-left whitespace-normal transition-all duration-300 hover:outline hover:outline-1 hover:outline-primary"
            >
              <Link href={cert.url} target="_blank" download className="w-full h-auto">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-primary opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pl-4 flex items-center gap-4 w-full min-w-0">
                  <div className="flex-shrink-0">{cert.icon}</div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-base font-semibold text-foreground whitespace-normal break-words leading-snug">{cert.title}</span>
                    <span className="text-sm text-muted-foreground">{t.certificates.download}</span>
                  </div>
                  <Download className="flex-shrink-0 ml-2 h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
