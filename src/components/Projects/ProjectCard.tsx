import React from "react";

const ProjectCard = () => {
  return (
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
    </div>
  );
};

export default ProjectCard;
