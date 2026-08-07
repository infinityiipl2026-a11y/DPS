import "./WhyChooseUs.css";
import {
  FaIndustry,
  FaMicrochip,
  FaHeadset,
  FaAward,
  FaTools,
  FaShippingFast,
} from "react-icons/fa";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";

const reasons = [
  {
    icon: <FaIndustry />,
    title: "Factory Direct",
    description: "Sourced directly from manufacturing partners, cutting out costly middlemen.",
  },
  {
    icon: <FaMicrochip />,
    title: "Latest Technology",
    description: "Equipment built on the newest digital printing and finishing platforms.",
  },
  {
    icon: <FaHeadset />,
    title: "Professional Support",
    description: "A dedicated technical team guiding you from selection to installation.",
  },
  {
    icon: <FaAward />,
    title: "Trusted Brands",
    description: "Partnered with established manufacturers known for reliability.",
  },
  {
    icon: <FaTools />,
    title: "After Sales Service",
    description: "Ongoing maintenance, spare parts and servicing across every region we cover.",
  },
  {
    icon: <FaShippingFast />,
    title: "Fast Delivery",
    description: "Efficient logistics network to get machines installed and running quickly.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <SectionTitle
          eyebrow="Our Advantage"
          title="Why Choose Us"
          subtitle="We combine factory-direct pricing with technical expertise to support your production, end to end."
        />

        <div className="reasons-grid">
          {reasons.map((r, i) => (
            <div className="reason-card" key={i}>
              <div className="reason-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
