import { School, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { education } from '@/lib/portfolio-data';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-slate-800/50 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Education</h2>
          <p className="text-xl text-muted-foreground">My academic journey and achievements</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="glass-effect border-0 transform hover:scale-105 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    {index === 0 ? (
                      <School className="text-white h-8 w-8" />
                    ) : (
                      <GraduationCap className="text-white h-8 w-8" />
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-accent font-semibold mb-2">{edu.field}</p>
                  <p className="text-muted-foreground mb-4">{edu.school}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                    <Badge 
                      variant="secondary" 
                      className={`${index === 0 ? 'bg-green-500' : 'bg-blue-500'} text-white`}
                    >
                      GPA: {edu.gpa}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">{edu.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
