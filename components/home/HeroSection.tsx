'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className='text-center py-20'>
      <h1 className='text-6xl font-bold mb-6'>
        Adaptive Frontend Development
        <br />
        with React & Next.js
      </h1>
      <Link
        href='/contact'
        className='inline-flex items-center space-x-2 bg-teal-500 text-white px-8 py-3 rounded-full hover:bg-teal-600 transition-colors'
      >
        <span>EXPLORE MORE</span>
        <ArrowRight size={20} />
      </Link>
    </section>
  );
}
