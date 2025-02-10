import BlogSection from "./components/BlogSection";
import EventCard from "./components/EventCard";
import FooterSection from "./components/FooterSection";
import Hero from "./components/Hero";
import KnowMore from "./components/KnowMore";
import Navbar from "./components/Navbar";
import VideoSection from "./components/VideoSection";
import styles from "./style";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-primary w-full overflow-hidden bg-[#fff]">
      <div className="flex w-full drop-shadow-[-5px_10px_10px_rgba(255,115,0,1)] py-2 text-white font-semibold  bg-orange-500 items-center shadow-orange-500 z-10 px-10">
        <div
          className={`${styles.boxWidth} mx-auto md:justify-between flex md:flex-row flex-col w-full justify-items-end`}
        >
          <div className="items-start">Email: swamiabhyanand@gmail.com</div>
          <div className="ml-auto">Call Now! 8881810100</div>
        </div>
      </div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className={`transition-all duration-300 ease-in-out md:mt-0 ${
          isOpen ? "mt-72 md:mt-0" : ""
        }`}
      >
        <Hero />
      </div>

      <KnowMore />
      <BlogSection />
      <VideoSection />
      <FooterSection />
      <EventCard />
    </div>
  );
}

export default App;
