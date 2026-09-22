import HeroCall from "@/Components/HeroSection/HeroCall";
import NowPlaying from "@/Components/nowplaying/NowPlaying";
import UcSection from "@/Components/upcomingMovies/UcSection";




export default function Home() {
  return (
    <div>
      <HeroCall/>
      
      <div className="container mx-auto">
        <UcSection/>
        <NowPlaying/>
      </div>
      
    </div>
  );
}
