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

        <div className="grid md:grid-cols-3 gap-6">
          {/* GitHub Profile Card */}
          <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/60 transition-all duration-300 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">GitHub</h3>
                <Github className="h-7 w-7 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Open-source contributions and code repositories in ML, cryptography, and networking.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-tech-cyan to-tech-blue hover:opacity-90 text-tech-dark font-semibold"
                asChild
              >
                <a href="https://github.com/IBNSINAHIMEL" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Visit GitHub
                </a>
              </Button>
            </div>
          </Card>

          {/* Kaggle Profile Card */}
          <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/60 transition-all duration-300 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Kaggle</h3>
                <svg className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.071.339"/>
                </svg>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Data science competitions, notebooks, and machine learning datasets.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-tech-cyan to-tech-blue hover:opacity-90 text-tech-dark font-semibold"
                asChild
              >
                <a href="https://www.kaggle.com/ibnsinahimel" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Kaggle
                </a>
              </Button>
            </div>
          </Card>

          {/* Blog/Website Card */}
          <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/60 transition-all duration-300 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Personal Blog</h3>
                <ExternalLink className="h-7 w-7 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Technical articles, tutorials, and insights on computer science topics.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-tech-cyan to-tech-blue hover:opacity-90 text-tech-dark font-semibold"
                asChild
              >
                <a href="https://ibnsinahimel.blogspot.com/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
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
