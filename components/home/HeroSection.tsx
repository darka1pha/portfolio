'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Code2, Sparkles, Box, ShieldCheck, Github, Linkedin, Briefcase } from 'lucide-react';
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
    <section className='relative min-h-[calc(88vh-5rem)] flex flex-col justify-center items-center text-center py-10 md:py-16 overflow-hidden'>
      {/* Subtle floating radial highlight */}
      <div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none -z-10'
        aria-hidden='true'
      />

      <div className='max-w-4xl mx-auto flex flex-col items-center'>
        {/* Prominent Profile Picture with Glowing Ring & Status Badge */}
        <FadeIn delay={0.05} direction='down'>
          <div className='relative mb-6 group'>
            {/* Ambient pulsing ring */}
            <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-600 opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-pulse' />

            {/* Profile Avatar Frame */}
            <div className='relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-teal-400/80 shadow-2xl bg-zinc-900'>
              <Image
                src={PROFILE_IMAGE}
                alt='Abolfazl Omrani - Front-end Developer'
                fill
                sizes='150px'
                className='object-cover object-top transition-transform duration-500 group-hover:scale-105'
                priority
              />
            </div>

            {/* Online / Available Status Indicator Dot */}
            <div
              className='absolute bottom-1 right-1 sm:bottom-2 sm:right-2 flex items-center justify-center p-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20'
              title='Available for Work'
            >
              <span className='relative flex h-3 w-3 sm:h-3.5 sm:w-3.5'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75' />
                <span className='relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-emerald-500' />
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Identity & Status Pill */}
        <FadeIn delay={0.1} direction='down'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-500/10 text-teal-300 border border-teal-500/25 mb-6 shadow-sm'>
            <Briefcase size={13} className='text-teal-400' />
            <span>{PERSONAL_INFO.name} — React & Next.js Developer</span>
          </div>
        </FadeIn>

        {/* Hero Headline */}
        <h1 className='text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]'>
          <TextReveal
            text='Building Scalable Web Applications & Immersive Digital Experiences'
            highlightWords={['Scalable', 'Immersive', 'Applications']}
          />
        </h1>

        {/* Subtitle from Resume */}
        <FadeIn delay={0.2}>
          <p className='text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal'>
            Front-end developer with <span className='text-white font-semibold'>4+ years of experience</span> building scalable web applications with React, Next.js, and TypeScript. Delivering products across logistics, freight management, fintech, and 3D web interfaces.
          </p>
        </FadeIn>

        {/* Action CTAs */}
        <FadeIn delay={0.3}>
          <div className='flex flex-wrap items-center justify-center gap-4 mb-10'>
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

            {/* Quick Social Icons */}
            <div className='flex items-center gap-2 pl-2'>
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

        {/* Tech Stack Pills Bar */}
        <FadeIn delay={0.4}>
          <div className='flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-4 border-t border-white/5 max-w-2xl mx-auto'>
            <span className='text-xs uppercase tracking-widest text-zinc-500 font-semibold mr-1'>
              Tech Stack:
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

      {/* Gentle Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className='mt-12 hidden sm:flex flex-col items-center gap-2 text-zinc-500 text-xs tracking-widest uppercase'
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
