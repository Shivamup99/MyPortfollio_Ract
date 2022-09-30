import React, { useState } from "react";
import "./banner.css";
import { init } from "ityped";
import { useRef } from "react";
import { useEffect } from "react";
import Modal from "./modal/Modal";

const Banner = () => {
    const [openModal , setOpenModal] = useState(false)
  const ref = useRef();
  useEffect(() => {
    init(ref.current, {
      backDelay: 1500,
      showCursor: true,
      strings: ["Shivam Upadhyay", "a Web Developer", "Software Engineer"],
    });
  }, []);
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-left">
          <p>Hi,</p>
          <div className="name">
            I am <span ref={ref}></span>
          </div>
          <p className="desc">
            knowledge in web development with strong interest in full
            stack field that require both conceptual and analytical thinking.
            Always eager to learn new technologies and strategies of approach
            for different problems in coding domain. Over the years I have
            developed the skill of leveraging features of different programming
            languages in web development.
          </p>
          <div className="btn-1">
            <button className="cv">Resume</button>
            <button className="contacts" onClick={()=>setOpenModal(true)}>Contact</button>
          </div>
        </div>
        <div className="banner-right">
          <img
            src="/images/shivam.jpg"
            alt="jsn"
          />
        </div>
      </div>
      {openModal && 
       <Modal setOpenModal={setOpenModal}/>
      }
    </div>

  );
};

export default Banner;
