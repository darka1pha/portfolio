'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  Code2,
  Sparkles,
  Box,
  ShieldCheck,
  Github,
  Linkedin,
  Briefcase,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { FadeIn, TextReveal } from '@/components/animations';
import { PERSONAL_INFO } from '@/lib/constants/navigation';
import PROFILE_IMAGE from '@/public/images/profile.webp';

export default function HeroSection() {
  const techPills = [
    { name: 'Next.js 15', icon: Code2 },
    { name: 'React 19', icon: Sparkles },
    { name: 'TypeScript', icon: ShieldCheck },
    { name: 'React Three Fiber', icon: Box },
    { name: 'Tailwind CSS', icon: Sparkles },
  ];

  return (
    <section className='relative min-h-[calc(90vh-5rem)] flex flex-col justify-center py-8 md:py-16 overflow-hidden'>
      {/* Ambient background glow */}
      <div
        className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none -z-10'
        aria-hidden='true'
      />

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center'>
        {/* Left Column: Text & CTAs */}
        <div className='lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left'>
          {/* Identity & Status Pill */}
          <FadeIn delay={0.05} animateDirectly>
            <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-500/10 text-teal-300 border border-teal-500/25 mb-6 shadow-sm'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75' />
                <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-400' />
              </span>
              <span>{PERSONAL_INFO.name} — React & Next.js Developer</span>
            </div>
          </FadeIn>

          {/* Headline */}
          <h1 className='text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]'>
            <TextReveal
              text='Building Scalable Web Applications & Immersive Digital Experiences'
              highlightWords={['Scalable', 'Immersive', 'Applications']}
            />
          </h1>

          {/* Bio from Resume */}
          <FadeIn delay={0.15} animateDirectly>
            <p className='text-base sm:text-lg text-zinc-300 max-w-2xl mb-8 leading-relaxed font-normal'>
              Front-end developer with <span className='text-white font-semibold'>4+ years of experience</span> building scalable web applications with React, Next.js, and TypeScript. Delivered high-impact products across logistics, freight management, fintech, and 3D web interfaces.
            </p>
          </FadeIn>

          {/* Action CTAs */}
          <FadeIn delay={0.2} animateDirectly>
            <div className='flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8'>
              <Link
                href='/works'
                className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal-500 text-black font-bold text-sm tracking-wide hover:bg-teal-400 transition-all hover:shadow-lg hover:shadow-teal-500/25 active:scale-95 group'
              >
                <span>EXPLORE WORKS</span>
                <ArrowRight
                  size={18}
                  className='group-hover:translate-x-1 transition-transform'
                />
              </Link>

              <Link
                href='/contact'
                className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-panel text-zinc-200 font-semibold text-sm hover:text-white hover:border-white/20 transition-all active:scale-95'
              >
                <span>GET IN TOUCH</span>
              </Link>

              {/* Social icons */}
              <div className='flex items-center gap-2 pl-1'>
                <a
                  href='https://github.com/darka1pha'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 rounded-full glass-panel-subtle text-zinc-400 hover:text-white hover:border-teal-500/30 transition-colors'
                  aria-label='GitHub Profile'
                >
                  <Github size={18} />
                </a>
                <a
                  href='https://www.linkedin.com/in/abolfazl-omrani-3324b1202/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 rounded-full glass-panel-subtle text-zinc-400 hover:text-white hover:border-teal-500/30 transition-colors'
                  aria-label='LinkedIn Profile'
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Tech Stack Pills */}
          <FadeIn delay={0.25} animateDirectly>
            <div className='flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-4 border-t border-white/5'>
              <span className='text-xs uppercase tracking-widest text-zinc-500 font-semibold mr-1'>
                Core Stack:
              </span>
              {techPills.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel-subtle text-xs text-zinc-300 font-medium hover:text-white hover:border-teal-500/30 transition-all'
                >
                  <Icon size={13} className='text-teal-400' />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Prominent Portrait Presentation */}
        <div className='lg:col-span-5 flex justify-center order-first lg:order-last'>
          <FadeIn delay={0.1} direction='left' animateDirectly>
            <div className='relative w-full max-w-[320px] sm:max-w-[380px] group'>
              {/* Outer Glowing Halo */}
              <div className='absolute -inset-1.5 rounded-[32px] bg-gradient-to-tr from-teal-500/30 via-emerald-400/20 to-teal-600/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />

              {/* Card Container */}
              <div className='relative rounded-3xl overflow-hidden glass-panel border border-white/20 p-3 sm:p-4 shadow-2xl bg-zinc-950/80'>
                {/* Photo Frame */}
                <div className='relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 shadow-inner'>
                  <Image
                    src={PROFILE_IMAGE}
                    alt='Abolfazl Omrani - Front-end Developer'
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
                        Abolfazl Omrani
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
                    <span>Bandar Abbas / Tehran, Iran</span>
                  </div>
                </div>

                {/* Floating Experience Chip */}
                <div className='absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold bg-black/85 backdrop-blur-md text-teal-300 border border-teal-500/40 shadow-lg'>
                  4+ Years Exp.
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Gentle Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className='mt-10 hidden lg:flex flex-col items-center gap-2 text-zinc-500 text-xs tracking-widest uppercase'
      >
        <span>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className='text-teal-400' />
        </motion.div>
      </motion.div>
    </section>
  );
}
