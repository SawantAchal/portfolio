import React from "react";
import "./About.css";
import { Type } from "./Type";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const About = () => {
  return (
    <>
        <div className="about center">
            <h1 data-aos="fade-right" className="mobileHead">
                Hello, I am <span className="about__name">Achal Sawant</span>
            </h1>
            <Type />
            <h1 className="about__desc" data-aos="fade-right">
                I'm a passionate frontend developer dedicated to crafting elegant and efficient web experiences. With a focus on frontend technologies like React.js and Tailwind CSS, I thrive on bringing ideas to life through clean and intuitive designs.
            </h1>
            <div className="about__contact center">
                <a href="https://github.com/SawantAchal" aria-label="github" target="_blank" rel="noreferrer" className="link link--icon" >
                    <FontAwesomeIcon icon="fa-brands fa-square-github" />
                </a>
                <a href="mailto:achals1718@gmail.com" target="_blank" rel="noreferrer" aria-label="mail" className="link link--icon" >
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                </a>
                <a href="tel:+917798620210" target="_blank" rel="noreferrer" aria-label="phone" className="link link--icon" >
                    <FontAwesomeIcon icon="fa-solid fa-phone" />
                </a>
                <a href="https://www.linkedin.com/in/achal-sawant-16853b210/" aria-label="linkedin" className="link link--icon" target="_blank" rel="noreferrer" >
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
            </div>
            <button className="btnResume" onClick={() => { window.open( "https://drive.google.com/file/d/1TiTPLFMJpf9g6kVFX1ZvahIlChRDRou3/view?usp=sharing" );}}>
                Resume
            </button>
        </div>
            <Introduction />
            <Timeline />
            <section id="#skills">
                <Techstacks />
            </section>
    </>
  );
};
