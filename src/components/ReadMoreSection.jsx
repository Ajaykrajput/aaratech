/* eslint-disable react/prop-types */
// import ReactDOM from "react-dom/client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const ReadMoreSection = ({ data }) => {
  return (
    <div className="flex p-4 md:p-8 flex-col mt-3 bg-white shadow-[0_0_5px_5px_rgba(0,0,0,0.5)] text-center">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        showStatus={false}
        autoPlay={true}
        interval={2000}
      >
        {data?.images.map((item) => (
          <div key={item.id} className="w-full h-full">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full min-h-96 object-cover"
            />
          </div>
        ))}
      </Carousel>
      <h1 className="text-3xl text-black py-4">{data?.title}</h1>
      <h1 className="text-base text-gray-600 py-5">{data?.content}</h1>

      <button
        type="button"
        className="border-2 mx-auto flex duration-500 w-fit border-red-500 py-2.5 my-4 px-4 text-red-500 hover:text-white hover:bg-red-500"
      >
        और पढ़ें
      </button>
    </div>
  );
};

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ReadMoreSection />);
