import React from "react";
import "./Timeline.css";
import { IoSchool } from "react-icons/io5";
import { FaBriefcase, FaStar } from "react-icons/fa6";
import { VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ThemeContext } from "../../context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement className="vertical-timeline-element--work" date={"Feb 2023 - June 2023"} contentStyle={{ boxShadow: `var(--shadow)`, border: "3px solid var(--clr-primary)", backgroundColor: `var(--clr-bg)`, textAlign: "center", color: `var(--clr-fg-alt)`, }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Full Stack Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              Unipolar Technologies Pvt. Ltd. , Navi Mumbai
            </h4>
            <p data-aos="fade-right">
              During my internship at Unipolar Technologies Private Ltd., I dedicated myself to frontend development, specifically focusing on React.js. I utilized React.js to develop a dynamic real estate website, where I gained valuable hands-on experience in frontend development and responsive web design.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement date={"Jan 2022 - July 2023"} contentStyle={{ boxShadow: `var(--shadow)`, border: "3px solid var(--clr-primary)", backgroundColor: `var(--clr-bg)`, textAlign: "center", color: `var(--clr-fg-alt)`, }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Student
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              NCRD's Sterling Institute of Management Studies (Navi Mumbai)
            </h4>
            <p data-aos="fade-right">
                I hold a Master of Computer Applications (MCA) degree, 
                equipping me with a robust understanding of computer science 
                fundamentals. Through coursework and practical projects, I've 
                developed strong programming, software development, and 
                problem-solving skills. Eager to leverage my education to 
                contribute effectively in the field of technology.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement  className="vertical-timeline-element--work"  date={"Aug 2018 - July 2021"}  contentStyle={{ boxShadow: `var(--shadow)`, border: "3px solid var(--clr-primary)", backgroundColor: `var(--clr-bg)`, textAlign: "center", color: `var(--clr-fg-alt)`,}}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{ border: ` 3px solid var(--clr-primary)`, backgroundColor: `var(--clr-bg)`, color: `var(--clr-primary)`,
            }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Student [BSc. (Computer Science)]
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              KMC COLLEGE Khopoli, MUMBAI UNIVERSITY (MH)
            </h4>
            <p data-aos="fade-right">
                I possess a Bachelor of Science in 
                Computer Science (BSc. CS) degree, providing 
                me with a solid foundation in computer 
                science principles. 
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement  icon={<FaStar/>}  iconStyle={{ border: ` 3px solid var(--clr-primary)`, backgroundColor: `var(--clr-bg)`, color: `var(--clr-primary)`, }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
