import { CATALOG_CATEGORIES, PRODUCTS, categorySlug } from '../data/products';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://careandcurepharma.com';

export default function sitemap() {
  const base = siteUrl.replace(/\/$/, '');
  const pages = ['', '/products', '/about', '/contact'].map(path => ({ url: `${base}${path}`, changeFrequency: 'monthly', priority: path === '' ? 1 : 0.7 }));
  const categoryPages = CATALOG_CATEGORIES.map(category => ({ url: `${base}/products/category/${categorySlug(category)}`, changeFrequency: 'monthly', priority: 0.6 }));
  const productPages = PRODUCTS.map(product => ({ url: `${base}/products/${product.id}`, changeFrequency: 'monthly', priority: 0.5 }));
  return [...pages, ...categoryPages, ...productPages];
}
