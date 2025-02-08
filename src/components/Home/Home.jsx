import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import WorkExperience from '../WorkExperience/WorkExperience';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Works from '../Works/Works';
import WhatsApp from '../Whatsapp/Whatsapp';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="home-container" style={{position: 'relative'}}>

            <div className="navbar-div" style={{position: 'sticky', top: '0px', zIndex: '1111111999'}}>
                <Navbar />
            </div>
    
            <Hero />
            <Works />
            <Education />
            <WorkExperience />
            <Skills />
            <WhatsApp />

            <Footer />
        </div>
    );
}

export default Home;
