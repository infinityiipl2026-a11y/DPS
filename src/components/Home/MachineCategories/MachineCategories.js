import "./MachineCategories.css";
import { FaArrowRight } from "react-icons/fa";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import { machineCategories } from "../../../data/machines";

function MachineCategories() {
  return (
    <section className="machine-categories">
      <div className="container">
        <SectionTitle
          eyebrow="What We Offer"
          title="Machine Categories"
          subtitle="Explore our complete range of industrial printing and finishing equipment, organized by category."
        />

        <div className="categories-grid">
          {machineCategories.map((cat) => (
            <div className="category-card" key={cat.id}>
              <div className="category-image">
                <img src={cat.image} alt={cat.name} />
              </div>
              <div className="category-overlay">
                <h3>{cat.name}</h3>
                <button className="category-btn">
                  View Machines <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MachineCategories;
