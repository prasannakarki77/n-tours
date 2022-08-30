import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import BookingFormModal from "../components/BookingFormModal";

const Tour = () => {
  const [openForm, setOpenForm] = useState(false);
  const handleOnClose = () => setOpenForm(false);
  return (
    <div className="min-h-screen">
      <div className="bg-tour4 h-[60%] bg-cover bg-bottom pt-[16%] p-8 ">
        <div className="tour-info max-w-lg bg-white bg-opacity-90 p-4 rounded-2xl dark:bg-tertiary dark:bg-opacity-70 ">
          <h1 className=" text-3xl font-bold text-primary font-special">
            Pokhara
          </h1>
          <p className="  text-justify font-semibold mt-4 dark:text-white">
            Pokhara is one of the most popular tourist destinations in Nepal.
            Many tourists visit Pokhara Valley to see the Himalayan range and
            lakes. Pokhara is also famous for boating, trekking, rafting and
            extreme sports like rafting, canoeing and bungee jumping.
          </p>
        </div>
      </div>
      <div className="p-10">
        <div className="mb-10">
          <h1 className="text-primary font-bold text-2xl ">Tour Overview</h1>
          <p className="mt-4 font-semibold text-justify dark:text-white">
            Pokhara Tour Package from Kathmandu run by Hike on Trek is the best
            tour package at a reliable cost and time period. We also offer
            various tour activities in Pokhara like Stunning mountains view of
            Annapurna Himalayas (weather permitting) Full day tour of Pokhara
            Valley, Paragliding, Zip Flyer, Sky Diving (Only during November),
            Ultralights flight, Boating in Fewa Lake, Cycling, Hiking.Pokhara is
            the best way to spend your holidays in Nepal with a couple of night
            stays. Not only for foreigners Pokhara is equally famous for Nepali
            locals too. The major places to be explored during Pokhara Tour are
            Barahi Temple, Lakeside, Sarangkot, Davie’s Fall, Gupteswar Cave,
            Tibetan Village, Seti River, Bindabasini Temple, Mountain Museum,
            Monastery, World Peace Pagoda.
          </p>
        </div>
        <div className="mb-10">
          <h1 className="text-primary font-bold text-2xl ">Visit Sites</h1>
          <p className="mt-4 font-semibold text-justify dark:text-white">
            Phewa Lake, Davies Falls, Tal Barahi temple, International Mountain
            Museum, Begnas Lake etc.
          </p>
        </div>
        <div className="mb-10">
          <h1 className="text-primary font-bold text-2xl ">Adventure sports</h1>
          <p className="mt-4 font-semibold text-justify dark:text-white">
            Rafting, Bunjee jumping, Paragliding, Boating, Trekking etc.
          </p>
        </div>
        <p className="text-2xl font-bold text-center mb-10 dark:text-white">
          Choose booking option
        </p>

        <div className="flex max-w-6xl mx-auto justify-between ">
          <div className="text-center  font-semibold  px-14 py-10 rounded-xl premium dark:bg-tertiary">
            <p className=" text-red-500 text-xl  mb-6">Premium</p>
            <p className=" uppercase  text-sm mb-6 dark:text-white">Includes</p>
            <div className=" text-gray-400  mb-10 ">
              <p className="mb-2">10 days tour</p>
              <p className="mb-2">adventure sports</p>
              <p className="mb-2">professional photo op</p>
              <p className="mb-2">A/C Delux Bus</p>
            </div>
            <p className=" text-gray-400 mb-6 text-xl ">
              Rs{" "}
              <span className=" text-xl text-red-600 font-bold ">20,000</span> /
              person
            </p>
            <button
              onClick={() => setOpenForm(true)}
              className=" text-primary border-primary font-bold inline-block border px-6 py-3 text-lg rounded-2xl hover:bg-primary hover:text-white transition-all hover:scale-105 hover:translate-y[-1]"
            >
              Book now
            </button>
          </div>
          <div className="text-center  font-semibold  px-14 py-10 rounded-xl standard dark:bg-tertiary">
            <p className=" text-sky-500 text-xl  mb-6">Standard</p>
            <p className=" uppercase  text-sm mb-6 dark:text-white">Includes</p>
            <div className=" text-gray-400  mb-10 ">
              <p className="mb-2">Visit all tour sites</p>
              <p className="mb-2">6 days tour</p>
              <p className="mb-2">few adventure sports </p>
              <p className="mb-2">A/C Travel Van</p>
            </div>
            <p className=" text-gray-400  mb-6 text-xl ">
              Rs{" "}
              <span className=" text-xl text-sky-500 font-bold ">10,000</span> /
              person
            </p>
            <button
              onClick={() => setOpenForm(true)}
              className=" text-primary border-primary font-bold inline-block border px-6 py-3 text-lg rounded-2xl hover:bg-primary hover:text-white transition-all hover:scale-105 hover:translate-y[-1]"
            >
              Book now
            </button>
          </div>
          <div className="text-center  font-semibold  px-14 py-10 rounded-xl basic dark:bg-tertiary shadow-2xl ">
            <p className=" text-xl  mb-6 dark:text-white">Basic</p>
            <p className=" uppercase  text-sm mb-6 dark:text-white">Includes</p>
            <div className=" text-gray-400 mb-10 ">
              <p className="mb-2">Visit all tour sites</p>
              <p className="mb-2">3 days tour</p>
              <p className="mb-2">professional photo op</p>
              <p className="mb-2">A/C Car</p>
            </div>
            <p className=" text-gray-400 mb-6 text-xl ">
              Rs{" "}
              <span className=" text-xl text-black font-bold dark:text-white ">
                5,000
              </span>{" "}
              / person
            </p>
            <button
              onClick={() => setOpenForm(true)}
              className=" text-primary border-primary font-bold inline-block border px-6 py-3 text-lg rounded-2xl hover:bg-primary hover:text-white transition-all hover:scale-105 hover:translate-y[-1]"
            >
              Book now
            </button>
          </div>
        </div>
      </div>
      <BookingFormModal onClose={handleOnClose} visible={openForm} />
    </div>
  );
};

export default Tour;
