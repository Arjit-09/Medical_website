import Image from "next/image";
import Link from "next/link";
export default function ProductDetailView({ product }) {
  return (
    <section className="page-width product-detail">
      <div className="detail-image">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
          priority
        />
      </div>
      <div>
        <p className="eyebrow">{product.category}</p>
        <h1>{product.name}</h1>
        <p>
          Contact our team to confirm the available strength, pack size and
          current pricing for this product.
        </p>
        {product.variants?.length > 0 && (
          <div className="pack-list">
            <strong>Listed pack options</strong>
            <p>{product.variants.map((v) => v.title).join(" · ")}</p>
          </div>
        )}
        <Link
          className="button"
          href={`/contact?product=${encodeURIComponent(product.name)}`}
        >
          Enquire about this product →
        </Link>
        <p className="catalog-note">
          Orders are confirmed after availability and any prescription
          requirements are checked.
        </p>
        <Link className="text-link" href="/products">
          ← Back to products
        </Link>
      </div>
    </section>
  );
}
