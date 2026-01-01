import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Components/Registration/Signup";
import Login from "./Components/Registration/Login";
import ClientRegistration from "./Components/Registration/ClientRegistration";
import FrelancerRegistration from "./Components/Registration/FrelancerRegistration";
import UserRole from "./Components/Registration/UserRole";
import ClientDashboard from "./Components/Clients/ClientDashboard";
import CreateJob from "./Components/Clients/CreateJob";
import FreelancerDashboard from "./Components/Freelancer/FreelancerDashboard";
import ClientPageLayout from "./Components/Clients/ClientPageLayout";
import FreelancerPageLayout from "./Components/Freelancer/FreelancerPageLayout";
import Joblist from "./Components/Freelancer/Jobs/Joblist";
function App() {
  return (
    <>
      <Router>
        <Routes>

          {/* Common Pages */}

          <Route path="/" element={<Homepage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} /> 
          <Route path="/UserRole" element={<UserRole />} />
   
          {/* Freelancer Pages */}
          <Route element={<FreelancerPageLayout/>}>
              <Route path="/FreelanceRegistration" element={<FrelancerRegistration />}/>
              <Route path="/FreelancerDashboard" element={<FreelancerDashboard />} />
              <Route path="/Joblist" element={<Joblist/>} />

          </Route>

          {/* Client Pages */}
          <Route element={<ClientPageLayout />}>
            <Route path="/ClientRegistration" element={<ClientRegistration />} />
            <Route path="/ClientDashboard" element={<ClientDashboard />} />
            <Route path="/CreateJob" element={<CreateJob />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
