import React from "react";

const Home = () => {
  return (
    <>
      <section className="hero-section text-center pt-60 h-screen text-white p-4 bg-hero-image bg-cover pb-60">
        <h1 className=" text-4xl font-special">Explore Nature in Nepal</h1>
        <button className="mt-10 border-white inline-block border px-8 py-4 text-lg rounded-full hover:bg-primary hover:text-white transition-all hover:scale-105 hover:translate-y[-1]">
          Discover out tours
        </button>
      </section>
    </>
  );
};

export default Home;
