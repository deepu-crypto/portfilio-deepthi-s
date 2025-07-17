import { Card, CardContent } from '@/components/ui/card';
import { experiences } from '@/lib/portfolio-data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Work Experience</h2>
          <p className="text-xl text-muted-foreground">My professional journey in software development</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
            
            {experiences.map((experience, index) => (
              <div key={index} className="mb-12 flex items-center w-full">
                {index % 2 === 0 ? (
                  // Left side (even index)
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <Card className="glass-effect border-0">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                          <p className="text-accent font-semibold mb-2">{experience.company}</p>
                          <p className="text-muted-foreground mb-4">{experience.period}</p>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            {experience.description.map((item, idx) => (
                              <li key={idx}>• {item}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-8 h-8 bg-primary rounded-full border-4 border-background absolute left-1/2 transform -translate-x-1/2"></div>
                    <div className="w-1/2 pl-8"></div>
                  </>
                ) : (
                  // Right side (odd index)
                  <>
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-8 h-8 bg-accent rounded-full border-4 border-background absolute left-1/2 transform -translate-x-1/2"></div>
                    <div className="w-1/2 pl-8">
                      <Card className="glass-effect border-0">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                          <p className="text-accent font-semibold mb-2">{experience.company}</p>
                          <p className="text-muted-foreground mb-4">{experience.period}</p>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            {experience.description.map((item, idx) => (
                              <li key={idx}>• {item}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
