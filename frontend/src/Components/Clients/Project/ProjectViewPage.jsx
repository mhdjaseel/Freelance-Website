import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
function ProjectViewPage({type}) {
    const [Jobs, setJobs] = useState();
    const navigate = useNavigate()
useEffect(() => {
    
   const GetJobLists = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.get(
          "http://localhost:8000/client/Projectlist/",
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
  return (
    <>
    <div >
        <div className="grid grid-cols-1  gap-6  lg:w-full">
            {/* Projects */}
            <section className="lg:col-span-2 bg-white rounded-lg border p-6">
              
                {type === 'in_progress'?(
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    Active Projects
                 </h2>

                ):
                (<h2 className="text-lg font-semibold text-gray-800 mb-4">
                    {type} Projects
                 </h2>)}

            
     
            {
  type === "in_progress" && (
    Jobs?.active_projects?.map((job) => (
      <div key={job.id} className="flex items-center justify-between border-b py-4 last:border-b-0">
        <div>
          <p className="font-medium text-gray-800">{job.title}</p>
          <p className="text-sm text-gray-500">Freelancer: {job.client.first_name} {job.client.last_name}</p>
        </div>
        <button onClick={()=>{navigate('/ProjectDetails ',{state:{job:job}})}} className="rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
          Details
        </button>
      </div>
    ))
  )
}

{
  type === "open" && (
    Jobs?.open_projects?.map((job) => (
      <div key={job.id} className="flex items-center justify-between border-b py-4 last:border-b-0">
        <div>
          <p className="font-medium text-gray-800">{job.title}</p>
          <p className="text-sm text-gray-500">Freelancer: {job.client.first_name} {job.client.last_name}</p>
        </div>
        <button onClick={()=>{navigate('/ProjectDetails ',{state:{job:job}})}} className="rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
          Details
        </button>
      </div>
    ))
  )
}

{
  type === "completed" && (
    Jobs?.complete_projects?.map((job) => (
      <div key={job.id} className="flex items-center justify-between border-b py-4 last:border-b-0">
         <div>
          <p className="font-medium text-gray-800">{job.title}</p>
          <p className="text-sm text-gray-500">Freelancer: {job.client.first_name} {job.client.last_name}</p>
        </div>
        <button onClick={()=>{navigate('/ProjectDetails ',{state:{job:job}})}} className="rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
          Details
        </button>
      </div>
    ))
  )
}
            </section>

            
          </div>
    </div>
    </>
  )
}

export default ProjectViewPage