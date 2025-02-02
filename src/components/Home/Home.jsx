import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import WorkExperience from '../WorkExperience/WorkExperience';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Works />
            <WorkExperience />
            <Education />
            <Skills />
        </div>
    );
}

export default Home;
