/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Navbar.css'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import SignUp from "../../components/signup/SignUp";
import Login from "../../components/login/Login";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; // Import getDoc
import { auth, db } from "../../config/firebaseConfig";

const Navbar = ({ isScrolled, howItWorksRef, aboutUsRef }) => {
    const [navbarScrolled, setNavbarScrolled] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUpOptions, setShowSignUpOptions] = useState(false);
    const [signUpType, setSignUpType] = useState(""); // 'patient' or 'admin'
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userProfileType, setUserProfileType] = useState(""); // New state for user profile type
    const patientPaths = ['/patientportal', '/patientportal/symptom', '/questionnaire'];
    const adminPaths = ['/adminportal', '/adminportal/appointments', '/availability-manager'];
    const navigate = useNavigate();
    const location = useLocation();
    const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
 

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

        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setNavbarScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

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

        // Function to scroll to the top of the page
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

            // Handling click for the Home link
            const handleHomeClick = (e) => {
                e.preventDefault(); 
                if (location.pathname !== '/') {
                    navigate('/'); // Navigate to homepage if not already there
                }
                scrollToTop(); 
            };

            return (
                <div>
                    <nav className={`navbar ${navbarScrolled ? 'scrolled' : ''}`}>
                        <div className="navbar-logo">
                            <Link to="/" onClick={scrollToTop}>
                                <img src="\assets\Viralidate Logo.png" alt="Logo" />
                            </Link>
                        </div>
                        <ul className="navbar-menu">
                            {/* Only render the Home link if the user is not on the homepage */}
                            {location.pathname !== '/' && (
                                <li>
                                    <NavLink to="/" onClick={scrollToTop}>Home</NavLink>
                                </li>
                            )}
                            <li><a href="#how-it-works" onClick={(e) => {e.preventDefault(); howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' })}}>Explore</a></li>
                            <li><a href="#about-us" onClick={(e) => {e.preventDefault(); aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' })}}>About</a></li>
                            {patientPaths.includes(location.pathname) && (
                                <>
                                    <li><NavLink to="/questionnaire">Symptom Checker</NavLink></li>
                                    <li><NavLink to="/">Appointments</NavLink></li>
                                    <li><a href="/">Records</a></li>
                                </>
                            )}
                            {adminPaths.includes(location.pathname) && (
                                <>
                                    <li><NavLink to="/availability-manager">Appointments</NavLink></li>
                                    <li><a href="/">Records</a></li>
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
            );
            
    
}

export default Navbar;