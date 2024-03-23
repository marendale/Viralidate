/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Homepage.css";
import Navbar from "../../components/navbar/Navbar";

const Homepage = () => {
    return (
        <div>
            <Navbar />
            {/* -------------------------------hero----------------------------- */}
            <div className="hero">
                <div className="hero_content">
                    <h1 className="headline">
                        Revolutionizing Patient Care with Smart<br></br> Symptom Checking and Scheduling
                    </h1>
                    <p className="description">
                        Streamline your healthcare experience with our<br></br> advanced platform designed for both patients and professionals
                    </p>
                    <button class="getstarted" role="button">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;