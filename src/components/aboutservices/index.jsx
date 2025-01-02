import React from "react";
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
                                <div>-</div>
                            </div>
                            <p>
                                I am a passionate and detail-oriented Front-End Developer with a strong foundation in web development technologies and a keen eye for design. With expertise in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Bootstrap</strong>, and <strong>React.js</strong>, I create responsive, user-friendly, and visually appealing websites tailored to client needs.
                                On the WordPress side, I excel in customizing websites using popular page builders like <strong>Elementor</strong>, <strong>Divi</strong>, <strong>Beaver Builder</strong>, and <strong>Gutenberg</strong>. I specialize in developing seamless <strong>WooCommerce</strong> solutions, crafting custom designs, and ensuring smooth functionality for e-commerce platforms.
                            </p>
                        </div>
                    </div>
                    <div className="about-skills">
                        <h5>MY SKILLS</h5>
                        <div className="skill-icons">
                            <div className="first-row">
                                <div className="html-box active-box">
                                    <img 
                                    src="image/HTML5.png" 
                                    alt="HTML" 
                                    width="75px"
                                    height="75px" />
                                    <h5>HTML</h5>
                                </div>

                                <div className="html-box">
                                    <img
                                        src="image/css.png"
                                        alt="css"
                                        width="100px"
                                    />
                                    <h5>
                                        CSS
                                    </h5>
                                </div>
                                <div className="html-box">
                                    <img
                                        src="image/JavaScript.png"
                                        alt="JavaScript"
                                        width="100px"
                                    />
                                    <h5>
                                        JavaScript
                                    </h5>
                                </div>
                                <div className="html-box">
                                    <img
                                        src="image/BootStrap.png"
                                        alt="BootStrap"
                                        width="100px"
                                    />
                                    <h5>
                                        BootStrap
                                    </h5>
                                </div>
                            </div>
                            <div className="second-row">
                                <div className="wp-box">
                                    <img
                                        src="image/TailwindCss.png"
                                        width="100px"
                                        alt="Tailwind Css"
                                    />
                                    <h5>
                                        Tailwind Css
                                    </h5>
                                </div>
                                <div className="wp-box">
                                    <img
                                        src="image/React.png"
                                        alt="React"
                                        width="80px"
                                    />
                                    <h5>
                                        React.js
                                    </h5>
                                </div>
                                <div className="wp-box">
                                    <img
                                        src="image/Git.png"
                                        alt="GIT"
                                        width="80px"
                                    />
                                    <h5>
                                        GIT
                                    </h5>
                                </div>
                            </div>
                            <div className="third-row">
                                <div className="box">
                                    <img
                                        src="image/Wordpress.png"
                                        width="80px"
                                        alt="wordpress"
                                    />
                                    <h5>
                                        WordPress
                                    </h5>
                                </div>
                                <div className="box">
                                    <img
                                        src="image/Elementor.png"
                                        alt="Elementor"
                                        width="80px"
                                    />
                                    <h5>
                                        Elementor
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </services>
    );
};
export default AboutServices;