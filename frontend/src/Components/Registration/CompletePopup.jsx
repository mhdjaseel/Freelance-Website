import React from "react";
import { useNavigate } from "react-router-dom";

function CompletePopup({PopupOpen}) {
  const navigate = useNavigate()
  const HandleComplete =() =>{
    navigate('/ClientRegistration')
  }
  return (
    <div className="mt-2 flex  justify-center ">
      <div className="border border-emerald-400 p-6 rounded-2xl 
                      w-2/3 max-w-lg bg-white">
        
        <div className="text-center text-2xl font-semibold">
          Complete The Profile and Post a Job
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <button onClick={HandleComplete} className="px-4 py-2 rounded-xl bg-emerald-500 text-white">
            Complete
          </button>
          <button onClick={()=>{PopupOpen(false)}} className="px-4 py-2 rounded-xl bg-red-600 text-white">
            Later
          </button>
        </div>

      </div>
    </div>
  );
}

export default CompletePopup;
