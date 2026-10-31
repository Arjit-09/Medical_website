"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CONTACT } from "../data/site";

function RequestProductForm() {
  const params = useSearchParams();
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState("sending");
    setError("");

    try {
      const response = await fetch("/api/send-medicine-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Unable to send. Please call or WhatsApp us directly.",
        );
      }
      setReference(result.refCode || "MZW-REQ-CONFIRMED");
      setState("success");
      form.reset();
    } catch (err) {
      setError(err.message || "Please call us directly at +1 8046341990.");
      setState("idle");
    }
  }

  return (
    <div className="form-card">
      {state === "success" ? (
        <div className="success-state" role="status">
          <span className="success-check">✓</span>
          <h2>Product Order Sent Successfully</h2>
          <p>
            Your buy request has been dispatched directly to our pharmacy team at{" "}
            <strong>{CONTACT.email}</strong>.
          </p>
          <p className="reference-code">
            Reference ID: <strong>{reference}</strong>
          </p>
          <div className="success-actions">
            <a href={`tel:${CONTACT.telephone}`} className="button success-call-btn">
              📞 Call Team: {CONTACT.phone}
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              💬 WhatsApp Us
            </a>
          </div>
          <button
            type="button"
            className="text-link"
            style={{ marginTop: "16px" }}
            onClick={() => setState("idle")}
          >
            ← Submit another buy order
          </button>
        </div>
      ) : (
        <>
          <h2>Buy a Product</h2>
          <p className="form-description">
            Tell us the medicine or healthcare product you want to buy. Our team will verify stock, pricing, and confirm your order promptly.
          </p>

          <form onSubmit={submit}>
            <div className="form-grid">
              <label>
                Your name *
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={120}
                  placeholder="Full Name"
                />
              </label>

              <label>
                Email address *
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@example.com"
                />
              </label>

              <label className="full">
                Phone / WhatsApp <span className="optional">(optional)</span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={40}
                  placeholder="+1 (804) 634-1990"
                />
              </label>

              <label className="full">
                Product Name & Strength *
                <input
                  key={params.get("product") || "product"}
                  name="medicineName"
                  defaultValue={params.get("product") || ""}
                  placeholder="e.g. Tramadol 100mg, Ativan 2mg"
                  required
                  maxLength={200}
                />
              </label>

              <label className="full">
                Quantity <span className="optional">(optional)</span>
                <input
                  name="quantity"
                  defaultValue={params.get("qty") || ""}
                  placeholder="e.g. 30 tablets / 1 box"
                  maxLength={120}
                />
              </label>

              <label className="full">
                Message <span className="optional">(optional)</span>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Delivery address, questions, or specific packaging instructions..."
                  maxLength={3000}
                />
              </label>
            </div>

            <div className="honeypot" aria-hidden="true">
              <label>
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <p className="form-note">
              Sent directly to <strong>{CONTACT.email}</strong>. No redirect.
            </p>

            {error && (
              <p className="form-error" role="alert">
                {error} You can also{" "}
                <a href={`tel:${CONTACT.telephone}`}>call us directly at {CONTACT.phone}</a>.
              </p>
            )}

            <button
              type="submit"
              className="button submit-button"
              disabled={state === "sending"}
            >
              {state === "sending" ? "Submitting order…" : "Buy Product Now"}{" "}
              <span>→</span>
            </button>

            <p className="form-note" style={{ textAlign: "center", marginTop: "10px" }}>
              Need urgent help?{" "}
              <a href={`tel:${CONTACT.telephone}`} style={{ color: "var(--primary)", fontWeight: 700 }}>
                📞 Call {CONTACT.phone}
              </a>
            </p>
          </form>
        </>
      )}
    </div>
  );
}

export default function ContactForm() {
  const params = useSearchParams();
  return <RequestProductForm key={params.toString()} />;
}
