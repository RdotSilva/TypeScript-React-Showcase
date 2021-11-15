import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollService from "../../services/ScrollService";
import Animations from "../../services/Animations";

const AboutMe = ({ id }) => {
  return (
    <div className="about-me-container screen-container fade-in" id={id || ""}>
      <div className="about-me-parent">
        <SectionHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              Full Stack Software Engineer
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>My skills:</span>
              </div>
              // TODO: Render highlights
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                // onClick={} TODO: Add onCLick handler to scroll to Contact me section
              >
                {" "}
                Contact Me{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
