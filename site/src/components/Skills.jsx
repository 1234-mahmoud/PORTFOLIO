import React from 'react'
import react_icon_pic from "../assets/react.png";
import html_icon_pic from "../assets/HTML5.png";
import css_icon_pic from "../assets/CSS.png";
import bootstarp_icon_pic from "../assets/Bootstrap.png";
import js_icon_pic from "../assets/javascript.png";
import tailwind_icon_pic from "../assets/Tailwind_CSS.png";
import '../style/Skills.css'
export default function Skills() {
  return (
    <div className="skills_section">
        <h1>My Skills</h1>
        <div className="my_skills">
          <div className="img_box">
            <img src={react_icon_pic} alt="" />
          </div>
          <div className="img_box">
            <img src={html_icon_pic} alt="" />
          </div>
          <div className="img_box">
            <img src={css_icon_pic} alt="" />
          </div>
          <div className="img_box">
            <img src={js_icon_pic} alt="" />
          </div>
          <div className="img_box">
            <img src={bootstarp_icon_pic} alt="" />
          </div>
          <div className="img_box">
            <img src={tailwind_icon_pic} alt="" />
          </div>
        </div>
        {/* ---------------------------------------- */}
        {/* <h1>Contact</h1> */}
        {/* ---------------------------------------- */}
        {/* <h1>my blog</h1> */}
      </div>
  )
}
