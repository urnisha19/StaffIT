import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';

import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import OurWorks from '../OurWorks/OurWorks';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <Services />
            <OurWorks />
            <Reviews />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;