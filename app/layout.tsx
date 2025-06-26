import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PakTravel - Your Trusted Travel Partner in Pakistan',
  description: 'Book flights, Hajj & Umrah packages, and explore Pakistan with our expert travel services. Licensed IATA travel agent with 15+ years experience.',
  keywords: 'Pakistan travel, flights booking, Hajj packages, Umrah packages, travel agency Pakistan, IATA certified',
  authors: [{ name: 'PakTravel' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'PakTravel - Your Trusted Travel Partner',
    description: 'Book flights, Hajj & Umrah packages, and explore Pakistan with our expert travel services.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ur_PK',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#059669" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}