import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import UcCarousel from "./UcCarousel";

const getUpComingData = async () => {
  const [moviesRes, genresRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/upcoming?api_key=${process.env.API_KEY}`, { cache: "no-store" }),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/genre/movie/list?api_key=${process.env.API_KEY}`, { cache: "no-store" }),
  ]);

  const moviesData = await moviesRes.json();
  const genresData = await genresRes.json();

  return {
    movies: moviesData.results || [],
    genres: genresData.genres || [],
  };
}

const UcSection = async () => {
    const { movies, genres } = await getUpComingData();
  return (
    <div className="my-15">
      <div className="flex justify-between mb-6 items-center">
        <div className="text-4xl font-bold text[#DAE3EE] border-l-6 border-[#F5C518] ps-5">
            <h2>Upcoming Movies</h2>
        </div>
        <div>
          <Link href="/upcoming">
            <button className="flex items-center gap-5 text-[#F5C518] cursor-pointer hover:underline">
              View More <FaArrowRight size={20}  />
            </button>
          </Link>
        </div>
      </div>
        <div className="">
            <UcCarousel movies={movies} genres={genres}/>
        </div>
    </div>
  );
};

export default UcSection;
