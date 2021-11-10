import React from "react";
import "./ProfileFooter.css";

const ProfileFooter = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require("../../../assets/Home/shape-bg.png").default}
          alt="profile footer image"
        />
      </div>
    </div>
  );
};

export default ProfileFooter;
