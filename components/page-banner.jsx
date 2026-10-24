export default function PageBanner({ eyebrow, title, description }) {
  return (
    <section className="page-banner page-width">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </section>
  );
}
