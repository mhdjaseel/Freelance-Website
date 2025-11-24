import React from 'react'
import pic from './homepage.jpg'
function Homepage() {
  return (
    <div className='bg-emerald-200 h-screen text-gray-800 text-xl font-bold'>Homepage 
     <img src={pic} alt="homepage"className="w-64 h-auto" />
   </div>
  )
}

export default Homepage