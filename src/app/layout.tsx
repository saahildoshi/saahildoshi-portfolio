import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export const metadata: Metadata = {
  title: 'Saahil Doshi — Aerospace Engineering Portfolio',
  description:
    'Dark, technical aerospace engineering portfolio featuring NASA SLI and other research projects.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6D1P22S7QM"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6D1P22S7QM');
            `,
          }}
        />
      </head>

      <body className={`${spaceGrotesk.variable} bg-primary text-primary-foreground`}>
        <div className="min-h-screen">
          <SiteHeader />
          <main className="pb-20">{children}</main>
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
