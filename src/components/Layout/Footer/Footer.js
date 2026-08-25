import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3 className="footer-logo">Digital Print Solutions</h3>
          <p>
            Supplying industrial digital printing machines and print
            finishing equipment to commercial and packaging businesses.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/brands">Brands</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li><Link to="/products#digital-printing-machines">Digital Printing Machines</Link></li>
            {/* SYSFORM: Print Finishing Equipment link hidden while Sysform products are hidden */}
            {/* <li><Link to="/products#print-finishing-equipment">Print Finishing Equipment</Link></li> */}
            <li><Link to="/brands#yintech">Yintech</Link></li>
            {/* SYSFORM: brand link hidden while this brand is hidden from the showcase */}
            {/* <li><Link to="/brands#sysform">Sysform</Link></li> */}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt />
              <span>294, Perin Nariman Street, Haroon House, 1st Floor, Opp.RBI., Fort, Mumbai 400001. India</span>
            </li>
            <li>
              <FaPhoneAlt />
              <a href="tel:+91-22-40462288">+91-22-40462288</a>
            </li>
            <li>
              <FaEnvelope />
              <a href="mailto:info@digitalprintsolutions.net">info@digitalprintsolutions.net</a>
            </li>
          </ul>

          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Digital Print Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
