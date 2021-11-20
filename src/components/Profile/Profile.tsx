import React from "react";
import { ReactTypical } from "@deadcoder0904/react-typical";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://twitter.com/rdotsilva">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://github/rdotsilva">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/rdotsilva/">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Ryan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <ReactTypical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer",
                    1000,
                    "Continuous Leaner",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Passion for learning new things and pushing myself
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Contact Me </button>
            <a href="">
              <button className="btn highlighted-btn">See my work</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
