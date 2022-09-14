import React from "react";
import PropTypes from "prop-types";
import { Link,NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16)"}}>
      <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      
    </ul>
    <span className="nav-link">
    <NavLink to="/" style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})} activeStyle={{color: "red",textDecoration:"none"}} className="nav-link">Home</NavLink>
    </span>
    <span className="nav-link">
    <NavLink to="/MyQuiz" style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})} activeStyle={{color: "red",textDecoration:"none"}} className="nav-link" >My Quiz</NavLink>
    </span>
    <span className="nav-link">
    <NavLink to="/PlayDash" style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})} activeStyle={{color: "red",textDecoration:"none"}} className="nav-link" >Play Quiz</NavLink>
    </span>
  </div>
  </div>
</nav>


    </div>
  );
}
Navbar.propTypes = { title: PropTypes.string };
Navbar.defaultProps = {
  title: "",
};
