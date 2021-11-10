import React from "react";
import Profile from "../Profile/Profile";
import ProfileFooter from "../Profile/ProfileFooter";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Profile />
      <ProfileFooter />
    </div>
  );
};

export default Home;
