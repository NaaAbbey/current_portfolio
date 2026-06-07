import { Code2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-primary" />
          <span className="font-mono font-bold text-sm">DA</span>
        </div>

        <div className="flex gap-6 text-sm text-muted-foreground font-mono">
          <a href="#skills" className="hover:text-primary transition-colors">skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">projects</a>
          <a href="#experience" className="hover:text-primary transition-colors">exp</a>
          <a href="#contact" className="hover:text-primary transition-colors">contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
