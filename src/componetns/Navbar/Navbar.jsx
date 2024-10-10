import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Left: Logo */}
            <div className="navbar-logo">
                <img src="/path-to-your-logo/logo.png" alt="Pet Transport" />
            </div>

            {/* Center: Navigation Links */}
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>

            {/* Right: Button */}
            <div className="navbar-button">
                <button>Book Now</button>
            </div>
        </nav>
    );
};

export default Navbar;
