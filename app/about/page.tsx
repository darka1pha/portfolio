import { SOCIAL_LINKS } from '@/lib/constants/navigation';

export default function About() {
  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className='text-5xl font-bold mb-2'>About Me</h1>
      <p className='text-gray-400 mb-12'>Little Brief About Myself</p>

      <div className='grid grid-cols-2 gap-12'>
        <div>
          <h2 className='text-4xl font-bold leading-tight mb-8'>
            My mission is to make web development simpler.
          </h2>
        </div>
        <div>
          <p className='text-gray-400 mb-6'>
            Create custom web solutions with me that attract more visitors than
            any other website. With a variety of unique features and seamless
            functionality, I can help bring your project to life effortlessly.
          </p>
        </div>
      </div>

      <div className='mt-16'>
        <h3 className='text-2xl font-bold mb-8'>Follow me on:</h3>
        <div className='flex space-x-8'>
          {SOCIAL_LINKS.map(({ platform, url }) => (
            <a
              key={platform}
              target='_blank'
              href={url}
              className='text-gray-400 hover:text-teal-500 transition-colors'
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
