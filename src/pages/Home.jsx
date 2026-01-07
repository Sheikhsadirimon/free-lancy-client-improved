import React from 'react';
import Banner from './Banner';
import LatestJobs from './LatestJobs';
import TopCategories from './TopCategories';
import AboutPlatform from './AboutPlatform';
import FAQ from './FAQ';
import CallToAction from './CallToAction';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestJobs></LatestJobs>
            <TopCategories></TopCategories>
            <CallToAction></CallToAction>
            <Testimonials></Testimonials>
            <AboutPlatform></AboutPlatform>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;