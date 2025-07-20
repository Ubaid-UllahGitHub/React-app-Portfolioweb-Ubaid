import React from "react";
import { Link } from "react-router-dom";
import './style.css';
const AboutServices = () => {
    return (
        <services className='about-services-section' id="about">
            <div className="inner-section">
                <div className="about" >
                    <div className="about-me">
                        <h3>About Me</h3>
                        <div className="text">
                            <div className="custom-hr" >
                                {/* <div>-</div> */}
                            </div>
                            <p>
                                I am a passionate and detail-oriented Front-End Developer with a strong foundation in web development technologies and a keen eye for design. With expertise in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Bootstrap</strong>, and <strong>React.js</strong>, I create responsive, user-friendly, and visually appealing websites tailored to client needs.
                                On the WordPress side, I excel in customizing websites using popular page builders like <strong>Elementor</strong>, <strong>Divi</strong>, <strong>Beaver Builder</strong>, and <strong>Gutenberg</strong>. I specialize in developing seamless <strong>WooCommerce</strong> solutions, crafting custom designs, and ensuring smooth functionality for e-commerce platforms.
                            </p>
                        </div>
                        <div className="button-about">
                            <Link to="/about" className="custom-link">
                                <button className="about-button">
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                        <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="about-skills">
                        <h5>MY SKILLS</h5>
                        <div className="tech-skill-wrapper">
                            {[
                                [
                                    { text: 'HTML', image: '/image/HTML5.png' },
                                    { text: 'CSS', image: '/image/css.png' },
                                    { text: 'Tailwind CSS', image: '/image/TailwindCss.png' },
                                    { text: 'Bootstrap', image: '/image/BootStrap.png' }
                                ],
                                [
                                    { text: 'JavaScript', image: '/image/JavaScript.png' },
                                    { text: 'React.js', image: '/image/React.png' },
                                    { text: 'MUI', image: '/image/Mui.png' },
                                    { text: 'Chakra UI', image: '/image/Chakra UI.png' }
                                ],
                                [
                                    { text: 'WordPress', image: '/image/Wordpress.png' },
                                    { text: 'Elementor', image: '/image/Elementor.png' },
                                    { text: 'Shopify', image: '/image/shopify.png' },
                                ],
                                [
                                    { text: 'Git', image: '/image/Git.png' },
                                    { text: 'GitHub', image: '/image/Github.png' }
                                ]
                            ].map((row, rowIndex) => (
                                <div className="tech-row" key={rowIndex}>
                                    {row.map((item, i) => (
                                        <div className="tech-box" key={i}>
                                            <img
                                                src={item.image}
                                                alt={item.text}
                                                className="tech-img"
                                            />
                                            <p>{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </services>
    );
};
export default AboutServices;