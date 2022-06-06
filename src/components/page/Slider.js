import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="img/img01.jpg" alt="이미지1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/img02.jpg" alt="이미지2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/img03.jpg" alt="이미지3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/img05.jpg" alt="이미지5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/img06.jpg" alt="이미지6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/img07.jpg" alt="이미지7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/img08.jpg" alt="이미지8" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
