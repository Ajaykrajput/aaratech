import { DollarSign, Facebook, LinkedinIcon, Twitter } from "lucide-react";
import { linkCard } from "../constants";
import AshramContact from "./AshramContact";

const FooterSection = () => {
  return (
    <div className="flex w-full px-4 flex-col pt-6 border-gray-200 mt-4 shadow border-t-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto w-full">
        {linkCard.map((link) => (
          <div
            key={link.id}
            className={`${link.color} flex w-full items-center flex-col text-white`}
          >
            <div className="flex items-center py-4">
              <img src={link.icon} alt={link.alt} className="w-12 h-12" />
            </div>
            <h1 className="text-3xl  font-medium">{link.title}</h1>
            <h1 className="text-base font-medium py-4">{link.content}</h1>
          </div>
        ))}
      </div>

      {/* Ashram contact */}

      <AshramContact />

      {/* footer media bottom */}

      <div className="bg-orange-600 h-40 w-full px-4 justify-around md:flex md:flex-row items-center flex-col mx-auto text-center py-8 text-white">
        <div className="text-xl  font-semibold">
          ©2022 परम् पूज्य परमादर्श आचार्य महामंडलेश्वर स्वामी श्री अभयानंद
          सरस्वती जी | <br></br> <span>ALL RIGHTS RESERVED</span>
        </div>
        <div className="flex gap-5 items-center justify-center py-4 md:py-0">
          <Facebook className="w-6 h-6 fill-amber-50" />
          <Twitter className="w-6 h-6 fill-amber-50" />
          <LinkedinIcon className="w-6 h-6 fill-amber-50" />
          <DollarSign className="w-6 h-6 fill-amber-50" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            className="w-6 h-6 fill-amber-50"
          >
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FooterSection;
