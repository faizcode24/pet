import React from 'react';
import './InformationSection.css'; // Import your styles

const InformationSection = () => {
    return (
        <div className="information-section">
            <h2>About Our Company</h2>
            <p>
                At Pet Transport, we prioritize the safety and comfort of your furry friends. 
                With years of experience in pet transportation, we ensure that every pet is treated with the utmost care.
            </p>

            <h3>How We Deliver</h3>
            <p>
                Our delivery process is simple and efficient:
            </p>
            <ul>
                <li><strong>Step 1:</strong> Schedule a pickup through our app or website.</li>
                <li><strong>Step 2:</strong> Our trained drivers arrive at your location to pick up your pet.</li>
                <li><strong>Step 3:</strong> We transport your pet in a comfortable and secure vehicle.</li>
                <li><strong>Step 4:</strong> Your pet is delivered to your desired location safely.</li>
            </ul>

            <h3>Our Commitment</h3>
            <p>
                We are committed to providing:
            </p>
            <ul>
                <li>Safe and reliable transportation</li>
                <li>Real-time tracking of your pet's journey</li>
                <li>Trained and compassionate staff</li>
                <li>24/7 customer support for any inquiries</li>
            </ul>

            <h3>Get in Touch</h3>
            <p>
                If you have any questions or need assistance, feel free to contact us through our 
                <a href="/contact"> contact page</a>.
            </p>
        </div>
    );
};

export default InformationSection;
