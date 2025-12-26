import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Components/Registration/Signup";
import Login from "./Components/Registration/Login";
import ClientRegistration from "./Components/Registration/ClientRegistration";
import FrelancerRegistration from "./Components/Registration/FrelancerRegistration";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ClientRegistration" element={<ClientRegistration/>} />
          <Route path="/FreelanceRegistration" element={<FrelancerRegistration/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
