import "./ContactCTA.css";
import Button from "../../UI/Button/Button";

function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container cta-inner">
        <h2>Need Help Choosing the Right Machine?</h2>
        <p>Our team can help you find the right equipment for your production line and budget.</p>

        <div className="cta-buttons">
          <Button to="/contact" variant="primary">
            Contact Us
          </Button>
          <Button to="/contact" variant="outline" className="outline-light">
            Request Quote
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
