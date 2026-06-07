import { Terminal } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center py-20">
      <div className="container items-center max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6 text-sm text-primary font-mono animate-fade-in">
          <Terminal className="w-4 h-4" />
          <span>~/portfolio</span>
          <span className="animate-pulse">▌</span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in"
          style={{ animationDelay: '0.2s', }}
        >
          Daisy Abbey
        </h1>

       <h2
          className="text-2xl md:text-3xl text-gradient font-semibold mb-8 animate-fade-in"
          style={{ animationDelay: '1.0s', animationFillMode: 'both' }}
        >
          Data Scientist & Backend Developer
        </h2>

        <p
          className="text-lg text-center ml-auto mr-auto text-muted-foreground max-w-2xl leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.5s', }}
        >
          I transform raw data into actionable insights and build scalable backend systems. Passionate about machine learning, statistical analysis, and crafting robust APIs that power data-driven applications.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
