import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function FreelancerNavbar() {
    const navigate = useNavigate()

    return (
    <>
    <header className="bg-white border-b">
      <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-semibold text-gray-800">
          Freelancer Dashboard
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
            onClick={() => navigate("/")}
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