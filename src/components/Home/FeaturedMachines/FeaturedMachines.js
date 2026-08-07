import "./FeaturedMachines.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import Button from "../../UI/Button/Button";
import { featuredMachines } from "../../../data/machines";

function FeaturedMachines() {
  return (
    <section className="featured-machines">
      <div className="container">
        <SectionTitle
          eyebrow="Featured Products"
          title="Featured Machines"
          subtitle="A selection of our most requested digital printing and finishing equipment."
        />

        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {featuredMachines.map((m) => (
            <SwiperSlide key={m.id}>
              <div className="machine-card">
                <div className="machine-image">
                  <img src={m.image} alt={m.name} />
                </div>
                <div className="machine-content">
                  <h3>{m.name}</h3>
                  <p>{m.description}</p>
                  <Button to={`/products#${m.id}`} variant="ghost">
                    Know More →
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default FeaturedMachines;
