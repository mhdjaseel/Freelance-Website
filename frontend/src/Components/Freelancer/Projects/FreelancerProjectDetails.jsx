import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function FreelancerProjectDetails() {
  const location = useLocation();
  const ProjectData = location?.state?.job || null;
  console.log("datas", ProjectData);
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Project Details</h2>

            <h1 className="text-xl font-semibold mb-4 ">
              {ProjectData?.job?.title}
            </h1>

            <p className="text-gray-600 mb-4">
              {ProjectData?.job?.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Budget</p>
                <p className="font-semibold">
                  {ProjectData?.job?.budget_amount}
                </p>
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
              <p className="font-lighter">{ProjectData?.job?.status}</p>
            </div>
          </div>

          {/* Client Details */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">Client Details</h2>

            <img
              src={ProjectData?.client?.profile_picture}
              alt="profile"
              className="w-24 h-24 rounded-full mb-3 object-cover"
            />

            <h2 className="text-lg font-semibold">
              {ProjectData?.job?.client?.first_name}{" "}
              {ProjectData?.job?.client?.last_name}
            </h2>
            <p className="text-gray-500 mb-3">
              {ProjectData?.job?.client?.client_profile?.company_name}
            </p>
            <p className="text-gray-500 mb-3">
              {ProjectData?.job?.client?.client_profile?.company_description}
            </p>
          </div>

          {/* Proposal Section */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-3 text-center">Your Proposal</h2>
            <span className=" text-xl font-semibold">Cover letter</span>
            <p className="text-gray-600 mb-4">
              {ProjectData?.proposal?.cover_letter}
            </p>

            <div className="flex justify-between items-center">
              <span className=" text-xl font-semibold">Proposed Amount</span>
              <span className="text-gray-600">
                {ProjectData?.proposal?.proposed_amount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreelancerProjectDetails;
