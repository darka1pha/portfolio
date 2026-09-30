import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
} from '@/components/home';

export default function Home() {
  return (
    <div className='flex flex-col space-y-12 md:space-y-16'>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
    </div>
  );
}
