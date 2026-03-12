import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function CreateJob() {
  const navigate = useNavigate();
  const [profileCompletion, setProfileCompletion] = useState(false);

  const [Details, setDetails] = useState({
    title: "",
    description: "",
    category: "",
    deadline: "",
    budget_type: "",
    budget_amount: "",
    skills_required: ""
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
      const response = await axios.post(
        "http://localhost:8000/client/JobPost/",
        Details,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        toast.success("Job created successfully!");
        navigate("/ClientDashboard");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to create job. Please try again.");
    }
  };

  useEffect(() => {
    const profile_completion = localStorage.getItem("profile_completion");
    console.log("profile_completion:", profile_completion);
    setProfileCompletion(profile_completion === "true");
  }, []);

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={HandleSubmit}>
          <div className="h-screen w-full flex justify-center items-center">
            <div className="w-full max-w-lg p-8 rounded-xl border mt-10 sm:m-1 border-emerald-500">
              <h2 className="text-center text-3xl font-Tiktok font-bold text-emerald-500">
                Create a Job
              </h2>

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label className="block text-sm font-medium text-emerald-500">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    onChange={HandleChange}
                    className="mt-2 block w-full rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                  />
                </div>

                <div className="sm:col-span-6">
                  <label className="block text-sm font-medium text-emerald-500">
                    Description *
                  </label>
                  <textarea
                    cols="20"
                    rows="3"
                    required
                    name="description"
                    onChange={HandleChange}
                    className="mt-2 block w-full rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                  ></textarea>
                </div>

                <div className="sm:col-span-6">
                  <label className="block text-sm font-medium text-emerald-500">
                    Skills Required * (use comma after every skill)
                  </label>
                  <textarea
                    cols="20"
                    rows="3"
                    required
                    name="skills_required"
                    onChange={HandleChange}
                    className="mt-2 block w-full rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                  ></textarea>
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-emerald-500">
                    Category *
                  </label>
                  <select
                    name="category"
                    required
                    onChange={HandleChange}
                    className="mt-2 block w-full rounded-md border border-emerald-200 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select a category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Logo Design">Logo Design</option>
                    <option value="Content Writing">Content Writing</option>
                    <option value="App Development">App Development</option>
                    <option value="SEO">SEO</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Video Editing">Video Editing</option>
                  </select>
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-emerald-500">
                    Deadline
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    onChange={HandleChange}
                    className="mt-2 block w-full rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-emerald-500">
                    Budget Type *
                  </label>
                  <select
                    name="budget_type"
                    onChange={HandleChange}
                    required
                    className="mt-2 block w-full rounded-md border border-emerald-200 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select Type</option>
                    <option value="fixed">Fixed Rate</option>
                    <option value="hourly">Hourly Rate</option>
                  </select>
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-emerald-500">
                    Budget
                  </label>
                  <input
                    type="number"
                    name="budget_amount"
                    onChange={HandleChange}
                    className="mt-2 block w-full rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                  />
                </div>
              </div>

              <div className="mt-10">
                {!profileCompletion && (
                  <p className="w-full border rounded-md px-4 py-2 text-red-500 font-semibold mb-2">
                    Complete Profile first
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!profileCompletion}
                  className={`w-full rounded-md px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
                    ${
                      profileCompletion
                        ? "bg-emerald-500 text-white hover:bg-emerald-400"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                    }`}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateJob;