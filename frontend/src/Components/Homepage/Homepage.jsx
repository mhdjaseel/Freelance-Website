import React from 'react';
import Services from './services';
function Homepage() {
  return (
    <>
    <div
      className="
        relative
        bg-[url('/Images/homepage.jpg')]
        bg-cover bg-center bg-no-repeat
        h-screen w-full
        flex items-center justify-center
        text-white
      "
    >
      
      <button
        className="
          absolute top-3 right-6
          px-6 py-3 
          bg-emerald-500 text-white font-bold 
          rounded-lg 
          hover:bg-emerald-600 transition
        "
      >
        Login
      </button>

      <div className="relative z-10 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to CraftNest
        </h1>

        <p className="text-xl font-semibold md:text-2xl">
          Creative Minds, Reliable Results
        </p>

        <button
          className="
            px-6 py-3 
            bg-emerald-500 text-white font-bold 
            rounded-lg 
            hover:bg-emerald-600 transition
          "
        >
          Get Started
        </button>
      </div>
    </div>
    <Services/>
    </>
  );
}

export default Homepage;
