import React from 'react';
import Services from './services';
import TopRatedFreelancers from './TopRatedFreelancers';
import WorkGuide from './WorkGuide';
import Footer from './Footer';
import Navbar from './Navbar';
function Homepage() {
  return (
    <>
    <Navbar/>
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
      
      

      <div className="relative z-10 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold font-Tiktok">
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
    <TopRatedFreelancers/>
    <WorkGuide/>
    <Footer/>
    </>
  );
}

export default Homepage;
