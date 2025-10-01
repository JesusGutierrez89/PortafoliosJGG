'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';

export default function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'project-1',
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      tags: ['Android Studio', 'Java'],
      sourceLink: 'https://github.com/JesusGutierrez89/CBLosTankes',
    },
    {
      id: 'project-2',
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      tags: ['C#', 'TFS', '.NET'],
      sourceLink: 'https://github.com/JesusGutierrez89/BitClase',
    },
    {
      id: 'project-3',
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      tags: ['Node.js', 'JavaScript', 'Express'],
      sourceLink: 'https://github.com/JesusGutierrez89/Curso-Node-RestServer',
    },
    {
      id: 'project-4',
      title: (t.projects as any).project4.title,
      description: (t.projects as any).project4.description,
      tags: ['Java', 'PSP'],
      sourceLink: 'https://github.com/JesusGutierrez89/PSP-IES-CIERVA',
    },
  ];

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t.projects.title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.projects.subtitle}
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <Card key={project.id} className="flex flex-col overflow-hidden transition-all hover:shadow-xl">
                {projectImage && (
                    <div className="overflow-hidden">
                        <Image
                            src={projectImage.imageUrl}
                            alt={project.title}
                            data-ai-hint={projectImage.imageHint}
                            width={600}
                            height={340}
                            className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button asChild>
                    <Link href={project.sourceLink} target="_blank">
                      {t.projects.sourceCodeButton} <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
