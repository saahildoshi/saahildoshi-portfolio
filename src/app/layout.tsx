import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export const metadata: Metadata = {
  title: 'Saahil Doshi — Aerospace Engineering Portfolio',
  description: 'Dark, technical aerospace engineering portfolio featuring NASA SLI and other research projects.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} bg-primary text-primary-foreground`}>
        <div className="min-h-screen">
          <SiteHeader />
          <main className="pb-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
