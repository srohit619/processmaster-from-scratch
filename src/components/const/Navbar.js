import React from "react";
import "../styles/Navbar.css"; // CSS file for styling
import notificationBell from "../icons/bell.png";
import avatar from "../icons/avatar.png";
import nightMode from "../icons/night-mode.png";
import appLogo from "../icons/process.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={appLogo} alt="applog" />
        <span className="navbar__logo">Processmaster </span>{" "}
      </div>{" "}
      <div className="navbar__right">
        <div className="navbar__icon">
          <img src={nightMode} alt="mightmode" />{" "}
        </div>{" "}
        <div className="navbar__icon">
          <img src={notificationBell} alt="bell" />{" "}
        </div>{" "}
        {/* <div className="navbar__icon"> Mega Menu Icon </div>{" "} */}{" "}
        <div className="navbar__icon">
          <img src={avatar} alt="avatar" />{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};

export default Navbar;
