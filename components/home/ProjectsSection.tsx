'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { PROJECTS } from '@/lib/constants/projects';
import { FadeIn, SectionHeading, CardSpotlight } from '@/components/animations';

export default function ProjectsSection() {
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <section className='py-20 md:py-28 relative' id='projects'>
      <div className='flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6'>
        <SectionHeading
          eyebrow='Featured Creations'
          title='Selected Web Applications &'
          highlightText='Digital Works'
          description='A spotlight on key applications showcasing real-world performance, 3D WebGL immersion, and full-stack integration.'
          className='mb-0 md:mb-0'
        />

        <FadeIn delay={0.2}>
          <Link
            href='/works'
            className='inline-flex items-center gap-2 text-sm font-bold tracking-wide text-teal-400 hover:text-teal-300 transition-colors uppercase whitespace-nowrap'
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight size={18} />
          </Link>
        </FadeIn>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {featuredProjects.map((project, index) => (
          <FadeIn key={project.slug} delay={0.1 * index}>
            <CardSpotlight className='group flex flex-col h-full border border-white/10 hover:border-teal-500/40 transition-all duration-300 p-4 sm:p-5'>
              {/* Project Image Frame */}
              <div className='aspect-[16/10] relative rounded-xl overflow-hidden bg-zinc-950 mb-5'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes='(max-width: 768px) 100vw, 600px'
                  className='object-cover transition-transform duration-500 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity' />

                {/* Highlight Badge */}
                {project.highlight && (
                  <div className='absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/75 backdrop-blur-md text-teal-300 border border-white/10'>
                    {project.highlight}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className='flex flex-col flex-1 justify-between'>
                <div>
                  <div className='flex items-center justify-between gap-2 mb-2'>
                    <span className='text-xs font-semibold uppercase tracking-wider text-teal-400'>
                      {project.category}
                    </span>
                    <div className='flex items-center gap-2'>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors'
                          aria-label={`View ${project.title} GitHub repository`}
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='p-1.5 rounded-lg text-zinc-400 hover:text-teal-400 hover:bg-white/10 transition-colors'
                          aria-label={`Visit ${project.title} live demo`}
                        >
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className='text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors'>
                    {project.title}
                  </h3>

                  <p className='text-xs sm:text-sm text-zinc-400 line-clamp-2 mb-4 leading-relaxed'>
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className='flex flex-wrap gap-1.5 pt-3 border-t border-white/5'>
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-zinc-300 border border-white/5'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </CardSpotlight>
          </FadeIn>
        ))}
      </div>

      {/* Bottom CTA */}
      <FadeIn delay={0.4} className='mt-12 text-center'>
        <Link
          href='/works'
          className='inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass-panel text-white font-semibold text-sm hover:border-teal-500/40 hover:text-teal-300 transition-all active:scale-95'
        >
          <span>Explore All 6+ Architectural Works</span>
          <ArrowRight size={16} />
        </Link>
      </FadeIn>
    </section>
  );
}
