import { logo_abhyananda } from "../assets";
import { readMore } from "../constants";
import { ReadMoreSection } from "./ReadMoreSection";

const VideoSection = () => {
  return (
    <div className="flex flex-col w-full mx-auto h-full">
      <div className="flex items-center mx-auto flex-col">
        <img src={logo_abhyananda} alt="Logo" className="w-20 h-20" />
        <h1 className="text-3xl text-gray-700 py-4">वीडियो देखें</h1>
      </div>

      <div className="flex flex-col md:flex-row w-full justify-between px-4 h-[50%]">
        <div className="md:w-1/2 w-full flex bg-[#f5fcd6] md:mr-10">
          <div className="relative w-full h-[300px]">
            <iframe
              className="absolute top-0 left-0 w-full h-full shadow-lg"
              src="https://www.youtube.com/embed/AjP8FtHExlA?autoplay=0&rel=0&modestbranding=1"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex md:w-1/2 flex-col md:ml-20 px-4 items-start justify-items-start">
          <h1 className="text-2xl py-4 font-medium">
            {" "}
            श्रीमद्भगवत गीता अध्याय-9 | भग-7
          </h1>
          <h1 className="text-xl text-gray-600">
            {" "}
            श्रीमद्भगवद्गीता अध्याय- 9 (राजविद्याराजगुह्ययोग), भाग -7, अनंत श्री
            विभूषित महामण्डलेश्वर स्वामी अभयानंद सरस्वती जी महाराज (श्री पंचायती
            अखाड़ा महानिर्वाणी) ” अध्यक्ष ” अखिल भारतीय संत समिति उत्तर प्रदेश
            स्वामी अभयानन्द वेद पाठशाला ,पपनामऊ,अनौरा कलां ,फैज़ाबाद रोड़ ,(लखनऊ
            )
          </h1>
        </div>
      </div>

      <button
        type="button"
        className="border-2 mx-auto flex duration-500 w-fit border-red-500 py-2.5 my-4 px-4 text-red-500 hover:text-white hover:bg-red-500"
      >
        सभी वीडियो देखें
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-[80%]">
        {readMore.map((data) => (
          <ReadMoreSection key={data.title} data={data} />
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
