import './globals.css';
import SiteShell from '../components/site-shell';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://careandcurepharma.com'),
  title: {
    default: 'Care & Cure Pharmaceuticals | Trusted Medicine Supply — New Delhi',
    template: '%s | Care & Cure Pharmaceuticals'
  },
  description: 'Care And Cure Pharmaceuticals is a trusted pharmaceutical wholesaler and distributor based in New Delhi. Browse 250+ medicine listings — oncology, antivirals, injections, tablets — and contact the team for current pricing and availability.',
  applicationName: 'Care & Cure Pharmaceuticals',
  keywords: [
    'pharmaceutical distributor India', 'medicine wholesaler New Delhi',
    'anti cancer medicines India', 'pharmaceutical injections supplier',
    'oncology medicines supplier', 'antiviral medicines India'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Care & Cure Pharmaceuticals',
    title: 'Care & Cure Pharmaceuticals | Trusted Medicine Supply',
    description: 'Explore 250+ medicine listings and connect with our New Delhi team for current pricing and availability.'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
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
