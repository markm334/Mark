import { Button } from "@/components/ui/button";
import { Mail, MapPin, Globe, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
              Get In Touch
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's <span className="text-accent">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Whether you're an investor, partner, or organization looking to 
              collaborate, I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <a
              href="mailto:markmurangiri885@gmail.com"
              className="group p-6 rounded-2xl bg-background card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail size={24} className="text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold mb-1">Email</h3>
              <p className="text-muted-foreground text-sm">markmurangiri885@gmail.com</p>
            </a>

            {/* Location */}
            <div className="p-6 rounded-2xl bg-background card-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-accent" />
              </div>
              <h3 className="font-display font-bold mb-1">Location</h3>
              <p className="text-muted-foreground text-sm">Nairobi, Kenya</p>
            </div>

            {/* Website */}
            <a
              href="https://mas-2.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-background card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Globe size={24} className="text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold mb-1">Website</h3>
              <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
                mas-2.onrender.com
                <ArrowUpRight size={14} />
              </p>
            </a>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:markmurangiri885@gmail.com">
                  <Mail size={20} />
                  Send Email
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a
                  href="https://www.linkedin.com/in/mark-murangiri-5391b4228/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
