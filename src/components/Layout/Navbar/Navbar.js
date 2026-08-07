import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt, FaSearch, FaChevronDown } from "react-icons/fa";
import { useScroll } from "../../../hooks/useScroll";
import { productCatalog } from "../../../data/productsData";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const scrolled = useScroll(60);
  const { pathname } = useLocation();

  // Transparent-on-hero only applies on the Home page, at the very top of the page.
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  const closeAllMenus = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <header className={`navbar ${transparent ? "navbar-transparent" : "navbar-solid"}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <h2>Digital Print Solutions</h2>
        </Link>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <NavLink to="/" end onClick={closeAllMenus}>Home</NavLink>
          <NavLink to="/about" onClick={closeAllMenus}>About</NavLink>

          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <NavLink to="/products" onClick={closeAllMenus} className="nav-dropdown-trigger">
              Products <FaChevronDown className="nav-dropdown-caret" />
            </NavLink>

            <div className={`mega-menu ${productsOpen ? "open" : ""}`}>
              <div className="mega-menu-inner">
                {productCatalog.map((category) => (
                  <div className="mega-menu-column" key={category.id}>
                    <Link
                      to={`/products?category=${category.id}`}
                      className="mega-menu-heading"
                      onClick={closeAllMenus}
                    >
                      {category.title}
                    </Link>
                    <ul>
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory.id}>
                          <Link
                            to={`/products?category=${category.id}&sub=${subcategory.id}`}
                            onClick={closeAllMenus}
                          >
                            {subcategory.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/brands" onClick={closeAllMenus}>Brands</NavLink>
          <NavLink to="/gallery" onClick={closeAllMenus}>Gallery</NavLink>
          <NavLink to="/contact" onClick={closeAllMenus}>Contact</NavLink>

          <Link to="/contact" className="mobile-btn" onClick={closeAllMenus}>
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
