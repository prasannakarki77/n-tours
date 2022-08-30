import React from "react";

const BookingFormModal = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "backdrop-area") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="backdrop-area"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-20 "
    >
      <div className="bg-white px-10 py-8 shadow-lg rounded-2xl w-[500px] dark:bg-tertiary ">
        <h1 className="text-primary font-bold text-xl text-center mb-4 ">
          Booking Form
        </h1>
        <input
          placeholder="Enter your name"
          className=" mb-4 w-full booking-input block p-4 text-md font-bold rounded-xl outline-none dark:bg-black dark:text-white "
        />
        <input
          placeholder="Enter your contact number"
          type="number"
          className=" mb-4 w-full booking-input block p-4 text-md font-bold rounded-xl outline-none dark:bg-black dark:text-white  "
        />
        <input
          placeholder="Select tour date"
          className="  mb-4 w-full booking-input block p-4 text-md font-bold rounded-xl outline-none dark:bg-black dark:text-white  "
        />
        <input
          placeholder="Enter pickup location"
          className="  mb-4 w-full booking-input block p-4 text-md font-bold rounded-xl outline-none dark:bg-black dark:text-white  "
        />
        <div className="flex items-center">
          <span className="text-lg font-bold text-gray-400">
            Select no. of people
          </span>
          <input
            type="number"
            defaultValue={0}
            placeholder={0}
            className=" mb-4  booking-input ml-7 max-w-[100px]  p-4 text-md font-bold rounded-xl outline-none dark:bg-black dark:text-white "
          />
        </div>
        <div className="text-center  mb-8 text-lg font-bold text-gray-400">
          Total Price :{" "}
          <span className="text-red-500 text-2xl">Rs. 20,000</span>
        </div>
        <button className=" w-full bg-primary text-white py-4 text-lg font-bold rounded-lg hover:bg-primary_dark transition-all hover:shadow-2xl hover:translate-y-[-5px]">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingFormModal;
