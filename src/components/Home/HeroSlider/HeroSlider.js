import "./HeroSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../../../assets/banners/banner1.jpg";
import banner2 from "../../../assets/banners/banner2.jpg";
import banner3 from "../../../assets/banners/banner3.jpg";

function HeroSlider() {
  return (
    <section className="hero-slider">

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={900}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
      >

        <SwiperSlide>
          <img src={banner1} alt="Banner 1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={banner2} alt="Banner 2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={banner3} alt="Banner 3" />
        </SwiperSlide>

      </Swiper>

    </section>
  );
}

export default HeroSlider;