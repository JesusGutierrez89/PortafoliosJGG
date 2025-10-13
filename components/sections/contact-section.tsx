'use client';
import { useLanguage } from '@/context/language-context';
import { Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">{t.contact.title}</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:flex-row">
            <div className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary transition-colors group">
                <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-sm text-muted-foreground">Teléfono:</span>
                    <a href="tel:615018208" className="text-lg font-medium hover:underline hover:text-primary transition-colors">615 01 82 08</a>
                </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary transition-colors group">
                <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-sm text-muted-foreground">Email:</span>
                    <a href="mailto:jesusgutierrezgarcia1989@gmail.com" className="text-base sm:text-lg font-medium hover:underline hover:text-primary transition-colors break-all sm:break-normal">jesusgutierrezgarcia1989@gmail.com</a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
