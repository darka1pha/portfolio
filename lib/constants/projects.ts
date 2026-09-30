import { StaticImageData } from 'next/image';
import NOBAAR from '../../public/images/projects/nobaar.webp';
import BAARIKA from '../../public/images/projects/baarika.webp';
import ALPHAMOVIES from '../../public/images/projects/alphamoovies.webp';
import MOOVIE from '../../public/images/projects/moovie.webp';
import ATMOS from '../../public/images/projects/atmos.webp';
import KRIST from '../../public/images/projects/krist.webp';

export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  highlight?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'atmos-3d',
    title: 'Atmos',
    category: 'Three.js / WebGL',
    tagline: 'Immersive 3D interactive digital atmosphere',
    description:
      'A cutting-edge 3D interactive web application powered by Next.js, React Three Fiber, and custom GLSL shaders, delivering dynamic camera choreographies and real-time lighting physics.',
    tags: ['Next.js 15', 'Three.js', 'React Three Fiber', 'Drei', 'GLSL', 'Tailwind CSS'],
    image: ATMOS,
    featured: true,
    liveUrl: 'https://darkalpha.ir',
    githubUrl: 'https://github.com/darka1pha',
    highlight: '60 FPS WebGL Engine',
  },
  {
    slug: 'moovie',
    title: 'Moovie',
    category: 'Next.js 15',
    tagline: 'Next-gen cinematic streaming and discovery portal',
    description:
      'High-performance entertainment discovery engine built on Next.js 15 App Router and React Server Components with instant search, debounce filtering, and streaming metadata.',
    tags: ['Next.js 15', 'React 19', 'Server Components', 'TypeScript', 'Tailwind CSS'],
    image: MOOVIE,
    featured: true,
    liveUrl: 'https://darkalpha.ir',
    githubUrl: 'https://github.com/darka1pha',
    highlight: 'Server Component Architecture',
  },
  {
    slug: 'krist-ecommerce',
    title: 'Krist',
    category: 'Full-Stack / Supabase',
    tagline: 'Modern lifestyle and e-commerce shopping experience',
    description:
      'Full-stack e-commerce platform with real-time inventory management, authenticated checkout flows, Supabase PostgreSQL persistence, and instantaneous optimistic cart updates.',
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
    image: KRIST,
    featured: true,
    liveUrl: 'https://darkalpha.ir',
    githubUrl: 'https://github.com/darka1pha',
    highlight: 'Real-time Supabase Database',
  },
  {
    slug: 'baarika',
    title: 'Baarika',
    category: 'Logistics / Next.js',
    tagline: 'Smart freight and transport fleet management platform',
    description:
      'Enterprise logistics management software enabling real-time cargo tracking, dynamic rate calculators, driver routing telemetry, and intuitive dashboards.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Zod'],
    image: BAARIKA,
    featured: true,
    liveUrl: 'https://darkalpha.ir',
    githubUrl: 'https://github.com/darka1pha',
    highlight: 'Enterprise Fleet Dashboard',
  },
  {
    slug: 'alphamovies',
    title: 'Alphamovies',
    category: 'Next.js',
    tagline: 'Cinematic catalog & entertainment media browser',
    description:
      'Media exploration system featuring trailer playback, categorized film reels, curation lists, and responsive touch-first carousels.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'REST API', 'Framer Motion'],
    image: ALPHAMOVIES,
    featured: false,
    liveUrl: 'https://darkalpha.ir',
    githubUrl: 'https://github.com/darka1pha',
    highlight: 'Rich Media Playback',
  },
  {
    slug: 'nobaar',
    title: 'Nobaar',
    category: 'React.js',
    tagline: 'Residential and corporate moving booking platform',
    description:
      'Interactive service booking engine with step-by-step price estimation, address geocoding, moving schedule dispatch, and SMS alerts.',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Context API'],
    image: NOBAAR,
    featured: false,
    liveUrl: 'https://darkalpha.ir',
    githubUrl: 'https://github.com/darka1pha',
    highlight: 'Interactive Booking Funnel',
  },
];
