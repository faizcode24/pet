import React from 'react';
import './HeroSection.css'; // Import the CSS file
import dog from '../Hero/images/dog.jpg'

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-image">
                <img src={dog} alt="Dog" />
            </div>
            <div className="hero-content">
                <h1>Welcome to Pet Transport</h1>
                <p>Your trusted partner for safe and reliable pet transportation.</p>
                <button>Learn More</button>
            </div>
        </div>
    );
};

export default HeroSection;
