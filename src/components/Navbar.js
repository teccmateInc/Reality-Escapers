import React, { useState } from "react";
import { Nav, Bars, NavLink, NavMenu,H2 } from "./NavElements";
const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="Navbar">
      <Nav>
        <NavLink to="/" className="px-3">
          <h4>Reality Escapers</h4>
        </NavLink>
        <Bars
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        />
        <NavMenu className="navMenu" id={showLinks ? "hidden" : ""}>
          <NavLink exact to="/" className="px-3">
            <H2>Home</H2>
          </NavLink>
          <NavLink to="/about" className="px-3">
            <H2>About</H2>
          </NavLink>
          <NavLink to="/rooms" className="px-3">
            <H2>Rooms</H2>
          </NavLink>
          <NavLink to="/collage" className="px-3">
            <H2>Collage</H2>
          </NavLink>
          <NavLink to="/countries" className="px-3">
            <H2>Countries</H2>
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default NavBar;
