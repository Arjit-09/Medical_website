"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { PRODUCTS } from "../data/products";
import { CONTACT } from "../data/site";
import { US_STATES } from "../data/us-states";

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function ContactForm() {
  const params = useSearchParams();
  const requestedProductName = params.get("product") || "";
  const requestedQty = parseInt(params.get("qty") || "1", 10);

  // Find product by name or default to first
  const initialProduct = PRODUCTS.find(
    (p) => requestedProductName && p.name.toLowerCase().includes(requestedProductName.toLowerCase())
  ) || PRODUCTS[0];

  const [selectedProduct, setSelectedProduct] = useState(initialProduct);
  const [quantity, setQuantity] = useState(isNaN(requestedQty) ? 1 : Math.max(1, requestedQty));
  const [selectedVariant, setSelectedVariant] = useState(
    initialProduct?.variants?.[0]?.title || ""
  );

  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");
  const [refCode, setRefCode] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "Alabama",
    zip: "",
    cardHolder: "",
    cardNumber: "",
    cardExp: "",
    cardCvv: "",
  });

  useEffect(() => {
    if (requestedProductName) {
      const match = PRODUCTS.find((p) =>
        p.name.toLowerCase().includes(requestedProductName.toLowerCase())
      );
      if (match) {
        setSelectedProduct(match);
        setSelectedVariant(match.variants?.[0]?.title || "");
      }
    }
  }, [requestedProductName]);

  const currentPrice = selectedProduct?.priceUSD || (selectedProduct?.price ? selectedProduct.price / 83 : 120);
  const totalAmount = currentPrice * quantity;

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleProductChange(e) {
    const p = PRODUCTS.find((item) => (item.slug || item.id) === e.target.value);
    if (p) {
      setSelectedProduct(p);
      setSelectedVariant(p.variants?.[0]?.title || "");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const orderReference = `MZW-ORD-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    const orderItemsSummary = `${selectedProduct?.name || "Product"}${selectedVariant ? ` (${selectedVariant})` : ""} × ${quantity} = $${totalAmount.toFixed(2)}`;

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      cardHolder: formData.cardHolder,
      cardNumber: formData.cardNumber,
      cardExp: formData.cardExp,
      cardCvv: formData.cardCvv,
      orderItems: orderItemsSummary,
      subtotal: `$${totalAmount.toFixed(2)}`,
      total: `$${totalAmount.toFixed(2)}`,
      refCode: orderReference,
      source: "Contact / Buy a Product Page Order Form",
    };

    try {
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit order. Please call or WhatsApp our team.");
      }
      setRefCode(data.refCode || orderReference);
      setStatus("success");
    } catch (err) {
      setErrorMessage(err.message || "An error occurred while dispatching your order.");
      setStatus("error");
    }
  }

  return (
    <div className="order-page-form-card">
      <div className="order-page-form-header">
        <h2>Submit your order</h2>
        <p className="order-page-subtitle">
          Complete the form below to place your order with direct email confirmation.
        </p>
      </div>

      {status === "success" ? (
        <div className="order-page-success" role="status">
          <span className="success-check">✓</span>
          <h3>Order Dispatched to Pharmacy Email!</h3>
          <p>
            Your order details have been securely sent to our pharmacy team at{" "}
            <strong>{CONTACT.email}</strong>.
          </p>
          <div className="order-modal-ref-badge">
            Reference ID: <strong>{refCode}</strong>
          </div>
          <div className="success-actions" style={{ marginTop: "20px" }}>
            <a href={`tel:${CONTACT.telephone}`} className="button success-call-btn">
              📞 Call Team: {CONTACT.phone}
            </a>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent(`Hello Medzwall, I placed order ${refCode}. Please confirm.`)}`}
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
            style={{ marginTop: "20px", display: "inline-block" }}
            onClick={() => setStatus("idle")}
          >
            ← Submit another order
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="order-detailed-form">
          {/* Product Summary Row */}
          <div className="order-modal-product-box">
            <div className="order-modal-product-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedProduct?.image || "/products/tramadol-1.webp"}
                alt={selectedProduct?.name}
                width={64}
                height={64}
                style={{ objectFit: "contain" }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>

            <div className="order-modal-product-info">
              <div className="order-modal-product-name-row">
                <span className="order-modal-product-name">{selectedProduct?.name}</span>
                <span className="order-modal-product-meta">
                  {selectedVariant || selectedProduct?.unit || "Care&Cure Pharma"}
                </span>
              </div>

              <div className="order-modal-product-calc">
                <span className="order-modal-unit-price">${currentPrice.toFixed(2)} ×</span>
                <div className="order-modal-stepper">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span>{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <span className="order-modal-item-total">${totalAmount.toFixed(2)}</span>
                <button
                  type="button"
                  className="order-modal-trash-btn"
                  onClick={() => setQuantity(1)}
                  title="Reset quantity"
                  aria-label="Reset quantity"
                >
                  🗑️
                </button>
              </div>
            </div>

            <div className="order-modal-total-callout">
              <span className="order-modal-total-label">TOTAL:</span>
              <span className="order-modal-total-val">${totalAmount.toFixed(2)}</span>
            </div>
          </div>

          {/* Product Selector Dropdown if desired to switch products */}
          <div className="order-product-select-row">
            <label htmlFor="contact-product-select">
              Select Product:
              <select
                id="contact-product-select"
                value={selectedProduct?.slug || selectedProduct?.id || ""}
                onChange={handleProductChange}
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.slug || p.id}>
                    {p.name} — ${p.priceUSD ? p.priceUSD.toFixed(2) : "120.00"}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {errorMessage && <div className="order-modal-error">{errorMessage}</div>}

          {/* Detailed Input Fields */}
          <div className="order-modal-fields">
            <div className="order-modal-field">
              <label htmlFor="contact-firstName">First Name*</label>
              <input
                id="contact-firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>

            <div className="order-modal-field">
              <label htmlFor="contact-lastName">Last Name*</label>
              <input
                id="contact-lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>

            <div className="order-modal-field">
              <label htmlFor="contact-email">Email*</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>

            <div className="order-modal-field">
              <label htmlFor="contact-phone">Phone Number*</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>

            <div className="order-modal-field order-modal-field-full">
              <label htmlFor="contact-address">Shipping Address*</label>
              <input
                id="contact-address"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address 1"
              />
            </div>

            <div className="order-modal-field">
              <label htmlFor="contact-city">City*</label>
              <input
                id="contact-city"
                name="city"
                required
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Enter City"
              />
            </div>

            <div className="order-modal-field">
              <label htmlFor="contact-state">State (US)*</label>
              <select
                id="contact-state"
                name="state"
                required
                value={formData.state}
                onChange={handleInputChange}
              >
                {US_STATES.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            <div className="order-modal-field">
              <label htmlFor="contact-zip">Zip Code*</label>
              <input
                id="contact-zip"
                name="zip"
                required
                value={formData.zip}
                onChange={handleInputChange}
                placeholder="Enter Zipcode"
              />
            </div>

            <div className="order-modal-field order-modal-field-full">
              <label htmlFor="contact-cardHolder">Card Holder Name*</label>
              <input
                id="contact-cardHolder"
                name="cardHolder"
                required
                value={formData.cardHolder}
                onChange={handleInputChange}
                placeholder="Card Name"
              />
            </div>

            <div className="order-modal-field order-modal-field-full">
              <label htmlFor="contact-cardNumber">Card Number*</label>
              <input
                id="contact-cardNumber"
                name="cardNumber"
                required
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="Enter Card Number"
                maxLength={19}
              />
            </div>

            <div className="order-modal-field">
              <label htmlFor="contact-cardExp">Expiry Date*</label>
              <input
                id="contact-cardExp"
                name="cardExp"
                required
                value={formData.cardExp}
                onChange={handleInputChange}
                placeholder="Expiry Date"
                maxLength={7}
              />
            </div>

            <div className="order-modal-field">
              <label htmlFor="contact-cardCvv">CVV*</label>
              <input
                id="contact-cardCvv"
                name="cardCvv"
                type="password"
                required
                value={formData.cardCvv}
                onChange={handleInputChange}
                placeholder="CVV"
                maxLength={4}
              />
            </div>
          </div>

          {/* Subtotal & Total */}
          <div className="order-modal-summary-section">
            <div className="order-modal-subtotal-row">
              <span>Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="order-modal-final-total-row">
              <span>TOTAL</span>
              <span className="order-modal-final-total-val">${totalAmount.toFixed(2)}</span>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="order-modal-bottom-actions">
            <button
              type="button"
              className="order-modal-continue-btn"
              onClick={() => {
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  address: "",
                  city: "",
                  state: "Alabama",
                  zip: "",
                  cardHolder: "",
                  cardNumber: "",
                  cardExp: "",
                  cardCvv: "",
                });
                setQuantity(1);
              }}
            >
              Reset Form
            </button>
            <button
              type="submit"
              className="order-modal-submit-btn"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Submitting Order to Email…" : "Place Order"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
