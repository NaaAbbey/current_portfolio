interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Data Science',
    skills: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Data Analysis',
    skills: ['SQL', 'Tableau', 'Excel', 'Statistical Modeling', 'Data Visualization', ],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'FastAPI', 'Django', 'PostgreSQL', 'REST APIs'],
  },
  /*{
    title: 'Tools & Cloud',
    skills: ['Git', 'AWS', 'GCP', 'Airflow', 'Kafka', 'CI/CD', 'Linux'],
  } */
];

const SkillsSection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-sm font-mono text-primary mb-8 tracking-wider uppercase">
          {'// Skills & Technologies'}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={catIdx}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:border-glow"
            >
              <h3 className="font-semibold text-lg mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 text-sm font-mono bg-secondary text-secondary-foreground rounded-md border border-border hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
