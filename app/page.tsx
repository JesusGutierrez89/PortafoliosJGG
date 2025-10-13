'use client';
import Footer from '@/components/footer';
import Header from '@/components/header';
import AboutSection from '@/components/sections/about-section';
import CertificatesSection from '@/components/sections/certificates-section';
import ContactSection from '@/components/sections/contact-section';
import HeroSection from '@/components/sections/hero-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import { useLanguage } from '@/context/language-context';


export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
