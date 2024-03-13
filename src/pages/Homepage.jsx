import React from "react";
import "./Homepage.css";

const Homepage = () => {
    return (
        <div>
            {/* -------------------------------navbar----------------------------- */}
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src="\assets\logo1.png" alt="Logo" />
                </div>
                <ul className="navbar-menu">
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                </ul>
                <div className="navbar-login">
                    <button onClick={() => (window.location.href = "/patient-login")}>
                        Patient Login
                    </button>
                    <button onClick={() => (window.location.href = "/admin-login")}>
                        Admin Login
                    </button>
                </div>
            </nav>
            {/* -------------------------------hero----------------------------- */}
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
        </div>
    );
};

export default Homepage;
