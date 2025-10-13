'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from '@/context/language-context';
import { Code, Component, Container, Database, GitMerge, Kanban, Network, PenTool, Server, TerminalSquare, Users, Wind } from 'lucide-react';

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
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4 mb-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">{t.skills.title}</h2>
            <p className="max-w-3xl text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed">
              {t.skills.subtitle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {skills.map((skill) => {
            const knowledge = knowledgeMapping[skill.knowledge];
            const experience = experienceMapping[skill.experience];
            
            return(
            <Popover key={skill.name}>
              <PopoverTrigger asChild>
                <Card className="flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <CardContent className="p-0 flex flex-col items-center justify-center space-y-2 sm:space-y-3">
                    <div className="transition-colors group-hover:text-primary">
                      {skill.icon}
                    </div>
                    <p className="font-semibold text-sm sm:text-base lg:text-lg leading-tight">{skill.name}</p>
                  </CardContent>
                </Card>
              </PopoverTrigger>
              <PopoverContent className="w-72 sm:w-80" align="center">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none text-lg">{skill.name}</h4>
                  </div>
                  <div className="grid gap-3">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Conocimiento</span>
                        <span className="text-sm text-muted-foreground">{knowledge.label}</span>
                      </div>
                      <Progress value={knowledge.value} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Experiencia</span>
                        <span className="text-sm text-muted-foreground">{experience.label}</span>
                      </div>
                      <Progress value={experience.value} className="h-2" />
                    </div>
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
