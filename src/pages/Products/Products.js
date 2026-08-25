import { useEffect, useMemo, useState } from "react";
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

  const searchQuery = useMemo(() => (searchParams.get("q") || "").trim().toLowerCase(), [searchParams]);

  const filteredCatalog = useMemo(() => {
    if (!searchQuery) return productCatalog;

    return productCatalog
      .map((category) => {
        const categoryMatch = category.title.toLowerCase().includes(searchQuery);

        if (categoryMatch) {
          return { ...category, subcategories: category.subcategories };
        }

        const matchingSubcategories = category.subcategories
          .map((subcategory) => {
            const subcategoryMatch = subcategory.title.toLowerCase().includes(searchQuery);

            if (subcategoryMatch) {
              return subcategory;
            }

            const matchingProducts = subcategory.products.filter((product) => {
              const searchableText = [
                product.name,
                product.model,
                product.brand,
                product.shortDescription,
                product.description,
                product.features.join(" "),
                product.applications.join(" "),
                ...product.specifications.map((spec) => `${spec.label} ${spec.value}`)
              ]
                .join(" ")
                .toLowerCase();

              return searchableText.includes(searchQuery);
            });

            if (matchingProducts.length === 0) {
              return null;
            }

            return { ...subcategory, products: matchingProducts };
          })
          .filter(Boolean);

        if (matchingSubcategories.length === 0) {
          return null;
        }

        return { ...category, subcategories: matchingSubcategories };
      })
      .filter(Boolean);
  }, [searchQuery]);

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

    if (searchQuery && filteredCatalog.length > 0) {
      setActiveMainCategory(filteredCatalog[0].id);
      setActiveSubCategory(filteredCatalog[0].subcategories[0]?.id || "");
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
  }, [searchParams, searchQuery, filteredCatalog]);

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
          <SectionTitle
            eyebrow={searchQuery ? "Search Results" : "Product Catalog"}
            title={searchQuery ? `Results for “${searchParams.get("q")?.trim()}”` : "Explore Our Equipment"}
            align="left"
          />

          {searchQuery && filteredCatalog.length === 0 && (
            <div className="search-empty-state">
              <p>No machines matched your search for “{searchParams.get("q")?.trim()}”. Try another keyword such as Epson, Kyocera, or DPM.</p>
            </div>
          )}

          <div className="catalog-accordion-list">
            {filteredCatalog.map((category) => {
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
