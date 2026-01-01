import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UserRole() {
     const [Role, setRole] = useState('');
    const navigate = useNavigate()
  
  useEffect(() => {
    
if (Role !=='') {
    if (Role === 'freelancer') {
      navigate('/FreelancerDashboard' ,{
        state: { showProfilePopup: true }
      })
}
else{
    navigate('/ClientDashboard',{
      state: { showProfilePopup: true }
    })

}

}

  }, [Role]);
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
            <button value={'client'} onClick={(e)=>setRole(e.target.value)} className='w-full rounded-xl px-4 py-2 group-hover:bg-emerald-500 group-hover:text-white transition cursor-pointer'>
              Client
            </button>
          </div>
          
          <div className='group w-32'>
            <button value={'freelancer'} onClick={(e)=>setRole(e.target.value)} className='w-full rounded-xl px-4 py-2 group-hover:bg-emerald-500 group-hover:text-white transition cursor-pointer'>
              Freelancer
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default UserRole