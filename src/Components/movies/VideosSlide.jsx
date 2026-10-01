"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

const VideosSlide = ({ videoTypes }) => {
  console.log(videoTypes);
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        scrollbar={{
          draggable: true,
        }}
        mousewheel={true}
        modules={[Scrollbar, Mousewheel]}
      >
        {videoTypes.map((type, ind) => (
          <SwiperSlide key={ind}>
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${type.key}`}
              title="YouTube video player"
              allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideosSlide;
