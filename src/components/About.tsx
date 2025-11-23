import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import coverPicture from "@/assets/cover-picture.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Cover Image */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] animate-fade-in">
            <img 
              src={coverPicture} 
              alt="Ibnsina Himel at University"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a Computer Science graduate from the prestigious University of Dhaka, 
              where I developed a deep passion for cutting-edge technologies and their 
              real-world applications.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              My expertise lies at the intersection of artificial intelligence, security, 
              and network systems. I specialize in building intelligent solutions that are 
              not only powerful but also secure and scalable.
            </p>

            <div className="space-y-4 pt-4">
              <Card className="p-4 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">University of Dhaka</p>
                    <p className="text-sm text-muted-foreground">Bachelor of Science in Computer Science</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Born December 31, 2000</p>
                    <p className="text-sm text-muted-foreground">Millennium Generation</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Based in Bangladesh</p>
                    <p className="text-sm text-muted-foreground">Open to global opportunities</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
