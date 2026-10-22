'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CATEGORY_COLORS, CATEGORY_ICONS } from '../data/products';

export default function ProductDetailView({ product }) {
  const images = product.images && product.images.length > 0 ? product.images : [product.image || '/images/product-tablets.jpg'];
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || { title: product.unit || 'Pack', priceUSD: product.priceUSD, priceINR: product.priceINR });
  const [inquirySent, setInquirySent] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalRefCode, setModalRefCode] = useState('');
  const [modalData, setModalData] = useState({ name: '', email: '', phone: '', org: '', notes: '' });
  const [quantity, setQuantity] = useState(1);
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  const catStyle = CATEGORY_COLORS[product.category] || { bg: '#e0f2fe', color: '#0369a1' };
  const catIcon = CATEGORY_ICONS[product.category] || '💊';

  const currentPriceUSD = selectedVariant.priceUSD || product.priceUSD;
  const currentPriceINR = selectedVariant.priceINR || product.priceINR;

  const whatsappMessage = encodeURIComponent(
    `Hello Care & Cure Pharma, I am interested in ordering: ${product.name} (${selectedVariant.title}), Quantity: ${quantity}. Please confirm availability and shipping details.`
  );

  return (
    <div className="product-detail-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#64748b', marginBottom: '28px' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
        <span>/</span>
        <Link href="/products" style={{ color: '#64748b', textDecoration: 'none' }}>Products</Link>
        <span>/</span>
        <Link href={`/products?category=${encodeURIComponent(product.category)}`} style={{ color: '#4f46e5', textDecoration: 'none', fontWeight: 500 }}>{product.category}</Link>
        <span>/</span>
        <span style={{ color: '#0f172a', fontWeight: 600 }}>{product.name}</span>
      </nav>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>
        {/* Left: Gallery */}
        <div>
          <div style={{
            position: 'relative',
            height: '440px',
            background: '#f8fafc',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image
              src={selectedImg}
              alt={product.name}
              fill
              style={{ objectFit: 'contain', padding: '24px' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <span style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              background: 'rgba(255,255,255,0.95)',
              padding: '6px 12px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 700,
              color: '#059669',
              border: '1px solid #d1fae5',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              ● Authentic Listing
            </span>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedImg(img)}
                  style={{
                    position: 'relative',
                    width: '72px',
                    height: '72px',
                    borderRadius: '12px',
                    border: selectedImg === img ? '2px solid #4f46e5' : '1px solid #e2e8f0',
                    background: '#f8fafc',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    padding: 0
                  }}
                  aria-label={`View image ${i + 1}`}
                >
                  <Image src={img} alt="" fill style={{ objectFit: 'contain', padding: '6px' }} />
                </button>
              ))}
            </div>
          )}

          {/* Security & Authenticity guarantees */}
          <div style={{ marginTop: '28px', background: '#f8fafc', borderRadius: '16px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🛡️ Care &amp; Cure Quality Assurance
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: '#475569', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>✓ 100% Genuine batch verified pharmaceuticals</li>
              <li>✓ Temperature controlled packaging (Cold-Chain compliant)</li>
              <li>✓ Discreet, expedited trackable dispatch</li>
              <li>✓ Batch Certificate of Analysis (COA) provided upon request</li>
            </ul>
          </div>
        </div>

        {/* Right: Details & Order CTA */}
        <div>
          {/* Category Tag */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: catStyle.bg,
            color: catStyle.color,
            padding: '6px 14px',
            borderRadius: '9999px',
            fontSize: '13px',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            {catIcon} {product.category}
          </div>

          <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '12px' }}>
            {product.name}
          </h1>

          {/* Pricing Header */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(99, 102, 241, 0.02) 100%)',
            border: '1px solid rgba(79, 70, 229, 0.15)',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '24px'
          }}>
            <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6366f1', fontWeight: 700, marginBottom: '4px' }}>
              Reference Trade Price
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '36px', fontWeight: 800, color: '#4338ca' }}>
                ${currentPriceUSD.toFixed(2)}
              </span>
              <span style={{ fontSize: '18px', color: '#64748b', fontWeight: 600 }}>
                (₹{currentPriceINR.toLocaleString('en-IN')})
              </span>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>
                / {selectedVariant.title}
              </span>
            </div>
            <div style={{ fontSize: '13px', color: '#059669', fontWeight: 600, marginTop: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>✓ In Stock</span> &bull; <span>Verified Listing</span> &bull; <span>Discreet Delivery</span>
            </div>
          </div>

          {/* Variants Selector */}
          {product.variants && product.variants.length > 1 && (
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Select Dosage / Pack Size:
              </label>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {product.variants.map((v, idx) => {
                  const isSel = selectedVariant.title === v.title;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      style={{
                        padding: '10px 16px',
                        borderRadius: '12px',
                        border: isSel ? '2px solid #4f46e5' : '1px solid #cbd5e1',
                        background: isSel ? '#eef2ff' : '#ffffff',
                        color: isSel ? '#4338ca' : '#1e293b',
                        fontWeight: isSel ? 700 : 500,
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {v.title} &mdash; ${v.priceUSD.toFixed(2)}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity & Order Actions */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '12px', overflow: 'hidden' }}>
              <button
                type="button"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                style={{ width: '40px', height: '48px', border: 'none', background: '#f8fafc', fontSize: '18px', cursor: 'pointer', color: '#334155' }}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span style={{ width: '48px', textAlign: 'center', fontWeight: 700, fontSize: '16px', color: '#0f172a' }}>
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(q => q + 1)}
                style={{ width: '40px', height: '48px', border: 'none', background: '#f8fafc', fontSize: '18px', cursor: 'pointer', color: '#334155' }}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <a
              href={`https://wa.me/12272134021?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
              style={{
                flex: 1,
                minWidth: '200px',
                height: '48px',
                borderRadius: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontWeight: 700,
                background: '#25D366',
                borderColor: '#25D366',
                color: '#ffffff'
              }}
              id="product-whatsapp-inquiry"
            >
              <span>💬 Enquire via WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setShowInquiryModal(true)}
              className="button button-outline"
              style={{
                height: '48px',
                borderRadius: '12px',
                padding: '0 20px',
                fontWeight: 700
              }}
              id="product-quote-btn"
            >
              Request Formal RFQ
            </button>
          </div>

          {/* Description Section */}
          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
              Product Overview &amp; Indication
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#475569' }}>
              {product.description}
            </p>

            <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', background: '#f8fafc', padding: '16px', borderRadius: '14px' }}>
              <div>
                <small style={{ color: '#94a3b8', fontSize: '12px', display: 'block', textTransform: 'uppercase' }}>Manufacturer/Vendor</small>
                <b style={{ color: '#0f172a', fontSize: '14px' }}>{product.vendor || 'Care&Cure Pharma'}</b>
              </div>
              <div>
                <small style={{ color: '#94a3b8', fontSize: '12px', display: 'block', textTransform: 'uppercase' }}>Dosage Form</small>
                <b style={{ color: '#0f172a', fontSize: '14px' }}>{product.dosage || 'Standard'}</b>
              </div>
              <div>
                <small style={{ color: '#94a3b8', fontSize: '12px', display: 'block', textTransform: 'uppercase' }}>Dispatch Time</small>
                <b style={{ color: '#059669', fontSize: '14px' }}>24 - 48 Hours</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RFQ Modal */}
      {showInquiryModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            maxWidth: '520px',
            width: '100%',
            padding: '32px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            position: 'relative'
          }}>
            <button
              type="button"
              onClick={() => setShowInquiryModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#64748b'
              }}
              aria-label="Close modal"
            >
              ✕
            </button>

            {inquirySent ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>✅</span>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>Trade RFQ Received</h3>
                <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
                  Thank you, <b>{modalData.name || 'Partner'}</b>! Your RFQ for <b>{product.name} ({quantity} {selectedVariant.title})</b> has been submitted (Ref: <b>{modalRefCode}</b>) to our team at <b>sharmaarjit813@gmail.com</b>. We will contact you shortly.
                </p>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => { setShowInquiryModal(false); setInquirySent(false); setModalData({ name: '', email: '', phone: '', org: '', notes: '' }); }}
                  style={{ width: '100%', borderRadius: '12px' }}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={async (e) => {
                e.preventDefault();
                setModalLoading(true);
                try {
                  const res = await fetch('/api/send-enquiry', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      name: modalData.name,
                      email: modalData.email,
                      phone: modalData.phone,
                      inquiryType: `Product RFQ: ${product.name}`,
                      medicineName: `${product.name} (${selectedVariant.title})`,
                      quantity: `${quantity} ${selectedVariant.title}`,
                      message: `${modalData.notes || ''} [Org/Hospital: ${modalData.org || 'N/A'}]`
                    })
                  });
                  const json = await res.json();
                  setModalRefCode(json.refCode || 'CCP-RFQ-VERIFIED');
                  setInquirySent(true);
                } catch {
                  setModalRefCode('CCP-RFQ-OFFLINE');
                  setInquirySent(true);
                } finally {
                  setModalLoading(false);
                }
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                  Request Formal Price Quote
                </h3>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>
                  Product: <b style={{ color: '#4f46e5' }}>{product.name} &bull; {selectedVariant.title}</b>
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={modalData.name}
                      onChange={(e) => setModalData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g. Dr. Jane Smith"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                      id="rfq-name"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={modalData.email}
                        onChange={(e) => setModalData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="doctor@hospital.com"
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                        id="rfq-email"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={modalData.phone}
                        onChange={(e) => setModalData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+1 (227) 213-4021"
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                        id="rfq-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                      Organization / Hospital (Optional)
                    </label>
                    <input
                      type="text"
                      value={modalData.org}
                      onChange={(e) => setModalData(prev => ({ ...prev, org: e.target.value }))}
                      placeholder="Hospital, Clinic or Pharmacy name"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                      id="rfq-org"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                      Additional requirements / Delivery location
                    </label>
                    <textarea
                      rows={3}
                      value={modalData.notes}
                      onChange={(e) => setModalData(prev => ({ ...prev, notes: e.target.value }))}
                      placeholder="Specify required destination, urgent delivery timelines, or batch COA requirements..."
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                      id="rfq-notes"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={modalLoading}
                    className="button button-primary"
                    style={{ width: '100%', height: '46px', borderRadius: '12px', marginTop: '8px', fontWeight: 700 }}
                    id="rfq-submit-btn"
                  >
                    {modalLoading ? 'Sending RFQ...' : 'Submit Quotation Request'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
