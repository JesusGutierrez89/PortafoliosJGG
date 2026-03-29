"use client";
import { useLanguage } from "@/context/language-context";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function ExperienceSection() {
  const { t } = useLanguage();

  // Logos desde Dropbox
  const calicheLogoUrl =
    "https://www.dropbox.com/scl/fi/e0zuz6oaunkikafni40le/favicon.png?rlkey=k5vf476qoev8n7ojfm9zc6335&raw=1";
  const sewanLogoUrl =
    "https://www.dropbox.com/scl/fi/fbj9kninvakd29zbtzy2w/88458_82-removebg-preview.png?rlkey=ua843td9s06wror5vufz3aw6k&raw=1";

  const experiences = [
    {
      company: t.experience.exp1.company,
      position: t.experience.exp1.position,
      period: t.experience.exp1.period,
      location: t.experience.exp1.location,
      type: t.experience.exp1.type,
      description: t.experience.exp1.description,
      current: true,
      logo: calicheLogoUrl,
    },
    {
      company: t.experience.exp2.company,
      position: t.experience.exp2.position,
      period: t.experience.exp2.period,
      location: t.experience.exp2.location,
      type: t.experience.exp2.type,
      description: t.experience.exp2.description,
      current: false,
      logo: sewanLogoUrl,
    },
  ];

  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t.experience.title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.experience.subtitle}
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative border-l-4 border-l-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="space-y-1 flex-1">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      {exp.logo ? (
                        <Image
                          src={exp.logo}
                          alt={`Logo de ${exp.company}`}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      ) : (
                        <Briefcase className="h-6 w-6 text-primary" />
                      )}
                      {exp.position}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-foreground">{exp.company}</CardDescription>
                  </div>
                  {exp.current && (
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {t.experience.current}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{exp.period}</span>
                    <span className="text-muted-foreground/60">•</span>
                    <span>{exp.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground leading-relaxed text-justify">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
