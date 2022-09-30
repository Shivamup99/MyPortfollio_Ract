import React, { useState } from "react";
import "./about.css";
import Certificates from "./Certificates";
import Education from "./Education";
import Skills from "./Skills";
// import {NavLink} from 'react-router-dom'
const About = () => {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");
  return (
    <div className="about">
      <h2 className="about-me">About Me</h2>
      <div className="about-contents">
        <div className="about-btns">
          {/* <NavLink to='#' className='about-btn' activeClassName='active'> About me</NavLink> */}
          <button className="active" onClick={() => setAboutFilter("ABOUT")}>
            About me
          </button>
          <button onClick={() => setAboutFilter("EDUCATION")}>Education</button>
          <button onClick={() => setAboutFilter("SKILLS")}>Skills</button>
          <button onClick={() => setAboutFilter("CERTIFICATE")}>
            Certificate
          </button>
        </div>
        {aboutFilter === "ABOUT" && (
          <div className="about-content">
            <img
              src="/images/shivam.jpg"
              alt="dd"
            />
            <div className="about-content-tag">
              <h4>
                I am <span>Shivam Upadhyay</span>{" "}
              </h4>
              <p>
                Always eager to learn new technologies and strategies of
                approach for different problems in coding domain. Over the years
                I have developed the skill of leveraging features of different
                programming languages in web development.
              </p>
              <div className="social-link">
                <p>Social active:</p>
                <span>
                  <a
                    href="https://www.linkedin.com/in/shivamup"
                    target="_blank"
                  >
                    <i class="ri-linkedin-fill"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://github.com/Shivamup99?tab=repositories"
                    target="_blank"
                  >
                    <i class="ri-github-fill"></i>
                  </a>
                </span>
                <span>
                  <a href="https://instagram.com/whoshivam45" target="_blank">
                    <i class="ri-instagram-line"></i>
                  </a>
                </span>
                <span>
                  <a href="https://facebook.com/shivamup" target="_blank">
                    <i class="ri-facebook-circle-fill"></i>
                  </a>
                </span>
              </div>
              <div className="contact">
                <p>Contact Number:</p>
                <span>+91 9198452018</span>
              </div>
            </div>
          </div>
        )}
        {aboutFilter === "EDUCATION" && <Education />}
        {aboutFilter === "SKILLS" && <Skills />}
        {aboutFilter === "CERTIFICATE" && <Certificates />}
      </div>
    </div>
  );
};

export default About;
