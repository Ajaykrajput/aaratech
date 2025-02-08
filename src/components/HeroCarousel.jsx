import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { head } from "../constants";

export const HeroCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      showIndicators={false}
      infiniteLoop={true}
      showStatus={false}
      autoPlay={true}
      interval={2000}
    >
      {head.map((item) => (
        <div key={item.id} className="w-full h-full">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
};
