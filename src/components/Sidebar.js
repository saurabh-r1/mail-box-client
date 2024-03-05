import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button>Compose</button>
      {/* <NavLink to="/compose" activeClassName="activeLink" className="navLink">
        Compose
      </NavLink>
      <NavLink to="/inbox" activeClassName="activeLink" className="navLink">
        Inbox
      </NavLink>
      <NavLink to="/sent" activeClassName="activeLink" className="navLink">
        Sent Mail
      </NavLink> */}
    </div>
  );
};

export default Sidebar;
