'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Terminal, Cpu, ShieldCheck, Code2 } from 'lucide-react';
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

        {/* Right Column: Engineering Architecture & Technical Console */}
        <div className='lg:col-span-5 relative flex justify-center'>
          <FadeIn delay={0.15} direction='left'>
            <div className='relative w-full max-w-[340px] sm:max-w-[420px] rounded-3xl overflow-hidden glass-panel border border-white/20 p-4 sm:p-5 shadow-2xl bg-zinc-950/90 group'>
              {/* Outer halo */}
              <div className='absolute -inset-1 rounded-3xl bg-teal-500/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none' />

              {/* IDE / Terminal Window Header */}
              <div className='flex items-center justify-between pb-3.5 mb-4 border-b border-white/10'>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-rose-500/80' />
                  <div className='w-3 h-3 rounded-full bg-amber-500/80' />
                  <div className='w-3 h-3 rounded-full bg-emerald-500/80' />
                  <span className='ml-2 text-xs font-mono text-zinc-400'>
                    abolfazl.profile.ts
                  </span>
                </div>
                <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'>
                  <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
                  <span>Production Live</span>
                </div>
              </div>

              {/* Code / Architecture Display */}
              <div className='relative font-mono text-xs leading-relaxed rounded-2xl bg-black/60 p-4 border border-white/5 space-y-1.5 overflow-hidden'>
                <div className='text-zinc-500'>
                  <span className='text-teal-400'>const</span>{' '}
                  <span className='text-yellow-300'>engineer</span>:{' '}
                  <span className='text-emerald-400'>SystemArchitect</span> = &#123;
                </div>
                
                <div className='pl-4 space-y-1 text-zinc-300'>
                  <div>
                    <span className='text-zinc-400'>name:</span>{' '}
                    <span className='text-teal-300'>&apos;Abolfazl Omrani&apos;</span>,
                  </div>
                  <div>
                    <span className='text-zinc-400'>domain:</span>{' '}
                    <span className='text-teal-300'>&apos;Port Logistics & Rail Systems&apos;</span>,
                  </div>
                  <div>
                    <span className='text-zinc-400'>stack:</span> [
                    <span className='text-emerald-300'>&apos;Next.js 16+&apos;</span>,{' '}
                    <span className='text-emerald-300'>&apos;React 19&apos;</span>,{' '}
                    <span className='text-emerald-300'>&apos;TypeScript&apos;</span>
                    ],
                  </div>
                  <div>
                    <span className='text-zinc-400'>architecture:</span> [
                    <span className='text-teal-200'>&apos;Server Actions&apos;</span>,{' '}
                    <span className='text-teal-200'>&apos;PWA&apos;</span>,{' '}
                    <span className='text-teal-200'>&apos;Three.js&apos;</span>
                    ],
                  </div>
                  <div>
                    <span className='text-zinc-400'>principles:</span> &#123;
                  </div>
                  <div className='pl-4 text-zinc-400'>
                    typeSafety: <span className='text-emerald-400'>&apos;100% Strict&apos;</span>,<br />
                    telemetry: <span className='text-emerald-400'>&apos;Real-Time Sockets&apos;</span>,<br />
                    performance: <span className='text-emerald-400'>&apos;&lt; 1.2s LCP&apos;</span>,
                  </div>
                  <div>&#125;,</div>
                </div>

                <div className='text-zinc-500'>&#125;;</div>
              </div>

              {/* Live Capabilities Badges */}
              <div className='grid grid-cols-2 gap-2 mt-4'>
                <div className='p-2.5 rounded-xl glass-panel-subtle border border-white/5'>
                  <div className='flex items-center gap-1.5 text-[11px] font-semibold text-zinc-300'>
                    <Cpu size={13} className='text-teal-400' />
                    <span>Core Focus</span>
                  </div>
                  <p className='text-[10px] text-zinc-400 mt-0.5'>
                    Industrial Systems & Freight
                  </p>
                </div>

                <div className='p-2.5 rounded-xl glass-panel-subtle border border-white/5'>
                  <div className='flex items-center gap-1.5 text-[11px] font-semibold text-zinc-300'>
                    <ShieldCheck size={13} className='text-emerald-400' />
                    <span>Standards</span>
                  </div>
                  <p className='text-[10px] text-zinc-400 mt-0.5'>
                    Clean Code & Zod Validation
                  </p>
                </div>
              </div>

              {/* Status Footer */}
              <div className='mt-3.5 p-3 rounded-xl glass-panel-subtle border border-white/10 flex items-center justify-between text-xs'>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 rounded-full bg-teal-400 animate-pulse' />
                  <span className='font-mono text-zinc-300 text-[11px]'>
                    Kaveh Port & Marine Services
                  </span>
                </div>
                <span className='text-[10px] font-mono text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20'>
                  Active
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
