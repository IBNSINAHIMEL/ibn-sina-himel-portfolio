import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Facebook, Globe, Bot } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary glow-effect">
              <img 
                src={profilePicture} 
                alt="Ibnsina Himel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-tech-cyan to-tech-blue rounded-full opacity-20 blur-2xl -z-10" />
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="gradient-text">Ibnsina Himel</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Computer Science Engineer
              </p>
            </div>

            <p className="text-lg text-foreground/80 max-w-2xl">
              Specialist in <span className="text-tech-cyan font-semibold">Machine Learning</span>, 
              <span className="text-tech-cyan font-semibold"> Cryptography</span>, and 
              <span className="text-tech-cyan font-semibold"> Networking</span>. 
              Graduated from Dhaka University with a passion for building secure and intelligent systems.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <a href="https://github.com/IBNSINAHIMEL" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <a href="https://www.linkedin.com/in/ibnsina-himel-69ba21363/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <a href="https://x.com/himel_ibnsina" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <a href="https://www.facebook.com/share/17g6oNf8iT/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <a href="https://ibnsinahimel.blogspot.com/" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center md:justify-start flex-wrap pt-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-tech-cyan to-tech-blue hover:opacity-90 transition-opacity text-tech-dark font-semibold"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary hover:bg-card"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            {/* AI Chatbot Section */}
            <Card className="p-4 mt-2 bg-gradient-to-r from-tech-cyan/10 to-tech-blue/10 backdrop-blur border-primary/40">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Bot className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-base font-bold">Chat with my AI Bot</h3>
                    <p className="text-muted-foreground text-xs">Try my AI assistants!</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-tech-cyan to-tech-blue hover:opacity-90 text-tech-dark font-semibold"
                    asChild
                  >
                    <a href="https://flyiochatbot.fly.dev/" target="_blank" rel="noopener noreferrer">
                      <Bot className="mr-1 h-3 w-3" />
                      Fly.io Chatbot
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-tech-blue to-tech-purple hover:opacity-90 text-white font-semibold"
                    asChild
                  >
                    <a href="https://ibnsina-voice-companion.lovable.app/" target="_blank" rel="noopener noreferrer">
                      <Bot className="mr-1 h-3 w-3" />
                      Voice Companion
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
