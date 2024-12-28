import React, { useEffect } from 'react';
import './style.css';

const Navbar = () => {
  useEffect(() => {
    // Add the original JavaScript logic
    const menuIcon = document.getElementById('menuIcon');
    const menuBox = document.getElementById('menuBox');
    const menuCloseIcon = document.getElementById('menuCloseIcon');

    // Open the menu when menu icon is clicked
    menuIcon.addEventListener('click', () => {
    menuBox.style.right = '0px'; // Slide the menu into view
    });

    // Close the menu when close icon inside the menu is clicked
    menuCloseIcon.addEventListener('click', () => {
    menuBox.style.right = '-300px'; // Slide the menu out of view
    });

    // Clean up event listeners when the component unmounts
    return () => {
      menuIcon.removeEventListener('click', () => {});
      menuCloseIcon.removeEventListener('click', () => {});
    };
  }, 
  []);

  return (
    <header className="outer-container">
      <div className="inner-container">
        <div className="logo-contianer">
          <a href="#">
            <img src="public\image\Frame_1-removebg-preview.png" alt="web-logo" />
          </a>
        </div>
        <div className="menu-icon" id="menuIcon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed">
            <path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
      </div>

      <div className="menu-box" id="menuBox">
        <div className="box-container">
          <div className="menu-close-icon" id="menuCloseIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
          <div className="menu-items">
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About Me</a>
              </li>
              <li>
                <a href="#">My Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
