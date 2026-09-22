import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const getHeroData = async () => {
  const [moviesRes, genresRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/now_playing?api_key=${process.env.API_KEY}`, { cache: "no-store" }),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/genre/movie/list?api_key=${process.env.API_KEY}`, { cache: "no-store" }),
  ]);
}

const UcSection = () => {
  return (
    <div>
      <div className="flex justify-between my-15 items-center">
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
    </div>
  );
};

export default UcSection;
