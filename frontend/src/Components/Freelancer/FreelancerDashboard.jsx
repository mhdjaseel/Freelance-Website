import React, { useEffect, useState } from "react";
import FreealncerPopup from "../Registration/FreealncerPopup";
import axios from "axios";
import ProjectsViews from "./Projects/ProjectsViews";
function FreelancerDashboard() {
  const [Popup, setPopup] = useState(false);
  const [Type, setType] = useState("in_progress");
  const handleChildData = (data) => {
    setCount(data);
  };
  const [Count, setCount] = useState(null);

  useEffect(() => {
    const profile_completion = localStorage.getItem("profile_completion");
    if (profile_completion === "false") {
      setPopup(true);
    }
  }, []);
  return (
    <>
      {Popup && <FreealncerPopup PopupOpen={setPopup} />}
      <main className="mx-auto max-w-7xl px-6 py-8 ">
        <div className="flex justify-start mb-2 ">
          <button className=" rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100">
            View Messages
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3 mb-10  lg:w-2/3">
          <div
            className={`bg-white rounded-lg border p-5 cursor-pointer ${
              Type === "in_progress" ? "border-emerald-500 shadow-lg" : ""
            }`}
            onClick={() => setType("in_progress")}
          >
            <p className="text-sm text-gray-500">Active Projects</p>
            <p className="mt-2 text-2xl font-semibold text-gray-800">
              {Count?.active_count || 0}
            </p>
          </div>
          <div
            className={`bg-white rounded-lg border p-5 cursor-pointer ${
              Type === "completed" ? "border-emerald-500 shadow-lg" : ""
            }`}
            onClick={() => setType("completed")}
          >
            <p className="text-sm text-gray-500">Completed Projects</p>
            <p className="mt-2 text-2xl font-semibold text-gray-800">
              {Count?.completed_count || 0}
            </p>
          </div>
          <div
            className={`bg-white rounded-lg border p-5 cursor-pointer ${
              Type === "review" ? "border-emerald-500 shadow-lg" : ""
            }`}
            onClick={() => setType("review")}
          >
            <p className="text-sm text-gray-500">Total Earnings</p>
            <p className="mt-2 text-2xl font-semibold text-gray-800">
              ${Count?.review_count || 0}
            </p>
          </div>
        </div>

        <ProjectsViews type={Type} counts={handleChildData} />
      </main>
    </>
  );
}

export default FreelancerDashboard;
