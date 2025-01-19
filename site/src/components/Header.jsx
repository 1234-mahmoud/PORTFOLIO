import { SiGmail } from "react-icons/si"; 
import React, { useState } from "react";
import { NavLink } from "react-router";
import "../style/Header.css";
import pic from "../data/images/mahmoud.jpg";
import { BsWhatsapp } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
export default function Header() {
  const [showContact, setShowContact] = useState(false);
  const toggle = () => {
    setShowContact(!showContact);
  };
  return (
    <div className="header">
      <div className="container">
        <div className="links">
          <NavLink className="navlink" to={"*"}>
            Home
          </NavLink>
          <NavLink className="navlink" to={"/projects"}>
            My Projects
          </NavLink>
          <div className="contact navlink" onClick={toggle}>
            Contact Me
            <div className={`${showContact ? "social" : "hide"}`}>
              <div className="icon">
                <a target="blank_" href="https://github.com/1234-mahmoud">
                <BsGithub />
                </a>
              </div>
              <div className="icon">
                <a target="blank_" href="https://www.linkedin.com/in/mahmoud-elbalhi/">
                <GrLinkedinOption />
                </a>
              </div>
              <div className="icon">
                <a target="blank_" href="https://wa.me/+201064218085">
                <BsWhatsapp />
                </a>
              </div>
              <div className="icon">
                <a target="blank_" href="mailto:mahmoud01234elbalhi@gmail.com?subject=Hello&body=I%20wanted%20to%20get%20in%20touch%20with%20you.">
               <SiGmail />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="img_">
          <img src={pic} alt="" />
        </div>
      </div>
    </div>
  );
}
