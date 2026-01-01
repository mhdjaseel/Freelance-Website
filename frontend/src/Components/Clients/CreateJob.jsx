import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateJob() {
  const navigate = useNavigate();
  const [Details, setDetails] = useState({
    title: "",
    description: "",
    category: "",
    deadline: "",
    budget_type: "",
    budget:"",
    skills:""

  });
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    navigate("/ClientDashboard");
    console.log(Details);
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={HandleSubmit}>
          <div className="h-screen w-full flex justify-center items-center">
            <div className="w-full max-w-lg p-8 rounded-xl border border-emerald-500">
              <h2 className="text-center text-3xl font-Tiktok font-bold text-emerald-500">
                Create a Job
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label className="block text-sm font-medium text-emerald-500">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    onChange={HandleChange}
                    className="mt-2 block w-full rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                  />
                </div>

                <div className="sm:col-span-6">
                  <label className="block text-sm font-medium text-emerald-500">
                    Description
                  </label>
                  <textarea
                    cols="20"
                    rows="3"
                    name="description"
                    onChange={HandleChange}
                    className="mt-2 block w-full  rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                  ></textarea>
                </div>

                <div className="sm:col-span-6">
                  <label className="block text-sm font-medium text-emerald-500">
                    Skills Required
                  </label>
                  <textarea
                    cols="20"
                    rows="3"
                    name="skills"
                    onChange={HandleChange}
                    className="mt-2 block w-full  rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                  ></textarea>
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-emerald-500">
                    Category
                  </label>
                  <select
                    name="category"
                    onChange={HandleChange}
                    className="mt-2 block w-full rounded-md border border-emerald-200 bg-white px-3 py-2 text-sm
                    focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
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
                  Budget Type
                </label>
                <select
                  name="budget_type"
                  onChange={HandleChange}
                  className="mt-2 block w-full rounded-md border border-emerald-200 bg-white px-3 py-2 text-sm
                    focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select Type</option>
                  <option value="Fixed Rate">Fixed Rate</option>
                  <option value="Hourly Rate">Hourly Rate</option>
                </select>
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-emerald-500">
                  Budget
                </label>
                <input
                  type="number"
                  name="budget"
                  onChange={HandleChange}
                  className="mt-2 block w-full rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                />
              </div>
              </div>
              
              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full rounded-md bg-emerald-500 px-4 py-2 text-white font-semibold hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
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
