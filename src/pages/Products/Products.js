import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Products.css";
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import ProductAccordion from "../../components/Products/ProductAccordion";
import ProductCard from "../../components/Products/ProductCard";
import { productCatalog } from "../../data/productsData";

function Products() {
  const [searchParams] = useSearchParams();
  const [activeMainCategory, setActiveMainCategory] = useState("printing-machines");
  const [activeSubCategory, setActiveSubCategory] = useState("dpm-series");

  // If the page was opened with ?category=...&sub=..., open that section
  // (e.g. from the homepage "View Machines" / "Explore Machines" links)
  // and scroll straight to it.
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const subParam = searchParams.get("sub");

    if (categoryParam) {
      setActiveMainCategory(categoryParam);
    }
    if (subParam) {
      setActiveSubCategory(subParam);
    }

    if (categoryParam || subParam) {
      const targetId = subParam || categoryParam;
      const scrollTimeout = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
      return () => clearTimeout(scrollTimeout);
    }
  }, [searchParams]);

  const handleMainToggle = (id) => {
    setActiveMainCategory((prev) => (prev === id ? "" : id));
  };

  const handleSubToggle = (id) => {
    setActiveSubCategory((prev) => (prev === id ? "" : id));
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Products</span>
          <h1>Digital Printing &amp; Finishing Equipment</h1>
          <p>Complete machine categories for commercial, packaging and industrial print production.</p>
        </div>
      </section>

      <section className="product-catalog-section">
        <div className="container">
          <SectionTitle eyebrow="Product Catalog" title="Explore Our Equipment" align="left" />

          <div className="catalog-accordion-list">
            {productCatalog.map((category) => {
              const isMainOpen = activeMainCategory === category.id;
              return (
                <div className={`catalog-main-item ${isMainOpen ? "open" : ""}`} key={category.id} id={category.id}>
                  <button
                    type="button"
                    className="catalog-main-trigger"
                    onClick={() => handleMainToggle(category.id)}
                    aria-expanded={isMainOpen}
                  >
                    <span>
                      <strong>{category.title}</strong>
                      <small>{category.description}</small>
                    </span>
                    <span className="catalog-main-icon">{isMainOpen ? "−" : "+"}</span>
                  </button>

                  <div className={`catalog-main-content ${isMainOpen ? "active" : ""}`}>
                    {category.subcategories.map((subcategory) => {
                      const isSubOpen = activeSubCategory === subcategory.id;
                      return (
                        <div id={subcategory.id} key={subcategory.id}>
                          <ProductAccordion
                            title={subcategory.title}
                            description={subcategory.description}
                            isOpen={isSubOpen}
                            onToggle={() => handleSubToggle(subcategory.id)}
                          >
                            <div className="subcategory-products">
                              {subcategory.products.map((product) => (
                                <ProductCard
                                  key={product.id}
                                  product={{ ...product, categoryName: category.title, subcategoryName: subcategory.title }}
                                />
                              ))}
                            </div>
                          </ProductAccordion>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
