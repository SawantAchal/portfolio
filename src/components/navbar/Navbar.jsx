import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../context/theme";
import "./Navbar.css";

export const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <>
      <nav className="center nav">
        <ul  style={{ display: showNavList ? "flex" : null }}  className="nav__list">
          <li className="nav__list-item">
            <a href="#home" onClick={() => toggleNavList("#home")} className="link link--nav">
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#about" onClick={() => toggleNavList("#about")} className="link link--nav">
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#skills" onClick={() => toggleNavList("#skills")} className="link link--nav">
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#projects" onClick={() => toggleNavList("#projects")} className="link link--nav">
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#contact" onClick={() => toggleNavList("#contact")} className="link link--nav">
              Contact
            </a>
          </li>
          <li className="nav__list-item">
            <a href="https://drive.google.com/file/d/1lc8-CIcWSKmSPCs1-UpPeYUg8TE1LTbz/view?usp=sharing" onClick={toggleNavList} className="link link--nav" target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
        <button type="button" onClick={toggeltheme} className="btn btn--icon nav__theme" aria-label="toggle theme" style={{ backgroundColor: "inherit" }}>
          {themename === "dark" ? <IoSunnyOutline style={{ fontSize: "22px" }} /> : <FaMoon style={{ fontSize: "22px" }}/>}
        </button>
        <button type="button" onClick={toggleNavList} className="btn btn--icon nav__hamburger" aria-label="toggle navigation">
          {showNavList ? <FontAwesomeIcon icon="fa-solid fa-xmark" /> : <FontAwesomeIcon icon="fa-solid fa-bars" />}
        </button>
      </nav>
    </>
  );
};
