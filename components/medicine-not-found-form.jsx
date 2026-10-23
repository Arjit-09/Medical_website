'use client';

import { useState } from 'react';

export default function MedicineNotFoundForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [refCode, setRefCode] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    medicineName: '',
    strength: '',
    quantity: '',
    additionalNotes: ''
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
      const res = await fetch('/api/send-medicine-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          medicineName: formData.medicineName,
          strength: formData.strength,
          quantity: formData.quantity,
          additionalNotes: formData.additionalNotes
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setRefCode(data.refCode);
        setSubmitted(true);
      } else {
        setError(data.error || 'Something went wrong. Please call +1 8046341990 directly.');
      }
    } catch {
      setError('Network error. Please try again or call our support desk at +1 8046341990.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="mnf-success">
        <div className="mnf-success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3>Request Submitted Successfully!</h3>
        <p>
          Your sourcing request for <b>{formData.medicineName}</b> has been received and sent directly to our team at <b>Usonlinemedshop247@gmail.com</b>.
        </p>
        <div className="mnf-success-ref">
          <span className="mnf-ref-label">Reference Tracking Code</span>
          <span className="mnf-ref-code">{refCode}</span>
        </div>
        <p style={{ fontSize: '13px', color: '#64748b', marginTop: '12px' }}>
          We will check inventory and supplier stocks and contact you at <b>{formData.phone || formData.email}</b> within 24 hours. For urgent needs, call <b>+1 8046341990</b>.
        </p>
        <button
          type="button"
          className="button button-outline"
          onClick={() => {
            setSubmitted(false);
            setRefCode('');
            setFormData({ name: '', phone: '', email: '', medicineName: '', strength: '', quantity: '', additionalNotes: '' });
          }}
          style={{ marginTop: '16px' }}
        >
          Submit Another Medicine Request &rarr;
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} id="medicine-not-found-form" className="mnf-form">
      <div className="form-row form-row-2">
        <div className="form-group">
          <label htmlFor="mnf-name">Your Full Name <span className="req">*</span></label>
          <div className="input-with-icon">
            <span className="input-icon">👤</span>
            <input
              type="text"
              id="mnf-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe / Healthcare Buyer"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="mnf-phone">Phone Number <span className="req">*</span></label>
          <div className="input-with-icon">
            <span className="input-icon">📱</span>
            <input
              type="tel"
              id="mnf-phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 8046341990"
            />
          </div>
        </div>
      </div>

      <div className="form-row form-row-2">
        <div className="form-group">
          <label htmlFor="mnf-email">Email Address (Optional)</label>
          <div className="input-with-icon">
            <span className="input-icon">✉️</span>
            <input
              type="email"
              id="mnf-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="buyer@domain.com"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="mnf-medicine">Medicine / Brand Name <span className="req">*</span></label>
          <div className="input-with-icon">
            <span className="input-icon">💊</span>
            <input
              type="text"
              id="mnf-medicine"
              name="medicineName"
              required
              value={formData.medicineName}
              onChange={handleChange}
              placeholder="e.g. Ozempic, Keytruda, Tramadol"
            />
          </div>
        </div>
      </div>

      <div className="form-row form-row-2">
        <div className="form-group">
          <label htmlFor="mnf-strength">Strength / Dosage</label>
          <div className="input-with-icon">
            <span className="input-icon">⚗️</span>
            <input
              type="text"
              id="mnf-strength"
              name="strength"
              value={formData.strength}
              onChange={handleChange}
              placeholder="e.g. 50mg, 100mg, 500mg/5ml"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="mnf-quantity">Quantity Needed</label>
          <div className="input-with-icon">
            <span className="input-icon">📦</span>
            <input
              type="text"
              id="mnf-quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 2 boxes, 10 packs, 100 tabs"
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="mnf-notes">Additional Notes &amp; Delivery Requirements</label>
        <div className="textarea-wrap">
          <textarea
            id="mnf-notes"
            name="additionalNotes"
            rows={2}
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Delivery address, urgency, preferred generic brand, or special packaging requests..."
          />
        </div>
      </div>

      {error && (
        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '10px 14px', color: '#dc2626', fontSize: '13px', fontWeight: 500 }}>
          ⚠️ {error}
        </div>
      )}

      <button type="submit" className="button button-primary submit-btn" disabled={loading} id="mnf-submit-btn" style={{ width: '100%' }}>
        {loading ? (
          <span className="btn-spinner-wrap"><span className="spinner" /><span>Submitting Request...</span></span>
        ) : (
          <span>🔍 Submit Medicine Request &rarr;</span>
        )}
      </button>

      <div className="form-security-footer">
        <span>🔒 Direct Transmission</span>
        <span>⚡ 24hr Desk Follow-Up</span>
        <span>📧 Dispatched to Usonlinemedshop247@gmail.com</span>
      </div>
    </form>
  );
}
