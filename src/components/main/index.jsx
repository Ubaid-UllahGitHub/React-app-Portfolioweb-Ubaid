import React from "react";
import './style.css'; 

const MainContent = () => {  
    return(
        <main className='outer-main'>
            <div className='inner-main'>
                <div className='main-content'>
                    <div className='content'>
                        <h3>
                            I'M Ubaid-Ullah
                        </h3>
                        <p>
                            Hello! Welcome to my Portfolio Website. As a Front-End Developer,
                            I really like to craft and develop attractive and innovative designs.     
                        </p>
                    </div>
                    <div className='content-image'>
                        <img 
                            src="public\image\Abstract Background Depop Profile Picture (13).png"
                            alt="Avatar"  
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
