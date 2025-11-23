import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Explore my work and contributions
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* GitHub Profile Card */}
          <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/60 transition-all duration-300 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">GitHub Repository</h3>
                <Github className="h-8 w-8 text-primary" />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Check out my open-source contributions, projects, and code repositories on GitHub. 
                I actively contribute to various projects in machine learning, cryptography, and networking.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-tech-cyan to-tech-blue hover:opacity-90 text-tech-dark font-semibold"
                asChild
              >
                <a href="https://github.com/IBNSINAHIMEL" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Visit GitHub Profile
                </a>
              </Button>
            </div>
          </Card>

          {/* Blog/Website Card */}
          <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/60 transition-all duration-300 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Personal Blog</h3>
                <ExternalLink className="h-8 w-8 text-primary" />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Read my technical articles, tutorials, and insights on computer science topics. 
                I share knowledge about latest technologies, research papers, and industry trends.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-tech-cyan to-tech-blue hover:opacity-90 text-tech-dark font-semibold"
                asChild
              >
                <a href="https://ibnsinahimel.blogspot.com/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Visit Blog
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
