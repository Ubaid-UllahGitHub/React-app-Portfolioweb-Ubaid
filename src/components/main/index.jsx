import React from "react";
import './style.css';

const MainContent = () => {
    return (
        <main className='outer-main'>
            <div className='inner-main'>
                <div className='main-content'>
                    <div className='content'>
                        <h3>
                            I'M <span>"Ubaid-Ullah"</span>
                        </h3>
                        <p>
                            Hello! Welcome to my Portfolio Website. As a Front-End Developer,
                            I really like to craft and develop attractive and innovative designs.
                        </p>
                        <div className="button-main">
                            <a href="#services" className="custom-link">
                                <button className="custom-button">
                                    Portfolio
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                        <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='content-image'>
                        <img
                            src="image/Abstract Background Depop Profile Picture (13).png"
                            alt="Avatar"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
