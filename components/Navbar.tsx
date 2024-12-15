'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? 'text-teal-500'
      : 'text-white hover:text-teal-500';
  };

  return (
    <nav className='py-6 px-4 border-b border-gray-800'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link
          href='/'
          className='text-2xl font-bold'
        >
          <span className='text-teal-500'>A</span>BOLFAZL&nbsp;
          <span className='text-teal-500'>O</span>MRANI
        </Link>
        <div className='space-x-8'>
          <Link
            href='/'
            className={`${isActive('/')} transition-colors`}
          >
            HOME
          </Link>
          <Link
            href='/about'
            className={`${isActive('/about')} transition-colors`}
          >
            ABOUT ME
          </Link>
          <Link
            href='/works'
            className={`${isActive('/works')} transition-colors`}
          >
            MY WORKS
          </Link>
          <Link
            href='/contact'
            className={`${isActive(
              '/contact'
            )} transition-colors bg-gray-900 px-4 py-2 rounded-full`}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
