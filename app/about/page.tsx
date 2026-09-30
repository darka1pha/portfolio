'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  Instagram,
} from 'lucide-react';
import PROFILE_IMAGE from '@/public/images/profile.webp';
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/constants/navigation';
import { EXPERIENCES, EDUCATION } from '@/lib/constants/experience';
import { SKILL_CATEGORIES } from '@/lib/constants/skills';
import { FadeIn, SectionHeading, CardSpotlight } from '@/components/animations';

const socialIcons: Record<string, React.ElementType> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  'Twitter / X': Twitter,
  Telegram: Send,
  Instagram: Instagram,
};

export default function AboutPage() {
  const stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '75%', label: 'Efficiency Improvement' },
    { value: '99.9%', label: 'Deployment Uptime' },
    { value: '100%', label: 'Type-Safe Codebases' },
  ];

  const philosophies = [
    {
      title: 'Scalability & Performance',
      desc: 'Optimizing page-load speeds with Next.js Server Actions, smart caching strategies, code splitting, and lazy loading.',
      icon: Cpu,
    },
    {
      title: 'Workflow Automation',
      desc: 'Building automated pricing, KYC verification, and gate control workflows that eliminate administrative overhead.',
      icon: Layers,
    },
    {
      title: 'Interactive 3D & Geospatial',
      desc: 'Integrating React Three Fiber 3D simulations and Mapbox/Leaflet interactive mapping into intuitive interfaces.',
      icon: Sparkles,
    },
  ];

  return (
    <div className='py-6 sm:py-10 space-y-16 sm:space-y-24'>
      {/* Intro Hero Section with Prominent Profile Picture */}
      <section>
        <SectionHeading
          eyebrow='About Abolfazl'
          title='React Developer & Front-end'
          highlightText='Architect'
          description='4+ years of experience building scalable web applications with React, Next.js, TypeScript, and modern web technologies.'
        />

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center'>
          {/* Portrait Column - Full color, prominent, immediately visible */}
          <div className='lg:col-span-5 flex justify-center order-first lg:order-first'>
            <FadeIn delay={0.05} direction='right' animateDirectly>
              <div className='relative w-full max-w-[320px] sm:max-w-[380px] rounded-3xl overflow-hidden glass-panel border border-white/20 p-3 sm:p-4 shadow-2xl bg-zinc-950/80 group'>
                {/* Glowing halo */}
                <div className='absolute -inset-1 rounded-3xl bg-teal-500/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none' />

                {/* Picture Frame with direct aspect-ratio */}
                <div className='relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 shadow-inner'>
                  <Image
                    src={PROFILE_IMAGE}
                    alt='Abolfazl Omrani - React & Next.js Developer'
                    fill
                    sizes='(max-width: 768px) 320px, 380px'
                    className='object-cover object-top transition-transform duration-700 group-hover:scale-105'
                    priority
                  />
                </div>

                {/* Info Bar at Bottom of Card */}
                <div className='mt-3.5 p-3.5 rounded-xl glass-panel-subtle border border-white/10'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <h3 className='text-sm sm:text-base font-bold text-white'>
                        {PERSONAL_INFO.name}
                      </h3>
                      <p className='text-xs text-teal-400 font-mono'>
                        React Developer | Next.js
                      </p>
                    </div>
                    <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'>
                      <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
                      <span>Available</span>
                    </span>
                  </div>

                  <div className='flex items-center gap-1.5 mt-2 pt-2 border-t border-white/5 text-[11px] text-zinc-400'>
                    <MapPin size={12} className='text-zinc-500' />
                    <span>Kerman / Tehran / Bandar Abbas, Iran</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Narrative Story from Resume */}
          <div className='lg:col-span-7 space-y-5'>
            <FadeIn delay={0.1} animateDirectly>
              <h3 className='text-2xl sm:text-3xl font-bold text-white leading-snug'>
                Delivering high-impact products across logistics, freight management, fintech, and e-commerce.
              </h3>
            </FadeIn>

            <FadeIn delay={0.15} animateDirectly>
              <p className='text-zinc-200 text-sm sm:text-base leading-relaxed'>
                I am a front-end developer with <span className='text-teal-400 font-semibold'>4+ years of professional experience</span> engineering scalable web applications. With a strong focus on performance, SEO, and user experience, I build solutions that solve complex operational challenges.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} animateDirectly>
              <p className='text-zinc-400 text-sm sm:text-base leading-relaxed'>
                Currently developing marine cargo import/export workflows and gate control systems at <span className='text-white font-medium'>Kaveh Port & Marine Services</span>. Previously led development of automated freight platforms (<span className='text-white font-medium'>Baarika.com</span> & <span className='text-white font-medium'>Nobaar.com</span>), financial trading education platforms, and custom 3D web applications with React Three Fiber.
              </p>
            </FadeIn>

            {/* Stats Bar */}
            <FadeIn delay={0.25} animateDirectly>
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-white/10'>
                {stats.map((stat, i) => (
                  <div key={i} className='text-center sm:text-left'>
                    <div className='text-2xl sm:text-3xl font-extrabold text-teal-400'>
                      {stat.value}
                    </div>
                    <div className='text-[11px] text-zinc-400 uppercase tracking-wider mt-1'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience Journey (All roles from Resume) */}
      <section>
        <SectionHeading
          eyebrow='Work History'
          title='Professional Experience &'
          highlightText='Track Record'
          description='Detailed breakdown of production systems engineered, companies contributed to, and business results achieved.'
        />

        <div className='space-y-6 max-w-4xl'>
          {EXPERIENCES.map((exp, index) => (
            <FadeIn key={index} delay={0.08 * index}>
              <CardSpotlight className='p-6 sm:p-8 border border-white/10 hover:border-teal-500/30 transition-all'>
                <div className='flex flex-wrap items-center justify-between gap-2 mb-3'>
                  <div className='flex items-center gap-2'>
                    <span className='px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/25 flex items-center gap-1.5'>
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span className='text-xs text-zinc-400 flex items-center gap-1'>
                      <MapPin size={12} className='text-zinc-500' />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <h3 className='text-xl sm:text-2xl font-bold text-white mb-1'>
                  {exp.role}
                </h3>
                <div className='text-sm text-teal-400 font-semibold mb-3'>
                  {exp.company}
                </div>

                <p className='text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5'>
                  {exp.description}
                </p>

                {/* Achievements from Resume */}
                <div className='space-y-2.5 mb-6'>
                  {exp.achievements.map((ach, achIndex) => (
                    <div
                      key={achIndex}
                      className='flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed'
                    >
                      <CheckCircle2
                        size={15}
                        className='text-teal-400 shrink-0 mt-0.5'
                      />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className='flex flex-wrap gap-1.5 pt-4 border-t border-white/5'>
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className='px-2.5 py-0.5 rounded text-[11px] font-medium bg-zinc-900 text-zinc-300 border border-white/5'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardSpotlight>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Education Section from Resume */}
      <section>
        <SectionHeading
          eyebrow='Academic Background'
          title='Education &'
          highlightText='Qualifications'
          description='Formal software engineering foundation.'
        />

        <FadeIn delay={0.1}>
          <div className='max-w-4xl'>
            <CardSpotlight className='p-6 sm:p-8 border border-white/10 hover:border-teal-500/30 transition-all'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400 shrink-0'>
                  <GraduationCap size={24} />
                </div>
                <div className='flex-1'>
                  <div className='flex flex-wrap items-center justify-between gap-2 mb-1'>
                    <span className='px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/25'>
                      {EDUCATION.period}
                    </span>
                    <span className='text-xs text-zinc-400'>
                      GPA: {EDUCATION.gpa}
                    </span>
                  </div>
                  <h3 className='text-xl font-bold text-white mb-1'>
                    {EDUCATION.degree}
                  </h3>
                  <div className='text-sm text-teal-400 font-medium mb-2'>
                    {EDUCATION.university} — {EDUCATION.location}
                  </div>
                  <p className='text-xs sm:text-sm text-zinc-400'>
                    Comprehensive curriculum covering software architecture, data structures, algorithms, database design, and systems engineering.
                  </p>
                </div>
              </div>
            </CardSpotlight>
          </div>
        </FadeIn>
      </section>

      {/* Engineering Principles */}
      <section>
        <SectionHeading
          eyebrow='Guiding Principles'
          title='How I Approach'
          highlightText='Product Engineering'
          description='Three core pillars guiding my architectural decisions and day-to-day development.'
        />

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {philosophies.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={index} delay={0.1 * index}>
                <CardSpotlight className='p-6 sm:p-8 h-full border border-white/10 hover:border-teal-500/30'>
                  <div className='w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400 mb-5'>
                    <Icon size={24} />
                  </div>
                  <h3 className='text-lg font-bold text-white mb-2'>{item.title}</h3>
                  <p className='text-xs sm:text-sm text-zinc-400 leading-relaxed'>
                    {item.desc}
                  </p>
                </CardSpotlight>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Social / Connect Grid */}
      <section>
        <SectionHeading
          eyebrow='Network & Socials'
          title='Connect Across the'
          highlightText='Digital Ecosystem'
          description='Reach out via professional channels, review code on GitHub, or initiate a conversation.'
        />

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {SOCIAL_LINKS.map(({ platform, url, username }) => {
            const Icon = socialIcons[platform] || Sparkles;
            return (
              <FadeIn key={platform} delay={0.05}>
                <a
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block'
                >
                  <CardSpotlight className='p-5 border border-white/10 hover:border-teal-500/40 transition-all flex items-center justify-between group'>
                    <div className='flex items-center gap-3.5'>
                      <div className='w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-teal-400 group-hover:border-teal-500/30 transition-colors'>
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className='text-sm font-bold text-white group-hover:text-teal-400 transition-colors'>
                          {platform}
                        </div>
                        <div className='text-xs text-zinc-400 font-mono'>
                          {username}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className='text-zinc-500 group-hover:text-teal-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all'
                    />
                  </CardSpotlight>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Final Action CTA */}
      <FadeIn delay={0.2} className='text-center pt-6'>
        <div className='glass-panel p-8 sm:p-12 rounded-3xl max-w-3xl mx-auto border border-white/10'>
          <h3 className='text-2xl sm:text-3xl font-bold text-white mb-3'>
            Looking for a skilled React & Next.js Developer?
          </h3>
          <p className='text-zinc-400 text-sm sm:text-base max-w-lg mx-auto mb-6'>
            I am currently open to high-impact opportunities, technical consulting, and ambitious production projects.
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-teal-500 text-black font-bold text-sm hover:bg-teal-400 transition-all active:scale-95'
          >
            <span>Let&apos;s Start a Conversation</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
