import { Box, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import image from "./../image.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>
        <img src={image} alt="logo" width={"150px"} />
      </h3>
      <nav ref={navRef}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={""}>About</NavLink>
        <a href="#menu">Menu</a>

        <NavLink to={"/booking"}>Reservations</NavLink>
        <a href="#menu">Order Online</a>
        <NavLink to={""}>Login</NavLink>
        <button onClick={showNavBar} className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNavBar} className="nav-btn">
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
