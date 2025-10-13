'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ProjectImage } from '@/components/ui/project-image';
import { useLanguage } from '@/context/language-context';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

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
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4 mb-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">{t.projects.title}</h2>
            <p className="max-w-3xl text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <Card key={project.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group w-full max-w-none sm:max-w-lg lg:max-w-none mx-auto">
                <div className="project-image-container aspect-video">
                  {projectImage ? (
                    <>
                      <ProjectImage
                        src={projectImage.imageUrl}
                        alt={project.title}
                        hint={projectImage.imageHint}
                        priority={project.id === 'project-1'}
                        className="group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full bg-muted">
                      <div className="text-center text-muted-foreground">
                        <div className="w-16 h-16 mx-auto mb-2 bg-background rounded-lg flex items-center justify-center">
                          <span className="text-2xl">📁</span>
                        </div>
                        <p className="text-sm">Imagen del proyecto</p>
                      </div>
                    </div>
                  )}
                </div>
                <CardHeader className="pb-4 px-4 sm:px-6">
                  <CardTitle className="font-headline text-lg sm:text-xl line-clamp-2">{project.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base leading-relaxed line-clamp-3">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pb-4 px-4 sm:px-6">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs sm:text-sm px-2 py-1 font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
                  <Button asChild className="w-full sm:w-auto sm:ml-auto group" size="sm">
                    <Link href={project.sourceLink} target="_blank">
                      <span className="text-sm sm:text-base">{t.projects.sourceCodeButton}</span>
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
