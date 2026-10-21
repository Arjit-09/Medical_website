import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageBanner from '../../../components/page-banner';
import { PRODUCTS, getProductBySlug, getRelatedProducts } from '../../../data/products';
import { ProductCard } from '../../../components/product-card';
import ProductDetailView from '../../../components/product-detail-view';

export function generateStaticParams() {
  return PRODUCTS.map(product => ({ slug: product.slug || product.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product not found - Care & Cure Pharma' };
  return {
    title: `${product.name} | Care & Cure Pharmaceuticals`,
    description: `${product.name} pharmaceutical listing. ${product.description.slice(0, 150)}. Confirm current price and stock with Care & Cure.`
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 4);

  return (
    <>
      <PageBanner
        className="product-detail-banner"
        eyebrow={product.category}
        title={product.name}
        description="Authentic pharmaceutical listing from Care & Cure Pharmaceuticals. Batch verified with global dispatch."
      />

      <ProductDetailView product={product} />

      {related.length > 0 && (
        <section className="section section-light related-section" style={{ borderTop: '1px solid #e2e8f0', padding: '60px 0', background: '#f8fafc' }}>
          <div className="page-width">
            <div className="section-heading" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <div>
                <span className="section-kicker" style={{ color: '#4f46e5', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Related in {product.category}
                </span>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', margin: '4px 0 0' }}>
                  Explore Similar Formulations
                </h2>
              </div>
              <Link className="text-link" href={`/products?category=${encodeURIComponent(product.category)}`} style={{ fontWeight: 600, color: '#4f46e5' }}>
                View all in {product.category} &rarr;
              </Link>
            </div>
            <div className="product-grid">
              {related.map((item, index) => (
                <ProductCard key={item.slug || item.id} product={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
