import { Suspense } from "react";
import ContactForm from "../../components/contact-form";
import { CONTACT } from "../../data/site";
export const metadata = { title: "Contact us" };
export default function ContactPage() {
  return (
    <section className="page-width contact-layout">
      <div className="contact-intro">
        <p className="eyebrow">LET’S TALK</p>
        <h1>
          How can we <br />
          help you?
        </h1>
        <p>
          Enquire about an order or request a product you couldn’t find. Our
          team will get back to you with the details.
        </p>
        <div className="contact-details">
          <div>
            <small>EMAIL US</small>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
          <div>
            <small>CALL US</small>
            <a href={`tel:${CONTACT.telephone}`}>{CONTACT.phone}</a>
          </div>
          <div>
            <small>WHATSAPP</small>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with our team ↗
            </a>
          </div>
          <div>
            <small>ADDRESS</small>
            <p>{CONTACT.address}</p>
          </div>
        </div>
      </div>
      <Suspense fallback={<p>Loading form…</p>}>
        <ContactForm />
      </Suspense>
    </section>
  );
}
