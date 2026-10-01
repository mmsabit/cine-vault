import React from "react";
import VideosSlide from "./VideosSlide";

const Videos = async ({ movieId }) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${movieId}/videos?api_key=${process.env.API_KEY}`,
  );
  const videos = await data.json();
  const trailerKey = videos.results.find(
    (video) => video.type === "Trailer",
  )?.key;

  const Trailer = videos.results.filter(video => video.type === "Trailer");
  const Teaser = videos.results.filter(video => video.type === "Teaser");
  const Featurette = videos.results.filter(video => video.type === "Featurette");
  const Behind = videos.results.filter(video => video.type === "Behind the Scenes");
  const Clip = videos.results.filter(video => video.type === "Clip");

  return (
    <div className="bg-[#141c24] rounded-lg p-6 w-full mt-6">
      <h4 className="border-l-6 border-[#F5C518] ps-3 text-2xl font-bold mb-5">
        Trailer
      </h4>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        title="YouTube video player"
        loading="lazy"
        allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h4 className="border-l-6 border-[#F5C518] ps-3 text-2xl font-bold my-5">
        Other Videos
      </h4>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift tabs-lg">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab bg-transparent border-white "
          aria-label="Trailer"
          defaultChecked
        />
        <div className="tab-content bg-transparent border-white p-6">
            
          <VideosSlide videoTypes={Trailer}/>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab bg-transparent border-white"
          aria-label="Teaser"
          
        />
        <div className="tab-content bg-transparent border-white p-6">
          <VideosSlide videoTypes={Teaser}/>
        </div>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab bg-transparent border-white"
          aria-label="Featurette"
          
        />
        <div className="tab-content bg-transparent border-white p-6">
          <VideosSlide videoTypes={Featurette}/>
        </div>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab bg-transparent border-white"
          aria-label="Behind"
          
        />
        <div className="tab-content bg-transparent border-white p-6">
          <VideosSlide videoTypes={Behind}/>
        </div>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab bg-transparent border-white"
          aria-label="Clip"
          
        />
        <div className="tab-content bg-transparent border-white p-6">
          <VideosSlide videoTypes={Clip}/>
        </div>

      </div>
    </div>
  );
};

export default Videos;
