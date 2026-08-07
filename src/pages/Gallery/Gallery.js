import { useState } from "react";
import "./Gallery.css";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";

// Printing Machine Images
import dpmSeries from "../../assets/images/digital-print-machine.png";
import finishingMachine from "../../assets/images/finishing-machine.png";

// Category Images
import digitalPrinting from "../../assets/categories/digital-printing.jpg";
import labelPrinting from "../../assets/categories/label-printing.jpg";
import plateMaking from "../../assets/categories/plate-making.jpg";
import paperCreasing from "../../assets/categories/paper-creasing.jpg";
import guillotine from "../../assets/categories/guillotine.jpg";
import perfectBinder from "../../assets/categories/perfect-binder.jpg";
import laminator from "../../assets/categories/laminator.jpg";
import labelCutter from "../../assets/categories/label-cutter.jpg";

const galleryImages = [
  {
    id: 1,
    src: dpmSeries,
    label: "Digital Printing Machine",
  },
  {
    id: 2,
    src: finishingMachine,
    label: "Print Finishing Machine",
  },
  {
    id: 3,
    src: digitalPrinting,
    label: "Digital Printing",
  },
  {
    id: 4,
    src: labelPrinting,
    label: "Digital Label Printing",
  },
  {
    id: 5,
    src: plateMaking,
    label: "Plate Making Equipment",
  },
  {
    id: 6,
    src: paperCreasing,
    label: "Paper Creasing Machine",
  },
  {
    id: 7,
    src: guillotine,
    label: "Guillotine",
  },
  {
    id: 8,
    src: perfectBinder,
    label: "Perfect Binder",
  },
  {
    id: 9,
    src: laminator,
    label: "Laminator",
  },
  {
    id: 10,
    src: labelCutter,
    label: "Label Cutter",
  },
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);

  const prev = () =>
    setActiveIndex(
      (i) => (i - 1 + galleryImages.length) % galleryImages.length
    );

  const next = () =>
    setActiveIndex((i) => (i + 1) % galleryImages.length);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Gallery</span>
          <h1>Machines Gallery</h1>
          <p>
            Explore our digital printing machines and print finishing
            equipment.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <SectionTitle
            eyebrow="Our Machines"
            title="Photo Gallery"
          />

          <div className="masonry">
            {galleryImages.map((img, index) => (
              <button
                key={img.id}
                className="masonry-item"
                onClick={() => setActiveIndex(index)}
              >
                <img src={img.src} alt={img.label} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div className="lightbox" onClick={close}>
          <button
            className="lightbox-close"
            onClick={close}
          >
            <FaTimes />
          </button>

          <button
            className="lightbox-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <FaChevronLeft />
          </button>

          <img
            src={galleryImages[activeIndex].src}
            alt={galleryImages[activeIndex].label}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-nav next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  );
}

export default Gallery;