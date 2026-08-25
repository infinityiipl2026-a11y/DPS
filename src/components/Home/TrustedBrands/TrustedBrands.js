import "./TrustedBrands.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import { brands } from "../../../data/brands";

// Duplicated list keeps the loop visually continuous — only used when there
// are enough distinct brands for a scrolling marquee to make sense.
const logos = [...brands, ...brands, ...brands];

function TrustedBrands() {
  // SYSFORM: with Sysform hidden, `brands` currently holds a single entry
  // (Yintech). A looping marquee of one repeated logo just reads as static,
  // empty space, so a single brand renders as one large featured panel
  // instead. As soon as a second brand is uncommented in data/brands.js,
  // this automatically switches back to the scrolling carousel.
  const singleBrand = brands.length === 1 ? brands[0] : null;

  return (
    <section className="trusted-brands">
      <div className="container">
        <SectionTitle
          eyebrow="Our Partners"
          title="Trusted Brands"
          subtitle="We work directly with established manufacturers to bring you dependable, industrial-grade equipment."
        />

        {singleBrand ? (
          <div className="brand-feature">
            <div className="brand-feature-logo">
              <img src={singleBrand.logo} alt={singleBrand.name} />
            </div>
            <div className="brand-feature-content">
              <h3>{singleBrand.name}</h3>
              <p>{singleBrand.description}</p>
              <div className="brand-feature-tags">
                {singleBrand.categories.map((c, idx) => (
                  <span className="tag" key={idx}>{c}</span>
                ))}
              </div>
              <a
                href={singleBrand.website}
                target="_blank"
                rel="noreferrer"
                className="brand-feature-link"
              >
                Visit Website <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ) : (
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={40}
            loop={true}
            speed={4000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            allowTouchMove={false}
            breakpoints={{
              576: { slidesPerView: 3 },
              991: { slidesPerView: 4 },
            }}
          >
            {logos.map((brand, i) => (
              <SwiperSlide key={`${brand.id}-${i}`}>
                <div className="brand-logo">
                  <img src={brand.logo} alt={brand.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

export default TrustedBrands;
