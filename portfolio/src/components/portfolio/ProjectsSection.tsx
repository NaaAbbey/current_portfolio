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
    title: 'Customer Churn Predictor',
    description: 'ML pipeline predicting customer churn with 94% accuracy using gradient boosting. Includes feature engineering, model training, and a REST API for real-time predictions.',
    tech: ['Python', 'Scikit-learn', 'FastAPI', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description: 'Streaming analytics platform processing 10K+ events/sec. Built with event-driven architecture and real-time visualizations for business KPIs.',
    tech: ['Kafka', 'Node.js', 'Redis', 'React'],
    github: '#',
    live: '#',
  },
  {
    title: 'NLP Sentiment Engine',
    description: 'Deep learning model for multi-language sentiment analysis. Deployed as a microservice with automated retraining pipeline and model versioning.',
    tech: ['TensorFlow', 'Docker', 'AWS', 'Python'],
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
