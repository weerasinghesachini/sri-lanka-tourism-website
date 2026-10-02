import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Google Fonts direct integration (Better Performance)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lankavista.com'),
  title: {
    default: 'LankaVista | Discover the Wonder of Sri Lanka Tourism & Travel',
    template: '%s | LankaVista',
  },
  description:
    'Explore golden beaches, ancient kingdoms, mist-shrouded tea mountains, and unforgettable wildlife safaris in Sri Lanka.',
  keywords: [
    'Sri Lanka tourism',
    'Sigiriya tours',
    'Ella train travel',
    'Mirissa whale watching',
    'Ceylon travel agency',
    'LankaVista',
  ],
  openGraph: {
    title: 'LankaVista - Explore Sri Lanka',
    description:
      'Custom travel packages, interactive trip planning, and guided tours in Sri Lanka.',
    url: 'https://lankavista.com',
    siteName: 'LankaVista',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <body className="bg-sand-50 text-gray-900 flex flex-col min-h-screen antialiased selection:bg-emerald-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}