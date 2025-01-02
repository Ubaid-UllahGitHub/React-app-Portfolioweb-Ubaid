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
      menuIcon.removeEventListener('click', () => { });
      menuCloseIcon.removeEventListener('click', () => { });
    };
  },
    []);

  return (
    <header className="outer-container">
      <div className="inner-container">
        <div className="logo-contianer">
          <a href="#">
            <img src="/image/Abstract Background Depop Profile Picture (10).png" alt="web-logo" />
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
          <div className="logo-menu-box">
            <a href="#">
              <img src="public/image/Abstract Background Depop Profile Picture (10).png" alt="web-logo" />
            </a>
          </div>
          <div className="menu-items">
            <ul>
              <li>
                <a href="#" class="active">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed">
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                  </svg>
                  Home
                </a>
              </li>

              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed">
                    <path d="M760-600q-57 0-99-34t-56-86H354q-11 42-41.5 72.5T240-606v251q52 14 86 56t34 99q0 66-47 113T200-40q-66 0-113-47T40-200q0-57 34-99t86-56v-251q-52-14-86-56t-34-98q0-66 47-113t113-47q56 0 98 34t56 86h251q14-52 56-86t99-34q66 0 113 47t47 113q0 66-47 113t-113 47ZM200-120q33 0 56.5-24t23.5-56q0-33-23.5-56.5T200-280q-32 0-56 23.5T120-200q0 32 24 56t56 24Zm0-560q33 0 56.5-23.5T280-760q0-33-23.5-56.5T200-840q-32 0-56 23.5T120-760q0 33 24 56.5t56 23.5ZM760-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113T760-40Zm0-80q33 0 56.5-24t23.5-56q0-33-23.5-56.5T760-280q-33 0-56.5 23.5T680-200q0 32 23.5 56t56.5 24Zm0-560q33 0 56.5-23.5T840-760q0-33-23.5-56.5T760-840q-33 0-56.5 23.5T680-760q0 33 23.5 56.5T760-680ZM200-200Zm0-560Zm560 560Zm0-560Z" />
                  </svg>
                  Get Resume</a>
              </li>
              <li>
                <a href="#about">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed">
                    <path d="M480-800q-33 0-56.5-23.5T400-880q0-33 23.5-56.5T480-960q33 0 56.5 23.5T560-880q0 33-23.5 56.5T480-800ZM360-200v-480q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5q86 0 174-9.5T820-800l20 80q-56 15-118 25t-122 15v480h-80v-240h-80v240h-80ZM320 0q-17 0-28.5-11.5T280-40q0-17 11.5-28.5T320-80q17 0 28.5 11.5T360-40q0 17-11.5 28.5T320 0Zm160 0q-17 0-28.5-11.5T440-40q0-17 11.5-28.5T480-80q17 0 28.5 11.5T520-40q0 17-11.5 28.5T480 0Zm160 0q-17 0-28.5-11.5T600-40q0-17 11.5-28.5T640-80q17 0 28.5 11.5T680-40q0 17-11.5 28.5T640 0Z" /></svg>
                  About My Skills</a>
              </li>
              <li>
                <a href="#services"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed">
                  <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
                </svg>
                  My Portfolio</a>
              </li>
            </ul>
          </div>
          <div className="follow-me">
            <div className='follow-me-heading'>
            <h3>Follow Me</h3>
            </div>
            <div className='follow-me-icons'>
            <ul className="social-icons">
              <li>
                <a href="tel:+1234567890">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.09-.27 11.536 11.536 0 003.61.61 1 1 0 011 1v3.41a1 1 0 01-1 1 19.007 19.007 0 01-8.48-3.29A19.007 19.007 0 013 4a1 1 0 011-1h3.41a1 1 0 011 1c0 1.27.22 2.52.61 3.61a1 1 0 01-.27 1.09z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="mailto:your-email@example.com">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                    <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm16 2l-8 5-8-5v12h16V6zm-8 7L4 8v10h16V8l-8 5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://github.com/your-username" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                    <path d="M12 .5C5.373.5 0 5.873 0 12.5a12 12 0 008.205 11.548c.6.112.82-.26.82-.578v-2.232c-3.337.725-4.042-1.415-4.042-1.415-.546-1.39-1.334-1.76-1.334-1.76-1.091-.748.083-.733.083-.733 1.206.084 1.84 1.238 1.84 1.238 1.072 1.835 2.81 1.305 3.496.998.108-.776.42-1.305.763-1.604-2.665-.302-5.466-1.333-5.466-5.928 0-1.31.468-2.38 1.236-3.223-.124-.302-.536-1.523.116-3.176 0 0 1.009-.324 3.304 1.23a11.44 11.44 0 013.007-.405c1.02.005 2.046.14 3.007.405 2.295-1.554 3.303-1.23 3.303-1.23.653 1.653.241 2.874.118 3.176.77.843 1.236 1.913 1.236 3.223 0 4.608-2.804 5.623-5.477 5.918.429.368.823 1.096.823 2.21v3.277c0 .319.22.694.825.576A12.003 12.003 0 0024 12.5C24 5.873 18.627.5 12 .5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/your-profile" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                    <path d="M20.447 20.452H16.91v-5.604c0-1.337-.026-3.064-1.865-3.064-1.865 0-2.15 1.456-2.15 2.963v5.705H9.357V9.56h3.367v1.489h.048c.469-.888 1.617-1.824 3.329-1.824 3.558 0 4.214 2.342 4.214 5.386v6.841zM5.337 8.07c-1.079 0-1.956-.877-1.956-1.956S4.258 4.157 5.337 4.157s1.956.877 1.956 1.956-.877 1.957-1.956 1.957zM6.875 20.452H3.798V9.56h3.077v10.892z" />
                  </svg>
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
