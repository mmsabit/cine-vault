import React from 'react';
import HeroSection from './HeroSection';


const getHeroData = async () => {
  const [moviesRes, genresRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/now_playing?api_key=${process.env.API_KEY}`, { cache: "no-store" }),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/genre/movie/list?api_key=${process.env.API_KEY}`, { cache: "no-store" }),
  ]);

  const moviesData = await moviesRes.json();
  const genresData = await genresRes.json();

  return {
    movies: moviesData.results || [],
    genres: genresData.genres || [],
  };
};

const HeroCall = async () => {
  const { movies, genres } = await getHeroData();
  return <HeroSection movies={movies} genres={genres} />;
};

export default HeroCall;