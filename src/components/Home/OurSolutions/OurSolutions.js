import "./OurSolutions.css";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

// Temporary images
import digitalMachine from "../../../assets/images/digital-print-machine.png";
import finishingMachine from "../../../assets/images/finishing-machine.png";

function OurSolutions() {
  return (
    <section className="solutions">

      <div className="container">

        <div className="section-title">

          <span>OUR SOLUTIONS</span>

          <h2>Complete Printing Solutions</h2>

          <p>
            We provide advanced digital printing and print finishing
            equipment for commercial, packaging and industrial
            applications.
          </p>

        </div>

        <div className="solutions-grid">

          {/* Card 1 */}

          <div className="solution-card">

            <div className="solution-image">

              <img
                src={digitalMachine}
                alt="Digital Printing Machines"
              />

            </div>

            <div className="solution-content">

            <h3>Digital Printing Machines</h3>

            <p>
            Advanced digital printing solutions designed for commercial,
            packaging and industrial printing applications.
            </p>

            <ul>

            <li>
                <FaCheckCircle />
                Digital Printing Machine Series
            </li>

            <li>
                <FaCheckCircle />
                Digital Label Printer Series
            </li>

            <li>
                <FaCheckCircle />
                Plate Making Equipment Series
            </li>

            </ul>

              <a href="/digital-printing-machines">

                Explore Machines

                <FaArrowRight />

              </a>

            </div>

          </div>

          {/* Card 2 */}

          <div className="solution-card">

            <div className="solution-image">

              <img
                src={finishingMachine}
                alt="Print Finishing Equipment"
              />

            </div>

            <div className="solution-content">

            <h3>Print Finishing Equipment</h3>

            <p>
            Professional finishing solutions for cutting, binding,
            laminating and paper processing.
            </p>

            <ul>

            <li>
                <FaCheckCircle />
                Paper Creasing Machines
            </li>

            <li>
                <FaCheckCircle />
                Guillotines
            </li>

            <li>
                <FaCheckCircle />
                Perfect Binders
            </li>

            <li>
                <FaCheckCircle />
                Laminators
            </li>

            <li>
                <FaCheckCircle />
                Label Cutters
            </li>

            </ul>
              <a href="/print-finishing-equipment">

                Explore Machines

                <FaArrowRight />

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default OurSolutions;