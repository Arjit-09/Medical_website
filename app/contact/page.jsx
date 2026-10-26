import { Suspense } from "react";
import ContactForm from "../../components/contact-form";
import { CONTACT } from "../../data/site";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <div className="contact-page-wrapper">
      <section className="page-width contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">DIRECT PHARMACY SUPPORT</p>
          <h1>How Can We Help You Today?</h1>
          <p>
            Have a question about availability, dosage, pricing, or shipping?
            Call our team directly or submit your order below.
          </p>

          {/* Quick Direct Call & WhatsApp Action for Mobile / Fast Contact */}
          <div className="contact-quick-actions">
            <a
              href={`tel:${CONTACT.telephone}`}
              className="button contact-call-cta-btn"
              aria-label={`Call us at ${CONTACT.phone}`}
            >
              📞 Call Directly: {CONTACT.phone}
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline contact-whatsapp-cta-btn"
              aria-label="Chat on WhatsApp"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          <div className="contact-details">
            <div>
              <small>CALL US DIRECTLY</small>
              <a className="contact-phone-link" href={`tel:${CONTACT.telephone}`}>
                {CONTACT.phone}
              </a>
              <span className="timing-note">8:00 AM – 9:00 PM (Mon–Sat)</span>
            </div>
            <div>
              <small>DIRECT EMAIL</small>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
            <div>
              <small>PHARMACY ADDRESS</small>
              <p>{CONTACT.address}</p>
            </div>
          </div>
        </div>

        <div className="contact-form-column">
          <Suspense fallback={<p>Loading order form…</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
