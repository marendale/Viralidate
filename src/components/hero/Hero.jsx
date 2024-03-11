import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero_content">
                <h1 className="headline">
                    Revolutionizing Patient Care with Smart<br></br> Symptom Checking and Scheduling
                </h1>
                <p className="description">
                    Streamline your healthcare experience with our<br></br> advanced AI-driven platform designed for both patients and professionals
                </p>
                <button class="getstarted" role="button">Get Started</button>
            </div>
        </div>
    );
};

export default Hero;
