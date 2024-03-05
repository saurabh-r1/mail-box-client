import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
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
        <Form>
          <input className="searchInput" type="text" placeholder="Search" />

          <button className="button">Search</button>
        </Form>

        <button className="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
