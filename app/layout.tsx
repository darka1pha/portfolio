import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abolfazl Omrani',
  description: 'Portfolio website showcasing creative work and projects',
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
