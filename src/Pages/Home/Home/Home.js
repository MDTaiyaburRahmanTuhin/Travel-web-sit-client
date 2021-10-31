import React from 'react';

import Newes from '../../Newes/Newes';
import Offer from '../../Offer/Offer';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Offer></Offer>
            <Newes></Newes>
            <Footer></Footer>
        </div>
    );
};

export default Home;