import { AboutSection, HeroSection, ProjectsSection } from '@/components/home';

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto'>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
