import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
  return (
    <header>
      <div className="logo">LEARNIT</div>
      <div className="link">
        <Link to={"/"}>Home</Link>
        <Link to={"/courses"}>Courses</Link>
        <Link to={"/about"}>About</Link>
        {isAuth ? (
          <Link to={"/account"}>Account</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
        <Link to={"/contact"}>Contact</Link>
      </div>
    </header>
  );
};

export default Header;