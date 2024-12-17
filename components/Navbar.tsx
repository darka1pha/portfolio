'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    return pathname === path
      ? 'text-teal-500'
      : 'text-white hover:text-teal-500';
  };

  return (
    <nav className='py-6 px-4 border-b border-gray-800'>
      <div className='container mx-auto flex justify-between items-center gap-2'>
        <Link
          href='/'
          className='text-lg sm:text-2xl font-bold text-wrap'
        >
          <span className='text-teal-500'>A</span>BOLFAZL&nbsp;
          <span className='text-teal-500'>O</span>MRANI
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className='sm:hidden text-white focus:outline-none'
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className='space-x-4 sm:space-x-8 hidden sm:flex'>
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
            ABOUT
          </Link>
          <Link
            href='/works'
            className={`${isActive('/works')} transition-colors`}
          >
            WORKS
          </Link>
          <Link
            href='/contact'
            className={`${isActive('/contact')} transition-colors`}
          >
            CONTACT
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: `auto` }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='absolute top-20 left-0 w-full bg-[#111] py-4 flex flex-col items-center sm:hidden'
          >
            <Link
              href='/'
              onClick={toggleMenu}
              className={`${isActive(
                '/'
              )} py-2 w-full text-center transition-colors`}
            >
              HOME
            </Link>
            <Link
              href='/about'
              onClick={toggleMenu}
              className={`${isActive(
                '/about'
              )} py-2 w-full text-center transition-colors`}
            >
              ABOUT
            </Link>
            <Link
              href='/works'
              onClick={toggleMenu}
              className={`${isActive(
                '/works'
              )} py-2 w-full text-center transition-colors`}
            >
              WORKS
            </Link>
            <Link
              href='/contact'
              onClick={toggleMenu}
              className={`${isActive(
                '/contact'
              )} py-2 w-full text-center transition-colors`}
            >
              CONTACT
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
