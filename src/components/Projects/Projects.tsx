import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollService from "../../services/ScrollService";
import Animations from "../../services/Animations";
import "./Projects.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Projects = (props) => {
  return (
    <div>
      <SectionHeading
        title={"My projects"}
        subHeading={"Check out what I've been working on"}
      />
      <section className="projects-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
