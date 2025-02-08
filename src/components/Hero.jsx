import { mahamandleshwar_abhayanand } from "../assets";
import {HeroCarousel} from './HeroCarousel'

const Hero = () => {
  return (
    <div className="flex w-screen h-full">
      <div className="md:flex hidden w-2/3 h-[90%] mx-4 bg-green-900">
        <HeroCarousel />
      </div>
      <div className="flex md:w-1/3 w-full md:h-[90%] h-[60%]">
        <img
          src={mahamandleshwar_abhayanand}
          alt="mahamandleshwar_abhayanand"
        />
      </div>
    </div>
  );
};

export default Hero;
