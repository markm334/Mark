import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Shield, Handshake, ArrowRight } from "lucide-react";

const whyInvest = [
  {
    icon: Target,
    text: "Ability to build across sectors and adapt to diverse contexts",
  },
  {
    icon: TrendingUp,
    text: "Track record of turning complex challenges into scalable solutions",
  },
  {
    icon: Shield,
    text: "Deep understanding of real-world constraints and sustainability",
  },
  {
    icon: Handshake,
    text: "Strong alignment with both impact and commercial value",
  },
];

const useOfResources = [
  "Product and program development",
  "Pilot testing and validation",
  "Capacity building and team growth",
  "Scaling high-impact initiatives",
];

const seekingPartners = [
  "Impact investors",
  "NGOs and civil society organizations",
  "Educational institutions",
  "Healthcare and community partners",
  "Environmental and sustainability organizations",
];

const whatIPartnerOn = [
  "Co-creation of inclusive solutions",
  "Pilot programs and field deployment",
  "Scaling proven initiatives",
  "Long-term impact strategies",
];

const Investment = () => {
  return (
    <section id="invest" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
            Partnership & Investment
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build <span className="text-accent">Impact</span> Together
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            I'm seeking partners who share a vision for creating lasting social, 
            environmental, and economic value through practical innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Why Invest */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 animate-fade-up">
            <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center">
                💡
              </span>
              Why Partner With Me
            </h3>
            <ul className="space-y-4">
              {whyInvest.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <item.icon size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/90">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Use of Resources */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 animate-fade-up delay-150">
            <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center">
                📈
              </span>
              Use of Resources
            </h3>
            <ul className="space-y-3">
              {useOfResources.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Seeking */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 animate-fade-up delay-300">
            <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center">
                🤝
              </span>
              Open To Partner With
            </h3>
            <ul className="space-y-3">
              {seekingPartners.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I Partner On */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 animate-fade-up delay-450">
            <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center">
                🎯
              </span>
              What I Partner On
            </h3>
            <ul className="space-y-3">
              {whatIPartnerOn.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <blockquote className="text-xl md:text-2xl font-display italic mb-8 text-primary-foreground/90">
            "To build a portfolio of inclusive, sustainable innovations and programs that improve lives, 
            protect the environment, empower future generations, and create lasting value across communities and regions."
          </blockquote>
          <Button variant="accent" size="xl" asChild>
            <a href="#contact">
              Start a Conversation
              <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Investment;
