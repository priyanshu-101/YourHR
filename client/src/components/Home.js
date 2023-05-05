import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
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
