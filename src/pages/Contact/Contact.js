import { useState } from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import Button from "../../components/UI/Button/Button";
import { COMPANY } from "../../utils/constants";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your backend/email service of choice.
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact Us</span>
          <h1>Let's Find the Right Machine for You</h1>
          <p>Reach out for pricing, technical specs, or a site visit.</p>
        </div>
      </section>

      <section className="contact-info-strip">
        <div className="container info-grid">
          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Office Address</h4>
              <p>{COMPANY.address}</p>
            </div>
          </div>
          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
            </div>
          </div>
          <div className="info-card">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </div>
          </div>
          <div className="info-card">
            <FaWhatsapp />
            <div>
              <h4>WhatsApp</h4>
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer">
                +91 9920355333
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="container contact-grid">
          <div className="contact-form-box">
            <SectionTitle eyebrow="Get In Touch" title="Send Us a Message" align="left" />

            {submitted ? (
              <p className="form-success">Thanks — your message has been received. Our team will get back to you shortly.</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input type="text" placeholder="Full Name" required />
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="form-row">
                  <input type="tel" placeholder="Phone Number" />
                  <input type="text" placeholder="Company Name" />
                </div>
                <textarea placeholder="Tell us what you're looking for..." rows="5" required />
                <Button type="submit" variant="primary">Send Message</Button>
              </form>
            )}
          </div>

          <div className="contact-map">
            <a
              href="https://maps.app.goo.gl/WYiPgzSbsTazkzcP7"
              target="_blank"
              rel="noreferrer"
              aria-label="Open office location in Google Maps"
              style={{ display: "block", width: "100%", height: "100%" }}
            >
              <iframe
                title="Office Location"
                src={COMPANY.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: "none" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
