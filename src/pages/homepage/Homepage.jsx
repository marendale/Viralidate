import React, { useState, useEffect } from 'react';
import "./Homepage.css";
import SignUp from "../../components/signup/SignUp";
import Login from "../../components/login/Login";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

const Homepage = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUpOptions, setShowSignUpOptions] = useState(false);
    const [signUpType, setSignUpType] = useState(""); // 'patient' or 'admin'
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSignUpOptionClick = (type) => {
        setSignUpType(type); // Set the type of signup
        setShowSignUpOptions(false); // Close the signup options popup
    };

    const handleLogOut = async () => {
        await signOut(auth);
        setIsLoggedIn(false);
    };

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
                        <a href="/services">Explore</a>
                    </li>
                    <li>
                        <a href="/services">Symptom Checker</a>
                    </li>
                    <li>
                        <a href="/contact">Appointments</a>
                    </li>
                </ul>
                <div className="navbar-login">
                    {!isLoggedIn ? (
                        <>
                            <button onClick={() => setShowLogin(true)}>Login</button>
                            <button onClick={() => setShowSignUpOptions(true)}>Sign Up</button>
                        </>
                    ) : (
                        <button onClick={handleLogOut}>Log Out</button>
                    )}
                </div>
            </nav>
            {showLogin && (
                <Login trigger={showLogin} setTrigger={setShowLogin} onLoginSuccess={() => setIsLoggedIn(true)} />
            )}

            {showSignUpOptions && (
                <div className="popup">
                    <div className="popup-inner">
                        <button className="close-btn" onClick={() => setShowSignUpOptions(false)}>X</button>
                        <div className="signup-options">
                            <button className="signup-btn" onClick={() => handleSignUpOptionClick('patient')}>
                                Patient Sign Up
                            </button>
                            <button className="signup-btn" onClick={() => handleSignUpOptionClick('admin')}>
                                Admin Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {signUpType === 'patient' && (
                <SignUp trigger={true} setTrigger={() => setSignUpType("")} type="patient" />
                // Adjust your SignUp component to optionally handle 'patient' or 'admin' type if needed.
            )}

            {signUpType === 'admin' && (
                <SignUp trigger={true} setTrigger={() => setSignUpType("")} type="admin" />
                // Adjust your SignUp component to optionally handle 'patient' or 'admin' type if needed.
            )}
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