import React from "react";
import { FaCampground, FaBus, FaHiking } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { GiSailboat } from "react-icons/gi";

const Activities = () => {
  return (
    <div className="my-20 p-10 bg-gray-100 dark:bg-tertiary activities">
      <h3 className=" text-lg text-center mb-10 dark:text-white ">
        Some recreational activities and services in our tours
      </h3>
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <div className="flex flex-col justify-center items-center ">
          <GiSailboat size="50" className="mb-4 text-primary" />
          <p className="dark:text-white">Rafting</p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <FaCampground size="50" className="mb-4 text-primary" />
          <p className="dark:text-white">Camping</p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <FaHiking size="50" className="mb-4 text-primary" />
          <p className="dark:text-white">Trekking</p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <BsFillPersonCheckFill size="50" className="mb-4 text-primary" />
          <p className="dark:text-white">Tour Guide</p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <FaBus size="50" className="mb-4 text-primary" />
          <p className="dark:text-white">Travel Vehicle</p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
