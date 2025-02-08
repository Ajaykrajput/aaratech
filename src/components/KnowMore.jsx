import { logo_abhyananda } from "../assets";
import { knowMore } from "../constants";
import styles from "../style";
import KnowMoreCard from "./KnowMoreCard";

const KnowMore = () => {
  return (
    <div className={`w-full  flex flex-col`}>
      <div
        className={`max-w-4xl flex w-full my-6 items-center mx-auto flex-col text-center`}
      >
        <div className="flex items-center">
          <img src={logo_abhyananda} alt="Logo" className="w-12 h-12" />
        </div>
        <h1 className="text-3xl text-gray-500">
          परम् पूज्य आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज
        </h1>
        <p className="text-lg text-black py-6 font-semibold px-4">
          ‘आचार्यं मां विजानीयात्’ गुरु को मेरा रूप ही जानो अर्थात् गुरु और
          भगवान् में कोई भेद नहीं है। जो गुरु-वचनों में दृढ़ विश्वास रखता है,
          गुरुदेव जिसपर प्रसन्न रहते हैं, उसे कोई विघ्न नहीं घेरते। गुरु
          माता-पिता-पति सब हैं, उनके बिना संसार में कहीं गति नहीं। गुरु
          सर्वशक्तिमान और वाँछाकल्पतरु हैं।
        </p>
        <button
          type="button"
          className="border-2 duration-500 border-red-500 py-2.5 px-4 text-red-500 hover:text-white hover:bg-red-500"
        >
          Know More
        </button>
        <div className="flex items-center py-4">
          <img src={logo_abhyananda} alt="Logo" className="w-12 h-12" />
        </div>
        <h1 className="text-4xl text-gray-500">हमारे बारे में</h1>
      </div>

      <div
        className={`${styles.boxWidth} grid grid-cols-1 mx-auto gap-5 md:grid-cols-2 text-center`}
      >
        {knowMore.map((cardData) => (
          <KnowMoreCard cardData={cardData} key={cardData.id} />
        ))}
      </div>
    </div>
  );
};

export default KnowMore;
