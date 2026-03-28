import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function ActiveProjectPage() {
      const location = useLocation();
      const data = location?.state?.job || null
      const [ProjectData, setProjectData] = useState();
const GetProjectData = async() =>{
        try {
      const token = localStorage.getItem("access_token");

      const response = await axios.get(
        `http://localhost:8000/client/ProjectData/${data.id}/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data)
     setProjectData(response.data)

    } catch (error) {
      console.log(error);
    }

   
}
 useEffect(() => {
        console.log(data)
        GetProjectData()
    }, []);
  return (

    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Project Details */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          <h1 className="text-2xl font-bold mb-4">{ProjectData?.job?.title}</h1>

          <p className="text-gray-600 mb-4">{ProjectData?.job?.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-500">Budget</p>
              <p className="font-semibold">{ProjectData?.job?.budget_amount}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Payment Type</p>
              <p className="font-semibold">{ProjectData?.job?.budget_type}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Deadline</p>
              <p className="font-semibold">
                {ProjectData?.job?.deadline || "Not specified"}
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">Skills Required</p>
            <div className="flex flex-wrap gap-2">
              {ProjectData?.job?.skills_required
                  ?.split(",")
                  .map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
            </div>
          </div>
          <div>
              <p className=" mt-3 text-sm text-gray-500">Status</p>
              <p className="font-lighter">
                {ProjectData?.job?.status}
              </p>
            </div>
        </div>

        {/* Freelancer Details */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
          <img
             src={`http://localhost:8000${ProjectData?.freelancer?.profile_picture}`}
            alt="profile"
            className="w-24 h-24 rounded-full mb-3 object-cover"
          />

          <h2 className="text-lg font-semibold">{ProjectData?.freelancer?.user?.first_name} {ProjectData?.freelancer?.user?.last_name}</h2>
          <p className="text-gray-500 mb-3">{ProjectData?.freelancer?.title}</p>
            <p className="text-gray-500 mb-3">{ProjectData?.freelancer?.bio}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {ProjectData?.freelancer?.skills.map((skill) => (
              <span
                
                className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Proposal Section */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-3">{ProjectData?.freelancer?.user?.first_name} {ProjectData?.freelancer?.user?.last_name}'s Proposal</h2>
          <span className="text-gray-500">Cover letter</span>
          <p className="text-gray-600 mb-4">{ProjectData?.proposal?.cover_letter}</p>

          <div className="flex justify-between items-center">
            <span className="text-gray-500">Proposed Amount</span>
            <span className="font-semibold text-lg">
              {ProjectData?.proposal?.proposed_amount}
            </span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ActiveProjectPage

