import React from "react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" p-10 bg-primary_dark  dark:bg-tertiary">
      <div className="flex justify-between items-center text-white font-semibold max-w-7xl mx-auto ">
        <div className=" max-w-xs">
          <h1 className=" text-lg font-bold font-special mb-4">N-Tours</h1>
          <p>
            N-tours is an online tour/travel booking service created
            specifically for Nepal. Our main aim is to provide its users around
            the world a specialized and affordable tour booking service.
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-4">Quick Links</h1>
          <Link
            to="/"
            className="mb-1 block hover:underline transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/tours"
            className="mb-1 block hover:underline transition-all cursor-pointer"
          >
            Our Tours
          </Link>
          <Link
            to="/"
            className="mb-1 block hover:underline transition-all cursor-pointer"
          >
            Blogs
          </Link>
          <Link
            to="/"
            className="mb-1 block hover:underline transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/"
            className="mb-1 block hover:underline transition-all cursor-pointer"
          >
            Contact
          </Link>
        </div>
        <div className="max-w-sm ">
          <h1 className="text-lg font-bold mb-4">Contact Us</h1>
          <input
            placeholder="Enter email"
            className="outline-none p-2 text-sm rounded-lg mb-2 text-black block w-full"
          />
          <div className="relative">
            <textarea
              placeholder="Enter message"
              className="block w-full p-2  text-sm rounded-lg mb-2 outline-none text-black"
              rows={2}
            />
            <FiSend
              className="absolute right-2 bottom-2 text-primary cursor-pointer"
              size={25}
            />
          </div>
          <p className=" text-sm mb-2">
            +977- 9834223443 Dillibazar, Kathmandu
          </p>
          <div className="flex">
            <FaFacebookSquare
              size={25}
              className="mr-2 cursor-pointer hover:scale-110  transition-all "
            />{" "}
            <FaTwitterSquare
              size={25}
              className="mr-2 cursor-pointer hover:scale-110  transition-all"
            />{" "}
            <RiInstagramFill
              size={25}
              className="mr-2 cursor-pointer hover:scale-110  transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
