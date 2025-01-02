import React from "react";
import './style.css';

const ContactFormSection = () => {
    return (
        <section className='contact-section'>
            <div className="form-content">
            <div className="contact-me">
                        <h3>Contact Me</h3>
                        <div className="text1">
                            <div className="custom-hr2" >
                            </div>
                            <p>
                                Reach Out To Me!
                            </p>
                        </div>
                    </div>
            <div className="form-container">
                <form action="https://formspree.io/f/xovvvdnq" method="POST">
                    {/* First Row: Full Name and Email */}
                    <div className="p-col1">
                        <div className="col">
                            <label htmlFor="fname" className="form-name-label">Full Name</label>
                            <input 
                                type="text" 
                                id="fname" 
                                name="fullname" 
                                className="form-name-input" 
                                required 
                                placeholder="Your Full Name" 
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="uemail" className="form-email-label">Email</label>
                            <input 
                                type="email" 
                                id="uemail" 
                                name="useremail" 
                                className="form-email-input" 
                                required 
                                placeholder="Your Email" 
                            />
                        </div>
                    </div>

                    {/* Second Row: Message */}
                    <div className="p-col1">
                        <div className="col">
                            <label htmlFor="umessage" className="form-message-label">Message</label>
                            <textarea 
                                id="umessage" 
                                name="usermessage" 
                                rows="5" 
                                placeholder="Your message here..." 
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="form-submit">
                            <a href="https://example.com" className="custom-link">
                            <button type="submit" className="submit-button">
                            Submit Your Message
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                        <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                </form>
            </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
