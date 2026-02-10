import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';

function UserRole() {
 
    const navigate = useNavigate()
    const location = useLocation();
    const details = location.state?.Details;

  const HandleRole = async (role) =>{
     try {
      const updatedData = {
      role: role,
      email: details?.user?.email
    };
    const token = localStorage.getItem('access_token')
    const response = await axios.post('http://localhost:8000/api/AssignRole/', updatedData,{
      headers:{
        'Content-Type':'application/json',
        Authorization:`Bearer ${token}`
      }
    })
    
    console.log(response.data)
    if (role === 'client') {
      navigate('/ClientDashboard')
    }
    else{
      navigate('/FreelancerDashboard')
    }
     }
     catch(error){
      console.log(error?.response?.data)
     }
    
      
  }




  return (
    <>
        <div className='flex flex-col h-screen justify-center items-center'>
        <div>
          <p className='text-2xl font-Tiktok text-emerald-500'>
            Who You Are ?
          </p>
        </div>

        <div className='flex gap-4 font-Tiktok text-gray-600 text-m p-5 border border-emerald-500 rounded-2xl mt-4 cursor-pointer'>
          
          <div className='group w-32'>
            <button value={'client'} onClick={()=>{HandleRole('client')}} className='w-full rounded-xl px-4 py-2 group-hover:bg-emerald-500 group-hover:text-white transition cursor-pointer'>
              Client
            </button>
          </div>
          
          <div className='group w-32'>
            <button value={'freelancer'} onClick={()=>{HandleRole('freelancer')}} className='w-full rounded-xl px-4 py-2 group-hover:bg-emerald-500 group-hover:text-white transition cursor-pointer'>
              Freelancer
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default UserRole