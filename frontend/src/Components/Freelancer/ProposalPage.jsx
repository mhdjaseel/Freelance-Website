import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { toast } from "react-toastify";

function ProposalPage() {
  const [Details, setDetails] = useState({
    proposed_amount: "",
    cover_letter: "",
    Job:''
  });


  const location = useLocation();
  const data = location?.state?.data;

    useEffect(() => {
    if (data?.id) {
      setDetails((prev) => ({ ...prev, Job: data.id }));
    }
  }, [data]);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev )=>({ ...prev, [name]: value }));
  };

  const HandleSubmit = async(e) => {
    e.preventDefault();
    setDetails()
    console.log(Details);
    try{
      const token = localStorage.getItem("access_token");
        const response = await axios.post(
          "http://localhost:8000/freelancer/CreateProposal/",Details,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log(response.data);
      } 
      catch (error) {
        if (error.response) {
    toast.error(error.response.data.error || "Something went wrong");
  } else {
    toast.error("Network error, please try again");
  }



      }
    
  };
  return (
    <>
      <div className="space-y-4 flex flex-col justify-center items-center">
        <div className="w-full max-w-5xl mt-3  bg-white rounded-lg shadow hover:shadow-md transition p-6">
          <h1 className="text-emerald-500 font-medium">{data.title}</h1>
          <p className="text-sm text-gray-500">
            {data?.client?.client_profile?.company_name}
          </p>
          <div>
            <label
              className="font-medium text-emerald-500"
              htmlFor="job_description"
            >
              Job Description
            </label>
            <p className=" text-sm ">{data.description}</p>
          </div>

          <div>
            <label
              className=" text-sm font-medium text-emerald-500"
              htmlFor="cover_letter"
            >
              Cover Letter
            </label>
            <textarea
              onChange={HandleChange}
              className="mt-2 block w-full  rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
              name="cover_letter"
              cols="20"
              rows="3"
            ></textarea>
          </div>
<form onSubmit={HandleSubmit}>
          <div>
            <label
              className=" text-sm font-medium text-emerald-500"
              htmlFor="cover_letter"
            >
              Proposed Amount
            </label>
            <input
              type="number"
              onChange={HandleChange}
              className="rounded-md border border-emerald-200 block p-1 focus:outline-emerald-500"
              name="proposed_amount"
            />
          </div>
          <button
            className="p-1 border font-medium text-emerald-400 rounded-xl mt-2 hover:bg-emerald-500 hover:text-white hover:cursor-pointer border-emerald-500 "
            type="submit"
          >
            Submit
          </button>
</form>
        </div>
      </div>
    </>
  );
}

export default ProposalPage;
