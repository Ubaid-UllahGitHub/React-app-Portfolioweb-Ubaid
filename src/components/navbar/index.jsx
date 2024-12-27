import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

const navBar = () =>{
    return(
        <header>
            <div className="header-container">
                <div className="logo-container">
                    <a>
                    <img 
                    src="/" 
                    width="100px" 
                    height="100px" 
                    alt="ubaid's Logo"
                    />
                    </a>
                </div>
                <div className="menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </div>
            </div>
        </header>
    );
};