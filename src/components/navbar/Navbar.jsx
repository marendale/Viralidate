import React, { useState, useEffect } from 'react';
import './Navbar.css'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import SignUp from "../../components/signup/SignUp";
import Login from "../../components/login/Login";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; // Import getDoc
import { auth, db } from "../../config/firebaseConfig";

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUpOptions, setShowSignUpOptions] = useState(false);
    const [signUpType, setSignUpType] = useState(""); // 'patient' or 'admin'
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userProfileType, setUserProfileType] = useState(""); // New state for user profile type
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setIsLoggedIn(true);
                // Check if the user is a patient or an admin
                const patientProfile = await getDoc(doc(db, "patientProfile", user.uid));
                if (patientProfile.exists()) {
                    setUserProfileType('patient');
                } else {
                    const adminProfile = await getDoc(doc(db, "adminProfile", user.uid));
                    if (adminProfile.exists()) {
                        setUserProfileType('admin');
                    }
                }
            } else {
                setIsLoggedIn(false);
                setUserProfileType(""); // Reset profile type on logout
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
        setUserProfileType("");
        navigate('/');
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src="\assets\logo1.png" alt="Logo" />
                </div>
                <ul className="navbar-menu">
                    {location.pathname === '/patientportal' ? (
                        <>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><a href="/">Symptom Checker</a></li>
                            <li><a href="/">Appointments</a></li>
                            <li><a href="/">Records</a></li>
                        </>
                    ) : location.pathname === '/adminportal' ? (
                        <>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><a href="/">Appointments</a></li>
                            <li><a href="/">Records</a></li>
                        </>
                    ) : (
                        <>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Explore</a></li>
                        </>
                    )}
                </ul>
                <div className="navbar-login">
                    {!isLoggedIn ? (
                        <>
                            <button onClick={() => setShowLogin(true)}>Login</button>
                            <button onClick={() => setShowSignUpOptions(true)}>Sign Up</button>
                        </>
                    ) : (
                        <>
                            {/* Conditionally render portal link based on user profile */}
                            {userProfileType === 'patient' ? (
                                <Link to="/patientportal"><button>Portal</button></Link>
                            ) : userProfileType === 'admin' ? (
                                <Link to="/adminportal"><button>Portal</button></Link>
                            ) : null}
                            <button onClick={handleLogOut}>Log Out</button>
                        </>
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
            )}

            {signUpType === 'admin' && (
                <SignUp trigger={true} setTrigger={() => setSignUpType("")} type="admin" />
            )}
        </div>
    )
}

export default Navbar;