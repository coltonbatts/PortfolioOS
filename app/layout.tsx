import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

/**
 * Root Layout Component
 * Global layout wrapper for all pages in Portfolio OS
 * - Loads Inter font via next/font optimization
 * - Includes global Navbar and Footer
 * - Sets up semantic HTML structure
 */

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio OS',
  description: 'A modular creative-tech portfolio and vault system',
  keywords: ['portfolio', 'creative tech', 'markdown', 'vault'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
