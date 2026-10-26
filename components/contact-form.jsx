"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CONTACT } from "../data/site";

function EnquiryForm() {
  const params = useSearchParams();
  const initialType = params.get("type") === "missing" ? "missing" : "order";

  const [type, setType] = useState(initialType);
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
      const response = await fetch(
        type === "missing" ? "/api/send-medicine-request" : "/api/send-enquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Unable to send. Please call or WhatsApp us directly.",
        );
      }
      setReference(result.refCode || "MZW-CONFIRMED");
      setState("success");
      form.reset();
    } catch (err) {
      setError(err.message || "Please call us directly at +1 8046341990.");
      setState("idle");
    }
  }

  return (
    <div className="form-card">
      {/* Exactly TWO tabs as requested */}
      <div className="form-tabs" role="group" aria-label="Request type">
        <button
          type="button"
          aria-pressed={type === "order"}
          disabled={state === "sending"}
          onClick={() => {
            setType("order");
            setState("idle");
            setError("");
          }}
        >
          Order enquiry
        </button>
        <button
          type="button"
          aria-pressed={type === "missing"}
          disabled={state === "sending"}
          onClick={() => {
            setType("missing");
            setState("idle");
            setError("");
          }}
        >
          Request product
        </button>
      </div>

      {state === "success" ? (
        <div className="success-state" role="status">
          <span className="success-check">✓</span>
          <h2>Request Sent Successfully</h2>
          <p>
            Your enquiry has been dispatched directly to our pharmacy team at{" "}
            <strong>{CONTACT.email}</strong>.
          </p>
          <p className="reference-code">Reference ID: <strong>{reference}</strong></p>
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
            ← Submit another enquiry
          </button>
        </div>
      ) : (
        <>
          <h2>
            {type === "missing" ? "Request a Product" : "Enquire About an Order"}
          </h2>
          <p className="form-description">
            {type === "missing"
              ? "Tell us what you're looking for. We will check availability and get back to you directly."
              : "Share the medicine and quantity you need. No payment taken online."}
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
                {type === "missing" ? "Medicine / Product Name *" : "Product Name & Strength *"}
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
              {state === "sending"
                ? "Sending directly…"
                : type === "missing"
                ? "Send Product Request"
                : "Send Order Enquiry"}{" "}
              <span>→</span>
            </button>

            <p className="form-note" style={{ textAlign: "center", marginTop: "10px" }}>
              Need urgent help?{" "}
              <a href={`tel:${CONTACT.telephone}`} style={{ color: "var(--green-primary)", fontWeight: 700 }}>
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
  return <EnquiryForm key={params.toString()} />;
}
