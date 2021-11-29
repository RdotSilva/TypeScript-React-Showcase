import { ReactTypical } from "@deadcoder0904/react-typical";
import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./ContactMe.css";

const ContactMe = (props) => {
  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <SectionHeading subHeading={"Want to connect?"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <ReactTypical loop={Infinity} steps={["Reach out 📧", 1000]} />
          </h2>{" "}
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
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            // TODO: Add image
            {/* <img src={} alt="image not found" /> */}
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
