import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt, FaSearch } from "react-icons/fa";
import { useScroll } from "../../../hooks/useScroll";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const scrolled = useScroll(60);
  const { pathname } = useLocation();

  // Transparent-on-hero only applies on the Home page, at the very top of the page.
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header className={`navbar ${transparent ? "navbar-transparent" : "navbar-solid"}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <h2>Digital Print Solutions</h2>
        </Link>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink>
          <NavLink to="/brands" onClick={() => setMenuOpen(false)}>Brands</NavLink>
          <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

          <Link to="/contact" className="mobile-btn" onClick={() => setMenuOpen(false)}>
            Request Quote
          </Link>
        </nav>

        <div className="right-side">
          <button
            className="icon-btn"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <FaSearch />
          </button>

          <a href="tel:+911234567890" className="phone-btn">
            <FaPhoneAlt />
            <span>Call</span>
          </a>

          <Link to="/contact" className="quote-btn">
            Request Quote
          </Link>

          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="search-bar">
          <div className="container">
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Search machines, categories..." autoFocus />
              <button type="submit"><FaSearch /></button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
