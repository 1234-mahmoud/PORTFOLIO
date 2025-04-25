import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";

import { NavLink } from "react-router";
import "../style/Header.css";
import { useState } from "react";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const showSide = () => {
    setShowNav(true);
  };

  const hideSide = () => {
    setShowNav(false);
  };

  return (
    <div className="header">
      <div className="list">
        <AiOutlineUnorderedList className="list_icon" onClick={showSide} />
      </div>
      <div className={`content ${showNav ? "show" : "hide"}`}>
        <div className="my_name">
          <NavLink className="navlink" to={"*"}>
            Mahmoud Elbalhi
          </NavLink>
        </div>
        <div className="links">
          <NavLink className="navlink" to={"/projects"}>
            My Projects
          </NavLink>

          <a href="#contact" className="navlink">
            Conatct Me
          </a>
        </div>
      <div className="close">
        <AiOutlineCloseCircle className="close_icon" onClick={hideSide}/>
      </div>
      </div>

    </div>
  );
}
