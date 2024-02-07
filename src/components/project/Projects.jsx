import React from "react";
import "./Projects.css";
import AirplaneLogo from "../../assets/AirplaneLogo.jpg"
import RealEstateCover1 from '../../assets/RealEstateCover1.jpg'
import InstagramLogo from '../../assets/InstagramLogo.jpg'
import TwitterLogo from '../../assets/TwitterLogo.jpg'
import IMDBLogo from '../../assets/IMDBLogo.png'
import { FaReact } from "react-icons/fa";
import { SiHtml5, SiAmazons3, SiCss3, SiExpress, SiSocketdotio, SiTailwindcss, SiReactrouter, SiFirebase, SiMongodb, SiNodedotjs, SiChakraui,  SiRabbitmq, SiReact, SiMui} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
// import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { FaSass } from "react-icons/fa6";
export const Projects = () => {
  return (
    <>
    <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects"> 
            <div className="projects_container" data-aos="fade-right">
                <div className="project">
                    <div className="project_videocontainer">
                        <div>
                            <img height='0.5rem' src={InstagramLogo} alt="" />
                        </div>
                    </div>
                    <div className="project_information">
                        <h2>Instagram-Clone</h2>
                        <p>
                            The Instagram clone project is a full-stack web application that replicates the core functionalities of the popular social media platform, Instagram. Built using React.js, ChakraUI, Firebase for along with Chakra UI for styling, Firebase for authentication and storage, this project demonstrates my proficiency in modern web development technologies.
                        </p>
                        <div>
                            <FaReact />
                            <SiChakraui />
                            <SiExpress />
                            <SiFirebase />
                        </div>
                        <div>
                            <a href="https://github.com/SawantAchal/Insta-clone" target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt onbt">
                                    View Code
                                </span>
                            </a>
                            <a href="https://insta-clone-liart-one.vercel.app/auth" target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt">
                                    See Live
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
                <div className="project">
                    <div className="project_videocontainer">
                        <div>
                            <img height='0.5rem' src={TwitterLogo} alt=""/>
                        </div>
                    </div>
                    <div className="project_information">
                        <h2>Movix</h2>
                        <p>
                            Movix, built with React.js and SCSS, offers comprehensive details about movies and TV shows, including cast, release dates, and trailers. Leveraging the TMDB API, users can search for content based on various parameters. The website prioritizes usability and visual appeal for an optimal user experience. Future plans include implementing user accounts.
                        </p>
                        <div>
                            <FaReact />
                            <FaSass/>
                        </div>
                        <div>
                            <a href="https://github.com/SawantAchal/movix" target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt onbt">
                                    View Code
                                </span>
                            </a>
                            <a href="https://movie-box-site.netlify.app/" target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt onbt">
                                    See Live
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
                <div className="project">
                    <div className="project_videocontainer">
                        <div>
                            <img src={AirplaneLogo} alt=""/>
                        </div>
                    </div>
                    <div className="project_information">
                        <h2>Best Eats</h2>
                        <p>
                            Best Eats is a sleek Food App Landing page developed with React.js and styled with Tailwind CSS. It features intuitive search functionality categorized by food types, enhancing user experience. The minimalist design and efficient navigation ensure an engaging and delightful experience for visitors.
                        </p>
                        <div>
                            <FaReact />
                            <SiTailwindcss />
                        </div>
                        <div>
                            <a href="https://github.com/SawantAchal/react-with-tailwind-food-ordering" target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt">
                                    View Code
                                </span>
                            </a>
                            <a href="https://tailwindbestfood.netlify.app/"  target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt">
                                    See Live
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
                <div className="project">
                    <div className="project_videocontainer">
                        <div>
                            <img src={AirplaneLogo} alt=""/>
                        </div>
                    </div>
                    <div className="project_information">
                        <h2>Resort Booking</h2>
                        <p>
                            Resort Booking is a dynamic beach resort project featuring comprehensive search functionality. Users can easily filter rooms by price, type, room size, and more, enhancing their booking experience. Developed with a focus on usability, the project offers a seamless interface for browsing and selecting accommodations.
                        </p>
                        <div>
                            <FaReact />
                            <SiTailwindcss />
                        </div>
                        <div>
                            <a href="https://github.com/SawantAchal/react-with-tailwind-food-ordering" target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt">
                                    View Code
                                </span>
                            </a>
                            <a href="https://rooms-bookings.netlify.app/"  target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt">
                                    See Live
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
                <div className="project">
                    <div className="project_videocontainer">
                        <div>
                            <img height='0.5rem' src={IMDBLogo} alt=""/>
                        </div>
                    </div>
                    <div className="project_information">
                        <h2>Youtube-Clone</h2>
                        <p>
                            This YouTube clone replicates the popular video-sharing platform's functionality using React.js, Material UI, and data fetched from Rapid API. Users can explore, search, and watch videos seamlessly. With a responsive design and intuitive user interface, the clone offers an immersive browsing experience akin to the original platform.
                        </p>
                        <div>
                            <FaReact />
                            <SiMui/>
                        </div>
                        <div>
                            <a href="https://github.com/AmolDhawle/IMDB-clone" target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt onbt">
                                    View Code
                                </span>
                            </a>
                            <a href="https://movieshub-nine-eta.vercel.app/" target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt">
                                    See Live
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
                <div className="project">
                    <div className="project_videocontainer">
                        <div>
                            <img height='0.5rem' src={IMDBLogo} alt="" />
                        </div>
                    </div>
                    <div className="project_information">
                        <h2>Hotstar - clone</h2>
                        <p>
                            This Hotstar clone replicates the interface of the popular streaming platform using React and Tailwind CSS, enhanced with data fetched from the TMDB API. Users can explore a vast library of movies and TV shows, view details, and watch trailers. With seamless integration of TMDB data, this clone provides an authentic streaming experience similar to the original platform.
                        </p>
                        <div>
                            <FaReact />
                            <SiMui/>
                        </div>
                        <div>
                            <a href="https://github.com/SawantAchal/disney-clone-with-react-vite-tailwind" target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt onbt">
                                    View Code
                                </span>
                            </a>
                            <a href="https://movieshub-nine-eta.vercel.app/" target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt">
                                    See Live
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};
