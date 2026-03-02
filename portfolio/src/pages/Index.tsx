import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import ContactSection from '../components/portfolio/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14">
        <HeroSection />
        <div id="skills"><SkillsSection /></div>
        <div id="projects"><ProjectsSection /></div>
        <div id="experience"><ExperienceSection /></div>
        <div id="contact"><ContactSection /></div>
      </main>
    </div>
  );
};

export default Index;
