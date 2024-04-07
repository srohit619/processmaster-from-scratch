// Sidebar.js

import React from "react";
import "../styles/Sidebar.css"; // Import the CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        {" "}
        <li className="sidebar__item"> Dashboard </li>{" "}
        <li className="sidebar__item"> Microservices </li>{" "}
        <li className="sidebar__item"> Wildfly </li>{" "}
        <li className="sidebar__item"> Rabbitmq Console </li>{" "}
        <li className="sidebar__item"> Log Analyzer </li>{" "}
        {/* Add more menu items as needed */}{" "}
      </ul>{" "}
    </div>
  );
};

export default Sidebar;
