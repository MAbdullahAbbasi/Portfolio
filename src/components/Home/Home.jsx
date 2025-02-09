import React, { useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import WorkExperience from '../WorkExperience/WorkExperience';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Works from '../Works/Works';
import WhatsApp from '../Whatsapp/Whatsapp';
import Footer from '../Footer/Footer';

const Home = () => {
    // Create references for each section
    const heroRef = useRef(null);
    const worksRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);

    // Function to scroll to the desired section
    const scrollToSection = (section) => {
        if (section && section.current) {
            section.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="home-container" style={{ position: 'relative' }}>
            <div className="navbar-div" style={{ position: 'sticky', top: '0px', zIndex: '1111111999' }}>
                <Navbar scrollToSection={scrollToSection} heroRef={heroRef} worksRef={worksRef} educationRef={educationRef} skillsRef={skillsRef} />
            </div>

            <div ref={heroRef}>
                <Hero />
            </div>


            <div ref={worksRef}>
                <Works />
            </div>

            <div ref={educationRef}>
                <Education />
            </div>

            <WorkExperience />

            <div ref={skillsRef}>
                <Skills />
            </div>

            <WhatsApp />
            <Footer />
        </div>
    );
}

export default Home;
