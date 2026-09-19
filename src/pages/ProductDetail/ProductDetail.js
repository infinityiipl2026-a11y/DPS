import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaChevronRight, FaFileDownload } from "react-icons/fa";
import Button from "../../components/UI/Button/Button";
import { allProducts } from "../../data/productsData";
import "./ProductDetail.css";

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((item) => item.id === productId);
  const [activeImage, setActiveImage] = useState(product?.image);

  useEffect(() => {
    setActiveImage(product?.image);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [product]);

  if (!product) {
    return (
      <section className="product-detail-notfound">
        <div className="container">
          <h2>Product not found</h2>
          <p>The product you're looking for doesn't exist or may have been moved.</p>
          <Button to="/products" variant="primary">Back to Products</Button>
        </div>
      </section>
    );
  }

  const images = [product.image, ...(product.gallery || [])];

  const relatedProducts = allProducts
    .filter((item) => item.subcategoryId === product.subcategoryId && item.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <section className="product-detail-breadcrumb">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <FaChevronRight />
            <Link to="/products">Products</Link>
            <FaChevronRight />
            <span>{product.subcategoryName}</span>
            <FaChevronRight />
            <span className="current">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="product-detail-hero">
        <div className="container product-detail-grid">
          <div className="product-detail-gallery">
            <span className="modal-brand-tag">{product.brand}</span>
            <div className="product-detail-main-image">
              <img src={activeImage || product.image} alt={product.name} />
            </div>
            {images.length > 1 ? (
              <div className="product-detail-thumbs">
                {images.map((src, index) => (
                  <button
                    type="button"
                    key={src + index}
                    className={`product-detail-thumb ${activeImage === src ? "active" : ""}`}
                    onClick={() => setActiveImage(src)}
                  >
                    <img src={src} alt={`${product.name} view ${index + 1}`} />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="product-detail-info">
            <span className="modal-eyebrow">{product.categoryName} · {product.subcategoryName}</span>
            <h1>{product.name}</h1>
            {product.model ? <div className="modal-model-badge">Model: {product.model}</div> : null}
            <p className="product-detail-summary">{product.shortDescription}</p>

            <div className="product-detail-cta-row">
              <Button to="/contact" variant="primary">Request a Quote</Button>
              {product.brochureUrl ? (
                <Button href={product.brochureUrl} variant="secondary">
                  <FaFileDownload /> Brochure
                </Button>
              ) : null}
              {/* {product.sourceUrl ? (
                <a href={product.sourceUrl} target="_blank" rel="noopener noreferrer" className="modal-source-link">
                  Manufacturer page <FaExternalLinkAlt size={11} />
                </a>
              ) : null} */}
            </div>

            <div className="product-detail-features">
              <h4>Key Features</h4>
              <ul>
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail-body">
        <div className="container product-detail-body-grid">
          <div>
            <h3>Overview</h3>
            <p>{product.description}</p>

            <h3>Applications</h3>
            <ul className="modal-tag-list product-detail-applications">
              {product.applications.map((application) => (
                <li key={application}>{application}</li>
              ))}
            </ul>
          </div>

          <div className="product-detail-specs">
            <h3>Technical Specifications</h3>
            <table className="modal-spec-table">
              <tbody>
                {product.specifications.map((item) => (
                  <tr key={item.label}>
                    <th>{item.label}</th>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="product-detail-related">
          <div className="container">
            <h3>Related Products</h3>
            <div className="product-detail-related-grid">
              {relatedProducts.map((related) => (
                <button
                  type="button"
                  key={related.id}
                  className="related-product-card"
                  onClick={() => navigate(`/product/${related.id}`)}
                >
                  <div className="related-product-image">
                    <img src={related.image} alt={related.name} />
                  </div>
                  <div className="related-product-body">
                    {related.model ? <span className="product-card-model">Model: {related.model}</span> : null}
                    <h4>{related.name}</h4>
                    <p>{related.shortDescription}</p>
                    <span className="related-product-link">View Details <FaChevronRight size={11} /></span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default ProductDetail;
