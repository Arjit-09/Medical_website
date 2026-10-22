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
          email: formData.phone.includes('@') ? formData.phone : '',
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
        setError(data.error || 'Something went wrong. Please call us directly.');
      }
    } catch {
      setError('Network error. Please call +91 79493 01717.');
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
        <h3>Request Sent!</h3>
        <p>
          Our team will check availability for <b>{formData.medicineName}</b> and contact you on <b>{formData.phone}</b> within 24 hours.
        </p>
        <div className="mnf-success-ref">
          <span className="mnf-ref-label">Reference</span>
          <span className="mnf-ref-code">{refCode}</span>
        </div>
        <button className="button button-outline" onClick={() => { setSubmitted(false); setRefCode(''); setFormData({ name: '', phone: '', medicineName: '', strength: '', quantity: '', additionalNotes: '' }); }}>
          Submit Another &rarr;
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} id="medicine-not-found-form" className="mnf-form">
      <div className="form-row form-row-2">
        <div className="form-group">
          <label htmlFor="mnf-name">Your Name <span className="req">*</span></label>
          <div className="input-with-icon">
            <span className="input-icon">👤</span>
            <input type="text" id="mnf-name" name="name" required value={formData.name} onChange={handleChange} placeholder="Dr. Priya / Pharmacy Manager" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="mnf-phone">Phone / WhatsApp <span className="req">*</span></label>
          <div className="input-with-icon">
            <span className="input-icon">📱</span>
            <input type="tel" id="mnf-phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
          </div>
        </div>
      </div>

      <div className="form-row form-row-2">
        <div className="form-group">
          <label htmlFor="mnf-medicine">Medicine / Brand Name <span className="req">*</span></label>
          <div className="input-with-icon">
            <span className="input-icon">💊</span>
            <input type="text" id="mnf-medicine" name="medicineName" required value={formData.medicineName} onChange={handleChange} placeholder="e.g. Keytruda, Revlimid, Zytiga" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="mnf-strength">Strength / Dosage</label>
          <div className="input-with-icon">
            <span className="input-icon">⚗️</span>
            <input type="text" id="mnf-strength" name="strength" value={formData.strength} onChange={handleChange} placeholder="e.g. 100mg, 500mg/5ml" />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="mnf-qty">Quantity &amp; Any Additional Details</label>
        <div className="textarea-wrap">
          <textarea
            id="mnf-qty"
            name="additionalNotes"
            rows={3}
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Quantity needed, country of delivery, certificates required (COA/GMP), urgency, or any other details..."
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
          <span className="btn-spinner-wrap"><span className="spinner" /><span>Sending...</span></span>
        ) : (
          <span>🔍 Submit Medicine Request &rarr;</span>
        )}
      </button>

      <div className="form-security-footer">
        <span>🔒 Confidential</span>
        <span>⚡ 24hr Response</span>
        <span>📜 COA Provided</span>
      </div>
    </form>
  );
}
