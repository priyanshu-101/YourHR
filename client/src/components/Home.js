import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to YourHR!</h1>
      <p>Find your dream job today.</p>
      <div>
        <Link to="/login">Log in</Link>
        <span> or </span>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Home;
