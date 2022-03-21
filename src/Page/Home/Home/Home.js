import React from 'react';
import Footer from '../../Sheard/Footer/Footer';
import Navigation from '../../Sheard/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Customers from '../Customers/Customers';
import LabTest from '../LabTest/LabTest';
import People from '../People/People';
import Properties from '../Properties/Properties';
import Opportunity from '../Opportunity/Opportunity';
import Appointment from '../Appointment/Appointment';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <About />
            <Appointment />
            <LabTest />
            <Properties />
            <Opportunity />
            <People />
            <Customers />
            <Footer />
        </div>
    );
};

export default Home;