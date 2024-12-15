import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/lib/constants/projects';

export default function ProjectsSection() {
  return (
    <section className='py-20'>
      <div className='flex justify-between items-center mb-12'>
        <h2 className='text-4xl font-bold'>My Projects Highlight</h2>
        <Link
          href='/works'
          className='inline-flex items-center space-x-2 text-teal-500 hover:text-teal-600'
        >
          <span>EXPLORE MORE</span>
          <ArrowRight size={20} />
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {PROJECTS.slice(0, 2).map((project, index) => (
          <div
            key={index}
            className='group relative'
          >
            <div className='aspect-[4/3] relative rounded-2xl overflow-hidden'>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className='object-cover transition-transform group-hover:scale-105'
              />
            </div>
            <div className='mt-4'>
              <h3 className='text-xl font-bold'>{project.title}</h3>
              <div className='flex space-x-4 mt-2 text-sm text-gray-400'>
                <span>{project.category}</span>
                {/* {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
