import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Joblist() {

  const [Jobs, setJobs] = useState();
  const navigate = useNavigate()
  useEffect(() => {
    const GetJobLists = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.get(
          "http://localhost:8000/freelancer/Joblist/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log(response.data);
        setJobs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    GetJobLists();
  }, []);

  const CancelProposal =()=>{

  }
  return (
    <>
      <div className="space-y-4 flex flex-col justify-center items-center">
        {Jobs?.map((job) => (
          <div
            key={job.id}
            className="w-full max-w-5xl mt-3  bg-white rounded-lg shadow hover:shadow-md transition p-6"
          >
            <div className="flex justify-between">
              <div className="flex items-center">
              <h1 className="text-lg font-semibold">{job.title} </h1>
              {
                job.applied &&  
              <h1 className="text-sm ms-2 p-1 rounded-2xl font-semibold text-white bg-emerald-400">Applied </h1>

              }
              </div>

              <h1 className=" bg-blue-100 text-blue-800 text-xs font-medium rounded-full p-1">
                {job.category}
              </h1>
            </div>
            <p className="text-gray-500">Posted By :{job.client.first_name} {job.client.last_name} {job.created_at}</p>
            <p className="text-gray-700">{job.description}</p>
            <p className="text-m font-semibold mt-2">Skills Required</p>

            <div className="flex gap-3  pt-2 border-b border-gray-300 pb-3">
              <div className="flex gap-2 flex-wrap">
                {job.skills_required?.split(",").map((skill, index) => (
                  <p
                    key={index}
                    className="border border-gray-100 px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {skill.trim()}
                  </p>
                ))}
              </div>
            </div>
            <div className="sm:flex justify-between">
              <div className="flex justify-start gap-4  pt-2">
                <p className="text-gray-600">{job.budget_type}</p>

                {job.budget_amount ? (
                  <p className="text-gray-600 font-semibold">
                    Salary: {job.budget_amount}
                  </p>
                ) : (
                  <p className="text-gray-600 font-semibold">
                    Salary: Can Discuss
                  </p>
                )}
                {job.deadline ? (
                  <p className="text-gray-600">DeadLine: {job.deadline}</p>
                ) : (
                  <p className="text-gray-600">DeadLine: Can discuss</p>
                )}
              </div>
              <div className="sm:flex items-center mt-2 sm:space-x-3 space-y-2 ">
                <p className="text-gray-500">6 proposals</p>

                {
                  job.applied === true ?(
                <button onClick={CancelProposal} className="bg-emerald-600 p-1 rounded-xl text-amber-50 cursor-pointer">
                  {job.proposal_status}
                </button>
                  ):
                  <button onClick={()=>navigate('/ProposalPage',{state:{data:job}})} className="bg-blue-600 p-1 rounded-xl text-amber-50 cursor-pointer">
                  Apply
                </button>
                }
              </div>
            </div>
          </div>
        ))}
      </div>

   
    </>
  );
}

export default Joblist;
