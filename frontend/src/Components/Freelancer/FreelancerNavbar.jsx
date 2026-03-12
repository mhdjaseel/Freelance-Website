import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { googleLogout } from "@react-oauth/google";

import { useNavigate } from 'react-router-dom'
function FreelancerNavbar() {
    const navigate = useNavigate()
   const HandleLogout = () =>{
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("profile_completion")
        localStorage.clear();

        googleLogout()
        navigate('/Login')
    }
  const [User, setUser] = useState();

    useEffect(() => {
      
    const GetUserInfo = async(e)=>{
      const token = localStorage.getItem("access_token");

        try {
        const response = await axios.get(
          "http://localhost:8000/api/UserInfo/",
          {
            headers:{
              Authorization : `Bearer ${token}`
            }
          }
        );
          setUser(response.data)
          console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    };
      GetUserInfo()
    }, []);
    return (
    <>
    <header className="bg-white border-b">
      <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-semibold text-gray-800">
          {User?.first_name}  {User?.last_name}
        </h1>

        <nav className="flex items-center gap-4">
          <Link
            to="/FreelancerDashboard"
            className="text-sm font-medium text-gray-700 hover:text-emerald-500"
          >
            Dashboard
          </Link>

          <Link
            to="/"
            className="text-sm font-medium text-gray-700 hover:text-emerald-500"
          >
            Messages
          </Link>
<Link
            to="/Joblist"
            className="text-sm font-medium text-gray-700 hover:text-emerald-500"
          >
            Jobs
          </Link>
          

          <button
            onClick={HandleLogout}
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            Logout
          </button>
        </nav>

      </div>
    </header>
    </>
  )
}

export default FreelancerNavbar