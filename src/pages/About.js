import React from "react";

const About = () => {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1553886334-43d24f24d3bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177&q=80"
        className=" w-full h-screen brightness-75 dark:brightness-50 "
        alt="about_image"
      />
      <h1 className="text-white absolute z-10 top-[20%] left-[50%] translate-x-[-50%]  font-special text-4xl">
        N-Tours
      </h1>
      <p className="text-white text-2xl absolute font-bold max-w-3xl text-center top-[40%] left-[50%] translate-x-[-50%] ">
        N-tours is an online tour/travel booking service created specifically
        for Nepal. Our main aim is to provide its users around the world a
        specialized and affordable tour booking service to experience famous
        natural as well as cultural destinations in Nepal
      </p>
    </div>
  );
};

export default About;
