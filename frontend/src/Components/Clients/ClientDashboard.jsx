import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import CompletePopup from "../Registration/CompletePopup";
import ChatInterface from "./ChatInterface";
import ProjectViewPage from "./Project/ProjectViewPage";


function ClientDashboard() {
  const [Type, setType] = useState('in_progress');
  const [Count, setCount] = useState(null);
const [Popup, setPopup] = useState(false);
  const navigate = useNavigate();
  const handlePostJob = () => {
    navigate("/CreateJob");
 
  };

  const handleChildData = (data) =>{
    setCount(data)
  }

  useEffect(() => {

    const profile_completion = localStorage.getItem('profile_completion')
  console.log(profile_completion)
    
    if(profile_completion === 'false'){
      setPopup(true)
    }
  }, []);
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
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4 mb-10 lg:w-2/3">
  <div
    className={`bg-white rounded-lg border p-5 cursor-pointer ${
      Type === "in_progress" ? "border-emerald-500 shadow-lg" : ""
    }`}
    onClick={() => setType("in_progress")}
  >
    <p className="text-sm text-gray-500">Active Projects</p>
    <p className="mt-2 text-2xl font-semibold text-gray-800">{Count?.active_count || 0}</p>
  </div>

  <div
    className={`bg-white rounded-lg border p-5 cursor-pointer ${
      Type === "open" ?"border-emerald-500 shadow-lg" : ""
    }`}
    onClick={() => setType("open")}
  >
    <p className="text-sm text-gray-500">Open Projects</p>
    <p className="mt-2 text-2xl font-semibold text-gray-800">{Count?.open_count || 0}</p>
  </div>

  <div
    className={`bg-white rounded-lg border p-5 cursor-pointer ${
      Type === "completed" ? "border-emerald-500 shadow-lg" : ""
    }`}
    onClick={() => setType("completed")}
  >
    <p className="text-sm text-gray-500">Completed Projects</p>
    <p className="mt-2 text-2xl font-semibold text-gray-800">{Count?.completed_count || 0}</p>
  </div>
</div>

          <ProjectViewPage type = {Type} counts = {handleChildData}/>
        </main>
      
          
        
    </>
  );
}

export default ClientDashboard;
