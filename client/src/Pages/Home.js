import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Services from '../Components/Services';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';

export default function HomeContainer() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Services />
            <ContactUs />
            <Footer />
        </div>
    )
}