import React from 'react';
import Banner from './Banner';
import LatestJobs from './LatestJobs';
import TopCategories from './TopCategories';
import AboutPlatform from './AboutPlatform';
import FAQ from './FAQ';
import CallToAction from './CallToAction';
import Testimonials from './Testimonials';
import Blogs from './Blogs';
import HowItWorks from './HowItWorks';
import Features from './Features';
import Highlights from './Highlights';
import FinalCTA from './FinalCTA';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestJobs></LatestJobs>
            <TopCategories></TopCategories>
            <Highlights></Highlights>
            <CallToAction></CallToAction>
            <Testimonials></Testimonials>
            <AboutPlatform></AboutPlatform>
            <Features></Features>
            <HowItWorks></HowItWorks>
            <FAQ></FAQ>
            <FinalCTA></FinalCTA>
        </div>
    );
};

export default Home;