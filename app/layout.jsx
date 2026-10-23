import './globals.css';
import SiteShell from '../components/site-shell';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://careandcurepharma.com'),
  title: {
    default: 'Care & Cure Pharmaceuticals | Trusted Medicine Supply — Pompano Beach, FL',
    template: '%s | Care & Cure Pharmaceuticals'
  },
  description: 'Care And Cure Pharmaceuticals is a trusted pharmaceutical wholesaler and supplier based at 5200 NW 4th Ave, Pompano Beach, FL 33064. Browse authentic medicines — antibiotics, pain relief, antivirals — and connect with our team for fast delivery.',
  applicationName: 'Care & Cure Pharmaceuticals',
  keywords: [
    'pharmaceutical distributor Florida', 'medicine supplier Pompano Beach',
    'prescription medicine supplier FL', 'pharmaceutical wholesale USA',
    'verified medications online', 'cold chain medicine supply'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Care & Cure Pharmaceuticals',
    title: 'Care & Cure Pharmaceuticals | Trusted Medicine Supply',
    description: 'Explore 250+ medicine listings and connect with our Florida team for current pricing and fast delivery.'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
