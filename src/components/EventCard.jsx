import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const EventCard = () => {
  const [openEvent, setOpenEvent] = useState(false);
  const eventDetailsRef = useRef(null);

  const handleClickOutside = (e) => {
    if (
      eventDetailsRef.current &&
      !eventDetailsRef.current.contains(e.target)
    ) {
      setOpenEvent(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Main Event Card */}
      <div className="fixed bottom-48 right-0 bg-gradient-to-tl from-[#a5ecd8] to-orange-400 p-4 rounded-lg shadow-lg max-w-[180px] cursor-pointer w-full z-20">
        <h3 className="text-sm font-semibold text-white">Latest Event</h3>
        <div className="flex justify-between w-full py-1">
          <h3 className="text-sm font-semibold text-white">नवीनतम कार्यक्रम</h3>

          <ChevronDown
            className="w-4 h-4 ml-auto text-black cursor-pointer"
            onClick={() => setOpenEvent((prev) => !prev)}
          />
        </div>

        {/* Event Details Card */}
        {openEvent && (
          <div
            ref={eventDetailsRef}
            className="fixed bottom-[250px] right-2 rounded-xl max-w-2xl w-full z-50 shadow-[0_0_15px_5px_rgba(255,165,0,0.9)]"
          >
            <table className="min-w-full text-sm rounded-l-md text-gray-800 text-center bg-orange-300 p-4">
              <thead className="font-semibold text-base">
                <tr>
                  <th className="px-2 py-2">प्रारंभ तिथि</th>
                  <th className="px-2 py-2">समाप्ति तिथि</th>
                  <th className="px-2 py-2">वक्ता</th>
                  <th className="px-2 py-2">स्थान</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-white hover:z-50 hover:shadow-amber-50 shadow-2xl">
                  <td className="px-2 py-2">2023-05-17</td>
                  <td className="px-2 py-2">2023-05-23</td>
                  <td className="px-2 py-2">
                    स्वामी अभयानन्द सरस्वती जी महाराज
                  </td>
                  <td className="px-2 py-2">गाजियाबाद</td>
                </tr>
                <tr className="hover:bg-white hover:z-50 hover:shadow-amber-50 shadow-2xl">
                  <td className="px-2 py-2">2023-07-03</td>
                  <td className="px-2 py-2">2023-07-03</td>
                  <td className="px-2 py-2">
                    अनंत श्री विभूषित महामंडलेश्वर सदगुरुदेव स्वामी अभयानंद
                    सरस्वती जी
                  </td>
                  <td className="px-2 py-2">लखनऊ</td>
                </tr>
                <tr className="hover:bg-white hover:z-50 hover:shadow-amber-50 shadow-2xl">
                  <td className="px-2 py-2">2023-07-15</td>
                  <td className="px-2 py-2">2023-07-15</td>
                  <td className="px-2 py-2">स्वामी अभयानंद सरस्वती जी</td>
                  <td className="px-2 py-2">लखनऊ</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* WhatsApp Icon */}
      <div className="fixed bottom-12 cursor-pointer max-w-[180px] right-0 w-full z-20">
        <img
          className="w-20 h-20 ml-auto right-5 mx-5"
          src="https://cdn-icons-png.flaticon.com/128/3536/3536445.png"
          alt="external-whatsapp-messenger"
        />
      </div>
    </>
  );
};

export default EventCard;
