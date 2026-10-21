'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="contact-form-card contact-success-card">
        <div className="success-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3>Enquiry Transmitted Successfully</h3>
        <p>
          Thank you, <b>{formData.name || 'Healthcare Partner'}</b>! Our New Delhi pharmacy desk has logged your <b>{formData.inquiryType}</b> requirement.
        </p>
        <div className="success-meta-box">
          <div>
            <small>Direct Reference</small>
            <b>CCP-RFQ-#{Math.floor(100000 + Math.random() * 900000)}</b>
          </div>
          <div>
            <small>Contact Follow-up</small>
            <b>{formData.phone || formData.email}</b>
          </div>
          <div>
            <small>Estimated Response Time</small>
            <b>Under 2 Hours (Business Desk)</b>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
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
          Direct channel to our New Delhi central pharmaceutical desk. Batch COAs, pricing tier sheets, and cold-chain schedules provided.
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
              Phone / WhatsApp Number <span className="req">*</span>
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
                placeholder="+1 (227) 213-4021 / +91 ..."
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact-type">Enquiry Nature</label>
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
                <option value="Export & Regulatory Documentation (COA/GMP)">Export &amp; Regulatory Documentation (COA/GMP)</option>
                <option value="Hospital Formulary Contract">Hospital Formulary Contract</option>
                <option value="Other Medical Enquiry">Other Medical Enquiry</option>
              </select>
            </div>
          </div>
        </div>

        {/* Medicine Name & Target Quantity */}
        <div className="form-row form-row-2">
          <div className="form-group">
            <label htmlFor="contact-medicine">Medicine Name / Active Salt (Optional)</label>
            <div className="input-with-icon">
              <span className="input-icon">💊</span>
              <input
                type="text"
                id="contact-medicine"
                name="medicineName"
                value={formData.medicineName}
                onChange={handleChange}
                placeholder="e.g. Tramadol, Xanax, Amoxicillin"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact-qty">Quantity Required / Pack Size</label>
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

        {/* Detailed Comments */}
        <div className="form-group">
          <label htmlFor="contact-message">
            Detailed Requirement or Destination Country <span className="req">*</span>
          </label>
          <div className="textarea-wrap">
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about target delivery destination port/country, required certificates (COA/MSDS/GMP), pack configurations, or delivery urgency..."
            />
          </div>
        </div>

        <button
          type="submit"
          className="button button-primary submit-btn"
          disabled={loading}
          id="contact-submit-btn"
        >
          {loading ? (
            <span className="btn-spinner-wrap">
              <span className="spinner" />
              <span>Transmitting Enquiry...</span>
            </span>
          ) : (
            <span>Submit Trade Enquiry &rarr;</span>
          )}
        </button>

        <div className="form-security-footer">
          <span>🔒 Strict Medical Confidentiality</span>
          <span>⚡ Certified WHO-GMP Sourcing</span>
          <span>📜 Official Pro-Forma Invoice Provided</span>
        </div>
      </form>
    </div>
  );
}
