import React from 'react';
import './PricingComponent.css'; // Import your styles

const PricingComponent = () => {
    const plans = [
        {
            name: 'Basic',
            price: '₹1,000',
            features: [
                'Pet transport within the city',
                'Trained drivers',
                'Real-time tracking',
                'Customer support'
            ],
        },
        {
            name: 'Standard',
            price: '₹2,500',
            features: [
                'Pet transport within the state',
                'Trained drivers',
                'Real-time tracking',
                'Customer support',
                'Pet care during transport'
            ],
        },
        {
            name: 'Premium',
            price: '₹5,000',
            features: [
                'Pet transport across the country',
                'Trained drivers',
                'Real-time tracking',
                '24/7 customer support',
                'Luxury pet carriers'
            ],
        },
    ];

    return (
        <div className="pricing-section">
            <h2>Our Pricing Plans</h2>
            <div className="pricing-container">
                {plans.map((plan, index) => (
                    <div className="pricing-card" key={index}>
                        <h3>{plan.name}</h3>
                        <p className="price">{plan.price}</p>
                        <ul>
                            {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex}>{feature}</li>
                            ))}
                        </ul>
                        <button className="btn">Choose Plan</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingComponent;
