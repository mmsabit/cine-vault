import NowCard from "@/Components/nowplaying/NowCard";
import React from "react";

const Movies = async () => {
  const page = 1;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/now_playing?api_key=${process.env.API_KEY}&page=${page}`,
  );
  const movies = await data.json();

  const genreData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/genre/movie/list?api_key=${process.env.API_KEY}`,
  );
  const genres = await genreData.json();
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
      
      </div>

  );
};

export default Movies;
