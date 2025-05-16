import React from "react";
import "./Projects.css";
import bestFood from "../../assets/best-food.png"
import resort from '../../assets/resort.png'
import insta from '../../assets/insta.png'
import movie from '../../assets/movie.png'
import youtube from '../../assets/yt.png'
import foodDel from '../../assets/foodDel.png'
import { FaReact } from "react-icons/fa";
import {  SiExpress,  SiTailwindcss,  SiFirebase, SiChakraui,SiMui ,SiMongodb} from "react-icons/si";
import { FaSass } from "react-icons/fa6";
import resume from "../../assets/resume.png"
import blog from "../../assets/blog.png"
import jobtech from "../../assets/jobtech.png"

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
                            <img height='0.5rem' src={resume} alt="" />
                        </div>
                    </div>
                    <div className="project_information">
                        <h2>Resume Builder</h2>
                        <p>
                            Resume Builder (Ongoing): Developing a dynamic resume builder with OpenAI integration for generating bullet points, summaries, and suggestions. Features include PDF and DOCX exports (jspdf, html-docx-js, docx), component-based resume templates, real-time preview, save draft functionality, resume downloads, and an advanced authentication system with OTP-based password recovery via email.
                        </p>
                        <div>
                            <FaReact />
                            <SiMongodb />
                            <SiExpress />
                            <SiTailwindcss />
                        </div>
                        <div>
                            <a href="https://github.com/SawantAchal/instagram" target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt onbt">
                                    View Code
                                </span>
                            </a>
                            <a href="https://vite-insta.netlify.app/" target="_blank" rel="noreferrer">
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
                            <img height='0.5rem' src={blog} alt="" />
                        </div>
                    </div>
                    <div className="project_information">
                        <h2>Blog website</h2>
                        <p>
                            Designed and developed a blog CMS with rich text editing using Jodit and TipTap editors. Integrated EmailJS for contact notifications and built CRUD functionalities for managing blog posts.
                        </p>
                        <div>
                            <FaReact />
                            <SiChakraui />
                            <SiExpress />
                            <SiFirebase />
                        </div>
                        <div>
                            <a href="https://github.com/SawantAchal/instagram" target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt onbt">
                                    View Code
                                </span>
                            </a>
                            <a href="https://vite-insta.netlify.app/" target="_blank" rel="noreferrer">
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
                            <img height='0.5rem' src={jobtech} alt="" />
                        </div>
                    </div>
                    <div className="project_information">
                        <h2>Job Tech</h2>
                        <p>
                            Developed a dynamic job portal using the MERN stack, featuring user authentication, resume uploads, job search and filtering, and an admin dashboard for managing users and listings. Designed for a seamless user experience and scalable performance.
                        </p>
                        <div>
                            <FaReact />
                            <SiChakraui />
                            <SiExpress />
                            <SiFirebase />
                        </div>
                        <div>
                            <a href="https://github.com/SawantAchal/instagram" target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt onbt">
                                    View Code
                                </span>
                            </a>
                            <a href="https://vite-insta.netlify.app/" target="_blank" rel="noreferrer">
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
                            <img height='0.5rem' src={insta} alt="" />
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
                            <a href="https://github.com/SawantAchal/instagram" target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt onbt">
                                    View Code
                                </span>
                            </a>
                            <a href="https://vite-insta.netlify.app/" target="_blank" rel="noreferrer">
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
                            <img height='0.5rem' src={movie} alt=""/>
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
                            <img src={bestFood} alt=""/>
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
                            <a href="https://github.com/SawantAchal/Best-Food" target="_blank" rel="noreferrer">
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
                            <img src={resort} alt=""/>
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
                            <a href="https://github.com/SawantAchal/restaurant-booking" target="_blank" rel="noreferrer">
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
                            <img height='0.5rem' src={youtube} alt=""/>
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
                            <a href="https://github.com/SawantAchal/Youtube-clone" target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt onbt">
                                    View Code
                                </span>
                            </a>
                            <a href="https://youtubewithmaterialui.netlify.app" target="_blank" rel="noreferrer">
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
                            <img height='0.5rem' src={foodDel} alt="" />
                        </div>
                    </div>
                    <div className="project_information">
                        <h2>Food Delivery</h2>
                        <p>
                            This Food Delivery App is a full-stack application designed to replicate the functionality of a typical food delivery platform. Built using the MERN stack (MongoDB, Express.js, React, Node.js), it provides users with a seamless experience for browsing, ordering, and managing food items. The admin panel offers robust capabilities for managing the food inventory.
                        </p>
                        <div>
                            <FaReact />
                            <SiMui/>
                        </div>
                        <div>
                            <a href="https://github.com/SawantAchal/food-delivery-app.git" target="_blank" rel="noreferrer">
                                <span type="button" className="btns onbt onbt">
                                    View Code
                                </span>
                            </a>
                            <a href="https://food-delivery-app-frontend-xekx.onrender.com/" target="_blank" rel="noreferrer">
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
