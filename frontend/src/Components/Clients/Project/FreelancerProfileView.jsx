import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function FreelancerProfileView() {
  const location = useLocation();
  const data = location?.state?.proposal || null;

  const [matchedSkills, setMatchedSkills] = useState([]);
  const navigate = useNavigate()

  const AvailableSkills = (data) => {
    const skillsArray =
      data?.freelancer?.skills?.map((skill) => skill.name) || [];

    const requiredSkills =
      data?.job?.skills_required?.split(",").map((skill) => skill.trim()) || [];

    const matched = requiredSkills.filter((req) =>
      skillsArray.some(
        (skill) => skill.toLowerCase() === req.toLowerCase()
      )
    );

    setMatchedSkills(matched);
  };

  useEffect(() => {
    if (data) {
      AvailableSkills(data);
    }
  }, [data]);

  if (!data) {
    return <div className="text-center mt-10">No freelancer data found</div>;
  }

  const HandleHiring = async(e) =>{
    e.preventDefault()
    const Project_data = {
      'job': data.job.id,
      'proposal': data.id,
      'freelancer': data.freelancer.id,
      'client':data.job.client.client_profile.id
    }
      try {
      const token = localStorage.getItem("access_token");

      const response = await axios.post(
        'http://localhost:8000/client/CreateProject/',Project_data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data)
      setProposals(response.data);
      navigate('/ClientDashboard')
    } catch (error) {
      console.log(error);
    }

    
    console.log('hir',Project_data)
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg border border-emerald-200 p-8">

        {/* Profile Header */}
        <div className="flex items-center space-x-6">
          <img
            src={`http://localhost:8000${data.freelancer.profile_picture}`}
            alt="Freelancer"
            className="w-24 h-24 rounded-full object-cover border-4 border-emerald-500"
          />
          <div>
            <h2 className="text-2xl font-bold text-emerald-600">
              {data.freelancer.user.first_name} {data.freelancer.user.last_name}
            </h2>
            <p className="text-gray-600">{data.freelancer.title}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-emerald-600">Bio</h3>
          <p className="text-gray-700 mt-2">{data.freelancer.bio}</p>
        </div>

        {/* Email */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-emerald-600">Email</h3>
          <p className="text-gray-700 mt-2">
            {data.freelancer.user.email}
          </p>
        </div>

        {/* Website */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-emerald-600">Website</h3>
          <p className="text-gray-700 mt-2">
            {data.freelancer.website || "Not Provided"}
          </p>
        </div>

        {/* Freelancer Skills */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-emerald-600">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.freelancer.skills.map((skill) => (
              <span
                key={skill.id}
                className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Matched Skills */}
      

        {/* Proposal Details */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-emerald-600">Proposal</h3>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Cover Letter:</span>{" "}
            {data.cover_letter}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Proposed Amount:</span>{" "}
            {data.proposal_amount}
          </p>
          
        </div>
 <div className="mt-6">
  <h3 className="text-lg font-semibold text-emerald-600">
    Project Required Skills
  </h3>

  <div className="flex flex-wrap gap-2 mt-2">
    {data?.job?.skills_required
      ?.split(",")
      .map((skill) => skill.trim())
      .map((skill, index) => {
        const isMatched = matchedSkills.includes(skill);

        return (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              isMatched
                ? "bg-green-200 text-green-800 border border-green-500"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {skill}
          </span>
        );
      })}
  </div>
</div>
        {/* Feedback Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-emerald-600">Feedback</h3>

          <div className="space-y-3 mt-2">
            <div className="p-4 border rounded-md bg-gray-50">
              <p className="text-gray-700">
                “Delivered the project on time with excellent quality. Highly recommended!”
              </p>
              <p className="text-sm text-gray-500 mt-1">— Client A</p>
            </div>

            <div className="p-4 border rounded-md bg-gray-50">
              <p className="text-gray-700">
                “Great communication and problem-solving skills.”
              </p>
              <p className="text-sm text-gray-500 mt-1">— Client B</p>
            </div>
          </div>
        </div>

        {/* Hire Button */}
        <div className="mt-8 text-center">
          <button onClick={HandleHiring} className="bg-emerald-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-600 transition">
            Hire Freelancer
          </button>
        </div>

      </div>
    </div>
  );
}

export default FreelancerProfileView;