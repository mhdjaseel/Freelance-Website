import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function ClientRegistration() {
  const navigate = useNavigate();
  const [Details, setDetails] = useState({
    company_name: "",
    company_description: "",
    industry: "",
    website: "",
    profile_picture: null,
  });
  const [previewUrl, setPreviewUrl] = useState(null);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const HandleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      // Validate file size (e.g., max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }

      setDetails((prev) => ({
        ...prev,
        profile_picture: file,
      }));

      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl)
    }
  };



  const HandleSubmit = async(e) => {
    e.preventDefault();
  console.log(Details)

  const formData = new FormData();
  formData.append('company_name', Details.company_name);
  formData.append('company_description', Details.company_description);
  formData.append('industry', Details.industry);
  formData.append('website', Details.website);
if ( Details.profile_picture) {
  formData.append("profile_picture", Details.profile_picture);
}
  console.log(formData)

  try {
    const token = localStorage.getItem('access_token')
    console.log(token)
    const response = await axios.post('http://localhost:8000/client/ClientRegistration/', formData, {
      headers: {
        Authorization:`Bearer ${token}`
      },
    });
    
    console.log('Success:', response.data);
    localStorage.setItem("profile_completion", "true");
    navigate("/ClientDashboard");
  } catch (error) {
    console.error('Error:', error);
  }
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={HandleSubmit}>
          <div className="h-screen w-full flex justify-center items-center">
            <div className="w-full max-w-lg p-8 rounded-xl shadow-lg">
              <h2 className="text-center text-3xl font-Tiktok font-bold text-emerald-500">
                Company Details
              </h2>

              {/* Upload Section */}
              <div className="mt-8 flex flex-col items-center">
                <label className="block text-sm font-medium text-emerald-500 mb-4">
                   Profile Picture
                </label>
                
                {previewUrl ? (
                  <div className="relative">
                    <img
                      src={previewUrl}
                      alt="Profile Preview"
                      className="w-32 h-32 rounded-full object-cover border-4 border-emerald-200"
                    />
                    
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-full bg-emerald-50 border-2 border-dashed border-emerald-300 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-emerald-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}

                <label
                  htmlFor="profile-upload"
                  className="mt-4 cursor-pointer inline-flex items-center px-4 py-2 border border-emerald-500 rounded-md text-sm font-medium text-emerald-500 bg-white hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {previewUrl ? "Change Photo" : "Upload Photo"}
                </label>
                <input
                  id="profile-upload"
                  type="file"
                  name="profile_picture"
                  accept="image/*"
                  onChange={HandleFileChange}
                  className="hidden"
                />
                <p className="mt-2 text-xs text-gray-500">
                  PNG, JPG, GIF up to 5MB
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-emerald-500">
                    Company name
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    required
                    onChange={HandleChange}
                    className="mt-2 block w-full rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-emerald-500">
                    About Company
                  </label>
                  <textarea
                    cols="20"
                    rows="3"
                    name="company_description"
                    required
                    onChange={HandleChange}
                    className="mt-2 block w-full rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                  ></textarea>
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-emerald-500">
                    Industry
                  </label>
                  <input
                    type="text"
                    name="industry"
                    required
                    onChange={HandleChange}
                    className="mt-2 block w-full rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-emerald-500">
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    onChange={HandleChange}
                    className="mt-2 block w-full rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                  />
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full rounded-md bg-emerald-500 px-4 py-2 text-white font-semibold hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ClientRegistration;