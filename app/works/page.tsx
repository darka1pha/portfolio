'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles, Filter } from 'lucide-react';
import { PROJECTS, Project } from '@/lib/constants/projects';
import { FadeIn, SectionHeading, CardSpotlight } from '@/components/animations';

const FILTER_CATEGORIES = [
  'All',
  'Next.js 15',
  'Three.js / WebGL',
  'React.js',
  'Full-Stack / Supabase',
];

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Next.js 15')
      return (
        project.category.includes('Next.js') ||
        project.tags.some((t) => t.includes('Next.js'))
      );
    if (activeFilter === 'Three.js / WebGL')
      return (
        project.category.includes('Three.js') ||
        project.tags.some((t) => t.includes('Three.js'))
      );
    if (activeFilter === 'React.js')
      return (
        project.category.includes('React') ||
        project.tags.some((t) => t.includes('React'))
      );
    if (activeFilter === 'Full-Stack / Supabase')
      return (
        project.category.includes('Supabase') ||
        project.tags.some((t) => t.includes('Supabase') || t.includes('PostgreSQL'))
      );
    return true;
  });

  return (
    <div className='py-6 sm:py-10'>
      <SectionHeading
        eyebrow='Project Archive'
        title='Crafted Digital Products &'
        highlightText='Architectures'
        description='A comprehensive gallery of production web applications, interactive 3D simulations, and frontend design systems.'
      />

      {/* Filter Tabs */}
      <FadeIn delay={0.1}>
        <div className='flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/5'>
          <div className='flex items-center gap-2 mr-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider'>
            <Filter size={14} />
            <span>Filter:</span>
          </div>

          {FILTER_CATEGORIES.map((category) => {
            const isSelected = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isSelected
                    ? 'bg-teal-500 text-black shadow-md shadow-teal-500/20'
                    : 'glass-panel text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                {category}
              </button>
            );
          })}

          <div className='ml-auto text-xs text-zinc-500 font-mono hidden sm:block'>
            Showing {filteredProjects.length} of {PROJECTS.length} works
          </div>
        </div>
      </FadeIn>

      {/* Projects Grid */}
      <motion.div layout className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.slug}
            >
              <CardSpotlight className='group flex flex-col h-full border border-white/10 hover:border-teal-500/40 p-4 sm:p-5'>
                {/* Image Frame */}
                <div className='aspect-[16/10] relative rounded-xl overflow-hidden bg-zinc-950 mb-5'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity' />

                  {/* Highlight pill */}
                  {project.highlight && (
                    <div className='absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-black/80 backdrop-blur-md text-teal-300 border border-white/10'>
                      {project.highlight}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className='flex flex-col flex-1 justify-between'>
                  <div>
                    <div className='flex items-center justify-between mb-2'>
                      <span className='text-[11px] font-semibold uppercase tracking-wider text-teal-400'>
                        {project.category}
                      </span>
                      <div className='flex items-center gap-1'>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors'
                            aria-label={`View ${project.title} repository`}
                          >
                            <Github size={15} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-1.5 rounded-lg text-zinc-400 hover:text-teal-400 hover:bg-white/10 transition-colors'
                            aria-label={`Visit ${project.title} demo`}
                          >
                            <ArrowUpRight size={15} />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className='text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors'>
                      {project.title}
                    </h3>

                    <p className='text-xs text-zinc-400 mb-4 line-clamp-3 leading-relaxed'>
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-1.5 pt-3 border-t border-white/5'>
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className='px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-zinc-300 border border-white/5'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
