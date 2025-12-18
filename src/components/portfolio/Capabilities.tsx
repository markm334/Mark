import { Cpu, Heart, Compass } from "lucide-react";

const capabilityGroups = [
  {
    icon: Cpu,
    title: "Innovation & Technology",
    color: "primary",
    items: [
      "Product & Systems Design",
      "Embedded Systems & IoT Prototyping",
      "Hardware-Software Integration",
      "Rapid Prototyping and Iteration",
      "Design for Durability and Scale",
    ],
  },
  {
    icon: Heart,
    title: "Social Impact & Programs",
    color: "accent",
    items: [
      "STEM Program Development",
      "Youth & Community Capacity Building",
      "Gender-Responsive Project Design",
      "Environmental Awareness Initiatives",
      "Inclusive Technology Deployment",
    ],
  },
  {
    icon: Compass,
    title: "Strategy & Leadership",
    color: "primary",
    items: [
      "Founder-Led Vision and Execution",
      "Multi-Stakeholder Engagement",
      "Partnership Development",
      "Impact-Driven Roadmapping",
      "Scaling from Pilot to Deployment",
    ],
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
            What I Bring
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Core <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A unique blend of technical innovation, social impact experience, and strategic 
            leadership to transform ideas into scalable, real-world solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilityGroups.map((group, index) => (
            <div
              key={group.title}
              className={`group p-8 rounded-3xl bg-card card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-up ${"delay-" + Math.min((index + 1) * 100, 800)}`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  group.color === "accent"
                    ? "bg-accent/10 text-accent"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <group.icon size={32} />
              </div>
              <h3 className="font-display font-bold text-xl mb-6">{group.title}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        group.color === "accent" ? "bg-accent" : "bg-primary"
                      }`}
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
