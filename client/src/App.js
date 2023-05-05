import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UploadResume from "./components/ResumeUpload";
import ResumeUploadSuccess from "./components/ResumeUploadSuccess";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resume-upload" element={<UploadResume />} />
          <Route
            path="/resume-upload-success"
            element={<ResumeUploadSuccess />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
