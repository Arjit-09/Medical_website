import PageBanner from '../../components/page-banner';
import ProductCatalog from '../../components/product-catalog';

export const metadata = {
  title: 'Pharmaceutical Catalogue & Online Shop | Care & Cure Pharma',
  description: 'Browse authentic Care & Cure pharmaceutical listings. Antibiotics, pain relief, ED medication, smart formulations and institutional healthcare supply.'
};

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        className="shop-banner"
        eyebrow="Care & Cure Product Directory"
        title="Pharmaceutical Shop & Catalogue"
        description="Explore our authentic pharmaceutical formulations with verified batch specifications. Confirm current availability and dispatch details with our pharmacy desk."
        videoSrc="/videos/hero-ambient.mp4"
        bgImage="/images/hero-pills-light.jpg"
      />
      <section className="catalog-section" style={{ padding: '40px 0 80px' }}>
        <div className="page-width">
          <ProductCatalog />
        </div>
      </section>
    </>
  );
}
