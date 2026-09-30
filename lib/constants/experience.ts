export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '06/2024 — Present',
    role: 'React.Js Developer',
    company: 'Kaveh Port & Marine Services',
    location: 'Bandar Abbas, Iran',
    description:
      'Architecting and developing enterprise logistics, gate control, and import/export cargo workflow systems for marine port operations.',
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'REST APIs',
      'RBAC',
      'Tailwind CSS',
    ],
    achievements: [
      'Engineered an end-to-end import and export workflow system with cargo tracking through vessel loading, improving operational visibility and increasing process efficiency by 75%.',
      'Developed modules for gate control, invoicing, warehouse receipts, and loading permits, reducing manual administrative work by 20+ hours per week.',
      'Built a KYC system for cargo owners and agents, enabling remote service requests and seamlessly processing 100+ document verifications monthly.',
      'Developed an export and import order management system with role-based access control, order tracking, contract management, warehouse operations, and cargo moisture monitoring for accurate dry-weight calculation.',
    ],
  },
  {
    period: '11/2021 — 11/2024',
    role: 'React Developer',
    company: 'BerNet',
    location: 'Tehran, Iran',
    description:
      'Led frontend development across high-traffic freight portals, logistics platforms, educational VOD platforms, and fintech applications.',
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Mapbox',
      'Leaflet',
      'React Query',
      'SEO',
    ],
    achievements: [
      'Led development of Baarika.com, a freight platform that increased engagement by 40% through automated pricing and dedicated dashboards for individual and corporate users.',
      'Refactored Nobaar.com, increasing user engagement by 30% with interactive maps and dynamic pricing based on move details.',
      'Built a financial trading education platform with a custom VOD system, creating a smoother learning experience for users.',
      'Developed Porsan.ir, a Q&A platform optimized for SEO, utilizing lazy loading and code splitting to improve page performance scores by 20 points.',
      'Built an investment and funding platform with role-based access control, streamlining application workflows and reducing funding review times by 20%.',
    ],
  },
  {
    period: '11/2021 — 11/2022',
    role: 'React Developer',
    company: 'Freelancer',
    location: 'Remote',
    description:
      'Delivered custom Next.js web applications, 3D WebGL user interfaces, and cloud database optimizations for international clients.',
    technologies: [
      'Next.js',
      'React Three Fiber',
      'Supabase',
      'Prisma',
      'Docker Compose',
      'Nginx',
      'Tailwind CSS',
      'React Query',
    ],
    achievements: [
      'Built a multilingual corporate and product management platform for an international bitumen exporter using Next.js, with dynamic product catalogs, pricing calculators, bilingual support, and a role-based admin dashboard.',
      'Created Moovie, a movie and TV discovery app using the MovieDB API, React Query, and Tailwind CSS to deliver a fast, interactive browsing experience.',
      'Researched and implemented Supabase triggers, Next.js Server Actions, and React cache strategies, improving page-load speed by 20% and strengthening SEO through metadata optimization.',
      'Developed interactive 3D web experiences with React Three Fiber, integrating custom character animations and modeled assets into engaging user interfaces.',
      'Managed application infrastructure and database configuration with Docker Compose, Nginx, and Prisma schemas, supporting scalable Next.js deployments with 99.9% uptime.',
    ],
  },
  {
    period: '06/2020 — 02/2021',
    role: 'React Developer',
    company: 'VARKnow',
    location: 'Tehran, Iran',
    description:
      'Contributed to core product features in an agile engineering team, establishing modern frontend workflows and data-fetching standards.',
    technologies: ['React.js', 'TypeScript', 'Next.js', 'React Query', 'JavaScript'],
    achievements: [
      'Strengthened React.js expertise while contributing in an agile development environment.',
      'Introduced TypeScript, Next.js, and React Query across projects to improve development efficiency and data-fetching patterns.',
    ],
  },
];

export const EDUCATION = {
  degree: 'BENG in Software Engineering',
  university: 'Shahid Bahonar University',
  location: 'Kerman, Iran',
  period: '09/2017 — 10/2021',
  gpa: '16 / 20',
};
