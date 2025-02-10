import { mahamandleshwar_abhayanand } from "../assets";
import { HeroCarousel } from "./HeroCarousel";

const Hero = () => {
  return (
    <div className="flex w-screen h-full">
      <div className="md:flex hidden w-2/3 h-[90%] mx-4 bg-green-900">
        <HeroCarousel />
      </div>
      <div className="flex md:w-1/3 w-full mx-4 md:mx-0 md:h-[90%] h-[60%] pr-4 md:pr-0 relative">
        <img
          src={mahamandleshwar_abhayanand}
          alt="mahamandleshwar_abhayanand"
        />
        <p className="absolute bottom-10 font-medium text-white max-w-[80%] ">
          परम् पूज्य आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज
        </p>
      </div>
    </div>
  );
};

export default Hero;
