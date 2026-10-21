const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://careandcurepharma.com';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${siteUrl.replace(/\/$/, '')}/sitemap.xml`
  };
}
