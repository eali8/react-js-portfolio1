import React from 'react';
import { Helmet } from 'react-helmet';
import AboutHero from './Hero/AboutHero';
import Gallery from './Gallery/Gallery';
import Reveal from '../Animation/Reveal';
import categories from './data/category';
import Values from './Values/Values';

const About = () => {
    return (
        <div className='container mx-auto w-full 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] md:px-0 px-4' style={{ paddingTop: '3%' }}>
              {/* Helmet for metadata */}
              <Helmet>
                <title>About Me - Emmy Ali</title>
                <meta name="description" content="Find out more About Me - Emmy Ali" />
            </Helmet>

            <AboutHero />
            <Values/>
            {
                categories.map((category, index) => {
                    return (
                        <Reveal key={category.id} reverse={index % 2 === 0 ? null : 1}>
                            <Gallery key={category.id} item={category} />
                        </Reveal>
                    )
                })
            }
        </div>
    );
};

export default About;