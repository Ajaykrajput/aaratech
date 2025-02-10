import { logo_abhyananda } from "../assets";
import { ashramContect } from "../constants";
import { MailCheckIcon, PhoneCall } from "lucide-react";

const AshramContact = () => {
  return (
    <div className="flex md:flex-row flex-col mt-16">
      <div className="md:w-1/3 w-full flex shadow-[0_0_15px_5px_rgba(255,165,0,0.7)] mr-1 px-4">
        <div className={` flex w-full items-center flex-col text-center`}>
          <div className="flex items-center py-4">
            <img src={logo_abhyananda} alt={"logo"} className="w-24 h-24" />
          </div>
          <h1 className="text-xs  font-medium">
            आचार्य महामंडलेश्वर स्वामी श्री अभयानंद सरस्वती जी
          </h1>
          <h1 className="text-xs font-medium py-4">
            ॥श्री गुरूवे नमः॥ (परम् पूज्य महामंडलेश्वर स्वामी श्री अभयानन्द
            सरस्वती जी महराज) कुलं पवित्रं जननी कृतार्था वसुन्धरा पुण्यवती च
            तेन। अपारसंवित्सुखसागरेऽस्मिन् लीनं परे ब्रह्मणि यस्य चेतः॥
            (स्कंन्दपुराणम्)
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-1 pt-1.5 md:pt-0">
        {ashramContect.map((ashram) => (
          <div
            key={ashram.id}
            className="flex flex-col w-full text-center gap-2 shadow-[0_0_15px_5px_rgba(255,165,0,0.7)] rounded-b-xs bg-white p-4"
          >
            <h1 className="text-xs py-3 font-medium">{ashram.title}</h1>
            <div className="flex py-1 flex-col md:flex-row items-center text-center w-full">
              <PhoneCall className="w-5 h-5 ml-0 md:ml-10 text-orange-500 fill-orange-500" />
              <h1 className="text-xs font-medium ml-0 md:ml-12 pt-2 md:pt-0">
                {ashram.contact}
              </h1>
            </div>
            <div className="flex py-1 flex-col items-center md:flex-row text-center w-full pt-2 md:pt-0">
              <MailCheckIcon className="w-5 h-5 ml-0 md:ml-10 text-orange-500 fill-orange-500" />
              <h1 className="text-xs font-medium ml-0 md:ml-12 pt-2 md:pt-0">
                {ashram.email}
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-around py-1 text-center w-full">
              <button
                type="button"
                className="border-2 rounded-b-xs duration-500 border-red-500 py-0.5 my-auto px-2 text-xs text-white bg-red-500 hover:bg-red-800"
              >
                CLICK HERE
              </button>
              <img
                src={ashram.image}
                alt={ashram.alt}
                className="w-64 h-64 md:w-32 md:h-24 pt-4 md:py-0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AshramContact;
