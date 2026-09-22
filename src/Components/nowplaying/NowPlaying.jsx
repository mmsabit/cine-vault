import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import NowCarousel from "./NowCarousel";


const getNowPlaying = async () => {
  const [moviesRes, genresRes] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movie/now_playing?api_key=${process.env.API_KEY}`,
      { cache: "no-store" },
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/genre/movie/list?api_key=${process.env.API_KEY}`,
      { cache: "no-store" },
    ),
  ]);

  const moviesData = await moviesRes.json();
  const genresData = await genresRes.json();

  return {
    movies: moviesData.results || [],
    genres: genresData.genres || [],
  };
};

const NowPlaying = async () => {
  const { movies, genres } = await getNowPlaying();
  return (
    <div className="my-15">
      <div className="flex justify-between mb-6 items-center">
        <div className="text-4xl font-bold text[#DAE3EE] border-l-6 border-[#F5C518] ps-5">
          <h2>In Theater</h2>
        </div>
        <div>
          <Link href="/upcoming">
            <button className="flex items-center gap-5 text-[#F5C518] cursor-pointer hover:underline">
              View More <FaArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
      <div className="">
        <NowCarousel movies={movies} genres={genres} />
      </div>
    </div>
  );
};

export default NowPlaying;
