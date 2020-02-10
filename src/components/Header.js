import React from "react";
import { Link } from "@reach/router";
import "../style/Header.css";
const Header = () => {
  return (
    <div className="header">
      <div>
        <span className="grab"> Grab</span><span className="IT">IT</span>
      </div>
      <nav>
        <Link to="/">Home</Link> | <Link to="calendar">Calendar</Link> |{" "}
        <Link to="profile">My Profile</Link>
      </nav>
    </div>
  );
};

export default Header;
