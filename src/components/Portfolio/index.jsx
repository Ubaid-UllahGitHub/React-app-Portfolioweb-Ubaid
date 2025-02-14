import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const PortfolioSection = () => {
    return (
        <section className="portfolio-outer-sec" id="services">
            <div className="portfolio-inner">
                <div className="portfoli-content">
                    <div className="portoflio-heading">
                        <h3>MY PORTFOLIO</h3>
                    </div>
                    <div className="portfolio-boxes">
                        <div className="portfolio-box">
                            <img
                                src="image/47.jpg"
                                alt="dummy"
                            />
                            <div class="img-content">
                                <p>
                                    <strong>Muskoka Kitchen Renewal</strong>, built HTML. Tailwind Css, JavaScript, React
                                </p>
                                <div class="img-btn">
                                    <Link to="https://muskokakitchenrenewal.com/" target="_blank" class="button-Link">
                                        Visit Website
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                            <path d="m640-280-57-56 184-184-184-184 57-56 240 240-240 240ZM80-200v-160q0-83 58.5-141.5T280-560h247L383-704l57-56 240 240-240 240-57-56 144-144H280q-50 0-85 35t-35 85v160H80Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-box active-box">
                            <img src="image/5169.jpg" alt="dummy" />
                            <div class="img-content">
                                <p>
                                    <strong>GB Car Rentals</strong>, built with HTML, Bootstrap, React.js and Node.js
                                </p>
                                <div class="img-btn">
                                    <Link to="https://gbcarrentals.org/" target="blank" class="button-Link">
                                        Visit Website
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                            <path d="m640-280-57-56 184-184-184-184 57-56 240 240-240 240ZM80-200v-160q0-83 58.5-141.5T280-560h247L383-704l57-56 240 240-240 240-57-56 144-144H280q-50 0-85 35t-35 85v160H80Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-box">
                            <img
                                src="image/21578.jpg"
                                alt="dummy"
                            />
                            <div class="img-content">
                                <p>
                                    <strong>Sears C&D Services</strong>, Html, Css, JavaScript
                                </p>
                                <div class="img-btn">
                                    <Link to="https://searscdservices.com/" target="blank" class="button-Link">
                                        Visit Website
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                            <path d="m640-280-57-56 184-184-184-184 57-56 240 240-240 240ZM80-200v-160q0-83 58.5-141.5T280-560h247L383-704l57-56 240 240-240 240-57-56 144-144H280q-50 0-85 35t-35 85v160H80Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-box">
                            <img
                                src="image/27794.jpg"
                                alt="dummy"
                            />
                            <div class="img-content">
                                <p>
                                    <strong>ForIio</strong>, HTML, Bootstrap, React.js
                                </p>
                                <div class="img-btn">
                                    <Link to="https://www.foriio.com/" target="blank" class="button-Link">
                                        Visit Website
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                            <path d="m640-280-57-56 184-184-184-184 57-56 240 240-240 240ZM80-200v-160q0-83 58.5-141.5T280-560h247L383-704l57-56 240 240-240 240-57-56 144-144H280q-50 0-85 35t-35 85v160H80Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-box">
                            <img
                                src="image/2147707805.jpg"
                                alt="dummy"
                            />
                            <div class="img-content">
                                <p>
                                    <strong>Wings and Rings</strong>, built with Bootstrap, React.js
                                </p>
                                <div class="img-btn">
                                    <Link to="https://www.wingsandrings.com/" target="blank" class="button-Link">
                                        Visit Website
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                            <path d="m640-280-57-56 184-184-184-184 57-56 240 240-240 240ZM80-200v-160q0-83 58.5-141.5T280-560h247L383-704l57-56 240 240-240 240-57-56 144-144H280q-50 0-85 35t-35 85v160H80Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-box">
                            <img
                                src="image/2150170124.jpg"
                                alt="dummy"
                            />
                            <div class="img-content">
                                <p>
                                    <strong>Adams Unlited Enterprise</strong>, built with html, Css, javascript
                                </p>
                                <div class="img-btn">
                                    <Link to="https://adamsunlimitedenterprise.com/" target="blank" class="button-Link">
                                        Visit Website
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                            <path d="m640-280-57-56 184-184-184-184 57-56 240 240-240 240ZM80-200v-160q0-83 58.5-141.5T280-560h247L383-704l57-56 240 240-240 240-57-56 144-144H280q-50 0-85 35t-35 85v160H80Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button-portfolio">
                        <Link to="#" class="portfolio-Link-btn">
                            View More
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="m640-280-57-56 184-184-184-184 57-56 240 240-240 240ZM80-200v-160q0-83 58.5-141.5T280-560h247L383-704l57-56 240 240-240 240-57-56 144-144H280q-50 0-85 35t-35 85v160H80Z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default PortfolioSection