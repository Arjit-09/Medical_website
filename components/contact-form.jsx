"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CONTACT } from "../data/site";
function EnquiryForm() {
  const params = useSearchParams();
  const [type, setType] = useState(
    params.get("type") === "missing" ? "missing" : "order",
  );
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
      if (!response.ok || !result.success)
        throw new Error(
          result.error || "We couldn’t send your request. Please try again.",
        );
      setReference(result.refCode);
      setState("success");
      form.reset();
    } catch (err) {
      setError(err.message || "Please try again or contact us directly.");
      setState("idle");
    }
  }
  return (
    <div className="form-card">
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
          Missing product
        </button>
      </div>
      {state === "success" ? (
        <div className="success-state" role="status">
          <span className="success-check">✓</span>
          <h2>Request sent</h2>
          <p>Thank you. Our team will contact you about your request.</p>
          <p className="muted">Reference: {reference}</p>
          <button className="button" onClick={() => setState("idle")}>
            Send another request
          </button>
        </div>
      ) : (
        <>
          <h2>
            {type === "missing"
              ? "Request a product"
              : "Enquire about an order"}
          </h2>
          <p className="form-description">
            {type === "missing"
              ? "Tell us what you’re looking for. We’ll check availability."
              : "Share the product and quantity you need."}
          </p>
          <form onSubmit={submit}>
            <div className="form-grid">
              <label>
                Your name
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={120}
                />
              </label>
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                />
              </label>
              <label className="full">
                Phone / WhatsApp <span className="optional">(optional)</span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={40}
                />
              </label>
              <label className="full">
                Product name
                <input
                  key={params.get("product") || "product"}
                  name="medicineName"
                  defaultValue={params.get("product") || ""}
                  placeholder="Product name and strength, if known"
                  required
                  maxLength={200}
                />
              </label>
              <label className="full">
                Quantity <span className="optional">(optional)</span>
                <input
                  name="quantity"
                  placeholder="e.g. 2 packs of 30 tablets"
                  maxLength={120}
                />
              </label>
              <label className="full">
                Message <span className="optional">(optional)</span>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Anything else you’d like us to know"
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
              We’ll use these details to respond to your enquiry.
            </p>
            {error && (
              <p className="form-error" role="alert">
                {error} You can also{" "}
                <a href={`mailto:${CONTACT.email}`}>email us directly</a>.
              </p>
            )}
            <button
              className="button submit-button"
              disabled={state === "sending"}
            >
              {state === "sending"
                ? "Sending…"
                : type === "missing"
                  ? "Send product request"
                  : "Send order enquiry"}{" "}
              <span>→</span>
            </button>
            <p className="form-note">
              This is an enquiry. No payment is taken.
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
