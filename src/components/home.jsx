import React from "react";
import "../style/Home.css";
import background_pic from "../assets/image.png";
import Skills from "./Skills";
import Contact from './Contact'
export default function Home() {
  return (
    <div className="Home_layout">
      <div className="home">
        <div className="introduction">
          <h1>Hello, My Name</h1>
          <h1>is Mahmoud Elbalhi</h1>
          <p>
            I am a Front-End Developer specializing in web interface development
            using React.js, with a strong passion for creating smooth and
            interactive user experiences. I graduated from Damietta University -
            Faculty of Computers and Information with a Bachelor’s degree in
            Computer Science. I have skills in HTML, CSS, JavaScript, and
            React.js, along with experience using Tailwind CSS, Material-UI, and
            other modern technologies. I am always eager to enhance my skills
            and stay updated with the latest trends in front-end development,
            focusing on performance, user experience optimization, and designing
            responsive interfaces that adapt to different devices.
          </p>
          <div className="intro_btns">
            <button>
              <a href="https://drive.google.com/file/d/1P-SgDsCUnPD9qNEd4uNNz7L-jIwC5RGE/view?usp=sharing">My CV</a>
            </button>
           
          </div>
        </div>

        <div className="personal_pic">
          <img src={background_pic} alt="" loading="lazy"/>
        </div>
      </div>
      {/* -----------------Skills----------------------- */}
      <Skills/>
      <Contact/>
     
    </div>
  );
}
