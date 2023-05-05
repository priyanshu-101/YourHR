import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResumeUpload.css"

const UploadResume = () => {
  const [resume, setResume] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      
    } catch (error) {
      console.error(error);
    }
    navigate("/resume-upload-success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="resume">Upload your resume:</label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UploadResume;
