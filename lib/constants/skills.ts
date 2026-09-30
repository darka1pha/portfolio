export interface SkillItem {
  name: string;
  level: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  eyebrow: string;
  description: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    eyebrow: 'Core Architecture',
    description:
      'Designing robust, type-safe web applications with modern state management, server-side rendering, and performant data fetching.',
    skills: [
      { name: 'React & Next.js', level: 'Expert', description: 'Server Components, SSR, Server Actions, App Router' },
      { name: 'TypeScript & JavaScript', level: 'Expert', description: 'Strict typing, modern ESNext patterns, generics' },
      { name: 'React Query (TanStack)', level: 'Expert', description: 'Async caching, background refetching, mutations' },
      { name: 'Redux Toolkit & Zustand', level: 'Advanced', description: 'Global and localized scalable state management' },
    ],
  },
  {
    title: 'UI Engineering & Motion',
    eyebrow: 'Design & Interaction',
    description:
      'Building accessible, pixel-perfect user interfaces, fluid animations, and robust client validation systems.',
    skills: [
      { name: 'Tailwind CSS', level: 'Expert', description: 'Utility-first tokens, responsive design, dark mode' },
      { name: 'Framer Motion', level: 'Advanced', description: 'Micro-interactions, layout transitions, spring physics' },
      { name: 'React Hook Form, Zod & Yup', level: 'Expert', description: 'Performant schema-driven form validation' },
      { name: 'Material UI & Chakra UI', level: 'Advanced', description: 'Component design systems and theming' },
    ],
  },
  {
    title: 'Platform, 3D & Geospatial',
    eyebrow: 'APIs & Immersive Web',
    description:
      'Integrating 3D canvases, location telemetry, geospatial mapping, and cloud persistence.',
    skills: [
      { name: 'React Three Fiber & Three.js', level: 'Advanced', description: 'Interactive 3D scenes, modeled assets & animations' },
      { name: 'Mapbox & Leaflet', level: 'Advanced', description: 'Geospatial mapping, route visualization & geocoding' },
      { name: 'Supabase & REST APIs', level: 'Advanced', description: 'Database triggers, auth, real-time channels & endpoints' },
      { name: 'Docker & Nginx', level: 'Proficient', description: 'Containerized deployments and reverse proxy setups' },
    ],
  },
];
