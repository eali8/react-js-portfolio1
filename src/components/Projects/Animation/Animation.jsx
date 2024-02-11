import React from 'react';
import { Helmet } from 'react-helmet';
import AniamtionHero from './AniamtionHero';
import AnimationContent from './AnimationContent';

const Animation = () => {
    return (
        <div>
            {/* Helmet for metadata */}
        <Helmet>
        <title>Web Animations</title>
        <meta name="description" content="Web Animations - Love coding!" />
        </Helmet>
           <AniamtionHero/> 
           <AnimationContent/>
        </div>
    );
};

export default Animation;