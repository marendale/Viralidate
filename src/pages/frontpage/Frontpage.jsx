import React from 'react';
import "./Frontpage.css";
import Navbar from "../../components/navbar/Navbar";

const Frontpage = () => {
    return (
        <div>
            <Navbar />
            <div className="hero">
                <div className="video-container">
                    <iframe 
                        src="https://player.vimeo.com/video/925497109?h=dab57b6f9a&autoplay=1&loop=1&muted=1&background=1" 
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            frameborder: '0',
                            allow: 'autoplay; fullscreen; picture-in-picture; clipboard-write',
                            allowfullscreen: true,
                            title: 'New Video'
                        }}
                    ></iframe>
                </div>
                <div className="footer-navbar">
                    <p className="description">
                        Streamline your healthcare experience with our<br/>advanced AI-driven platform designed for both patients and professionals
                    </p>
                </div>
                <div className="hero_content">
                    <h1 className="headline">
                        Revolutionizing Patient Care with Smart<br/>Symptom Checking and Scheduling
                    </h1>
                    <button className="getstarted" role="button">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Frontpage;