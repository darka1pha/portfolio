'use client';

import React, { useState } from 'react';
import ContactForm from '@/components/contact/form';
import { SectionHeading, FadeIn, CardSpotlight } from '@/components/animations';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants/navigation';
import { Mail, Phone, MapPin, Clock, Copy, Check, Sparkles, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  return (
    <div className='py-6 sm:py-10'>
      <SectionHeading
        eyebrow='Direct Contact'
        title='Initiate Collaboration &'
        highlightText='Inquiries'
        description='Whether you are launching a greenfield product, seeking a frontend architect, or inquiring about contract availability, let us connect.'
      />

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
        {/* Left Column: Direct Info & Availability */}
        <div className='lg:col-span-5 space-y-6'>
          <FadeIn delay={0.1}>
            <div className='glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6'>
              <div>
                <span className='text-xs font-semibold uppercase tracking-wider text-teal-400'>
                  Status
                </span>
                <div className='flex items-center gap-2 mt-1.5'>
                  <span className='relative flex h-2.5 w-2.5'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75' />
                    <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500' />
                  </span>
                  <span className='text-sm font-semibold text-white'>
                    {PERSONAL_INFO.availability}
                  </span>
                </div>
              </div>

              {/* Direct Email Card */}
              <div className='p-4 rounded-2xl bg-white/5 border border-white/5'>
                <div className='flex items-center justify-between mb-1'>
                  <span className='text-xs font-semibold uppercase tracking-wider text-zinc-400'>
                    Primary Email
                  </span>
                  <button
                    onClick={copyEmail}
                    className='text-xs text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center gap-1'
                    aria-label='Copy email'
                  >
                    {copied ? (
                      <>
                        <Check size={12} className='text-emerald-400' />
                        <span className='text-emerald-400'>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className='text-sm sm:text-base font-bold text-white hover:text-teal-400 transition-colors break-all'
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Quick Details */}
              <div className='space-y-4 pt-2 text-sm'>
                <div className='flex items-center gap-3 text-zinc-300'>
                  <div className='w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0'>
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className='text-xs text-zinc-500'>Direct Line</div>
                    <div className='font-mono font-medium'>{PERSONAL_INFO.phone}</div>
                  </div>
                </div>

                <div className='flex items-center gap-3 text-zinc-300'>
                  <div className='w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0'>
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className='text-xs text-zinc-500'>Location</div>
                    <div>{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                <div className='flex items-center gap-3 text-zinc-300'>
                  <div className='w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0'>
                    <Clock size={16} />
                  </div>
                  <div>
                    <div className='text-xs text-zinc-500'>Response Time</div>
                    <div>Within 24 Hours Guaranteed</div>
                  </div>
                </div>
              </div>

              {/* Social Link Quick Row */}
              <div className='pt-4 border-t border-white/5'>
                <span className='text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-3'>
                  Alternative Channels
                </span>
                <div className='flex flex-wrap gap-2'>
                  {SOCIAL_LINKS.map(({ platform, url }) => (
                    <a
                      key={platform}
                      href={url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-3 py-1.5 rounded-lg text-xs font-medium glass-panel-subtle text-zinc-300 hover:text-teal-400 hover:border-teal-500/30 transition-all'
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Interactive Glass Form */}
        <div className='lg:col-span-7'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
