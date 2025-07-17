import ThreeBackground from '@/components/three-background';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ExperienceSection from '@/components/experience-section';
import EducationSection from '@/components/education-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThreeBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-slate-800/50 py-8 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">© 2024 Deepthi Sree Sampathirao. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
