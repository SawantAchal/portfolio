import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../context/theme";
import "./Header.css";

export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename} style={{fontSize: "20px"}}>
        <h3>
          <a href="#home" className="link">
            Achal
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};