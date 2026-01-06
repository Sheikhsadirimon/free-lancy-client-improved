import React from 'react';
import Banner from './Banner';
import LatestJobs from './LatestJobs';
import TopCategories from './TopCategories';
import AboutPlatform from './AboutPlatform';
import FAQ from './FAQ';
import CallToAction from './CallToAction';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestJobs></LatestJobs>
            <TopCategories></TopCategories>
            <CallToAction></CallToAction>
            <AboutPlatform></AboutPlatform>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;