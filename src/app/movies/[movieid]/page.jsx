import Image from "next/image";
import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";

const MovieDetailsPage = async ({ params }) => {
  const { movieid } = await params;

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${movieid}?api_key=${process.env.API_KEY}`,
  );
  const movie = await data.json();

  const formatRuntime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return `${hours}h ${minutes}m`;
};

  return (
    <section>
      <div className={`h-[85vh] w-full overflow-hidden relative`}>
        <Image
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.original_title}
          width={1280}
          height={720}
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute bg-[#000000af] top-0 w-full h-full flex justify-start items-center">
            <div className="container mx-auto  flex gap-6 h-auto ">
                      <Image
                        src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                        alt="Poster"
                        height={200}
                        width={300}
                        className="w-auto h-auto object-cover"
                      ></Image>
                      <div className="flex flex-col justify-center gap-3">
                        
                        {/* Title */}
                        <h2 className="font-extrabold text-5xl text-[#DAE3EE]">
                          {movie.original_title}
                        </h2>
                        {/* info */}
                        <div className="flex gap-2 items-center">
                          <span className="text-[14px] font-semibold text-[#DAE3EE]">
                            Release Date: {movie.release_date}
                          </span>
                          <span className="text-[14px] font-semibold text-[#DAE3EE]">
                            Duration: {formatRuntime(movie.runtime)}
                          </span>
                        </div>
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
                           {movie.genres.map((genre) => (
                            <span
                              key={genre.id}
                              className="text-[12px] text-[#DAE3EE] bg-[#2D363E] px-2 py-0.5 uppercase"
                            >
                              {genre.name}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-6">
                            <button className="btn flex gap-2 px-4 py-2 bg-[#222B33] items-center justify-center">
                                <MdOutlineBookmarkAdd  size={24} color="#F5C518" /> Add to Watchlist
                            </button>
                            
                        </div>
                      </div>
                    </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsPage;
