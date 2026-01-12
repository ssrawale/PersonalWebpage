import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Portfolio - GIS & Data Specialist',
  description: 'Professional portfolio showcasing expertise in GIS, geodatabases, and data visualization',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.className} bg-dark-bg text-text-primary antialiased`}>
        <Header />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}