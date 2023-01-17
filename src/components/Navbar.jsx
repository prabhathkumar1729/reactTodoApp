import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import "../styles/navbar.css";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="Nav">
        <NavLink to="/" activeClassName="active">
          <FaReact />
        </NavLink>
        <div className="NavMenu">
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
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
    // <div>
    //   <NavLink to="/" activeStyle={{ color:'black' }}>Home</NavLink>
    //   <NavLink to="/profile" activeStyle={{ color:'black' }}>Profile</NavLink>
    //   <NavLink to="/todos" activeStyle={{ color:'black' }}>Todo list</NavLink>
    //   <NavLink onClick={() => navigate("/newtodo")}>New Todo</NavLink>
    // </div>
  );
}
