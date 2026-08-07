import "./Brands.css";
import { FaExternalLinkAlt, FaFileDownload } from "react-icons/fa";
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import Button from "../../components/UI/Button/Button";
import { brands } from "../../data/brands";

function Brands() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Partners</span>
          <h1>Manufacturer Brands</h1>
          <p>We partner directly with established manufacturers so you get factory-backed machines and support.</p>
        </div>
      </section>

      {brands.map((brand, i) => (
        <section id={brand.id} className={`brand-section ${i % 2 === 1 ? "alt-bg" : ""}`} key={brand.id}>
          <div className="container brand-grid">
            <div className="brand-logo-box">
              <img src={brand.logo} alt={brand.name} />
            </div>

            <div className="brand-content">
              <SectionTitle eyebrow="Brand" title={brand.name} align="left" />
              <p>{brand.description}</p>

              <div className="brand-categories">
                {brand.categories.map((c, idx) => (
                  <span className="tag" key={idx}>{c}</span>
                ))}
              </div>

              <div className="brand-actions">
                <Button href={brand.website} variant="secondary">
                  Visit Website <FaExternalLinkAlt />
                </Button>
                <Button href="#" variant="outline">
                  Download Brochure <FaFileDownload />
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Brands;
