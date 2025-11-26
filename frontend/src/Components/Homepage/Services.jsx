import React from "react";

function Services() {
  return (
    <>
      <div className="pt-5">
        <div className="text-emerald-500 text-center">
          <p className="font-Tiktok font-semibold text-2xl">
            Services we Provide
          </p>
        </div>
        <div className=" pt-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center px-4  ">
          <div className="bg-emerald-400 hover:bg-emerald-500 transition-colors w-60 h-auto flex flex-col items-center justify-center rounded-lg shadow-lg p-5 text-white text-center">
            <i class="fa-solid fa-code"></i>
            <h2>Web Development</h2>
          </div>
          <div className="bg-emerald-400 hover:bg-emerald-500 transition-colors w-60 h-auto flex flex-col items-center justify-center rounded-lg shadow-lg p-5 text-white text-center">
            <i class="fa-solid fa-shapes"></i>

            <h2>Logo Design</h2>
          </div>
          <div className="bg-emerald-400 hover:bg-emerald-500 transition-colors w-60 h-auto flex flex-col items-center justify-center rounded-lg shadow-lg p-5 text-white text-center">
            <i class="fa-solid fa-chart-line"></i>
            <h2>Digital Marketing</h2>
          </div>
          <div className="bg-emerald-400 hover:bg-emerald-500 transition-colors w-60 h-auto flex flex-col items-center justify-center rounded-lg shadow-lg p-5 text-white text-center">
            <i class="fa-solid fa-pen"></i> <h2>Content Writing</h2>
          </div>
          <div className="bg-emerald-400 hover:bg-emerald-500 transition-colors w-60 h-auto flex flex-col items-center justify-center rounded-lg shadow-lg p-5 text-white text-center">
            <i class="fa-solid fa-palette"></i>
            <h2>Graphic Design</h2>
          </div>
          <div className="bg-emerald-400 hover:bg-emerald-500 transition-colors w-60 h-auto flex flex-col items-center justify-center rounded-lg shadow-lg p-5 text-white text-center">
            <i class="fa-solid fa-clapperboard"></i>
            <h2>Video Editing</h2>
          </div>
          <div className="bg-emerald-400 hover:bg-emerald-500 transition-colors w-60 h-auto flex flex-col items-center justify-center rounded-lg shadow-lg p-5 text-white text-center">
            <i class="fa-solid fa-mobile-screen"></i>
            <h2>App Development</h2>
          </div>
          <div className="bg-emerald-400 hover:bg-emerald-500 transition-colors w-60 h-auto flex flex-col items-center justify-center rounded-lg shadow-lg p-5 text-white text-center">
            <i class="fa-solid fa-magnifying-glass-chart"></i>
            <h2>SEO</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
