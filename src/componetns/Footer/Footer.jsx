import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import social media icons
import './Footer.css'; // Import your styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>We provide reliable pet transport services to ensure your furry friends arrive safely at their destination.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: support@pettransport.com</p>
                    <p>Phone: +1 234 567 8901</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#" className="footer-link">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="footer-link">
                            <FaInstagram />
                        </a>
                        <a href="#" className="footer-link">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Pet Transport. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
