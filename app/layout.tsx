import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import CursorGlow from '@/components/CursorGlow';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollProgress from '@/components/ScrollProgress';
import ClientOnly from '@/components/ClientOnly';
import BackToTop from '@/components/BackToTop';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Zain Sheikh | Full-Stack Developer & Technologist',
  description:
    'Full-Stack Developer, IT Systems Specialist, and Product-Oriented Technologist specializing in React, Node.js, AWS, and modern web technologies.',
  keywords: [
    'Zain Sheikh',
    'Full-Stack Developer',
    'React Developer',
    'Node.js',
    'AWS',
    'Cloud Engineer',
    'Web Developer',
    'Software Engineer',
  ],
  authors: [{ name: 'Zain Sheikh' }],
  creator: 'Zain Sheikh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zainsheikh.vercel.app',
    title: 'Zain Sheikh | Full-Stack Developer & Technologist',
    description:
      'Full-Stack Developer, IT Systems Specialist, and Product-Oriented Technologist',
    siteName: 'Zain Sheikh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zain Sheikh | Full-Stack Developer & Technologist',
    description:
      'Full-Stack Developer, IT Systems Specialist, and Product-Oriented Technologist',
    creator: '@zainsheikh',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <ScrollProgress />
        {/* <ClientOnly /> */}
        <ParticleBackground />
        <CursorGlow />
        <Navigation />
        <BackToTop />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}


