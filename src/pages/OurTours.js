import React from "react";
import Tours from "../components/Tours";
import { HiLocationMarker } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
const OurTours = () => {
  return (
    <div>
      <div className="mt-10 flex justify-center">
        <div className="relative">
          <input
            className=" rounded-full py-3 px-4 pr-10  border-grey border-2 font-semibold outline-none placeholder:text-gray focus:border-primary transition-all "
            placeholder="Enter destination"
          />
          <HiLocationMarker
            size={20}
            className="absolute right-4 top-4"
            fill="#808080"
          />
        </div>
        <button className="flex items-center font-bold bg-primary text-white py-3 px-4 ml-2 rounded-full hover:bg-primary_dark transition-all ">
          Search Tours <BiSearchAlt className="ml-2" size={25} />
        </button>
      </div>

      <Tours />
    </div>
  );
};

export default OurTours;
