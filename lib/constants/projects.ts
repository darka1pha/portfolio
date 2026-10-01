import { StaticImageData } from 'next/image';
import NOBAAR from '../../public/images/projects/nobaar.webp';
import BAARIKA from '../../public/images/projects/baarika.webp';
import MOOVIE from '../../public/images/projects/moovie.webp';
import ATMOS from '../../public/images/projects/atmos.webp';
import KRIST from '../../public/images/projects/krist.webp';
import PORSAN from '../../public/images/projects/porsan.webp';
import TICKETING from '../../public/images/projects/ticketing.webp';
import SHIPPING from '../../public/images/projects/shipping.webp';
import LUBITAL from '../../public/images/projects/lubital.webp';
import DIAMOND from '../../public/images/projects/diamond.webp';

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
    slug: 'diamond',
    title: 'Diamond',
    category: 'Logistics / Next.js 16',
    tagline: 'Enterprise port warehousing, cargo depot tracking & container stuffing platform',
    description:
      'Full-scale port warehousing and cargo depot management platform engineered for Almas Tejarat Tav to orchestrate end-to-end bulk cargo intake, weighbridge scaling, moisture tracking, depot code allocation, container stuffing, VGM reporting, and real-time client self-service inventory tracking.',
    featured: true,
    image: DIAMOND,
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'React 19', 'Zustand', 'Recharts', 'React Hook Form', 'Zod'],
    highlight: 'Port Depo & Warehousing Engine',
  },
  {
    slug: 'railway',
    title: 'Railway Shipping',
    category: 'Logistics / Next.js',
    tagline: 'Enterprise bulk cargo export and railway freight logistics management system',
    description:
      'Mission-critical railway logistics platform engineered for Kaveh Port & Marine Services to manage large-scale bulk cargo export workflows, streamline rail freight manifests, automate dispatch scheduling, and enforce rigorous data validation.',
    featured: true,
    image: SHIPPING,
    tags: ['Next.js', 'TypeScript', 'MUI', 'React Hook Form', 'Zod', 'REST APIs'],
    liveUrl: 'https://rail.kms-live.com',
    highlight: 'Enterprise Rail Logistics',
  },
  {
    slug: 'ticketing',
    title: 'Ticketing',
    category: 'Next.js 16 / PWA',
    tagline: 'Real-time enterprise issue tracking & PWA incident management system',
    description:
      'Comprehensive internal company support and incident management suite built with Next.js 16 and PWA offline capabilities, delivering real-time ticket dispatching, instant push notifications, multi-tiered escalation workflows, and seamless team collaboration.',
    featured: true,
    image: TICKETING,
    tags: ['Next.js 16', 'Shadcn UI', 'Tailwind CSS', 'PWA', 'WebSockets', 'TypeScript'],
    liveUrl: 'https://ticketing.kms-live.com',
    highlight: 'Real-Time PWA & Dispatch',
  },
  {
    slug: 'porsan',
    title: 'Porsan',
    category: 'Next.js / Q&A Platform',
    tagline: 'Collaborative knowledge-sharing and expert consultation platform',
    description:
      'Modern community inquiry and consultation portal enabling users to submit public and private questions, connect with verified domain experts, explore categorized solutions with real-time search, and experience rapid optimistic state caching powered by TanStack Query.',
    featured: true,
    image: PORSAN,
    tags: ['Next.js', 'TanStack Query', 'MUI', 'React Hook Form', 'TypeScript', 'Zod'],
    liveUrl: 'https://porsan.ir',
    highlight: 'Interactive Q&A Engine',
  },
  {
    slug: 'lubital',
    title: 'Lubital Bitumen',
    category: 'Next.js / Global Commerce',
    tagline: 'International bitumen export and commodity trading platform',
    description:
      'Multilingual international commodity export platform engineered for global bitumen trade across Asian, African, and Middle Eastern markets, featuring multi-currency product catalogs, technical grade specifications, international shipping calculators, and dark/light theme localization.',
    featured: true,
    image: LUBITAL,
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Radix UI', 'TypeScript', 'i18n Localization'],
    liveUrl: 'https://lubitalgc.com',
    highlight: 'Global Export & i18n Platform',
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
    liveUrl: 'https://baarika.com',
    highlight: 'Enterprise Fleet Dashboard',
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
    liveUrl: 'https://nobaar.com',
    highlight: 'Interactive Booking Funnel',
  },
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
    liveUrl: 'https://projects.darkalpha.ir/atmos',
    highlight: '60 FPS WebGL Engine',
  },
  {
    slug: 'moovie',
    title: 'Moovie',
    category: 'Next.js',
    tagline: 'Next-gen cinematic streaming and discovery portal',
    description:
      'High-performance entertainment discovery engine built on Next.js 15 App Router and React Server Components with instant search, debounce filtering, and streaming metadata.',
    tags: ['Next.js', 'React', 'Server Components', 'TypeScript', 'Tailwind CSS'],
    image: MOOVIE,
    featured: true,
    liveUrl: 'https://moovie.darkalpha.ir',
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
    liveUrl: 'https://krist.vcercel.app',
    highlight: 'Real-time Supabase Database',
  }
];
