'use client';
import { Code, Database, Server, PenTool, Wind, Component, GitMerge, TerminalSquare, Users, Kanban, Network, Container } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";

type SkillLevel = 'bajo' | 'medio' | 'alto';
type ExperienceLevel = '<6 meses' | 'entre 1 y 2 años' | '>2 años';

const skills: { 
  name: string; 
  icon: JSX.Element;
  knowledge: SkillLevel;
  experience: ExperienceLevel;
}[] = [
  { name: 'HTML5', icon: <Code className="h-8 w-8 text-primary" />, knowledge: 'medio', experience: 'entre 1 y 2 años' },
  { name: 'CSS3', icon: <PenTool className="h-8 w-8 text-primary" />, knowledge: 'medio', experience: 'entre 1 y 2 años' },
  { name: 'JavaScript', icon: <Code className="h-8 w-8 text-primary" />, knowledge: 'alto', experience: '<6 meses' },
  { name: 'TypeScript', icon: <Code className="h-8 w-8 text-primary" />, knowledge: 'medio', experience: '<6 meses' },
  { name: 'React', icon: <Component className="h-8 w-8 text-primary" />, knowledge: 'medio', experience: '<6 meses' },
  { name: 'Next.js', icon: <Component className="h-8 w-8 text-primary" />, knowledge: 'medio', experience: '<6 meses' },
  { name: 'Node.js', icon: <Server className="h-8 w-8 text-primary" />, knowledge: 'alto', experience: '<6 meses' },
  { name: 'Tailwind CSS', icon: <Wind className="h-8 w-8 text-primary" />, knowledge: 'bajo', experience: '<6 meses' },
  { name: 'Git & GitHub', icon: <GitMerge className="h-8 w-8 text-primary" />, knowledge: 'medio', experience: 'entre 1 y 2 años' },
  { name: 'Firebase', icon: <TerminalSquare className="h-8 w-8 text-primary" />, knowledge: 'alto', experience: '>2 años' },
  { name: 'Java', icon: <Code className="h-8 w-8 text-primary" />, knowledge: 'alto', experience: '>2 años' },
  { name: 'Python', icon: <Code className="h-8 w-8 text-primary" />, knowledge: 'alto', experience: 'entre 1 y 2 años' },
  { name: 'C#', icon: <Code className="h-8 w-8 text-primary" />, knowledge: 'alto', experience: 'entre 1 y 2 años' },
  { name: 'MySQL', icon: <Database className="h-8 w-8 text-primary" />, knowledge: 'alto', experience: 'entre 1 y 2 años' },
  { name: 'Oracle', icon: <Database className="h-8 w-8 text-primary" />, knowledge: 'medio', experience: 'entre 1 y 2 años' },
  { name: 'PostgreSQL', icon: <Database className="h-8 w-8 text-primary" />, knowledge: 'alto', experience: 'entre 1 y 2 años' },
  { name: 'MongoDB', icon: <Database className="h-8 w-8 text-primary" />, knowledge: 'medio', experience: '<6 meses' },
  { name: 'Scrum', icon: <Users className="h-8 w-8 text-primary" />, knowledge: 'alto', experience: '<6 meses' },
  { name: 'Kanban', icon: <Kanban className="h-8 w-8 text-primary" />, knowledge: 'medio', experience: '<6 meses' },
  { name: 'REST API', icon: <Network className="h-8 w-8 text-primary" />, knowledge: 'medio', experience: '<6 meses' },
  { name: 'Docker', icon: <Container className="h-8 w-8 text-primary" />, knowledge: 'medio', experience: '<6 meses' },
];

const knowledgeMapping: Record<SkillLevel, { value: number; label: string }> = {
  bajo: { value: 33, label: "Bajo" },
  medio: { value: 66, label: "Medio" },
  alto: { value: 100, label: "Alto" },
};

const experienceMapping: Record<ExperienceLevel, { value: number; label: string }> = {
  '<6 meses': { value: 33, label: "<6 meses" },
  'entre 1 y 2 años': { value: 66, label: "1-2 años" },
  '>2 años': { value: 100, label: ">2 años" },
};

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t.skills.title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.skills.subtitle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => {
            const knowledge = knowledgeMapping[skill.knowledge];
            const experience = experienceMapping[skill.experience];
            
            return(
            <Popover key={skill.name}>
              <PopoverTrigger asChild>
                <Card className="flex flex-col items-center justify-center p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
                  <CardContent className="p-0 flex flex-col items-center justify-center space-y-3">
                    {skill.icon}
                    <p className="font-semibold text-lg">{skill.name}</p>
                  </CardContent>
                </Card>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">{skill.name}</h4>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <span className="text-sm font-medium">Conocimiento</span>
                      <Progress value={knowledge.value} className="col-span-2 h-2" />
                    </div>
                    <p className="text-sm text-muted-foreground text-right">{knowledge.label}</p>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <span className="text-sm font-medium">Experiencia</span>
                      <Progress value={experience.value} className="col-span-2 h-2" />
                    </div>
                    <p className="text-sm text-muted-foreground text-right">{experience.label}</p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )})}
        </div>
      </div>
    </section>
  );
}
