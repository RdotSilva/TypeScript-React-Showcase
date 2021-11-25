import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollService from "../../services/ScrollService";
import Animations from "../../services/Animations";
import "./Projects.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Project, projects } from "./constants";

/**
 * Options to control the behaviour of the Owl Carousel
 */
const owlCarouselOptions = {
  loop: true,
  margin: 0,
  nav: true,
  animateIn: "bounceInRight",
  animateOut: "bounceOutRight",
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
};

const renderProjectCards = (projectList: [Project]) => {
  return projectList.map((project) => {
    <div className="col-lg-12">
      <div className="project-item">
        <div className="project-comment">
          <p>
            <i className="fa fa-quote-left" />
            {project.description}
            <i className="fa fa-quote-right" />
          </p>
        </div>
        <div className="project-info">
          {/* TODO: Add project image <img src={} alt="no internet connection"></img> */}
          <h5>{project.title}</h5>
          <p>{project.skills}</p>
        </div>
      </div>
    </div>;
  });
};

type ProjectsProps = {
  id: string;
};

const Projects = (props: ProjectsProps) => {
  return (
    <div>
      <SectionHeading
        title={"My projects"}
        subHeading={"Check out what I've been working on"}
      />
      <section className="projects-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="project-carousel"
              {...owlCarouselOptions}
            >
              {renderProjectCards(projects)}
            </OwlCarousel>
            <div className="col-lg-12">
              <div className="project-item">
                <div className="project-comment"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
