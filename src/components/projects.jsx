import React from "react";
import "../style/Projects.css";
import data from "../data/data";
import Contact from "./Contact";
export default function Projects() {
  return (
    <div className="projects">
      <div className="proj_cont">
        <h1>Projects</h1>
        <div className="container">
          {data.map((p, idx) => (
            <div className="card" key={idx}>
           <div className="card_pic">
           <img src={p.img} alt="pic" loading="lazy" />
           </div>
            <div className="card_data">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
              <div className="proj_links">
                <a href={p.sourseCode}>sourse code</a>
                <a href={p.liveDemo}>live demo</a>
            </div>
            <span>Touch The Card</span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <Contact/>
    </div>
  );
}
