import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollService from "../../services/ScrollService";
import Animations from "../../services/Animations";
import "./Projects.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...owlCarouselOptions}
            >
              <div>Carousel Child Placeholder</div>
            </OwlCarousel>
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
