import React from "react";
import Blogs from "./Blogs";

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
        <Blogs />
      </section>
    </>
  );
};

export default Home;
