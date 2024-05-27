// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './UI/Navbar';

export default function Navbar() {
  const links = [
    <NavLink key={1}  className="nav-link" to="/" >
      About me
    </NavLink>,
    <NavLink key={2}  className="nav-link" to="/portfolio">
      Portfolio
    </NavLink>,
    <NavLink key={3}  className="nav-link" to="/contact">
      Contact
    </NavLink>,
    <NavLink key={4} className="nav-link" to="/resume">
      Resume
    </NavLink>
  ];

  return <Nav links={links} />;
}
