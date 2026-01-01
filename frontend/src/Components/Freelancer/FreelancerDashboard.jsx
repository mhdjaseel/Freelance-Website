import React from 'react'

function FreelancerDashboard() {
  return (
    <>
            <main className="mx-auto max-w-7xl px-6 py-8 ">
          <div className="flex justify-start mb-2 ">
            <button className=" rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100">
              View Messages
            </button>
            
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10  lg:w-2/3">
            <div className="bg-white rounded-lg border p-5">
              <p className="text-sm text-gray-500">Active Projects</p>
              <p className="mt-2 text-2xl font-semibold text-gray-800">1</p>
            </div>
            <div className="bg-white rounded-lg border p-5">
              <p className="text-sm text-gray-500">Open Projects</p>
              <p className="mt-2 text-2xl font-semibold text-gray-800">1</p>
            </div>
            <div className="bg-white rounded-lg border p-5">
              <p className="text-sm text-gray-500">Completed Projects</p>
              <p className="mt-2 text-2xl font-semibold text-gray-800">1</p>
            </div>
           <div className="bg-white rounded-lg border p-5">
              <p className="text-sm text-gray-500">Total Earnings</p>
              <p className="mt-2 text-2xl font-semibold text-gray-800">$12332</p>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1  gap-6  lg:w-full">
            {/* Projects */}
            <section className="lg:col-span-2 bg-white rounded-lg border p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Active Projects
              </h2>

              <div className="flex items-center justify-between border-b py-4 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-800">Frontend</p>
                  <p className="text-sm text-gray-500">Client: jaseel</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  progress
                </span>
              </div>
              <div className="flex items-center justify-between border-b py-4 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-800">Frontend</p>
                  <p className="text-sm text-gray-500">Client: jaseel</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  progress
                </span>
              </div>
              
            </section>

            
          </div>
        </main>
    </>
  )
}

export default FreelancerDashboard