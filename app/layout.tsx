import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abolfazl Omrani',
  metadataBase: new URL('https://darkalpha.ir'),
  description: 'Portfolio website showcasing creative work and projects',
  keywords: [
    'Abolfazl Omrani',
    'Portfolio',
    'Creative',
    'Work',
    'Projects',
    'Next.js',
    'React.js',
    'Tailwind CSS',
    'Three.js',
    'Drei',
    'Fiber',
    'Next.js 13',
    'React.js 18',
    'Tailwind CSS 3.0',
    'Three.js 6',
    'ابوالفضل عمرانی',
    'ابوالفضل',
    'عمرانی',
    'ریکت',
    'نکست جی اس',
    'اموزش',
    'آموزش',
    'برنامه نویسی',
    'برنامه نویس',
    'پروژه',
    'فریلنس',
    'فریلنسر',
    'فریلنسری',
    'وردپرس',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${spaceGrotesk.className} bg-[#111] text-white min-h-screen`}
      >
        <Navbar />
        <main className='container mx-auto px-4 py-8'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
