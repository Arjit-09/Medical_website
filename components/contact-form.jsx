'use client';

import { useState } from 'react';
import { PRODUCTS } from '../data/products';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [refCode, setRefCode] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Bulk Wholesale RFQ',
    medicineName: '',
    quantity: '',
    message: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setRefCode(data.refCode);
        setSubmitted(true);
      } else {
        setError(data.error || 'Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setError('Network error. Please check your connection or call us directly at +1 (227) 213-4021.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="contact-form-card contact-success-card">
        <div className="success-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3>Enquiry Sent Successfully</h3>
        <p>
          Thank you, <b>{formData.name || 'Healthcare Partner'}</b>! Your <b>{formData.inquiryType}</b> has been sent to our team. We will respond within 2 hours.
        </p>
        <div className="success-meta-box">
          <div>
            <small>Reference Code</small>
            <b>{refCode}</b>
          </div>
          <div>
            <small>Contact Follow-up</small>
            <b>{formData.phone || formData.email}</b>
          </div>
          <div>
            <small>Estimated Response</small>
            <b>Under 2 Hours (Business Desk)</b>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setRefCode('');
            setFormData({
              name: '',
              email: '',
              phone: '',
              inquiryType: 'Bulk Wholesale RFQ',
              medicineName: '',
              quantity: '',
              message: ''
            });
          }}
          className="button button-outline"
          id="send-another-inquiry"
        >
          Send Another Request &rarr;
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <div className="form-card-header">
        <div className="form-badge">
          <span className="live-dot" />
          <span>Priority RFQ Dispatch Channel</span>
        </div>
        <h3>Send a Trade Enquiry or RFQ</h3>
        <p>
          Direct channel to our New Delhi pharmaceutical desk. We provide batch COAs, pricing sheets, and cold-chain schedules.
        </p>
      </div>

      <form onSubmit={handleSubmit} id="care-cure-contact-form" className="contact-form-grid">
        {/* Full Name & Email */}
        <div className="form-row form-row-2">
          <div className="form-group">
            <label htmlFor="contact-name">
              Full Name <span className="req">*</span>
            </label>
            <div className="input-with-icon">
              <span className="input-icon">👤</span>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Dr. Rajesh / Healthcare Buyer"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">
              Official Email <span className="req">*</span>
            </label>
            <div className="input-with-icon">
              <span className="input-icon">✉️</span>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="procurement@hospital.org"
              />
            </div>
          </div>
        </div>

        {/* Phone & Inquiry Type */}
        <div className="form-row form-row-2">
          <div className="form-group">
            <label htmlFor="contact-phone">
              Phone / WhatsApp <span className="req">*</span>
            </label>
            <div className="input-with-icon">
              <span className="input-icon">📱</span>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 79493 01717"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact-type">Enquiry Type</label>
            <div className="input-with-icon">
              <span className="input-icon">📋</span>
              <select
                id="contact-type"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
              >
                <option value="Bulk Wholesale RFQ">Bulk Wholesale RFQ</option>
                <option value="Specific Medicine Availability">Specific Medicine Availability</option>
                <option value="Cold-Chain Urgent Dispatch (2-8°C)">Cold-Chain Urgent Dispatch (2-8°C)</option>
                <option value="Export & Regulatory Documentation (COA/GMP)">Export &amp; Regulatory Documentation</option>
                <option value="Hospital Formulary Contract">Hospital Formulary Contract</option>
                <option value="Other Medical Enquiry">Other Medical Enquiry</option>
              </select>
            </div>
          </div>
        </div>

        {/* Medicine Name & Quantity */}
        <div className="form-row form-row-2">
          <div className="form-group">
            <label htmlFor="contact-medicine">Medicine Name (From Catalogue or Custom)</label>
            <div className="input-with-icon">
              <span className="input-icon">💊</span>
              <input
                type="text"
                id="contact-medicine"
                name="medicineName"
                list="catalogue-medicines-list"
                value={formData.medicineName}
                onChange={handleChange}
                placeholder="Select from catalogue or type medicine..."
              />
              <datalist id="catalogue-medicines-list">
                {PRODUCTS.map(p => (
                  <option key={p.id} value={`${p.name} (${p.category})`} />
                ))}
              </datalist>
            </div>
            <small style={{ fontSize: '11px', color: '#64748b', marginTop: '4px', display: 'block' }}>
              💡 Select any of our 62+ catalogue medicines or type custom requirements
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="contact-qty">Quantity / Pack Size</label>
            <div className="input-with-icon">
              <span className="input-icon">📦</span>
              <input
                type="text"
                id="contact-qty"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 50 boxes / 500 vials"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="contact-message">
            Requirements / Destination Country <span className="req">*</span>
          </label>
          <div className="textarea-wrap">
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your delivery destination, required certificates (COA/MSDS/GMP), pack configurations, or delivery urgency..."
            />
          </div>
        </div>

        {error && (
          <div style={{
            background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px',
            padding: '12px 16px', color: '#dc2626', fontSize: '14px', fontWeight: 500
          }}>
            ⚠️ {error}
          </div>
        )}

        <button
          type="submit"
          className="button button-primary submit-btn"
          disabled={loading}
          id="contact-submit-btn"
        >
          {loading ? (
            <span className="btn-spinner-wrap">
              <span className="spinner" />
              <span>Sending Enquiry...</span>
            </span>
          ) : (
            <span>Submit Trade Enquiry &rarr;</span>
          )}
        </button>

        <div className="form-security-footer">
          <span>🔒 Strict Medical Confidentiality</span>
          <span>⚡ WHO-GMP Certified Sourcing</span>
          <span>📜 Pro-Forma Invoice Provided</span>
        </div>
      </form>
    </div>
  );
}
