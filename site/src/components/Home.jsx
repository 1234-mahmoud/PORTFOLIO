import React from "react";
import Header from "./Header";
import "../style/Home.css";
export default function Home() {
  const skills = [
    "Languages & Frameworks: React.js, JavaScript, HTML, CSS",
    "UI/UX Tools: Tailwind CSS, Bootstrap",
    "Version Control: Git & GitHub",
    "Dealing with API: fake API",
    "Other Skills: Responsive Design, Problem-solving",
    "Team collaboration",
    "Communication skills",
    "Time management",
  ];
  return (
    <div className="home">
      <Header />
      <div className="home_content">

      <div className="layer"></div>
      <div className="container">
        <div className="summary">
          <div className="summary_info">
            <h1>Summary</h1>
            <p>
              As a recent graduate and Front-End Developer skilled in React.js,
              I am passionate about creating dynamic and user-friendly web
              applications. I am dedicated to delivering efficient solutions
              through responsive design, innovative problem-solving, and a
              continuous drive to learn and adapt in the ever evolving field of
              web developmen
            </p>
          </div>
       

        </div>
        <h2>My Skills</h2>
        {skills.map((s, index) => (
          <ul key={index}>
            <li>{s}</li>
          </ul>
        ))}
      </div>
      </div>
    </div>
  );
}
