'use client';

import React from 'react';
import { EXPERIENCES, EDUCATION } from '@/lib/constants/experience';
import { FadeIn, SectionHeading, CardSpotlight } from '@/components/animations';
import { Briefcase, Calendar, MapPin, CheckCircle, GraduationCap } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section className='py-16 md:py-24 relative' id='experience'>
      <SectionHeading
        eyebrow='Career Journey'
        title='Professional Experience &'
        highlightText='Production Track Record'
        description='A timeline of engineering roles delivering scalable logistics platforms, freight systems, and high-performance web applications.'
      />

      <div className='relative max-w-4xl mx-auto'>
        {/* Vertical Timeline Guide Line */}
        <div
          className='absolute left-4 sm:left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-teal-500/50 via-white/10 to-transparent pointer-events-none hidden sm:block'
          aria-hidden='true'
        />

        <div className='space-y-8 sm:space-y-12'>
          {EXPERIENCES.map((exp, index) => (
            <FadeIn key={index} delay={0.08 * index}>
              <div className='relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start'>
                {/* Timeline Node Indicator */}
                <div className='hidden sm:flex shrink-0 w-16 h-16 rounded-2xl glass-panel border border-teal-500/30 items-center justify-center text-teal-400 shadow-lg shadow-teal-500/10 z-10 bg-[#090a0f]'>
                  <Briefcase size={22} />
                </div>

                {/* Timeline Card */}
                <CardSpotlight className='flex-1 w-full p-6 sm:p-8 border border-white/10 hover:border-teal-500/30 transition-all'>
                  <div className='flex flex-wrap items-center justify-between gap-2 mb-3'>
                    <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/25'>
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span className='inline-flex items-center gap-1.5 text-xs text-zinc-400 font-medium'>
                      <MapPin size={13} className='text-zinc-500' />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className='text-xl sm:text-2xl font-bold text-white mb-1'>
                    {exp.role}
                  </h3>
                  <div className='text-sm text-teal-400 font-semibold mb-4'>
                    {exp.company}
                  </div>

                  <p className='text-xs sm:text-sm text-zinc-300 mb-5 leading-relaxed'>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className='space-y-2 mb-6'>
                    {exp.achievements.map((ach, achIndex) => (
                      <div
                        key={achIndex}
                        className='flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed'
                      >
                        <CheckCircle
                          size={15}
                          className='text-teal-400 shrink-0 mt-0.5'
                        />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className='flex flex-wrap gap-1.5 pt-4 border-t border-white/5'>
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='px-2.5 py-0.5 rounded text-[11px] font-medium bg-zinc-900 text-zinc-300 border border-white/5'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardSpotlight>
              </div>
            </FadeIn>
          ))}

          {/* Education Card */}
          <FadeIn delay={0.35}>
            <div className='relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start'>
              <div className='hidden sm:flex shrink-0 w-16 h-16 rounded-2xl glass-panel border border-teal-500/30 items-center justify-center text-teal-400 shadow-lg shadow-teal-500/10 z-10 bg-[#090a0f]'>
                <GraduationCap size={22} />
              </div>

              <CardSpotlight className='flex-1 w-full p-6 sm:p-8 border border-white/10 hover:border-teal-500/30 transition-all'>
                <div className='flex flex-wrap items-center justify-between gap-2 mb-2'>
                  <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/25'>
                    <Calendar size={13} />
                    {EDUCATION.period}
                  </span>
                  <span className='text-xs text-zinc-400 font-medium'>
                    GPA: {EDUCATION.gpa}
                  </span>
                </div>

                <h3 className='text-xl sm:text-2xl font-bold text-white mb-1'>
                  {EDUCATION.degree}
                </h3>
                <div className='text-sm text-teal-400 font-semibold mb-2'>
                  {EDUCATION.university} — {EDUCATION.location}
                </div>
                <p className='text-xs sm:text-sm text-zinc-400'>
                  Graduated with a Bachelor of Engineering in Software Engineering, focusing on algorithms, database systems, and software architecture.
                </p>
              </CardSpotlight>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
