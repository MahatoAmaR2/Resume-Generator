
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "./slider.css"
import "swiper/css";
import "swiper/css/effect-coverflow";

function SwiperSlider() {
  const images = [
      "./stockholm_2.webp",
      "./shark_new.webp",
      "./harvard_2.webp",
      "./eagle_new.webp",
      "./dublin_2.webp",
      "./cambridge_2.webp",
    ];
  return (
    <>
      <div className="relative container">
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          effect={"coverflow"}
          initialSlide={3}
          grabCursor={true}
          centeredSlides={true}
          // loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={images[1]} alt="Stockholm" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[2]} alt="Cambridge" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[3]} alt="Dublin" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[4]} alt="Eagle" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[5]} alt="Stockholm" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[0]} alt="Stockholm" />
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev slider-arrow absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-secondary rounded-full hover:bg-[#867fbf3c] h-12 w-12 pr-4 p-2">
          <img
            src="./arrow.4440b727.svg"
            alt="left-arrow"
            width="40px"
            height="40px"
          />
        </div>
        <div className="swiper-button-next slider-arrow absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-secondary rounded-full hover:bg-[#867fbf3c] h-12 w-12 pl-4 p-2">
          <img
            src="./arrow.4440b7271.svg"
            alt="right-arrow"
            width="40px"
            height="40px"
          />
        </div>

        {/* Pagination */}
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
}

export default SwiperSlider;
