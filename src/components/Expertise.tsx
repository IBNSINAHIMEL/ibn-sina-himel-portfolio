import { Card } from "@/components/ui/card";
import { Brain, Shield, Network } from "lucide-react";

const Expertise = () => {
  const skills = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep learning, neural networks, and AI model development for intelligent systems.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Cryptography",
      description: "Encryption algorithms, security protocols, and data protection mechanisms.",
      gradient: "from-tech-cyan to-tech-blue",
    },
    {
      icon: Network,
      title: "Networking",
      description: "Network architecture, protocols, and distributed systems design.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="expertise" className="py-20 px-4 bg-tech-darker/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Areas of Expertise</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Specialized knowledge in cutting-edge technologies
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/60 transition-all duration-300 animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.gradient} p-0.5`}>
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                    <skill.icon className="h-8 w-8 text-foreground" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
