import Image from 'next/image';
import Link from 'next/link';
import PROFILE_IMAGE from '../../public/images/profile.webp';

export default function AboutSection() {
  return (
    <section className='py-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <div>
          <h2 className='text-4xl font-bold mb-6'>
            Let's get know
            <br />
            about me closer
          </h2>
          <p className='text-gray-400 mb-8'>
            A passionate developer dedicated to building dynamic and engaging
            web applications. Their portfolio features diverse projects,
            including scalable Next.js apps, interactive interfaces, and modern
            web solutions.
          </p>
          <Link
            href='/about'
            className='inline-block bg-teal-800 text-white px-8 py-3 rounded-full hover:bg-teal-600 transition-colors'
          >
            MORE ABOUT ME
          </Link>
        </div>
        <div className='relative'>
          <div className='aspect-square relative rounded-3xl overflow-hidden'>
            <Image
              src={PROFILE_IMAGE}
              alt='Designer portrait'
              fill
              className='object-cover'
              priority
            />
          </div>
          <div className='absolute -top-4 -right-4 w-24 h-24 border-2 border-teal-500 rounded-full' />
        </div>
      </div>
    </section>
  );
}
