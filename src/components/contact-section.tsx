import { useState } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
//import { useToast } from "@/hooks/use-toast";
import { contactInfo } from "@/lib/portfolio-data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  //const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss opportunities and collaborate
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="glass-effect border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="text-accent h-8 w-8 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold">Email</h3>
                      <p className="text-muted-foreground">
                        {contactInfo.email}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="text-accent h-8 w-8 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold">Phone</h3>
                      <p className="text-muted-foreground">
                        {contactInfo.phone}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Linkedin className="text-accent h-8 w-8 mr-4" />
                    <div>
                      <a
                        className="text-xl font-bold"
                        href="https://www.linkedin.com/in/deepthi-sree-sampathirao-b81440164/"
                      >
                        LinkedIn
                      </a>

                      <p className="text-muted-foreground">
                        Connect with me professionally
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-effect border-0">
              <CardContent className="p-8">
                <form
                  action="https://formsubmit.co/deepthisree1012@gmail.com"
                  className="space-y-6"
                  method="POST"
                >
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 bg-muted border-muted focus:border-accent"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 bg-muted border-muted focus:border-accent"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 bg-muted border-muted focus:border-accent"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-semibold transition-colors"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
