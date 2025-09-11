import React from 'react';
import AboutCon from './AboutCon';
import Tracks from './Tracks';
import Organize from './Organize';
import Banner from './Banner';
import CommitteeSlide from './CommitteeSlide';
import Speakers from './Speakers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutCon></AboutCon>
            <Speakers></Speakers>
            <CommitteeSlide></CommitteeSlide>
            <Tracks></Tracks>
            <Organize></Organize>
        </div>
    );
};

export default Home;