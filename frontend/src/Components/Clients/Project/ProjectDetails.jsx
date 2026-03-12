import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ProjectDetails() {
  const location = useLocation();
  const data = location?.state?.job;
  const [view, setView] = useState(false);
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const GetProposalLists = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.get(
          `http://localhost:8000/client/ProposalList/${data.id}/`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(response.data)
        setProposals(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    GetProposalLists();
  }, [data.id]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6 space-y-6">
      {/* Project Details Card */}
      <div className="max-w-xl w-full border border-emerald-100 rounded-2xl shadow-md p-8 space-y-6">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-emerald-500">{data?.title}</h1>
          <h1 className="text-gray-700 text-xs rounded-full">{data?.category}</h1>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Description</h2>
          <p className="text-gray-600">{data?.description}</p>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data?.skills_required?.split(",").map((skill, index) => (
              <span
                key={index}
                className="border border-gray-200 px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Budget Type */}
        <p className="text-gray-700">
          <span className="font-semibold">Budget Type:</span> {data?.budget_type}
        </p>

        {/* Budget Amount */}
        <p className="text-gray-700">
          <span className="font-semibold">Salary:</span>{" "}
          {data?.budget_amount ? data.budget_amount : "Can Discuss"}
        </p>

        {/* Deadline */}
        <p className="text-gray-700">
          <span className="font-semibold">Deadline:</span>{" "}
          {data?.deadline ? data.deadline : "Can Discuss"}
        </p>

        {/* Toggle Button */}
        <button
          className="bg-emerald-500 text-white px-4 py-2 rounded-2xl hover:bg-emerald-600 transition"
          onClick={() => setView(!view)}
        >
          {view ? "Hide Proposals" : "Show Proposals"}
        </button>
      </div>

     {view && (
        <div className="w-full max-w-3xl">
          <table className="min-w-full  border border-emerald-500">
            <thead className="text-emerald-500 ">
              <tr>
                
                <th colSpan ={2}className="px-6 py-3 text-left font-semibold">
                  Freelancer
                </th>

                <th  className="px-6 py-3 text-center font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {proposals.length > 0 ? (
                proposals.map((proposal, index) => (
                  <tr key={index} className="bg-white text-emerald-500">
                    <td className="px-6 py-3 border border-emerald-500">
                       <img src={`http://localhost:8000${proposal.freelancer.profile_picture}`}  className="w-15 h-15 rounded-full object-cover"
/>

                    </td>
                    <td className="px-6 py-3 border border-emerald-500">
                      {proposal.freelancer.user.first_name} {proposal.freelancer.user.last_name}
                    </td>
                    <td className="px-6 py-3 border border-emerald-500 text-center">
                      <button className="bg-emerald-500 text-white font-medium px-4 py-2 rounded hover:bg-emerald-600 transition">
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="px-6 py-3 text-center text-gray-500 border border-emerald-500"
                  >
                    No proposals yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;