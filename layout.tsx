
import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  title: { default: 'Conscious Shadow', template: '%s · Shadow' },
  description: 'Executive/Learner modes for Conscious AI Shadow',
  metadataBase: new URL(siteUrl),
  openGraph: {
    url: siteUrl,
    title: 'Conscious Shadow',
    description: 'Shadow OS preview',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Shadow OG' }],
    siteName: 'Conscious Shadow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conscious Shadow',
    images: ['/og-image.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
