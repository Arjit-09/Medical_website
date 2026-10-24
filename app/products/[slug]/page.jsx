import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug } from "../../../data/products";
import ProductDetailView from "../../../components/product-detail-view";
export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug || p.id }));
}
export async function generateMetadata({ params }) {
  const p = getProductBySlug((await params).slug);
  return { title: p ? p.name : "Product not found" };
}
export default async function ProductPage({ params }) {
  const p = getProductBySlug((await params).slug);
  if (!p) notFound();
  return <ProductDetailView product={p} />;
}
