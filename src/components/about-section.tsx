import { GraduationCap, Briefcase, Award, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-800/50 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated Software Engineer pursuing my Master's in Computer Science at UNC Charlotte. 
            With hands-on experience at Accenture, I specialize in building scalable web applications and 
            implementing efficient solutions for complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="glass-effect border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-accent h-8 w-8 mr-4" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <p className="text-muted-foreground">
                  Currently pursuing MS in Computer Science at UNC Charlotte with a 4.0 GPA
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="text-accent h-8 w-8 mr-4" />
                  <h3 className="text-xl font-semibold">Experience</h3>
                </div>
                <p className="text-muted-foreground">
                  3+ years of software development experience with expertise in React, Python, and cloud technologies
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="text-accent h-8 w-8 mr-4" />
                  <h3 className="text-xl font-semibold">Achievements</h3>
                </div>
                <p className="text-muted-foreground">
                  ACE Award recipient at Accenture, Microsoft Azure certified professional
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            {/* Abstract geometric pattern background */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" viewBox="0 0 400 400" className="animate-float">
                <circle cx="100" cy="100" r="50" fill="none" stroke="hsl(188, 91%, 42%)" strokeWidth="2"/>
                <circle cx="300" cy="150" r="30" fill="none" stroke="hsl(217, 91%, 60%)" strokeWidth="2"/>
                <circle cx="200" cy="300" r="40" fill="none" stroke="hsl(188, 91%, 42%)" strokeWidth="2"/>
                <line x1="100" y1="100" x2="300" y2="150" stroke="hsl(217, 91%, 60%)" strokeWidth="1"/>
                <line x1="300" y1="150" x2="200" y2="300" stroke="hsl(188, 91%, 42%)" strokeWidth="1"/>
                <polygon points="150,200 170,240 130,240" fill="none" stroke="hsl(217, 91%, 60%)" strokeWidth="2"/>
              </svg>
            </div>

            {/* Minimalist tech illustration */}
            <Card className="glass-effect border-0 relative z-10">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20"></div>
                    <div className="absolute inset-4 bg-gradient-to-br from-primary to-accent rounded-full opacity-40"></div>
                    <div className="absolute inset-8 bg-gradient-to-br from-primary to-accent rounded-full"></div>
                    <Code className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Full Stack Developer</h3>
                  <p className="text-muted-foreground">Passionate about creating innovative solutions</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
