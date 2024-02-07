import React from "react";
import "./Introduction.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from "../../context/theme";
import profilePic from "../../assets/profilePic.jpeg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4 >Who Am I?</h4>
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Achal Sawant</span> and I am from{" "}
                <span className="different">
                  {" "}
                  Thane, Maharashtra (India)
                </span>
                . I have completed my Master in Computer Application
                from{" "}
                <span className="different">
                  NCRD's Sterling Institute of Management Studies
                </span>
              </h4> 
              <br />
                <h4 >What Do I Do?</h4>
                <br />
                <h4>
                  As a frontend developer, I'm passionate about creating captivating user experiences using the latest tools and technologies in web development. From crafting visually stunning UI designs to ensuring seamless user interactions, I thrive on every aspect of frontend development.
                </h4>
              <br />
                <h4 >Why Choose Me?</h4>
                <br />
                <h4>
                  Backed by a solid foundation in computer science, I bring a unique blend of technical expertise and creative ingenuity to every project. Whether it's crafting an intuitive frontend interface or optimizing website performance, I'm committed to delivering top-notch solutions that exceed expectations.
                </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
