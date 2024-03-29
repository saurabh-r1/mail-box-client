// Header.js
import React from "react";
import {Button, Form} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../Authentication/authSlice";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar">
      <div className="div1">
        <h1>Mail Box</h1>
      </div>

      <div className="div2">
        <Form >
          <div className="search">
          <input className="searchInput" type="text" placeholder="Search" />
          <button className="button">Search</button>
          </div>
        </Form>

        <Button variant="danger" className="button" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;

