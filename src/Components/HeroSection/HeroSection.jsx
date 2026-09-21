"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSlide from "./HeroSlide";

const HeroSection = ({movies, genres}) => {
  console.log(movies.length);
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        speed={1000}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          hideOnClick: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
        }}
      >  
      {movies.slice(0, 7).map((movie) => (
        <SwiperSlide key={movie.id}>
          <HeroSlide movie={movie} genres={genres}/>
        </SwiperSlide>
      ))}      
        
        

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default HeroSection;
