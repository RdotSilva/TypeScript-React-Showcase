import React from "react";

type ProjectCardProps = {
  description: string;
  title: string;
  skills: string;
};

const ProjectCard = ({ description, title, skills }: ProjectCardProps) => {
  return (
    <div className="col-lg-12">
      <div className="project-item">
        <div className="project-comment">
          <p>
            <i className="fa fa-quote-left" />
            {description}
            <i className="fa fa-quote-right" />
          </p>
        </div>
        <div className="project-info">
          {/* TODO: Add project image <img src={} alt="no internet connection"></img> */}
          <h5>{title}</h5>
          <p>{skills}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
