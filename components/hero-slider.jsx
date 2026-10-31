"use client";
import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "../data/site";

const FEATURED_TREATMENTS = [
  {
    category: "Pain Relief",
    title: "Clinical Pain Management",
    desc: "Targeted solutions for moderate to severe pain.",
    link: "/products/category/pain-relief",
    image: "/products/tramadol-1.webp",
    color: "#f8fafc",
    tag: "FAST-ACTING",
  },
  {
    category: "ED Medication",
    title: "Men’s Health & Performance",
    desc: "Clinically proven treatments you can rely on.",
    link: "/products/category/ed-medication",
    image: "/products/cenforce-soft-chewable-100-mg-1.webp",
    color: "#f8fafc",
    tag: "PROVEN QUALITY",
  },
  {
    category: "Antibiotics",
    title: "Broad Spectrum Antibiotics",
    desc: "Quality tested formulations for bacterial care.",
    link: "/products/category/antibiotics",
    image: "/products/amoxicillin-1.webp",
    color: "#f8fafc",
    tag: "LAB CERTIFIED",
  },
];

export default function HeroSection() {
  return (
    <section className="clean-hero-section" aria-label="Welcome to Medzwall">
      <div className="page-width clean-hero-inner">
        {/* Left Column: Clear, Bright Medical Introduction */}
        <div className="clean-hero-content">
          <div className="clean-hero-badge">
            <span className="badge-dot" />
            <span>VERIFIED ONLINE PHARMACY</span>
          </div>

          <h1 className="clean-hero-title">
            Genuine Medicines.
            <span className="clean-hero-title-highlight"> Delivered Discreetly.</span>
          </h1>

          <p className="clean-hero-desc">
            Browse our catalogue of over 60 authentic prescription and wellness products.
            Direct lab sourcing, plain packaging, and personal pharmacy assistance.
          </p>

          <div className="clean-hero-trust-list">
            <div className="trust-bullet">
              <span className="bullet-check">✓</span>
              <span>100% Authentic Products from Certified Manufacturers</span>
            </div>
            <div className="trust-bullet">
              <span className="bullet-check">✓</span>
              <span>Discreet, Tamper-Evident Packaging & Tracked Dispatch</span>
            </div>
            <div className="trust-bullet">
              <span className="bullet-check">✓</span>
              <span>Direct Pharmacist Consultation: {CONTACT.phone}</span>
            </div>
          </div>

          <div className="clean-hero-actions">
            <a href="#catalogue" className="button hero-primary-btn">
              Browse All Products ↓
            </a>
            <a href={`tel:${CONTACT.telephone}`} className="button button-outline hero-call-btn">
              📞 Call: {CONTACT.phone}
            </a>
          </div>
        </div>

        {/* Right Column: Clean Treatment Cards Showcase */}
        <div className="clean-hero-cards">
          {FEATURED_TREATMENTS.map((item) => (
            <Link
              key={item.category}
              href={item.link}
              className="treatment-card"
            >
              <div className="treatment-card-img" style={{ background: item.color }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={110}
                  height={110}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="treatment-card-info">
                <span className="treatment-card-tag">{item.tag}</span>
                <h3 className="treatment-card-title">{item.category}</h3>
                <p className="treatment-card-desc">{item.desc}</p>
                <span className="treatment-card-link">Explore solutions →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
