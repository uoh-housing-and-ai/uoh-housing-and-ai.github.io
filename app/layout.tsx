import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'University of Huddersfield | Housing and AI',
  description: 'A showcase of University of Huddersfield work applying machine learning, generative AI, AI agents, data analysis, informatics, and visualisation to housing challenges.',
  applicationName: 'UoH Housing and AI Showcase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable} bg-white text-gray-900 font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
