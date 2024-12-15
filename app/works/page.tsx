import { PROJECTS } from '@/lib/constants/projects';
import Image from 'next/image';

export default function Works() {
  return (
    <div>
      <h1 className='text-5xl font-bold mb-2'>My works</h1>
      <p className='text-gray-400 mb-12'>Showcase About Works</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {PROJECTS.map((work, index) => (
          <div
            key={index}
            className='group relative overflow-hidden rounded-lg'
          >
            <div className='aspect-square relative'>
              <Image
                src={work.image}
                alt={work.title}
                fill
                className='object-cover transition-transform group-hover:scale-110'
              />
            </div>
            <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
              <div className='text-sm text-gray-300'>{work.category}</div>
              <h3 className='text-xl font-bold'>{work.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
