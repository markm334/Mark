const principles = [
  "Start from lived experience and real needs",
  "Design with communities, not for them",
  "Balance impact, feasibility, and sustainability",
  "Build systems that endure beyond pilots",
];

const workflow = [
  {
    step: "01",
    title: "Problem Identification",
    description: "Stakeholder listening and context analysis",
  },
  {
    step: "02",
    title: "Concept Design",
    description: "System mapping and solution architecture",
  },
  {
    step: "03",
    title: "Prototype Development",
    description: "Building and rigorous field testing",
  },
  {
    step: "04",
    title: "Iteration",
    description: "Refinement based on real-world feedback",
  },
  {
    step: "05",
    title: "Scale & Impact",
    description: "Preparation for long-term deployment",
  },
];

const Approach = () => {
  return (
    <section id="approach" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
            How I Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-accent">Method</span> of Work
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Principles */}
          <div className="animate-fade-up">
            <h3 className="font-display font-bold text-2xl mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-lg">
                ✦
              </span>
              Guiding Principles
            </h3>
            <ul className="space-y-4">
              {principles.map((principle, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-card/80 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-foreground font-medium">{principle}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Workflow */}
          <div className="animate-fade-up delay-200">
            <h3 className="font-display font-bold text-2xl mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center text-lg">
                →
              </span>
              Execution Process
            </h3>
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border hidden md:block" />
              
              <div className="space-y-6">
                {workflow.map((item) => (
                  <div
                    key={item.step}
                    className="relative flex gap-6 group"
                  >
                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm flex-shrink-0 group-hover:bg-accent transition-colors">
                      {item.step}
                    </div>
                    <div className="flex-1 pb-2">
                      <h4 className="font-display font-bold text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
