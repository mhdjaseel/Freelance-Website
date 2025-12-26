import React from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate("Login/");
  };
  return (
    <>
      <div className="mb-3 ">
        <div>
          <h1
            className="
       top-3 left-6
      px-6 py-3 
      text-3xl
      font-semibold
      font-DynaPuff
      text-emerald-500
      "
          >
            CraftNest
          </h1>
        </div>
        <div>
          <button
            onClick={HandleClick}
            className="
          absolute top-3 right-6
          px-6 py-3 
          bg-emerald-500 text-white font-bold 
          rounded-lg 
          hover:bg-emerald-600 transition
        "
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
