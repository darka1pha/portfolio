'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/constants/navigation';
import PROFILE_IMAGE from '@/public/images/profile.webp';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className='container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between'>
          {/* Logo / Brand with Profile Picture Avatar */}
          <Link
            href='/'
            className='group flex items-center gap-2.5 font-bold tracking-tight text-white'
          >
            <div className='relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-teal-400/60 shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform bg-zinc-900 shrink-0'>
              <Image
                src={PROFILE_IMAGE}
                alt='Abolfazl Omrani'
                fill
                sizes='40px'
                className='object-cover object-top'
                priority
              />
            </div>
            <div className='flex flex-col'>
              <span className='text-sm sm:text-base tracking-wide font-bold group-hover:text-teal-400 transition-colors leading-none'>
                ABOLFAZL <span className='text-teal-400 font-extrabold'>OMRANI</span>
              </span>
              <span className='text-[10px] text-zinc-400 uppercase tracking-widest leading-tight mt-0.5'>
                React & Next.js Developer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav
            aria-label='Main Navigation'
            className='hidden md:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border border-white/10'
          >
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 rounded-full ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId='navbar-indicator'
                      className='absolute inset-0 bg-teal-500/20 border border-teal-500/40 rounded-full -z-10'
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action / Status Pill */}
          <div className='hidden lg:flex items-center gap-4'>
            <div className='flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/5 text-xs text-zinc-300'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75' />
                <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500' />
              </span>
              <span>Available for Work</span>
            </div>

            <Link
              href='/contact'
              className='inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-teal-500 text-black hover:bg-teal-400 transition-all hover:shadow-lg hover:shadow-teal-500/25 active:scale-95'
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 border border-white/10 transition-colors'
            aria-label='Toggle navigation menu'
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 z-30 bg-black/90 backdrop-blur-xl md:hidden flex flex-col pt-24 pb-8 px-6 justify-between'
          >
            {/* Status indicator with profile avatar */}
            <div className='flex items-center justify-between pb-6 border-b border-white/10'>
              <div className='flex items-center gap-3'>
                <div className='relative w-11 h-11 rounded-full overflow-hidden border border-teal-400/60 shadow-md'>
                  <Image
                    src={PROFILE_IMAGE}
                    alt='Abolfazl Omrani'
                    fill
                    sizes='44px'
                    className='object-cover object-top'
                  />
                </div>
                <div>
                  <div className='text-sm font-bold text-white'>Abolfazl Omrani</div>
                  <div className='flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium'>
                    <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
                    <span>Available for work</span>
                  </div>
                </div>
              </div>
              <span className='text-xs text-zinc-400 font-mono'>Iran (UTC+3:30)</span>
            </div>

            {/* Nav links */}
            <motion.nav
              initial='closed'
              animate='open'
              variants={{
                open: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
              className='flex flex-col gap-3 my-auto'
            >
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <motion.div
                    key={href}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 15 },
                    }}
                  >
                    <Link
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3.5 rounded-xl font-bold text-xl sm:text-2xl transition-all ${
                        isActive
                          ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
                          : 'text-zinc-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{label}</span>
                      <ArrowUpRight
                        size={18}
                        className={isActive ? 'text-teal-400' : 'text-zinc-500'}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            {/* Bottom info & socials */}
            <div className='pt-6 border-t border-white/10 flex flex-col gap-4'>
              <div className='flex flex-wrap gap-2.5'>
                {SOCIAL_LINKS.map(({ platform, url }) => (
                  <a
                    key={platform}
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-teal-400 hover:border-teal-500/30 transition-colors'
                  >
                    {platform}
                  </a>
                ))}
              </div>
              <p className='text-xs text-zinc-500'>
                {PERSONAL_INFO.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
