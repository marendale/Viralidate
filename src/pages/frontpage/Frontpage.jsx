/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import './Frontpage.css';
import Navbar from '../../components/navbar/Navbar';
import HowItWorks from '../../components/howItWorks/HowItWorks';

const Frontpage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const howItWorksRef = useRef(null); 
    const [showArrow, setShowArrow] = useState(true);


    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            const howItWorksPosition = howItWorksRef.current.offsetTop - window.innerHeight;
    
            if (offset > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
    
            if (offset > howItWorksPosition) {
                setShowArrow(false);
            } else {
                setShowArrow(true);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <div>
            <Navbar isScrolled={isScrolled} />
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
                <img
    src="/assets/arrow.png"
    alt="Scroll down"
    className={`scroll-down-indicator ${showArrow ? '' : 'hide-arrow'}`}
    onClick={() => howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' })}
/>
                </div>
                <div className="hero_content">
                    <h1 className="headline">
                        Revolutionizing Patient Care<br/>with Smart<br/>Symptom Checking and Scheduling
                    </h1>
                    <button className="getstarted" role="button">Get Started</button>
                </div>
            </div>
            <div ref={howItWorksRef}> 
            <h2 className="how-it-works-heading">How It Works</h2>
                <HowItWorks />
            </div>
<h2 className="about-us-heading">About Us</h2>
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-text">
          <p>
Viralidate is revolutionizing healthcare with our innovative platform that automates symptom triage and appointment scheduling for healthcare institutions. Our solution supports the core of the healthcare system, easing the workload of professionals and staff by optimizing patient care and resource allocation. Our advanced algorithm precisely assesses symptoms, manages healthcare providers' capacities, and prioritizes appointments, enhancing efficiency and patient outcomes.
          </p>
          <p>We are dedicated to innovation and continuously adapting to meet the future demands of healthcare delivery. Viralidate is more than a technological tool; it's a pledge to improve healthcare experiences, ensuring operational excellence and fostering better outcomes for both patients and providers.
          </p>
        </div>
        <div className="about-us-image">
          <img src="\assets\team.jpg" alt="About Us" />
        </div>
      </div>
    </div>

  <footer className="footer-section">
                <div className="footer-content">
                    <div className="footer-left">
                    <img src="\assets\Viralidate Logo.png" alt="Company Logo" />
                        <p>Georgia State University, 33 Gilmer Street SE, Atlanta, GA 30303</p>
                    </div>
                    <div className="footer-right">
                        <h3>Newsletter</h3>
                        <p>Sign up for our newsletter for essential tips and news.</p>
                        <input type="email" placeholder="Your email" />
                        <button>Send</button>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Made in Atlanta</p>
                    <p>© 2024 Viralidate. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Frontpage;
