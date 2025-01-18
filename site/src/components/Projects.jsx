import React from "react";
import Header from "./Header";
import "../style/Projects.css";
import data from "../data/data";
export default function Projects() {
  return (
    <div className="projects">
      <Header />
      <div className="proj_cont">
        <h1>My Portfolio</h1>
        <div className="container">
          {data.map((p, idx) => (
            <div className="card" key={idx}>
              <img src={p.img} alt="pic" />
              <h3>{p.title}</h3>
              <div className="proj_links">
                <a href={p.sourseCode}>sourse code</a>
                <a href={p.liveDemo}>live demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
