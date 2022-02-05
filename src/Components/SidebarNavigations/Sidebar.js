import React from "react";
import { SidebarItems } from "./SidebarItems";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="logo"></div>
      <ul className="SidebarLists">
        {SidebarItems.map((value, key) => {
          return (
            <li
              id={window.location.pathname == value.link ? "active" : ""}
              className="row"
              key={key}
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id="icon">{value.icon}</div>{" "}
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
