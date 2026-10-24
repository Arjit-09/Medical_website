import ProductCatalog from "../../components/product-catalog";
import PageBanner from "../../components/page-banner";
export const metadata = { title: "Products" };
export default function ProductsPage() {
  return (
    <>
      <PageBanner
        eyebrow="OUR CATALOGUE"
        title="Find your product"
        description="Browse products and contact us for availability and pricing."
      />
      <section className="page-width catalog-section">
        <ProductCatalog />
      </section>
    </>
  );
}
