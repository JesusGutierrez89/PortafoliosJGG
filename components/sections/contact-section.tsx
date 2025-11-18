'use client';
import { useLanguage } from '@/context/language-context';
import { Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">{t.contact.title}</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t.contact.subtitle}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:615018208" className="text-lg font-medium hover:underline">615 01 82 08</a>
            </div>
            <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:jesusgutierrezgarcia1989@gmail.com" className="text-lg font-medium hover:underline">jesusgutierrezgarcia1989@gmail.com</a>
            </div>
        </div>
      </div>
    </section>
  );
}
