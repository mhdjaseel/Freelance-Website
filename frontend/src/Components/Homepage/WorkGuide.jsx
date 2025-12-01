import React from "react";

function WorkGuide() {
  return (
    <div className="bg-white  h-auto py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        <h1 className="text-4xl font-Tiktok font-bold text-emerald-500 mb-4">
          How It Works
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          A simple guide for clients and freelancers to get started.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <div className="border border-emerald-500 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-emerald-500 mb-3">
              1. Post a Project
            </h2>
            <p className="text-gray-600">
              Clients create a project with requirements, budget, and timeline.
            </p>
          </div>

          <div className="border border-emerald-500 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-emerald-500 mb-3">
              2. Hire a Freelancer
            </h2>
            <p className="text-gray-600">
              Freelancers send proposals and clients choose the best match.
            </p>
          </div>

          <div className="border border-emerald-500 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-emerald-500 mb-3">
              3. Work & Get Paid
            </h2>
            <p className="text-gray-600">
              Work is delivered securely, and payments are released upon approval.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-emerald-500">10,000+</h3>
            <p className="text-gray-600 mt-1">Freelancers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-emerald-500">5,000+</h3>
            <p className="text-gray-600 mt-1">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-emerald-500">98%</h3>
            <p className="text-gray-600 mt-1">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkGuide;
