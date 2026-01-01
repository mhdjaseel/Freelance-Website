import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [image, setImage] = useState(null);
  const [Error, setError] = useState("");
  const navigate = useNavigate();
  const [Details, setDetails] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
    phone_num: "",
    country: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };
      if (
        updated.password &&
        updated.cpassword &&
        updated.password !== updated.cpassword
      ) {
        setError("Password must be same");
      } else {
        setError("");
      }
      return updated;
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (Details.password !== Details.cpassword) {
      setError("Password must be same");
    } else {
      setError("");
      navigate("/UserRole");
      console.log(Details);
    }
  };

  useEffect(() => {}, [Error]);

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={HandleSubmit}>
          <div className="h-screen w-full flex justify-center items-center">
            <div className="w-full max-w-lg p-8 rounded-xl shadow-lg">
              <h2 className="text-center text-3xl font-Tiktok font-bold text-emerald-500">
                Sign In
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-emerald-500">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fname"
                    onChange={HandleChange}
                    className="mt-2 block w-full rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-emerald-500">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={HandleChange}
                    className="mt-2 block w-full rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-emerald-500">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={HandleChange}
                    className="mt-2 block w-full rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-emerald-500">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    onChange={HandleChange}
                    className="mt-2 block w-full rounded-md border border-emerald-200 px-3 py-1.5 focus:outline-emerald-500"
                  />
                </div>

                {Error && (
                  <p className="col-span-full text-sm text-red-500">{Error}</p>
                )}
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full rounded-md bg-emerald-500 px-4 py-2 text-white font-semibold hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Sign Up
                </button>

                
              </div>
            </div>
          </div>
          
        </form>
        
      </div>
    </>
  );
}

export default Signup;
