'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Copy, Check, Heart, Mail, Sparkles } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/constants/navigation';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  return (
    <footer className='border-t border-white/10 bg-[#07080c] relative overflow-hidden mt-24'>
      {/* Ambient background glow */}
      <div
        className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none'
        aria-hidden='true'
      />

      <div className='container mx-auto px-4 sm:px-6 max-w-7xl py-16 lg:py-20 relative z-10'>
        {/* Top Call to Action Banner */}
        <div className='glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 mb-16 border border-white/10 relative overflow-hidden'>
          <div className='absolute -right-12 -top-12 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none' />

          <div className='max-w-2xl'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-6'>
              <Sparkles size={13} />
              <span>Let&apos;s Create Something Great</span>
            </div>

            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight'>
              Have an idea, project, or open role?{' '}
              <span className='text-gradient-teal'>Let&apos;s build it together.</span>
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg mb-8 leading-relaxed'>
              Whether you need a high-performance Next.js 15 application, an immersive 3D web experience, or design engineering expertise, I&apos;m ready to collaborate.
            </p>

            <div className='flex flex-wrap items-center gap-4'>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-teal-500 text-black font-semibold text-sm hover:bg-teal-400 transition-all hover:shadow-xl hover:shadow-teal-500/20 active:scale-95'
              >
                <span>Initiate Conversation</span>
                <ArrowUpRight size={18} />
              </Link>

              <button
                onClick={copyEmail}
                className='inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full glass-panel-subtle text-zinc-200 font-semibold text-sm hover:text-white hover:border-white/20 transition-all active:scale-95'
                aria-label='Copy email to clipboard'
              >
                {copied ? (
                  <>
                    <Check size={16} className='text-emerald-400' />
                    <span className='text-emerald-400'>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className='text-zinc-400' />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Details */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10'>
          {/* Identity */}
          <div className='md:col-span-2 space-y-4'>
            <div className='flex items-center gap-2.5'>
              <div className='w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-black font-bold text-sm'>
                A
              </div>
              <span className='text-lg font-bold tracking-tight text-white'>
                ABOLFAZL OMRANI
              </span>
            </div>
            <p className='text-sm text-zinc-400 max-w-sm leading-relaxed'>
              Senior Frontend & Creative Web Developer crafting fast, accessible, and visually captivating digital products.
            </p>
            <div className='pt-2 flex items-center gap-2 text-xs text-zinc-500'>
              <span className='w-2 h-2 rounded-full bg-emerald-500 inline-block' />
              <span>Based in Tehran • Available Worldwide (Remote)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-xs font-semibold uppercase tracking-wider text-zinc-300'>
              Navigation
            </h3>
            <ul className='space-y-2.5 text-sm'>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className='text-zinc-400 hover:text-teal-400 transition-colors inline-flex items-center gap-1 group'
                  >
                    <span>{label}</span>
                    <span className='opacity-0 group-hover:opacity-100 transition-opacity text-teal-400'>
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className='space-y-4'>
            <h3 className='text-xs font-semibold uppercase tracking-wider text-zinc-300'>
              Connect
            </h3>
            <ul className='space-y-2.5 text-sm'>
              {SOCIAL_LINKS.map(({ platform, url, username }) => (
                <li key={platform}>
                  <a
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-zinc-400 hover:text-white transition-colors flex items-center justify-between group'
                  >
                    <span>{platform}</span>
                    <span className='text-xs text-zinc-500 group-hover:text-teal-400 transition-colors'>
                      {username}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500'>
          <p>© {new Date().getFullYear()} Abolfazl Omrani. All rights reserved.</p>
          <div className='flex items-center gap-4'>
            <span>Designed & Engineered with Next.js 15 & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
