"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import NowCard from "./NowCard";

const NowCarousel = ({ movies, genres }) => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        speed={500}
        rewind={true}
        simulateTouch={false}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        mousewheel={true}
        modules={[Navigation, Mousewheel]}
        breakpoints={{
          // Mobile
          320: {
            slidesPerView: 1,
          },

          // Tablet
          640: {
            slidesPerView: 2,
          },

          // Small laptop
          768: {
            slidesPerView: 3,
          },

          // Desktop
          1024: {
            slidesPerView: 4,
          },

          // Large desktop
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <NowCard movie={movie} genres={genres}/>
          </SwiperSlide>
        ))}

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default NowCarousel;
