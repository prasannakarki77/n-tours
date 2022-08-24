import React from "react";

const Tours = () => {
  const toursList = [
    {
      name: "Pokhara",
      image:
        "https://images.unsplash.com/photo-1576948187290-457c015b3bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Kathmansu",
      image:
        "https://images.unsplash.com/photo-1605640797058-58b7040a0e61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
    },
    {
      name: "Everest",
      image:
        "https://images.unsplash.com/photo-1544735716-ea9ef790f501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Illam",
      image:
        "https://images.unsplash.com/photo-1602102488252-c4c3daadf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
    },
    {
      name: "Lumbini",
      image:
        "https://images.unsplash.com/photo-1616166831462-48a3e9089c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Karnali",
      image:
        "https://images.unsplash.com/photo-1543411173-82669c51bbed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    },
  ];
  return (
    <div className="p-10 max-w-6xl my-0 mx-auto">
      <div className="flex items-center mb-9">
        <div className="w-1 h-8 bg-primary"></div>
        <h1 className="text-lg font-bold text-primary_dark ml-3">
          Popular Destinations
        </h1>
      </div>
      <div className="flex justify-between items-center flex-wrap">
        {toursList.map((tour) => (
          <div className=" relative w-80 rounded-xl overflow-hidden cursor-pointer shadow-2xl mb-10 h-60">
            <img
              src={tour.image}
              alt="tour_image"
              className="hover:scale-110 transition-all  brightness-[90%] hover:brightness-100 w-full h-full object-cover"
            />
            <span className="text-white absolute bottom-3 text-center w-full text-lg font-extrabold brightness-100">
              {tour.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
