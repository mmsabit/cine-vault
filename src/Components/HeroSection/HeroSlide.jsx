"use client";
import Image from "next/image";
import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const HeroSlide = ({movie, genres}) => {
  const genreNames = (movie.genre_ids || [])
    .map((id) => genres.find((g) => g.id === id)?.name)
    .filter(Boolean);
  return (
    <div className="w-full h-[85vh] relative">
      <Image
        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
        alt="Banner"
        fill
        className="object-cover w-auto h-auto"
      ></Image>
      <div className="bg-[linear-gradient(0deg,rgba(0,0,0,1)_44%,rgba(0,0,0,0)_100%)] w-full absolute bottom-0">
        <div className="container mx-auto flex gap-6">
          <Image
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt="Poster"
            height={200}
            width={300}
            className="w-auto h-auto"
          ></Image>
          <div className="flex flex-col justify-center gap-3">
            <div className="flex gap-2 items-center">
              <span className="text-[11px] bg-[#222B33] px-2 py-0.5">
                {movie.original_language}
              </span>
              <span className="text-[12px] text-[#d2d2d2]">{movie.release_date}</span>
            </div>
            <h2 className="font-extrabold text-5xl text-[#DAE3EE]">
              {movie.original_title}
            </h2>
            <div className="flex gap-4 items-center">
              <p className="text[12px] text-[#F5C518] inline-flex items-center gap-1">
                <MdOutlineStar size={22} /> {movie.vote_average}
                <span className="text-[#9A9078]"> /10</span>
              </p>
              <p className="text[12px] text-[#F5C518] inline-flex items-center gap-1">
                <AiFillLike /> {movie.vote_count}
              </p>
              <p className="text[12px] text-[#F5C518] inline-flex items-center gap-1">
                <IoEyeSharp /> {movie.popularity}
              </p>
            </div>
            <div className="flex gap-4 items-center">
               {genreNames.map((name, ind) => (
                <span
                  key={ind}
                  className="text-[12px] text-[#DAE3EE] bg-[#2D363E] px-2 py-0.5 uppercase"
                >
                  {name}
                </span>
              ))}
            </div>
            <div className="max-w-150 min-h-30">
              <p className="text-[16px] text-[#D1C5AC] ">
                {movie.overview}
              </p>
            </div>
            <div className="flex gap-6">
                <button className="btn flex gap-2 px-4 py-2 bg-[#222B33] items-center justify-center">
                    <MdOutlineBookmarkAdd  size={24} color="#F5C518" /> Add to Watchlist
                </button>
                <button className="btn flex gap-4 px-8 py-2 bg-[#F5C518] items-center justify-center text-[#222B33] ">
                    View Details<FaArrowRight  size={20} color="#222B33" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
