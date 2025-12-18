import { Accessibility, Leaf, GraduationCap, Users, Globe, CheckCircle2 } from "lucide-react";

const workCategories = [
  {
    icon: Accessibility,
    title: "Healthcare & Accessibility",
    summary:
      "Designed and developed assistive and healthcare-support systems focused on improving mobility, reducing caregiver strain, and restoring autonomy for individuals with physical challenges.",
    outcomes: [
      "Functional prototypes developed",
      "Improved safety and usability in care settings",
      "Strong applicability in low-resource environments",
    ],
    color: "primary",
  },
  {
    icon: Leaf,
    title: "Environmental Sustainability",
    summary:
      "Led and contributed to environmental initiatives focused on conservation, sustainable practices, and climate awareness at community level.",
    outcomes: [
      "Community engagement in environmental stewardship",
      "Promotion of sustainable behaviors and solutions",
      "Integration of environmental thinking into projects",
    ],
    color: "accent",
  },
  {
    icon: GraduationCap,
    title: "STEM Education & Youth Empowerment",
    summary:
      "Designed and supported STEM-focused programs aimed at equipping young people with practical technical skills, problem-solving abilities, and innovation mindsets.",
    outcomes: [
      "Increased youth participation in STEM",
      "Hands-on learning through real-world problem solving",
      "Bridging education with practical application",
    ],
    color: "primary",
  },
  {
    icon: Users,
    title: "Gender Equality & Inclusion",
    summary:
      "Integrated gender-responsive approaches across projects to ensure inclusive participation, leadership opportunities, and equitable access to innovation.",
    outcomes: [
      "Improved representation and engagement",
      "Designs and programs that consider diverse needs",
      "Strengthened community trust and adoption",
    ],
    color: "accent",
  },
  {
    icon: Globe,
    title: "Community & Humanitarian Innovation",
    summary:
      "Built and adapted solutions for communities facing resource constraints, displacement, or systemic exclusion.",
    outcomes: [
      "Context-aware and adaptable solutions",
      "Focus on dignity, usability, and resilience",
      "Scalable models for broader deployment",
    ],
    color: "primary",
  },
];

const SelectedWork = () => {
  return (
    <section id="work" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-accent font-semibold mb-2 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm">
            My Work
          </p>
          <h2 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Selected <span className="text-accent">Initiatives</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto">
            A showcase of systems and programs I've built to create meaningful impact across 
            healthcare, environment, education, inclusion, and community development.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {workCategories.map((work, index) => (
            <div
              key={work.title}
              className={`group grid grid-cols-2 md:grid-cols-[1fr,2fr] gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-8 rounded-3xl bg-background card-shadow hover:card-shadow-hover transition-all duration-300 animate-fade-up ${"delay-" + Math.min((index + 1) * 100, 800)}`}
            >
              {/* Icon & Title */}
              <div className="flex flex-col">
                <div
                  className={`w-10 sm:w-14 h-10 sm:h-14 rounded-2xl flex items-center justify-center mb-2 sm:mb-4 ${
                    work.color === "accent"
                      ? "bg-accent/10 text-accent"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <work.icon size={22} className="sm:size-7" />
                </div>
                <h3 className="font-display font-bold text-sm sm:text-xl mb-2">{work.title}</h3>
                <div
                  className={`w-12 h-1 rounded-full ${
                    work.color === "accent" ? "bg-accent" : "bg-primary"
                  }`}
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-muted-foreground text-xs sm:text-base mb-3 sm:mb-4 leading-relaxed break-words">
                  {work.summary}
                </p>
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-foreground/70 mb-1 sm:mb-2">
                    Key Outcomes
                  </h4>
                  <ul className="space-y-1">
                    {work.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className={`mt-0.5 flex-shrink-0 size-4 sm:size-4 ${
                            work.color === "accent" ? "text-accent" : "text-primary"
                          }`}
                        />
                        <span className="text-foreground text-xs sm:text-sm">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
