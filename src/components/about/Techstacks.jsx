import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {  SiRedux,  SiHtml5,  SiExpress,  SiTailwindcss,  SiFirebase,  SiMysql,  SiSequelize,  SiMongoose,  SiVercel,  SiRender,  SiChakraui,  SiDocker} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>TailwindCSS</h5>
          </div>
          <div>
            <SiChakraui />
            <h5>ChakraUI</h5>
          </div>
          <div>
            <SiMysql />
            <h5>MySQL</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiFirebase />
            <h5>Firebase</h5>
          </div>
          <div>
            <SiVercel />
            <h5>Vercel</h5>
          </div>
        </div>
      </div>
    </>
  );
};
