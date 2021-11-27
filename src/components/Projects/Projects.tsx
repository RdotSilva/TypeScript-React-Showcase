import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollService from "../../services/ScrollService";
import Animations from "../../services/Animations";
import "./Projects.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Project, projects } from "./constants";
import ProjectCard from "./ProjectCard";

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

type ProjectsProps = {
  id: string;
};

const Projects = (props: ProjectsProps) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

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
              {projects.map((project) => (
                <ProjectCard
                  title={project.title}
                  skills={project.skills}
                  description={project.description}
                />
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
