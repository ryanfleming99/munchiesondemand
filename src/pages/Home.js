import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex items-start justify-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/ryry/image/upload/v1724935344/HERO_1_1_z8bfjj.webp')"
        }}
      >
        <div className="reveal-container mt-44 text-center text-white">
          <h1 className="text-8xl font-bold mb-4 animate-crashLanding">
            MUNCHIES ON DEMAND
          </h1>
          <p className="text-lg mb-6 animate-crashLanding mb-8">
            Explore our collection of exclusive items.
          </p>
          <a
            href="/shop"
            className="bg-white text-black py-4 px-24 rounded-full hover:bg-blue-700 animate-crashLanding"
          >
            Shop Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
