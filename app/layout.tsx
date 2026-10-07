import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://araliyaceylon.com'),
  title: {
    default: 'Araliya Ceylon — Discover the Soul of Sri Lanka',
    template: '%s | Araliya Ceylon',
  },
  description:
    'Araliya Ceylon is a Sri Lankan tourism company crafting authentic travel experiences — from misty tea-covered mountains and ancient rock fortresses to golden beaches and wild national parks.',
  keywords: [
    'Araliya Ceylon',
    'Sri Lanka travel agency',
    'Sri Lanka tourism',
    'Sigiriya tours',
    'Ella Nine Arch Bridge',
    'Mirissa whale watching',
    'Yala leopard safari',
    'Galle Fort travel',
    'Ceylon tour operator',
    'Sri Lanka honeymoon',
    'Sri Lanka wildlife safari',
    'tea plantation tours',
  ],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Araliya Ceylon — Discover the Soul of Sri Lanka',
    description:
      'Personalised itineraries, local driver-guides, and boutique stays across Sri Lanka. From misty highlands to golden beaches.',
    url: 'https://araliyaceylon.com',
    siteName: 'Araliya Ceylon',
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
    <html lang="en" className="scroll-smooth">
      <body className="bg-cream-100 text-gray-900 flex flex-col min-h-screen antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}