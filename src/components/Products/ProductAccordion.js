import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

function ProductAccordion({ title, description, children, isOpen, onToggle }) {
  return (
    <div className={`product-accordion ${isOpen ? "open" : ""}`}>
      <button
        className="accordion-trigger"
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>
          <strong>{title}</strong>
          {description ? <small>{description}</small> : null}
        </span>
        {isOpen ? <FaChevronDown /> : <FaChevronRight />}
      </button>
      <div className={`accordion-content ${isOpen ? "active" : ""}`}>{children}</div>
    </div>
  );
}

export default ProductAccordion;
