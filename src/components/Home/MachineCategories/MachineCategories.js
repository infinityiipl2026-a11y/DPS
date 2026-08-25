import "./MachineCategories.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import { machineCategories } from "../../../data/machines";

function MachineCategories() {
  return (
    <section className="machine-categories">
      <div className="container">
        <SectionTitle
          eyebrow="What We Offer"
          title="Machine Categories"
          subtitle="Explore our complete range of industrial digital printing equipment, organized by category."
        />

        <div className="categories-grid">
          {machineCategories.map((cat) => (
            <Link
              to={`/products?category=${cat.categoryId}&sub=${cat.subcategoryId}`}
              className="category-card"
              key={cat.id}
            >
              <div className="category-image">
                <img src={cat.image} alt={cat.name} />
              </div>
              <div className="category-overlay">
                <h3>{cat.name}</h3>
                <span className="category-btn">
                  View Machines <FaArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MachineCategories;
