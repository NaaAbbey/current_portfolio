import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: 'Customs & Trade Performance Analytics',
    description: 'Analyzes customs and trade data to identify patterns across import values, shipment flows, tax revenues, and compliance risks, surfacing insights to improve trade governance and reduce revenue leakage.',
    tech: ['Python', 'Pandas', 'Streamlit', "Matplotlib"],
    github: '#',
    live: '#',
  },
  {
    title: 'Google Play Apps Success Prediction',
    description: 'A machine learning pipeline that predicts app success scores using Google Play Store metadata and user review data, combining NLP-based review features with structured app attributes for improved predictive power.',
    tech: ['Python', 'Seaborn', 'Scikit-learn', 'Matplotlib', "Tableau"],
    github: '#',
    live: '#',
  },
  {
    title: 'MedEx: Medical-Based Expert System',
    description: 'An AI-driven Medical Expert System designed to diagnose diseases based on the symptoms provided by the user, using an expert rule-based approach, it suggests possible diagnoses, causes, and treatments.',
    tech: ['React', 'Experta', 'JavaScript', 'Python', "Axios", "Flask"],
    github: '#',
    live: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-sm font-mono text-primary mb-8 tracking-wider uppercase">
          {'// Featured Projects'}
        </h2>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <div key={i} className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:border-glow">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-xs font-mono px-2 py-1 bg-primary/10 text-primary rounded">{t}</span>
                ))}
              </div>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <a href={project.github} className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Github className="w-3.5 h-3.5" /> Code
                </a>
                <a href={project.live} className="flex items-center gap-1 hover:text-primary transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
