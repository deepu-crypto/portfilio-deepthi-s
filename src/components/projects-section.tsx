import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/portfolio-data';
import { 
  Trophy as Chess, 
  Utensils, 
  CheckSquare as Tasks,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  chess: Chess,
  utensils: Utensils,
  tasks: Tasks,
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Projects</h2>
          <p className="text-xl text-muted-foreground">Showcasing my development work and technical skills</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = iconMap[project.icon];
            
            return (
              <Card
                key={index}
                className="glass-effect border-0 transform hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.period}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
