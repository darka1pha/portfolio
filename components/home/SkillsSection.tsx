'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '@/lib/constants/skills';
import { FadeIn, SectionHeading, CardSpotlight } from '@/components/animations';
import { Layers, Palette, Box, Database, Sparkles } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  'Frontend & Architecture': Layers,
  'Design Systems & Motion': Palette,
  'Creative 3D & Graphics': Box,
  'Full-Stack & Cloud Integration': Database,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>(
    SKILL_CATEGORIES[0].title
  );

  const selectedCategoryData =
    SKILL_CATEGORIES.find((cat) => cat.title === activeCategory) ||
    SKILL_CATEGORIES[0];

  return (
    <section className='py-20 md:py-28 relative' id='skills'>
      <SectionHeading
        eyebrow='Technical Stack'
        title='Engineered with Modern'
        highlightText='Technologies & Tools'
        description='A curated set of technologies I use to build scalable web applications, fluid animations, and immersive visual canvases.'
      />

      {/* Category Tabs */}
      <FadeIn delay={0.1}>
        <div className='flex flex-wrap gap-2.5 mb-10 pb-2 overflow-x-auto'>
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat.title] || Sparkles;
            const isSelected = activeCategory === cat.title;

            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-teal-500 text-black shadow-lg shadow-teal-500/20'
                    : 'glass-panel text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon size={16} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>
      </FadeIn>

      {/* Active Category Display */}
      <FadeIn delay={0.2} key={activeCategory}>
        <div className='glass-panel rounded-3xl p-6 sm:p-10 border border-white/10'>
          <div className='max-w-2xl mb-8'>
            <span className='text-xs font-semibold uppercase tracking-wider text-teal-400'>
              {selectedCategoryData.eyebrow}
            </span>
            <h3 className='text-2xl sm:text-3xl font-bold text-white mt-1 mb-2'>
              {selectedCategoryData.title}
            </h3>
            <p className='text-zinc-400 text-sm sm:text-base leading-relaxed'>
              {selectedCategoryData.description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {selectedCategoryData.skills.map((skill, index) => (
              <CardSpotlight
                key={index}
                className='p-5 border border-white/5 hover:border-teal-500/40 transition-all'
              >
                <div className='flex items-center justify-between mb-2'>
                  <h4 className='text-base font-bold text-white'>{skill.name}</h4>
                  <span className='px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-teal-500/10 text-teal-400 border border-teal-500/30'>
                    {skill.level}
                  </span>
                </div>
                {skill.description && (
                  <p className='text-xs sm:text-sm text-zinc-400 leading-relaxed'>
                    {skill.description}
                  </p>
                )}
              </CardSpotlight>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
