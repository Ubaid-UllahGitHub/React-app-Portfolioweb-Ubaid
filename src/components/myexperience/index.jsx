import React from "react";
import './style.css'

const MyExperience = () => {
    return (
        <section className="outer-container-experience">
            <div className="inner-container-experience">
                <div className="about-experience">
                    <div className="experince-heading">
                        <div className="heading-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Zm400 360H600v80H360v-80H160v160h640v-160Zm-360 0h80v-80h-80v80Zm-280-80h200v-80h240v80h200v-200H160v200Zm320 40Z" />
                            </svg>
                            <h3>My Experience</h3>
                        </div>
                        <div className="text">
                            <div className="custom-hr" >
                            </div>
                        </div>
                    </div>
                    <div className="experience">
                        {/* <!-- First Company Info --> */}
                        <div className="company-entry">
                        <div className="dot1"></div>
                            <div className="company-info">
                                <div className="name-designation">
                                    <h3>FrontEnd Developer</h3>
                                    <h5>Handtech Solution</h5>
                                </div>
                                <div className="duration">
                                    2023-Present
                                </div>
                            </div>
                            <div className="responsibilities">
                                <ul>
                                    <li>Developed responsive and interactive user interfaces using HTML, CSS, JavaScript, and React.js, ensuring seamless user experiences across devices and screen sizes.</li>
                                    <li>Implemented dynamic, reusable components with React.js, optimizing performance and enhancing maintainability of complex front-end applications.</li>
                                    <li>Collaborated with design teams to convert UI/UX designs into pixel-perfect, responsive layouts, ensuring consistency and high-quality visuals using CSS frameworks like Tailwind CSS and custom CSS.</li>
                                    <li>Implemented dynamic, reusable components with React.js, optimizing performance and enhancing maintainability of complex front-end applications.</li>
                                    <li>Applied custom CSS to enhance design aesthetics in WordPress websites, improve functionality, and tailor websites to meet specific client requirements.</li>
                                    <li>Integrated WooCommerce and other eCommerce solutions, optimizing product pages, checkout processes, and payment gateways for a smooth and user-friendly shopping experience.</li>
                                    <li>Migrated WordPress websites from various hosting environments, ensuring data integrity, minimal downtime, and improved website performance.</li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Second Company Info (Duplicate) --> */}
                        <div className="company-entry">
                        <div className="dot2"></div>
                            <div className="company-info">
                                <div className="name-designation">
                                    <h3>FrontEnd Developer</h3>
                                    <h5>Handtech Solution</h5>
                                </div>
                                <div className="duration">
                                    2023-Present
                                </div>
                            </div>
                            <div className="responsibilities">
                                <ul>
                                    <li>Developed responsive and interactive user interfaces using HTML, CSS, JavaScript, and React.js, ensuring seamless user experiences across devices and screen sizes.</li>
                                    <li>Implemented dynamic, reusable components with React.js, optimizing performance and enhancing maintainability of complex front-end applications.</li>
                                    <li>Collaborated with design teams to convert UI/UX designs into pixel-perfect, responsive layouts, ensuring consistency and high-quality visuals using CSS frameworks like Tailwind CSS and custom CSS.</li>
                                    <li>Implemented dynamic, reusable components with React.js, optimizing performance and enhancing maintainability of complex front-end applications.</li>
                                    <li>Applied custom CSS to enhance design aesthetics in WordPress websites, improve functionality, and tailor websites to meet specific client requirements.</li>
                                    <li>Integrated WooCommerce and other eCommerce solutions, optimizing product pages, checkout processes, and payment gateways for a smooth and user-friendly shopping experience.</li>
                                    <li>Migrated WordPress websites from various hosting environments, ensuring data integrity, minimal downtime, and improved website performance.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MyExperience