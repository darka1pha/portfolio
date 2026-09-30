import Image, { StaticImageData } from 'next/image';
import { CardSpotlight } from '@/components/animations';
import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  tags?: string[];
  image: StaticImageData | string;
  description?: string;
  liveUrl?: string;
  githubUrl?: string;
  highlight?: string;
}

export default function ProjectCard({
  title,
  category,
  tags = [],
  image,
  description,
  liveUrl,
  githubUrl,
  highlight,
}: ProjectCardProps) {
  return (
    <CardSpotlight className='group flex flex-col h-full border border-white/10 hover:border-teal-500/40 p-4 sm:p-5'>
      <div className='aspect-[16/10] relative rounded-xl overflow-hidden bg-zinc-950 mb-5'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity' />

        {highlight && (
          <div className='absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-black/80 backdrop-blur-md text-teal-300 border border-white/10'>
            {highlight}
          </div>
        )}
      </div>

      <div className='flex flex-col flex-1 justify-between'>
        <div>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-xs font-semibold uppercase tracking-wider text-teal-400'>
              {category}
            </span>
            <div className='flex items-center gap-1'>
              {githubUrl && (
                <a
                  href={githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors'
                  aria-label={`View ${title} repository`}
                >
                  <Github size={15} />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-1.5 rounded-lg text-zinc-400 hover:text-teal-400 hover:bg-white/10 transition-colors'
                  aria-label={`Visit ${title} demo`}
                >
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>

          <h3 className='text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors'>
            {title}
          </h3>

          {description && (
            <p className='text-xs text-zinc-400 mb-4 line-clamp-2 leading-relaxed'>
              {description}
            </p>
          )}
        </div>

        {tags.length > 0 && (
          <div className='flex flex-wrap gap-1.5 pt-3 border-t border-white/5'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-zinc-300 border border-white/5'
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </CardSpotlight>
  );
}
