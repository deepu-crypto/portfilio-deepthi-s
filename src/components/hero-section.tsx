import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/lib/portfolio-data';

export default function HeroSection() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingComplete(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link to the resume file
    const link = document.createElement('a');
    link.href = '/Deepthi_Sree_Sampathirao_Resume.pdf';
    link.download = 'Deepthi_Sree_Sampathirao_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Deepthi Sree</span>
            <br />
            <span className="text-foreground">Sampathirao</span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 text-muted-foreground">
            <span className={`inline-block ${!isTypingComplete ? 'typing-effect' : ''}`}>
              Software Engineer & Full Stack Developer
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('#projects')}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-semibold transition-all"
            >
              View Projects
            </Button>
            <Button
              onClick={downloadResume}
              className="bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 text-2xl">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-accent" />
      </div>
    </section>
  );
}
