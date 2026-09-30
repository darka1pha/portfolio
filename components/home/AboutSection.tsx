'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Terminal, Briefcase, GraduationCap } from 'lucide-react';
import PROFILE_IMAGE from '@/public/images/profile.webp';
import { FadeIn, SectionHeading } from '@/components/animations';

export default function AboutSection() {
  const highlights = [
    { label: 'Enterprise Logistics & Port Systems', desc: 'End-to-end import/export workflow & cargo tracking' },
    { label: 'Freight & Fleet Management', desc: 'Automated pricing platforms (Baarika & Nobaar)' },
    { label: 'Fintech & VOD Education', desc: 'Trading education with custom VOD streaming systems' },
    { label: '3D WebGL & Interactive Experiences', desc: 'React Three Fiber & interactive modeled assets' },
  ];

  const stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '75%', label: 'Efficiency Boost' },
    { value: '99.9%', label: 'Deployment Uptime' },
    { value: '100%', label: 'Type Safety' },
  ];

  return (
    <section className='py-16 md:py-24 relative'>
      <SectionHeading
        eyebrow='About Abolfazl'
        title='Engineering Scalable Frontends with'
        highlightText='Measurable Impact'
        description='Delivering production applications across logistics, maritime ports, freight management, fintech, and 3D web interfaces.'
      />

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center'>
        {/* Left Column: Story & Highlights */}
        <div className='lg:col-span-7 space-y-6'>
          <FadeIn delay={0.1}>
            <p className='text-zinc-200 text-base sm:text-lg leading-relaxed'>
              Hello, I&apos;m <span className='text-white font-bold'>Abolfazl Omrani</span>. I am a front-end developer with <span className='text-teal-400 font-semibold'>4+ years of professional experience</span> building scalable web applications with React, Next.js, TypeScript, and modern web technologies.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className='text-zinc-400 text-sm sm:text-base leading-relaxed'>
              My track record includes developing mission-critical systems such as port cargo workflows for <span className='text-zinc-200 font-medium'>Kaveh Port & Marine Services</span>, high-traffic freight platforms like <span className='text-zinc-200 font-medium'>Baarika.com</span> and <span className='text-zinc-200 font-medium'>Nobaar.com</span>, fintech education VOD platforms, and interactive 3D WebGL experiences with React Three Fiber.
            </p>
          </FadeIn>

          {/* Key Value Highlights */}
          <FadeIn delay={0.2}>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1'>
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className='p-3.5 rounded-xl glass-panel-subtle border border-white/5 hover:border-teal-500/30 transition-all'
                >
                  <div className='flex items-center gap-2 text-xs sm:text-sm font-semibold text-white mb-1'>
                    <CheckCircle2 size={16} className='text-teal-400 shrink-0' />
                    <span>{item.label}</span>
                  </div>
                  <p className='text-xs text-zinc-400 pl-6'>{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Metric Stats */}
          <FadeIn delay={0.25}>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-white/10'>
              {stats.map((stat, i) => (
                <div key={i} className='text-center sm:text-left'>
                  <div className='text-2xl sm:text-3xl font-extrabold text-teal-400 tracking-tight'>
                    {stat.value}
                  </div>
                  <div className='text-xs text-zinc-400 uppercase tracking-wider mt-1'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Action Link */}
          <FadeIn delay={0.3}>
            <div className='flex items-center gap-4 pt-1'>
              <Link
                href='/about'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500 text-black font-semibold text-sm hover:bg-teal-400 transition-all active:scale-95 group'
              >
                <span>View Full Career Timeline & Education</span>
                <ArrowRight
                  size={16}
                  className='group-hover:translate-x-1 transition-transform'
                />
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Clear, Full-Color Profile Picture Card */}
        <div className='lg:col-span-5 relative flex justify-center'>
          <FadeIn delay={0.2} direction='left'>
            <div className='relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/15 p-3.5 shadow-2xl group'>
              {/* Picture Container - Full color, crisp, no grayscale */}
              <div className='relative w-full h-full rounded-2xl overflow-hidden bg-zinc-900 shadow-inner'>
                <Image
                  src={PROFILE_IMAGE}
                  alt='Abolfazl Omrani - React & Next.js Developer'
                  fill
                  sizes='(max-width: 768px) 100vw, 400px'
                  className='object-cover object-top transition-transform duration-500 group-hover:scale-105'
                  priority
                />
              </div>

              {/* Clean Bottom Overlay Badge */}
              <div className='absolute bottom-6 left-6 right-6 p-3.5 rounded-xl glass-panel border border-white/20 backdrop-blur-xl shadow-xl'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h3 className='text-sm font-bold text-white'>Abolfazl Omrani</h3>
                    <p className='text-xs text-teal-400 font-mono'>React & Next.js Developer</p>
                  </div>
                  <div className='w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300'>
                    <Terminal size={16} />
                  </div>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className='absolute -top-2 -right-2 w-14 h-14 rounded-full border-2 border-teal-500/40 pointer-events-none' />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
