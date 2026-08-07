import "./TrustedBrands.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import { brands } from "../../../data/brands";

// Duplicated list keeps the loop visually continuous even with only two logos.
const logos = [...brands, ...brands, ...brands];

function TrustedBrands() {
  return (
    <section className="trusted-brands">
      <div className="container">
        <SectionTitle
          eyebrow="Our Partners"
          title="Trusted Brands"
          subtitle="We work directly with established manufacturers to bring you dependable, industrial-grade equipment."
        />

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
      </div>
    </section>
  );
}

export default TrustedBrands;
