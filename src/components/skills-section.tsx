import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Server, Cloud, Award, Trophy } from 'lucide-react';
import { skillCategories, certifications } from '@/lib/portfolio-data';

const iconMap = {
  code: Code,
  server: Server,
  cloud: Cloud,
  microsoft: Award,
  trophy: Trophy,
};

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-slate-800/50 relative z-10" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">Technologies and tools I work with</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap];
              
              return (
                <Card key={index} className="glass-effect border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <IconComponent className="text-accent h-8 w-8 mr-3" />
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-item">
                          <div className="flex justify-between mb-2">
                            <span>{skill.name}</span>
                            <span className="text-accent">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className={`skill-bar-bg h-2 rounded-full transition-all duration-1000 ease-out ${
                                isVisible ? `w-[${skill.level}%]` : 'w-0'
                              }`}
                              style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Certifications */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-8">Certifications & Awards</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const IconComponent = iconMap[cert.icon as keyof typeof iconMap];
                
                return (
                  <Card key={index} className="glass-effect border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center mb-4">
                        <IconComponent className="text-accent h-8 w-8 mr-3" />
                        <div>
                          <h4 className="text-lg font-bold">{cert.name}</h4>
                          <p className="text-muted-foreground">{cert.issuer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
