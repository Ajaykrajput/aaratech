/* eslint-disable react/prop-types */
const KnowMoreCard = ({ cardData }) => {
  return (
    <div className="flex w-full flex-col items-center max-w-[480px] mx-auto">
      <div className="flex items-center py-4">
        <img src={cardData.image} alt="Logo" className="w-64 h-64" />
      </div>
      <h1 className="text-xl text-gray-500 font-semibold">{cardData.title}</h1>
      <p className="text-base text-black py-6 px-3">{cardData.content}</p>
    </div>
  );
};

export default KnowMoreCard;
