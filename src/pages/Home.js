import React from "react";
import Tours from "../components/Tours";
import Blogs from "./Blogs";
import { BsArrowRightCircle } from "react-icons/bs";
const Home = () => {
  return (
    <>
      <section className="hero-section text-center pt-60 h-[100vh]  text-white p-4 bg-hero-image bg-cover pb-60">
        <h1 className=" text-4xl font-special">Explore Nature in Nepal</h1>
        <button className="mt-10 border-white font-bold inline-block border px-8 py-4 text-lg rounded-full hover:bg-primary hover:text-white transition-all hover:scale-105 hover:translate-y[-1]">
          Discover our tours
        </button>
      </section>
      <section>
        <Tours />
        <div className="flex items-center justify-center">
          <button className="text-white bg-primary py-2 px-5 rounded-md hover:bg-primary_dark font-semibold transition-all flex items-center">
            View All <BsArrowRightCircle className="ml-2" />
          </button>
        </div>
      </section>
      <section>
        <Blogs />
      </section>
    </>
  );
};

export default Home;
