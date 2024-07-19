import React, { useState, useRef } from "react";
import "./navbar.scss";
import logo from "./../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const menuRef = useRef(null);
  console.log(menuRef.current)
  const [menu, setMenu] = useState("home");
  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  }
  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  };

  return (
    <div className="navbar" id="navbar">
      <img src={logo} alt="" />

      <img
        src={menu_open}
        onClick={openMenu}
        alt="Open Menu"
        className="nav-mob-open "
      />
      <ul className="nav-menu" ref={menuRef}>
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Close Menu"
          className="nav-mob-close"
        />

        <li>
          <AnchorLink className="anchor-link" offset={100} href="#home">
            <p
              onClick={() => {
                setMenu("home");
              }}
            >
              Home
            </p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={100} href="#about">
            <p
              onClick={() => {
                setMenu("about");
              }}
            >
              About
            </p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={100} href="#services">
            <p
              onClick={() => {
                setMenu("service");
              }}
            >
              Service
            </p>
          </AnchorLink>
          {menu === "service" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={100} href="#work">
            <p
              onClick={() => {
                setMenu("work");
              }}
            >
              Portfolio
            </p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={100} href="#contact">
            <p
              onClick={() => {
                setMenu("contact");
              }}
            >
              Contact
            </p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">Connect With me</div>
    </div>
  );
};

export default Navbar;
