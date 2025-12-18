import { Heart, Lightbulb, Users, Globe, Leaf, GraduationCap } from "lucide-react";

const impactDomains = [
  {
    icon: Heart,
    title: "Healthcare & Assistive Tech",
    description: "Technologies improving mobility and care delivery",
  },
  {
    icon: Leaf,
    title: "Environmental Sustainability",
    description: "Climate action and conservation initiatives",
  },
  {
    icon: GraduationCap,
    title: "STEM & Youth Empowerment",
    description: "Building future innovators through education",
  },
  {
    icon: Users,
    title: "Gender Equality & Inclusion",
    description: "Ensuring equitable participation and access",
  },
  {
    icon: Lightbulb,
    title: "Community Innovation",
    description: "Grassroots solutions for local challenges",
  },
  {
    icon: Globe,
    title: "Humanitarian Solutions",
    description: "Practical tools for low-resource contexts",
  },
];

const crossCuttingThemes = [
  "Equity and access",
  "Dignity-centered design",
  "Sustainability and resilience",
  "Local relevance with global scalability",
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
              About Me
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Building <span className="text-accent">Inclusive Systems</span> Across{" "}
              <span className="text-primary">Multiple Sectors</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am a multidisciplinary founder and systems builder working at the 
                intersection of technology, social impact, and sustainability.
              </p>
              <p>
                My work spans healthcare accessibility, environmental resilience, 
                STEM empowerment, gender equity, and community-centered innovation. 
                I focus on transforming complex, underserved challenges into practical, 
                scalable solutions that deliver measurable social and economic value.
              </p>
            </div>
          </div>

          {/* Right: Impact Domains Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {impactDomains.map((area, index) => (
              <div
                key={area.title}
                className={`group p-5 rounded-2xl bg-background card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-up ${"delay-" + Math.min((index + 1) * 100, 800)}`}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <area.icon size={20} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-base mb-1">{area.title}</h3>
                <p className="text-muted-foreground text-sm break-words">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Cutting Themes */}
        <div className="mt-20">
          <h3 className="font-display text-xl font-bold mb-6 text-center">
            Cross-Cutting Themes
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {crossCuttingThemes.map((theme) => (
              <span
                key={theme}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
