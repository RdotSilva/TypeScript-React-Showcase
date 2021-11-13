import React from "react";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import ProfileFooter from "../Profile/ProfileFooter";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <ProfileFooter />
    </div>
  );
};

export default Home;
