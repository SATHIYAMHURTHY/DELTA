import React from 'react';

import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Footer from '../components/Footer';




const Home = () => {
    return (
        <div>
            <Hero />
            <Intro />
            <Services />
            <Clients />
            <Footer />
         
          
        </div>

    )
}

export default Home;

