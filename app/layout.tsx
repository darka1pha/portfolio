import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollProgress } from '@/components/animations';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const viewport: Viewport = {
  themeColor: '#090a0f',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Abolfazl Omrani | Frontend Architect & Creative Developer',
  description:
    'Creative Frontend Engineer specializing in Next.js, React, TypeScript, Three.js, and high-performance adaptive web applications.',
  metadataBase: new URL('https://darkalpha.ir'),
  verification: { google: 'lDm-cObga-_xjhinBJE7AfadBEmH9XzNDn44it9SdSc' },
  keywords: [
    'Abolfazl Omrani',
    'DarkAlpha',
    'Creative Developer',
    'Frontend Architect',
    'Next.js 15',
    'React 19',
    'Three.js',
    'Tailwind CSS',
    'TypeScript',
    'Web Development',
    'Software Engineer',
    'Iran Web Developer',
  ],
  authors: [{ name: 'Abolfazl Omrani', url: 'https://darkalpha.ir' }],
  creator: 'Abolfazl Omrani',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://darkalpha.ir',
    title: 'Abolfazl Omrani | Frontend Architect & Creative Developer',
    description:
      'High-performance Next.js 15 portfolio showcasing interactive 3D web graphics, modern architectures, and design engineering.',
    siteName: 'Abolfazl Omrani Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abolfazl Omrani | Frontend Architect',
    description:
      'High-performance Next.js 15 portfolio showcasing interactive 3D web graphics, modern architectures, and design engineering.',
    creator: '@ab01f421',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body
        className={`${spaceGrotesk.className} bg-[#090a0f] text-foreground min-h-screen flex flex-col relative selection:bg-teal-500/20 selection:text-teal-200 antialiased`}
      >
        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Ambient background decoration */}
        <div
          className='fixed inset-0 bg-radial-ambient pointer-events-none z-0'
          aria-hidden='true'
        />
        <div
          className='fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0'
          aria-hidden='true'
        />

        {/* Header Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className='flex-1 relative z-10 pt-24 sm:pt-28 pb-12 sm:pb-16 container mx-auto px-4 sm:px-6 max-w-7xl'>
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
