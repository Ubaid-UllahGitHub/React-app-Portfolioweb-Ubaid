// import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';  // Use Link for routing
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Stack, Typography } from "@mui/material";
import './style.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const menuItems = [
    { text: "Home", link: "/", icon: "M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" },
    { text: "Get Resume", link: "image/Resume/Resume.pdf", target: "_blank", icon: "M760-600q-57 0-99-34t-56-86H354q-11 42-41.5 72.5T240-606v251q52 14 86 56t34 99q0 66-47 113T200-40q-66 0-113-47T40-200q0-57 34-99t86-56v-251q-52-14-86-56t-34-98q0-66 47-113t113-47q56 0 98 34t56 86h251q14-52 56-86t99-34q66 0 113 47t47 113q0 66-47 113t-113 47ZM200-120q33 0 56.5-24t23.5-56q0-33-23.5-56.5T200-280q-32 0-56 23.5T120-200q0 32 24 56t56 24Zm0-560q33 0 56.5-23.5T280-760q0-33-23.5-56.5T200-840q-32 0-56 23.5T120-760q0 33 24 56.5t56 23.5ZM760-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113T760-40Zm0-80q33 0 56.5-24t23.5-56q0-33-23.5-56.5T760-280q-33 0-56.5 23.5T680-200q0 32 23.5 56t56.5 24Zm0-560q33 0 56.5-23.5T840-760q0-33-23.5-56.5T760-840q-33 0-56.5 23.5T680-760q0 33 23.5 56.5T760-680ZM200-200Zm0-560Zm560 560Zm0-560Z" },
    { text: "My Experience", link: "/about", icon: "M480-800q-33 0-56.5-23.5T400-880q0-33 23.5-56.5T480-960q33 0 56.5 23.5T560-880q0 33-23.5 56.5T480-800ZM360-200v-480q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5q86 0 174-9.5T820-800l20 80q-56 15-118 25t-122 15v480h-80v-240h-80v240h-80ZM320 0q-17 0-28.5-11.5T280-40q0-17 11.5-28.5T320-80q17 0 28.5 11.5T360-40q0 17-11.5 28.5T320 0Zm160 0q-17 0-28.5-11.5T440-40q0-17 11.5-28.5T480-80q17 0 28.5 11.5T520-40q0 17-11.5 28.5T480 0Zm160 0q-17 0-28.5-11.5T600-40q0-17 11.5-28.5T640-80q17 0 28.5 11.5T680-40q0 17-11.5 28.5T640 0Z" },
    { text: "About My Skills", link: "#about", icon: "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-480H200v480Zm280-80q-82 0-146.5-44.5T240-440q29-71 93.5-115.5T480-600q82 0 146.5 44.5T720-440q-29 71-93.5 115.5T480-280Zm0-60q56 0 102-26.5t72-73.5q-26-47-72-73.5T480-540q-56 0-102 26.5T306-440q26 47 72 73.5T480-340Zm0-100Zm0 60q25 0 42.5-17.5T540-440q0-25-17.5-42.5T480-500q-25 0-42.5 17.5T420-440q0 25 17.5 42.5T480-380Z" },
    { text: "My Portfolio", link: "#services", icon: "M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" },
    { text: "Contact Me", link: "#contact", icon: "M320-520q17 0 28.5-11.5T360-560q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560q0 17 11.5 28.5T320-520Zm160 0q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm160 0q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" }
  ];
  const socialLinks = [
    { href: "tel:+923084782036", icon: "M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.09-.27 11.536 11.536 0 003.61.61 1 1 0 011 1v3.41a1 1 0 01-1 1 19.007 19.007 0 01-8.48-3.29A19.007 19.007 0 013 4a1 1 0 011-1h3.41a1 1 0 011 1c0 1.27.22 2.52.61 3.61a1 1 0 01-.27 1.09z" },
    { href: "mailto:ubaidsheikh4078@gmail.com", icon: "M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm16 2l-8 5-8-5v12h16V6zm-8 7L4 8v10h16V8l-8 5z" },
    { href: "https://github.com/Ubaid-UllahGitHub", icon: "M12 .5C5.373.5 0 5.873 0 12.5a12 12 0 008.205 11.548c.6.112.82-.26.82-.578v-2.232c-3.337.725-4.042-1.415-4.042-1.415-.546-1.39-1.334-1.76-1.334-1.76-1.091-.748.083-.733.083-.733 1.206.084 1.84 1.238 1.84 1.238 1.072 1.835 2.81 1.305 3.496.998.108-.776.42-1.305.763-1.604-2.665-.302-5.466-1.333-5.466-5.928 0-1.31.468-2.38 1.236-3.223-.124-.302-.536-1.523.116-3.176 0 0 1.009-.324 3.304 1.23a11.44 11.44 0 013.007-.405c1.02.005 2.046.14 3.007.405 2.295-1.554 3.303-1.23 3.303-1.23.653 1.653.241 2.874.118 3.176.77.843 1.236 1.913 1.236 3.223 0 4.608-2.804 5.623-5.477 5.918.429.368.823 1.096.823 2.21v3.277c0 .319.22.694.825.576A12.003 12.003 0 0024 12.5C24 5.873 18.627.5 12 .5z" },
    { href: "https://www.linkedin.com/in/obaid-sheikh-67b579292/", icon: "M20.447 20.452H16.91v-5.604c0-1.337-.026-3.064-1.865-3.064-1.865 0-2.15 1.456-2.15 2.963v5.705H9.357V9.56h3.367v1.489h.048c.469-.888 1.617-1.824 3.329-1.824 3.558 0 4.214 2.342 4.214 5.386v6.841zM5.337 8.07c-1.079 0-1.956-.877-1.956-1.956S4.258 4.157 5.337 4.157s1.956.877 1.956 1.956-.877 1.957-1.956 1.957zM6.875 20.452H3.798V9.56h3.077v10.892z" },
  ];
  const handleScroll = (event, targetId) => {
    event.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <AppBar
        position="relative"
        sx={{
          width: "100%",
          background: "#1c2028",
          display: "flex",
          alignItems: "center",
          height: "100px",
          padding: "0",
          margin: "0",
          boxShadow: "none",
          zIndex: 100
        }}
      >
        <Toolbar sx={{
          width: "90%",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          alignContent: "center",
          padding: "0"
        }}>
          <Box>
            {/* logo */}
            <Link to="/">
              <img src="image/Abstract Background Depop Profile Picture (10).png"
                alt="web-logo"
                style={{
                  width: "100px",
                  height: "100px"
                }}
              />
            </Link>
          </Box>
          <IconButton className='menu-icon' aria-label="menu" onClick={handleDrawerToggle}
          sx={{
            padding: "0px",
            cursor: "pointer"
          }}
          > 
          {/* menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
            >
              <path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </IconButton>
        </Toolbar >
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        variant="persistent" // Keeps the drawer open
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "rgba(28, 32, 40, 0.95)",
            width: "300px",
            height: "100%",
            position: "fixed",
            top: "0",
            boxShadow: "-8px 0 20px rgba(0, 0, 0, 0.7)",
            transition: "0.9s ease-in-out !important",
            borderTopLeftRadius: "30px",
            color: "#1c2028",
            zIndex: 1100
          },
        }}
      >
        <Toolbar sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          gap: "10px",
          padding: "0px !important"
        }}
        >
          <Box className='menu-close-icon' onClick={handleDrawerToggle}>            
             {/* close icon for drawer */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </Box>
          <Box className='logo-menu-box'>
            {/* logo for drawer */}
            <Link to="/">
              <img src="image/Side bar logo.png" alt="web-logo" />
            </Link>
          </Box>
          <Box sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%"
          }}
          >
            <List sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              margin: "5px",
              gap: "5px",
              width: "100%",
            }}
            >
              {menuItems.map((item, index) => (
                <ListItem
                  key={index}
                  component={item.target ? "a" : Link}
                  to={item.target ? undefined : item.link}
                  href={item.target ? item.link : undefined}
                  onClick={item.link.startsWith("#") ? (e) => handleScroll(e, item.link.substring(1)) : undefined}
                  target={item.target}
                  button
                  sx={{
                    textDecoration: "none",
                    width: "100%",
                    color: "white",
                    borderRadius: "10px",
                    padding: "5px 15px",
                    transition: "background-color 0.3s, color 0.3s",
                    "&:hover": {
                      backgroundColor: "#66cc00",
                      color: "black",
                      "&:hover .MuiTypography-root": { // Changes text color when ListItem is hovered
                        color: "black",
                        fontWeight: 600,
                      },
                      "& svg": {
                        fill: "#1c2028", // Change SVG color on hover
                      },
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      padding: "0px",
                      minWidth: "46px",
                      color: "white",
                      width: "20px",
                      height: "20px",
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed">
                      <path d={item.icon} /> {/* Dynamic icon path */}
                    </svg>
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text} // Use the dynamic menu text
                    primaryTypographyProps={{
                      fontSize: "14px",  // Adjust font size
                      fontFamily: "Urbanist"
                    }}
                  />
                </ListItem>
              ))
              }
            </List>
          </Box>
          <Stack>
            <Stack marginLeft={"15px"}>
              <Typography sx={{
                fontSize: "15px",
                color: "white",
                fontFamily: "Urbanist",
                fontWeight: "600"
              }}>
                Follow me
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              {socialLinks.map((item, index) => (
                <IconButton key={index}
                  className="social-icons"
                  component="a" // Using "a" tag instead of "Link"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    fill="currentColor"
                  >
                    <path d={item.icon} />
                  </svg>
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Toolbar>
      </Drawer>
    </>
  );
};
export default Navbar;



{/* // const Navbar = () => {
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
    []); */}

// return (
//   <header className="outer-container">
//     {/* <div className="inner-container">
//         <div className="logo-contianer">
//           <Link to="/">
//             <img src="image/Abstract Background Depop Profile Picture (10).png" alt="web-logo" />
//           </Link>
//         </div>
//         <div className="menu-icon" id="menuIcon">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed">
//             <path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z" />
//           </svg>
//         </div>
//       </div> */}

// <div className="menu-box" id="menuBox">
//   <div className="box-container">
//     <div className="menu-close-icon" id="menuCloseIcon">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed">
//         <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
//       </svg>
//     </div>
//     <div className="logo-menu-box">
//       <Link to="/">
//         <img src="image/Side bar logo.png" alt="web-logo" />
//       </Link>
//     </div>
//     <div className="menu-items">
//       <ul>
//         <li>
//           <Link to="/" class="active">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed">
//               <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
//             </svg>
//             Home
//           </Link>
//         </li>

//         <li>
//           <Link to="image/Resume/Resume.pdf" target="_blank">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed">
//               <path d="M760-600q-57 0-99-34t-56-86H354q-11 42-41.5 72.5T240-606v251q52 14 86 56t34 99q0 66-47 113T200-40q-66 0-113-47T40-200q0-57 34-99t86-56v-251q-52-14-86-56t-34-98q0-66 47-113t113-47q56 0 98 34t56 86h251q14-52 56-86t99-34q66 0 113 47t47 113q0 66-47 113t-113 47ZM200-120q33 0 56.5-24t23.5-56q0-33-23.5-56.5T200-280q-32 0-56 23.5T120-200q0 32 24 56t56 24Zm0-560q33 0 56.5-23.5T280-760q0-33-23.5-56.5T200-840q-32 0-56 23.5T120-760q0 33 24 56.5t56 23.5ZM760-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113T760-40Zm0-80q33 0 56.5-24t23.5-56q0-33-23.5-56.5T760-280q-33 0-56.5 23.5T680-200q0 32 23.5 56t56.5 24Zm0-560q33 0 56.5-23.5T840-760q0-33-23.5-56.5T760-840q-33 0-56.5 23.5T680-760q0 33 23.5 56.5T760-680ZM200-200Zm0-560Zm560 560Zm0-560Z" />
//             </svg>
//             Get Resume</Link>
//         </li>
//         <li>
//           <Link to="/about">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed">
//               <path d="M480-800q-33 0-56.5-23.5T400-880q0-33 23.5-56.5T480-960q33 0 56.5 23.5T560-880q0 33-23.5 56.5T480-800ZM360-200v-480q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5q86 0 174-9.5T820-800l20 80q-56 15-118 25t-122 15v480h-80v-240h-80v240h-80ZM320 0q-17 0-28.5-11.5T280-40q0-17 11.5-28.5T320-80q17 0 28.5 11.5T360-40q0 17-11.5 28.5T320 0Zm160 0q-17 0-28.5-11.5T440-40q0-17 11.5-28.5T480-80q17 0 28.5 11.5T520-40q0 17-11.5 28.5T480 0Zm160 0q-17 0-28.5-11.5T600-40q0-17 11.5-28.5T640-80q17 0 28.5 11.5T680-40q0 17-11.5 28.5T640 0Z" /></svg>
//             My Experience</Link>
//         </li>
//         <li>
//           <a href="#about">
//             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-480H200v480Zm280-80q-82 0-146.5-44.5T240-440q29-71 93.5-115.5T480-600q82 0 146.5 44.5T720-440q-29 71-93.5 115.5T480-280Zm0-60q56 0 102-26.5t72-73.5q-26-47-72-73.5T480-540q-56 0-102 26.5T306-440q26 47 72 73.5T480-340Zm0-100Zm0 60q25 0 42.5-17.5T540-440q0-25-17.5-42.5T480-500q-25 0-42.5 17.5T420-440q0 25 17.5 42.5T480-380Z" /></svg>
//             About My Skills</a>
//         </li>
//         <li>
//           <a href="#services"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed">
//             <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
//           </svg>
//             My Portfolio</a>
//         </li>
//         <li>
//           <a href="#contact">
//             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M320-520q17 0 28.5-11.5T360-560q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560q0 17 11.5 28.5T320-520Zm160 0q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm160 0q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" /></svg>
//             Contact Us
//           </a>
//         </li>
//       </ul>
//     </div>
//         <div className="follow-me">
//           <div className='follow-me-heading'>
//             <h3>Follow Me</h3>
//           </div>
//           <div className='follow-me-icons'>
//             <ul className="social-icons">
//               <li>
//                 <Link to="tel:+923084782036">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
//                     <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.09-.27 11.536 11.536 0 003.61.61 1 1 0 011 1v3.41a1 1 0 01-1 1 19.007 19.007 0 01-8.48-3.29A19.007 19.007 0 013 4a1 1 0 011-1h3.41a1 1 0 011 1c0 1.27.22 2.52.61 3.61a1 1 0 01-.27 1.09z" />
//                   </svg>
//                 </Link>
//               </li>
//               <li>
//                 <Link to="mailto:ubaidsheikh4078@gmail.com">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
//                     <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm16 2l-8 5-8-5v12h16V6zm-8 7L4 8v10h16V8l-8 5z" />
//                   </svg>
//                 </Link>
//               </li>
//               <li>
//                 <Link to="https://github.com/Ubaid-UllahGitHub" target="_blank">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
//                     <path d="M12 .5C5.373.5 0 5.873 0 12.5a12 12 0 008.205 11.548c.6.112.82-.26.82-.578v-2.232c-3.337.725-4.042-1.415-4.042-1.415-.546-1.39-1.334-1.76-1.334-1.76-1.091-.748.083-.733.083-.733 1.206.084 1.84 1.238 1.84 1.238 1.072 1.835 2.81 1.305 3.496.998.108-.776.42-1.305.763-1.604-2.665-.302-5.466-1.333-5.466-5.928 0-1.31.468-2.38 1.236-3.223-.124-.302-.536-1.523.116-3.176 0 0 1.009-.324 3.304 1.23a11.44 11.44 0 013.007-.405c1.02.005 2.046.14 3.007.405 2.295-1.554 3.303-1.23 3.303-1.23.653 1.653.241 2.874.118 3.176.77.843 1.236 1.913 1.236 3.223 0 4.608-2.804 5.623-5.477 5.918.429.368.823 1.096.823 2.21v3.277c0 .319.22.694.825.576A12.003 12.003 0 0024 12.5C24 5.873 18.627.5 12 .5z" />
//                   </svg>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="https://www.Linkedin.com/in/obaid-sheikh-67b579292/" target="_blank">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
//                     <path d="M20.447 20.452H16.91v-5.604c0-1.337-.026-3.064-1.865-3.064-1.865 0-2.15 1.456-2.15 2.963v5.705H9.357V9.56h3.367v1.489h.048c.469-.888 1.617-1.824 3.329-1.824 3.558 0 4.214 2.342 4.214 5.386v6.841zM5.337 8.07c-1.079 0-1.956-.877-1.956-1.956S4.258 4.157 5.337 4.157s1.956.877 1.956 1.956-.877 1.957-1.956 1.957zM6.875 20.452H3.798V9.56h3.077v10.892z" />
//                   </svg>
//                 </Link>
//               </li>
//             </ul>
//           </div>
// //         </div>
//       </div>
//     </div>
//   </header>
// );
// };


