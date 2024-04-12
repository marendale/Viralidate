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
    const [userName, setUserName] = useState("")
    const patientPaths = ['/patientportal', '/patientportal/symptom', '/questionnaire'];
    const adminPaths = ['/adminportal', '/adminportal/appointments', '/availability-manager'];
    const navigate = useNavigate();
    const location = useLocation();
    const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Attempt to fetch from both collections
                const adminProfileRef = doc(db, "adminProfile", user.uid);
                const patientProfileRef = doc(db, "patientProfile", user.uid);
                try {
                    const adminProfileSnap = await getDoc(adminProfileRef);
                    const patientProfileSnap = await getDoc(patientProfileRef);
                    if (adminProfileSnap.exists()) {
                        console.log("User is an admin:", adminProfileSnap.data());
                        setIsLoggedIn(true);
                        setUserProfileType("admin");
                        const firstName = adminProfileSnap.data().firstName;
                        const lastName = adminProfileSnap.data().lastName.charAt(0).toUpperCase();
                        const name = firstName.charAt(0).toUpperCase() + firstName.slice(1) + ' ' + lastName + '.';
                        setUserName(name)
                    } else if (patientProfileSnap.exists()) {
                        console.log("User is a patient:", patientProfileSnap.data());
                        setIsLoggedIn(true);
                        setUserProfileType("patient");
                        const firstName = patientProfileSnap.data().firstName;
                        const lastName = patientProfileSnap.data().lastName.charAt(0).toUpperCase();
                        const name = firstName.charAt(0).toUpperCase() + firstName.slice(1) + ' ' + lastName + '.';
                        setUserName(name)
                    } 
                } catch (error) {
                    console.error("Error fetching user profiles:", error);
                    setIsLoggedIn(false);
                    setUserProfileType("");
                }
            } else {
                setIsLoggedIn(false);
                setUserProfileType("");
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
        setUserName("");
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
                        {(location.pathname === '/' || !isLoggedIn) && ( // Show these links if it's the homepage or the user is not logged in
                            <ul className="navbar-menu">
                                {location.pathname !== '/' && (
                                    <li><NavLink to="/" onClick={scrollToTop}>Home</NavLink></li>
                                )}
                                <li><a href="#how-it-works" onClick={(e) => {e.preventDefault(); howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' })}}>Explore</a></li>
                                <li><a href="#about-us" onClick={(e) => {e.preventDefault(); aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' })}}>About</a></li>
                            </ul>
                        )}
                        <div className="navbar-login">
                            {!isLoggedIn ? (
                                <>
                                    <button onClick={() => setShowLogin(true)}>Login</button>
                                    <button onClick={() => setShowSignUpOptions(true)}>Sign Up</button>
                                </>
                            ) : (
                                <>
                                    {/* User type and name */}
                                    <h4>{userProfileType.charAt(0).toUpperCase() + userProfileType.slice(1)}:</h4>
                                    <h4>{userName}</h4>
                                    {/* Portal Button */}
                                    {userProfileType === 'admin' ? (
                                        <NavLink to="/adminportal" className="navbar-button">Portal</NavLink>
                                    ) : (
                                        <NavLink to="/patientportal" className="navbar-button">Portal</NavLink>
                                    )}
            
                                    {/* Log Out Button */}
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
                                    <button className="signup-btn" onClick={() => handleSignUpOptionClick('patient')}>Patient Sign Up</button>
                                    <button className="signup-btn" onClick={() => handleSignUpOptionClick('admin')}>Admin Sign Up</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {signUpType && (
                        <SignUp trigger={true} setTrigger={() => setSignUpType("")} type={signUpType} />
                    )}
                </div>
            );
            
            
        }
        
        export default Navbar;