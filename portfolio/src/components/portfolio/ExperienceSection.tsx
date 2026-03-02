interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    role: 'Senior Data Scientist',
    company: 'TechCorp Inc.',
    period: '2022 — Present',
    description: 'Leading ML initiatives for product recommendations. Built end-to-end pipelines reducing data processing time by 60%. Mentoring junior data scientists.',
  },
  {
    role: 'Backend Developer',
    company: 'DataFlow Systems',
    period: '2020 — 2022',
    description: 'Designed and maintained microservices handling 1M+ daily API calls. Implemented caching strategies and optimized database queries for 3x performance improvement.',
  },
  {
    role: 'Data Analyst',
    company: 'Analytics Hub',
    period: '2018 — 2020',
    description: 'Developed automated reporting dashboards for C-suite. Conducted A/B tests and statistical analyses driving key business decisions across marketing and product.',
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-sm font-mono text-primary mb-8 tracking-wider uppercase">
          {'// Experience'}
        </h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10 pl-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-8 top-1.5 w-2 h-2 rounded-full bg-primary border-glow" />

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-muted-foreground">@</span>
                  <span className="text-primary font-medium">{exp.company}</span>
                </div>

                <span className="text-xs font-mono text-muted-foreground mb-3 block">{exp.period}</span>

                <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
