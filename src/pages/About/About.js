import "./About.css";
import { FaBullseye, FaEye, FaHistory } from "react-icons/fa";
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";

const journey = [
  { year: "30+", text: "Years of experience delivering trusted solutions to the printing industry." },
  { year: "Mumbai", text: "Rooted in the nation’s business hub, serving clients with a strong local understanding and national reach." },
  { year: "<10", text: "A focused team committed to personalised service, expert guidance, and dependable support." },
  { year: "2026", text: "Continuing to build smarter, cost-effective printing solutions for commercial, packaging, and publication needs." },
];

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>Innovators Redefining Digital Printing in India</h1>
          <p>With 30+ years of experience, Digital Print Solutions brings quality commercial printing and packaging solutions to businesses across India.</p>
        </div>
      </section>

      <section className="company-story">
        <div className="container story-grid">
          <div className="story-image">
            <img src="/images/companystory.png" alt="Digital Print Solutions facility" />
          </div>
          <div className="story-content">
            <SectionTitle eyebrow="Our Story" title="Shaping the Future of Print" align="left" />
            <p>
              At Digital Print Solutions, we are more than a company — we are innovators reshaping digital printing in India. Rooted in Mumbai, the nation’s business hub, our journey is about transforming challenges into opportunities and pioneering solutions that redefine printing for the future.
            </p>
            <p>
              We specialize in quality solutions for commercial printing and packaging, and we stand apart by connecting businesses with credible printing machine manufacturers and suppliers. With the latest techniques in technology, durability, and cost-effective solutions, we help our clients achieve dependable results with confidence.
            </p>
            <p>
              With 30+ years of industry experience, a lean team of under 10, and a focus on commercial, packaging, and publication industries, we remain committed to honest advice, quick support, and solutions that help businesses grow.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container mv-grid">
          <div className="mv-card">
            <div className="mv-icon"><FaBullseye /></div>
            <h3>Mission</h3>
            <p>To provide the highest-quality products and services possible at a competitive price, while listening carefully to our clients and helping them achieve their business goals through honest, expert advice and friendly service.</p>
          </div>
          <div className="mv-card">
            <div className="mv-icon"><FaEye /></div>
            <h3>Vision</h3>
            <p>To be the most preferred partner for solutions that make print better.</p>
          </div>
          <div className="mv-card">
            <div className="mv-icon"><FaHistory /></div>
            <h3>Values</h3>
            <p><strong>Win and lose as a Team.</strong> We strive, struggle, and succeed as a team to create added value while leaving egos at the door regardless of location, role, department, or seniority.</p>
          </div>
        </div>
      </section>

      <section className="journey-timeline">
        <div className="container">
          <SectionTitle eyebrow="Milestones" title="Our Journey" />
          <div className="timeline">
            {journey.map((j, i) => (
              <div className="timeline-item" key={i}>
                <span className="timeline-year">{j.year}</span>
                <p>{j.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
