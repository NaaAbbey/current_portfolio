interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    role: 'Skill Team Intern',
    company: 'MEST Africa',
    period: '05/2025 - 06/2025',
    description: 'Supported the student recruitment process by reviewing applications, organizing candidate data, coordinating interviews, and tracking recruitment progress using digital tools. Developed and improved internal systems, including a student performance tracking system, a meeting room booking system, and UI enhancements for a laptop tracking web application. Participated in strategic and operational meetings involving hackathon planning, recruitment updates, and student concerns, gaining experience in project coordination and stakeholder communication.',
  },
  {
    role: 'Data Analyst Intern',
    company: 'DataVerse Africa',
    period: '07/2025 — 09/2025',
    description: 'Recognized high dropout rates in financial inclusion initiatives for targeted interventions. Developed dashboards to monitor import volumes, taxes, and compliance metrics. Collaborated with colleagues to analyze trends and derive actionable insights.',
  },
  {
    role: 'Data Science Intern',
    company: 'Unified Mentor Private Limited',
    period: '03/2025 - 04/2025',
    description: 'Developed customer satisfaction prediction model based on historical data for purchased products and responses. Built machine learning model to predict app success using datasets from Google Play Store and reviews. Analyzed datasets to identify trends and patterns, providing valuable project insights.',
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
