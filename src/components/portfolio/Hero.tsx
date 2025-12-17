import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import markPortrait from "@/assets/mark..png";

const Hero = () => {
  return (
    <section className="min-h-screen hero-bg flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Profile Image */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Decorative dotted ring with pulsing glow */}
              <div className="absolute inset-0 -m-4 rounded-full border-2 border-dotted border-primary/30 animate-pulse-border" />
              
              {/* Main image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl glow-primary">
                <img
                  src={markPortrait}
                  alt="Mark Murangiri - Founder & Product Innovator"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg animate-float">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-accent" />
                  <span className="font-medium">Nairobi, Kenya</span>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg animate-float delay-300">
                <span className="font-display font-bold text-lg">5+</span>
                <p className="text-xs opacity-90">Startup Developed</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <p className="text-muted-foreground font-medium mb-4 animate-fade-up">
              Hello There!
            </p>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 animate-fade-up delay-100">
              I'M <span className="text-accent">MARK MURANGIRI</span>, A{" "}
              <span className="text-primary">FOUNDER</span> BUILDING{" "}
              <span className="relative">
                <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-4">
                  IMPACT SYSTEMS
                </span>
              </span>{" "}
              ACROSS SECTORS.
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl animate-fade-up delay-200">
              Impact Systems Builder & Inclusive Innovation Leader — Transforming complex challenges in healthcare, environment, STEM, and community development into scalable solutions.
            </p>

            <div className="flex items-center gap-4 mb-8 animate-fade-up delay-300">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-muted-foreground">Open for Partnerships</span>
              </span>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  Get in Touch
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#work">View My Work</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-10 animate-fade-up delay-500">
              <a
                href="mailto:mark.murangiri@email.com"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mark-murangiri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://mas-2.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Website"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
