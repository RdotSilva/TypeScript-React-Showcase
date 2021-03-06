import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollService from "../../services/ScrollService";
import Animations from "../../services/Animations";
import "./AboutMe.css";

type AboutMeProps = {
  id: string;
};

const AboutMe = ({ id }: AboutMeProps) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== id) return;
    Animations.animations.fadeInScreen(id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  type ProfileData = {
    description: string;
    highlights: { bullets: string[]; heading: string };
  };

  // Profile data that I will render in the AboutMe section
  const profileData: ProfileData = {
    description:
      "Full Stack Software Engineer who enjoys being challenged and working on projects that bring me outside of my comfort zone. Always furthering self-improvement by learning new languages, technologies, and development techniques.",
    highlights: {
      bullets: ["Continuous learner", "Persistence", "Exploring new ideas"],
      heading: "My strengths are",
    },
  };

  const renderHighlight = () => {
    return profileData.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container fade-in" id={id || ""}>
      <div className="about-me-parent">
        <SectionHeading title={"About Me"} subHeading={"Get to know me"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              Full Stack Software Engineer
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{profileData.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToContactMe()}
              >
                {" "}
                Contact Me{" "}
              </button>
              <a href="#">
                <button className="btn highlighted-btn">See My Work</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
