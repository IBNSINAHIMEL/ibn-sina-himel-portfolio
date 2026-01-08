import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Github, Linkedin, Twitter, Facebook, Globe, Bot } from "lucide-react";
import messengerQR from "@/assets/messenger-qr.jpg";
import instagramQR from "@/assets/instagram-qr.jpg";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-tech-darker/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Let's connect and collaborate
        </p>

        {/* AI Chatbot Section */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-tech-cyan/10 to-tech-blue/10 backdrop-blur border-primary/40 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Bot className="h-8 w-8 text-primary animate-pulse-glow" />
              <div>
                <h3 className="text-xl font-bold">Chat with my AI Bot</h3>
                <p className="text-muted-foreground text-sm">Want to have a conversation? Try my AI assistants!</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button 
                className="bg-gradient-to-r from-tech-cyan to-tech-blue hover:opacity-90 text-tech-dark font-semibold"
                asChild
              >
                <a href="https://flyiochatbot.fly.dev/" target="_blank" rel="noopener noreferrer">
                  <Bot className="mr-2 h-4 w-4" />
                  Fly.io Chatbot
                </a>
              </Button>
              <Button 
                className="bg-gradient-to-r from-tech-blue to-tech-purple hover:opacity-90 text-white font-semibold"
                asChild
              >
                <a href="https://ibnsina-voice-companion.lovable.app/" target="_blank" rel="noopener noreferrer">
                  <Bot className="mr-2 h-4 w-4" />
                  Voice Companion
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* QR Codes */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6">Scan to Connect</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/60 transition-all animate-fade-in">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <MessageCircle className="h-6 w-6" />
                    <h4 className="text-xl font-bold">Messenger</h4>
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary/20">
                    <img 
                      src={messengerQR} 
                      alt="Messenger QR Code"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/60 transition-all animate-fade-in">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Instagram className="h-6 w-6" />
                    <h4 className="text-xl font-bold">Instagram</h4>
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary/20">
                    <img 
                      src={instagramQR} 
                      alt="Instagram QR Code"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6">Social Media</h3>
            <div className="space-y-4">
              <Button 
                variant="outline"
                className="w-full justify-start text-lg h-14 border-primary/20 hover:border-primary/60 hover:bg-card"
                asChild
              >
                <a href="https://github.com/IBNSINAHIMEL" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-3 h-5 w-5" />
                  GitHub
                </a>
              </Button>

              <Button 
                variant="outline"
                className="w-full justify-start text-lg h-14 border-primary/20 hover:border-primary/60 hover:bg-card"
                asChild
              >
                <a href="https://www.linkedin.com/in/ibnsina-himel-69ba21363/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-3 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>

              <Button 
                variant="outline"
                className="w-full justify-start text-lg h-14 border-primary/20 hover:border-primary/60 hover:bg-card"
                asChild
              >
                <a href="https://www.instagram.com/i_am_ibnsina_himel_?igsh=YzVtN2VuYmo4d3N4" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-3 h-5 w-5" />
                  Instagram
                </a>
              </Button>

              <Button 
                variant="outline"
                className="w-full justify-start text-lg h-14 border-primary/20 hover:border-primary/60 hover:bg-card"
                asChild
              >
                <a href="https://x.com/himel_ibnsina" target="_blank" rel="noopener noreferrer">
                  <Twitter className="mr-3 h-5 w-5" />
                  Twitter
                </a>
              </Button>

              <Button 
                variant="outline"
                className="w-full justify-start text-lg h-14 border-primary/20 hover:border-primary/60 hover:bg-card"
                asChild
              >
                <a href="https://www.facebook.com/share/17g6oNf8iT/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-3 h-5 w-5" />
                  Facebook
                </a>
              </Button>

              <Button 
                variant="outline"
                className="w-full justify-start text-lg h-14 border-primary/20 hover:border-primary/60 hover:bg-card"
                asChild
              >
                <a href="https://ibnsinahimel.blogspot.com/" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-3 h-5 w-5" />
                  Personal Website
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-muted-foreground">
          <p className="text-sm">© 2025 Ibnsina Himel. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
