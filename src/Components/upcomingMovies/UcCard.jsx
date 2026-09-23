import Image from "next/image";
import React from "react";
import { FaStar, FaHeart, FaArrowRight } from "react-icons/fa";

const UcCard = ({ movie, genres }) => {
  const genreNames = (movie.genre_ids || [])
    .map((id) => genres.find((g) => g.id === id)?.name)
    .filter(Boolean);
  return (
    <div>
      <div className="relative overflow-hidden rounded-sm bg-[#18232c] text-white shadow-lg">
        {/* Poster */}
        <div className="relative h-100">
          <Image
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt={movie.original_title}
            fill
            className="h-full w-full object-cover"
          />
          {/* Language */}
          <div className="absolute left-2 top-2.5 text-[11px] font-semibold text-white">
            <span className="text-[11px] bg-[#222B33] px-2 py-0.5 uppercase">
              {movie.original_language}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="px-2 py-2">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <FaStar className="text-[14px] text-yellow-400" />

            <span className="text-[20px] font-bold text-yellow-400">
              {movie.vote_average}
            </span>
          </div>

          {/* Movie name */}
          <h3 className="mt-1 text-[17px] font-bold leading-5">
            {movie.original_title}
          </h3>

          {/* Genre */}
          {/* <span className="text-gray-500">•</span> */}
          <div className="mt-1 flex items-center gap-3 text-[12px]">            
            
            {genreNames.map((name, ind) => (
                <span
                  key={ind}
                  className="text-gray-300 card-genre"
                >
                  {name}
                </span>
              ))}
          </div>

          {/* Date + Likes */}
          <div className="mt-1 flex items-center justify-between text-[12px] text-gray-400">
            <span>Release: {movie.release_date}</span>

            <span className="flex items-center gap-1 text-pink-400">
              <FaHeart />
              {movie.vote_count}
            </span>
          </div>

          {/* Popularity */}
          <div className="mt-1 rounded-sm bg-[#26343f] px-1 py-0.75 text-center text-[11px]">
            <span className="text-yellow-400">
              Popularity: {movie.popularity}
            </span>
          </div>

          {/* Watchlist */}
          <button className="btn btn-sm w-full flex gap-4 px-8 py-2 bg-[#F5C518] items-center justify-center text-[#222B33] mt-1">
            View Details
            <FaArrowRight size={20} color="#222B33" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UcCard;
