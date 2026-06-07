import { Mail} from 'lucide-react';
import { SiGithub, SiLinkerd } from "@icons-pack/react-simple-icons";

const ContactSection = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-sm font-mono text-primary mb-8 tracking-wider uppercase">
          {'// Get in Touch'}
        </h2>

        <p className="text-muted-foreground mb-8 max-w-xl">
          Open to opportunities in data science, analytics, and backend engineering.
          Let's build something meaningful together.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-foreground font-mono text-sm">daisy.ny.abbey@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <SiGithub className="w-4 h-4 text-primary" />
            <span className="text-foreground font-mono text-sm">github.com/NaaAbbey</span>
          </div>
          <div className="flex items-center gap-3">
            <SiLinkerd className="w-4 h-4 text-primary" />
            <span className="text-foreground font-mono text-sm">linkedin.com/in/daisy-a-6394a1282</span>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-mono">
            Built with care
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
