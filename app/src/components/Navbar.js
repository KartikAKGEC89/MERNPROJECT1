import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img src={Logo} alt='Logo' width={100} height={100}/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="./About.js">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="./Contact.js">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="./Login.js">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="./Singup.js">Signup</NavLink>
      </li>
    </ul>
  
  </div>
</nav> 
    </>
  )
}

export default Navbar
