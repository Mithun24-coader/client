import React, { useState } from "react";
import { SidebarItems } from "./SidebarItems";
import "./sidebar.css";
import { Link } from "@material-ui/core";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import { IconContext } from "react-icons";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcon.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcon.AiOutlineClose />
              </Link>
            </li>
            {SidebarItems.map((item, index) => {
              return (
                <li key={index} className={item.cssName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
