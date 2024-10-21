import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col bg-cover h-screen bg-no-repeat justify-start items-start  bg-[url(/images/bg1.jpg)]">
        <h1 className="text-3xl md:texl-5xl lg:text-6xl font-bold italic mb-4 mt-40 ml-4">
          Explore the World with Us!
        </h1>
        <p className="text-xl md:texl-2xl lg:text-3xl font-semibold italic ml-4">
          Best travel packages for every budget
        </p>
        <button className="bg-orange-400 rounded-lg p-3 mt-7 hover:bg-orange-500 ml-20 font-semibold hover:scale-90 transition-transform">
          Discover Destinations
        </button>
      </div>
    </section>
  );
};

export default Hero;
