import React from 'react'
import { useNavigate } from 'react-router-dom'

function FreealncerPopup({PopupOpen}) {
    const navigate = useNavigate()

    return (
    <div className="mt-2 flex  justify-center ">
      <div className="border border-emerald-400 p-6 rounded-2xl 
                      w-2/3 max-w-lg bg-white">
        
        <div className="text-center text-2xl font-semibold">
          Complete The Profile and Get A Work
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <button  onClick={()=>{navigate('/FreelanceRegistration')}} className="px-4 py-2 rounded-xl bg-emerald-500 text-white">
            Complete
          </button>
          <button onClick={()=>{PopupOpen(false)}} className="px-4 py-2 rounded-xl bg-red-600 text-white">
            Later
          </button>
        </div>

      </div>
    </div>
  )
}

export default FreealncerPopup