'use client';

import FadeIn from './FadeIn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlightText,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <FadeIn delay={0.05} direction='down'>
          <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-4'>
            <span className='w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse' />
            {eyebrow}
          </span>
        </FadeIn>
      )}

      <FadeIn delay={0.1}>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white'>
          {title}{' '}
          {highlightText && (
            <span className='text-gradient-teal'>{highlightText}</span>
          )}
        </h2>
      </FadeIn>

      {description && (
        <FadeIn delay={0.15}>
          <p className='mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed'>
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
