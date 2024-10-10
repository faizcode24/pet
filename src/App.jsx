import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Uncommented router imports
import Navbar from './componetns/Navbar/Navbar'; // Fixed import path
import Hero from './componetns/Hero/HeroSection'
import InformationSection from './componetns/Info/InformationSection';


import PricingComponent from './componetns/Price/PricingComponent';
import TrackingComponent from './componetns/Tracking/TrackingComponent';
import Footer from './componetns/Footer/Footer';




const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Hero />
                <InformationSection />
                <PricingComponent />
                <TrackingComponent />
                <Footer />
                <Routes>
                
                </Routes>
            </div>
        </Router>
    );
};

export default App;
