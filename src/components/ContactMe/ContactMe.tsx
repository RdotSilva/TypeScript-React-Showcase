import { ReactTypical } from "@deadcoder0904/react-typical";
import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

const ContactMe = (props) => {
  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <SectionHeading subHeading={"Want to connect?"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col"></div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            // TODO: Add image
            {/* <img src={} alt="image not found" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
