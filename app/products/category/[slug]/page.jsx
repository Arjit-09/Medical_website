import { notFound } from "next/navigation";
import PageBanner from "../../../../components/page-banner";
import ProductCatalog from "../../../../components/product-catalog";
import { CATALOG_CATEGORIES, categorySlug } from "../../../../data/products";

export function generateStaticParams() {
  return CATALOG_CATEGORIES.map((category) => ({
    slug: categorySlug(category),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = CATALOG_CATEGORIES.find(
    (item) => categorySlug(item) === slug,
  );
  return category
    ? {
        title: category,
        description: `Browse ${category.toLowerCase()} listings from Medzwall.`,
      }
    : { title: "Category not found" };
}

export default async function ProductCategoryPage({ params }) {
  const { slug } = await params;
  const category = CATALOG_CATEGORIES.find(
    (item) => categorySlug(item) === slug,
  );
  if (!category) notFound();

  return (
    <>
      <PageBanner
        eyebrow="Medzwall products"
        title={category}
        description="Browse listings in this category. Contact the team to confirm current stock, pricing, pack details and order quantities."
      />
      <section className="catalog-section">
        <div className="page-width">
          <ProductCatalog key={category} initialCategory={category} />
        </div>
      </section>
    </>
  );
}
