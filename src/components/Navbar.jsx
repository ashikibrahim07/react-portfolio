import React, { useState } from "react";
import "../styles/style.css";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import NavLinks from "./NavLinks";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">
          <h1 className="name">Ashik Ibrahim S</h1>
        </div>
        <div>
          <NavLinks />
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Ashik Ibrahim S</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleDrawer(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <List style={{ backgroundColor: "#0a192f", height: "100vh" }}>
              <ListItemButton>
                <a href="#about">About</a>
              </ListItemButton>
              <ListItemButton>
                <a href="#skills">Skills</a>
              </ListItemButton>
              <ListItemButton>
                <a href="#projects">Projects</a>
              </ListItemButton>
              <ListItemButton>
                <a href="#contact">Contact</a>
              </ListItemButton>
            </List>
          </Drawer>
          <div className={`menu-links ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
