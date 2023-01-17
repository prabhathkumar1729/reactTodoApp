import React from "react";
import { NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import "../styles/navbar.css";
export default function Navbar() {
  return (
    <>
      <div className="Nav">
        <div className="Home">
          <NavLink to="/" activeClassName="active">
            <FaReact />
          </NavLink>
        </div>
        <div className="Profile">
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
        </div>
        <div className="TodoList">
          <NavLink to="/todos" activeClassName="active">
            Todo list
          </NavLink>
        </div>
        <div className="NavBtn">
          <div className="NavBtnLink">
            <NavLink to="/newtodo"> ADD New Todo</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
