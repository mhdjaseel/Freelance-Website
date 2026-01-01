import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CompletePopup from "../Registration/CompletePopup";
import ChatInterface from "./ChatInterface";

function ClientDashboard() {
  const location =useLocation()
  const profile = location.state?.showProfilePopup
const [Popup, setPopup] = useState(false);
  const navigate = useNavigate();
  const handlePostJob = () => {
    navigate("/CreateJob");
  };
  const handleLogout = () => {
    navigate("/");
  };

  useEffect(() => {
    if(profile && profile ===true){
      setPopup(true)
    }
    console.log(profile)
  }, [profile]);
  return (
    <>


      

      {Popup && <CompletePopup PopupOpen = {setPopup} />}

        <main className="mx-auto max-w-7xl px-6 py-8 ">
          <div className="flex justify-start mb-2 ">
            <button className=" rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100">
              View Messages
            </button>
            <button
              onClick={handlePostJob}
              className=" sm:hidden rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white ms-4 hover:bg-emerald-600"
            >
              Post a Job
            </button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4 mb-10  lg:w-2/3">
            <div className="bg-white rounded-lg border p-5">
              <p className="text-sm text-gray-500">Active Projects</p>
              <p className="mt-2 text-2xl font-semibold text-gray-800">1</p>
            </div>
            <div className="bg-white rounded-lg border p-5">
              <p className="text-sm text-gray-500">Open Projects</p>
              <p className="mt-2 text-2xl font-semibold text-gray-800">1</p>
            </div>
            <div className="bg-white rounded-lg border p-5">
              <p className="text-sm text-gray-500">Completed Projects</p>
              <p className="mt-2 text-2xl font-semibold text-gray-800">1</p>
            </div>
           
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1  gap-6  lg:w-full">
            {/* Projects */}
            <section className="lg:col-span-2 bg-white rounded-lg border p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Active Projects
              </h2>

              <div className="flex items-center justify-between border-b py-4 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-800">Frontend</p>
                  <p className="text-sm text-gray-500">Freelancer: jaseel</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  progress
                </span>
              </div>
              <div className="flex items-center justify-between border-b py-4 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-800">Frontend</p>
                  <p className="text-sm text-gray-500">Freelancer: jaseel</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  progress
                </span>
              </div>
            </section>

            
          </div>
        </main>
      
          
        
    </>
  );
}

export default ClientDashboard;
