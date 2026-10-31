"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../components/cart-context";
import { CONTACT } from "../../data/site";

function OrderSummary({ items, subtotal, updateQty, removeItem }) {
  const shipping = 0; // FREE shipping

  return (
    <div className="order-summary-card">
      <h2 className="order-summary-title">
        <span>🛒</span> Order Summary
      </h2>

      {items.length === 0 ? (
        <div className="order-summary-empty">
          <p>Your cart is empty.</p>
          <Link href="/products" className="button">Browse Products</Link>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <div className="order-item" key={item.key}>
              <div className="order-item-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.name} width={70} height={70} style={{ objectFit: "contain" }} onError={(e) => { e.target.style.display = "none"; }} />
              </div>
              <div className="order-item-info">
                <p className="order-item-category">{item.category?.toUpperCase()}</p>
                <p className="order-item-name">{item.name}</p>
                {item.variant && <p className="order-item-variant">Pack Size: {item.variant}</p>}
                <div className="order-item-qty-row">
                  <button
                    type="button"
                    className="order-item-qty-ctrl"
                    onClick={() => updateQty(item.key, -1)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="order-item-qty-num">{item.quantity}</span>
                  <button
                    type="button"
                    className="order-item-qty-ctrl"
                    onClick={() => updateQty(item.key, 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <span className="order-item-price">${(item.priceUSD * item.quantity).toFixed(2)}</span>
                  <span className="order-item-per">${item.priceUSD.toFixed(2)} / pack</span>
                  <button
                    type="button"
                    className="cart-item-remove"
                    onClick={() => removeItem(item.key)}
                    aria-label="Remove item"
                    style={{ marginLeft: "auto", fontSize: "14px" }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="order-summary-totals">
            <div className="summary-row">
              <span>Subtotal ({items.length} Pack{items.length !== 1 ? "s" : ""})</span>
              <span>${subtotal.toFixed(2)} USD</span>
            </div>
            <div className="summary-row">
              <span>Discreet USPS Priority Shipping:</span>
              <span className="free-badge">FREE</span>
            </div>
            <div className="summary-row total-row">
              <strong>Total Amount:</strong>
              <strong>${subtotal.toFixed(2)} USD</strong>
            </div>
          </div>

          <div className="order-trust-list">
            <p className="order-trust-item">✓ 100% Plain Discreet Box (Zero medical label outside)</p>
            <p className="order-trust-item">✓ Tracked USPS Express Delivery (3–5 Business Days)</p>
            <p className="order-trust-item">✓ Instant Order Confirmation on Email &amp; WhatsApp</p>
          </div>
        </>
      )}
    </div>
  );
}

export default function CheckoutPage() {
  const { items, subtotal, clearCart, updateQty, removeItem } = useCart();
  const router = useRouter();
  const [state, setState] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");
  const [refCode, setRefCode] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (items.length === 0) {
      setError("Your cart is empty. Please add products before checking out.");
      return;
    }
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState("sending");
    setError("");

    const orderDetails = items
      .map((i) => `• ${i.name}${i.variant ? ` (${i.variant})` : ""} × ${i.quantity} = $${(i.priceUSD * i.quantity).toFixed(2)}`)
      .join("\n");

    const payload = {
      ...data,
      orderItems: orderDetails,
      subtotal: `$${subtotal.toFixed(2)} USD`,
      shipping: "FREE USPS Priority",
      total: `$${subtotal.toFixed(2)} USD`,
    };

    try {
      const res = await fetch("/api/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.error || "Unable to place order. Please call us directly.");
      }
      setRefCode(result.refCode || "MZW-ORD-CONFIRMED");
      clearCart();
      setState("success");
    } catch (err) {
      setError(err.message || `Please call us directly at ${CONTACT.phone}.`);
      setState("idle");
    }
  }

  if (state === "success") {
    return (
      <div className="checkout-success-page">
        <div className="checkout-success-card">
          <div className="success-icon">✓</div>
          <h1>Order Placed Successfully!</h1>
          <p>
            Your order has been sent to our pharmacy team at <strong>{CONTACT.email}</strong>.
            We will confirm your order within 24 hours via email or WhatsApp.
          </p>
          <p className="reference-code">
            Reference ID: <strong>{refCode}</strong>
          </p>
          <div className="success-actions">
            <a href={`tel:${CONTACT.telephone}`} className="button success-call-btn">
              📞 Call Team: {CONTACT.phone}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="button button-outline">
              💬 WhatsApp Us
            </a>
          </div>
          <Link href="/products" className="text-link" style={{ marginTop: "20px", display: "block" }}>
            ← Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      {/* SSL Badge */}
      <div className="checkout-ssl-bar">
        <span>🔒 256-Bit SSL Encrypted Checkout</span>
      </div>

      <div className="page-width checkout-grid">
        {/* Left: Shipping Form */}
        <div className="shipping-card">
          <h1 className="shipping-title">
            <span>📍</span> Shipping Information
          </h1>

          <form onSubmit={handleSubmit} id="checkout-form">
            <div className="shipping-form-grid">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  required
                  maxLength={80}
                  autoComplete="given-name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                  maxLength={80}
                  autoComplete="family-name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  maxLength={254}
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone / WhatsApp *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  required
                  maxLength={40}
                  autoComplete="tel"
                />
              </div>
              <div className="form-group form-group-full">
                <label htmlFor="address">Street Address *</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="123 Main Street"
                  required
                  maxLength={200}
                  autoComplete="street-address"
                />
              </div>
              <div className="form-group form-group-full">
                <label htmlFor="address2">Apartment, Suite, Unit (Optional)</label>
                <input
                  id="address2"
                  name="address2"
                  type="text"
                  placeholder="Apt 4B"
                  maxLength={100}
                  autoComplete="address-line2"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="New York"
                  required
                  maxLength={100}
                  autoComplete="address-level2"
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State *</label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  placeholder="NY"
                  required
                  maxLength={60}
                  autoComplete="address-level1"
                />
              </div>
              <div className="form-group">
                <label htmlFor="zip">ZIP Code *</label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  placeholder="10001"
                  required
                  maxLength={20}
                  autoComplete="postal-code"
                  pattern="[0-9\-\s]{3,10}"
                />
              </div>
            </div>

            {error && (
              <p className="form-error" role="alert">
                {error}{" "}
                <a href={`tel:${CONTACT.telephone}`}>Call us at {CONTACT.phone}</a>.
              </p>
            )}

            <button
              type="submit"
              form="checkout-form"
              className="checkout-submit-btn"
              disabled={state === "sending" || items.length === 0}
              aria-label="Complete order"
            >
              {state === "sending" ? "Placing Order…" : "Complete Order Now →"}
            </button>
          </form>
        </div>

        {/* Right: Order Summary */}
        <OrderSummary
          items={items}
          subtotal={subtotal}
          updateQty={updateQty}
          removeItem={removeItem}
        />
      </div>
    </div>
  );
}
