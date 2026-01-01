import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [Error, setError] = useState('');
  const HandleClick = (e) => {
    e.preventDefault();
    navigate("/Signup");
  };

  const HandleLogin = (e) => {
    e.preventDefault();
    console.log(Email)
    console.log(Password)

    
  };

  useEffect(() => {
    
    

  }, []);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center  px-4">
        <div className="w-full max-w-sm  p-8 rounded-xl shadow-lg">
          <h1 className="text-center text-3xl font-Tiktok font-bold text-emerald-500">
            Login
          </h1>
          <form className="mt-8 space-y-6" onSubmit={HandleLogin}>
            <div>
             <p className="text-red-600">{Error}</p>
              <label
                className="block text-sm font-medium text-gray-400"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-gray-500
                 placeholder-gray-300 outline-none ring-1 ring-emerald-500
                 "
                required
                placeholder="you@example.com"
                onChange={(e)=>setEmail(e.target.value) 
                }
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-400"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-gray-400
                 placeholder-gray-300 outline-none ring-1 ring-emerald-500"
                placeholder="Password"
                required
                onChange={(e)=>setPassword(e.target.value) 
                }
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-md bg-emerald-500 text-white font-semibold
               hover:bg-emerald-400 transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-emerald-400 font-Tiktok mt-2 ">
            Doesn't Have Account ?{" "}
            <span onClick={HandleClick} className="underline cursor-pointer hover:text-emerald-300">
              Signup
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
