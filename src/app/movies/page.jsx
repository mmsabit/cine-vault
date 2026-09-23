import React from "react";
import NowCard from "@/Components/nowplaying/NowCard";
import Pagination from "./Pagination";

const Movies = async ({ searchParams }) => {
  const params = await searchParams;

  const page = Number(params?.page) || 1


  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/discover/movie?api_key=${process.env.API_KEY}&page=${page}&&primary_release_date.lte=2026-12-31&sort_by=primary_release_date.desc?include_adult=false&with_original_language=en`,
  );
  const movies = await data.json();

  const genreData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/genre/movie/list?api_key=${process.env.API_KEY}`,
  );
  const genres = await genreData.json();

  const totalPages = Math.min(movies.total_pages, 500);

  return (
    <div className="container mx-auto">
      <div className="bg-[#101c28] w-full text-5xl font-bold text-center p-10 my-20 rounded-3xl">
        All Movies
      </div>
      <div className="my-10 grid grid-cols-5 gap-6">
        {movies.results.map((movie) => (
          <NowCard key={movie.id} movie={movie} genres={genres.genres} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} />
    </div>
  );
};

export default Movies;
