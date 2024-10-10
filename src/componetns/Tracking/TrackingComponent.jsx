import React from 'react';
import './TrackingComponent.css'; // Import your styles
import dogTruckImage from './map1.jpeg'; // Example image, adjust the path accordingly

const TrackingComponent = () => {
    const trackingData = {
        petName: 'Buddy',
        status: 'In Transit',
        estimatedArrival: '15 minutes',
    };

    return (
        <div className="tracking-section">
            <h2>Track Your Pet</h2>
            <div className="tracking-info">
                <h3>{trackingData.petName}</h3>
                <p>Status: {trackingData.status}</p>
                <p>Estimated Arrival: {trackingData.estimatedArrival}</p>
            </div>
            <div className="image-container">
                <img src={dogTruckImage} alt="Pet Transport" className="tracking-image" />
            </div>
        </div>
    );
};

export default TrackingComponent;
