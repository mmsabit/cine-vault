"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Mousewheel } from "swiper/modules";
import UcCard from "./UcCard";

const UcCarousel = ({movies, genres}) => {
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
        autoplay={{
          delay: 5000,
        }}
        mousewheel={true}
        modules={[Navigation, Autoplay, Mousewheel]}
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
          <UcCard movie={movie} genres={genres}/>
        </SwiperSlide>
      ))} 
        


        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default UcCarousel;
