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
                            {/* <div className="dot1"></div> */}
                            <div className="company-info">
                                <div className="name-designation">
                                    {/* <div className="icon-contianer">
                                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                        </svg>
                                    </div> */}
                                    <div className="Company-Designation-duration">
                                        <div className="Company-Designation">
                                            <h3>FrontEnd Developer</h3>
                                            <h5>Handtech Solution</h5>
                                        </div>
                                        <div className="duration">
                                            2023-Present
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="responsibilities">
                                <ul>
                                    <li>Developed responsive websites using HTML, CSS, JavaScript, and Bootstrap for clients across various industries including real estate, eCommerce, IT, and design services.</li>
                                    <li>Built and maintained React.js applications, including an inspection platform, an eCommerce web app, and a coaching platform utilizing React Hooks, Routing, and State Management for scalable and maintainable solutions.</li>
                                    <li>Focused on understanding client requirements to design and implement interactive user interfaces and ensure a smooth user experience across all devices.</li>
                                    <li>Continued working on WordPress and Shopify development, including custom themes, Shopify Liquid programming, and third-party app integration.</li>
                                </ul>
                                <div>
                                    <strong>Core Skills:</strong> Front-End Development · HTML · CSS · JavaScript · React.js · Wordpress Development · Elementor · shopify development · Shopify Liquid · Responsive Web Design · Web Development · Web Design
                                </div>
                            </div>
                        </div>

                        {/* <!-- Second Company Info (Duplicate) --> */}
                        <div className="company-entry">
                            {/* <div className="dot1"></div> */}
                            <div className="company-info">
                                <div className="name-designation">
                                    {/* <div className="icon-contianer">
                                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                        </svg>
                                    </div> */}
                                    <div className="Company-Designation-duration">
                                        <div className="Company-Designation">
                                            <h3>CMS Developer</h3>
                                            <h5>Handtech Solution</h5>
                                        </div>
                                        <div className="duration">
                                            2022-2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="responsibilities">
                                <ul>
                                    <li>Developed WordPress websites using builders like Elementor, WPBakery, Beaver Builder, and Divi; gathered client requirements to create tailored solutions, customized themes, and integrated third-party plugins for enhanced functionality.</li>
                                    <li> Built end-to-end eCommerce solutions with WooCommerce, including payment gateway setup, shipping method configuration, live shipping rate integration, and print label automation—delivering seamless, conversion-focused user experiences.</li>
                                    <li> Worked on Shopify website development, creating interactive and brand-aligned storefronts using custom themes; implemented payment gateways, dynamic sections, and UI & UX enhancements. </li>
                                    <li>Utilized HTML, CSS, JavaScript, and Shopify Liquid to develop custom features and sections, enhancing functionality and design beyond default theme capabilities in both WordPress and Shopify projects.</li>
                                </ul>
                                <div>
                                    <strong>Core Skills:</strong> Wordpress Development · Theme Development · Shopify Liquid · Elementor · beaver · Shopify · HTML · CSS · JavaScript · Front-End Development · Payment Gateways · basic seo · E-Commerce
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MyExperience