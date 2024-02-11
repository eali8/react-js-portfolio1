import React from 'react';
import { Helmet } from 'react-helmet';
import MindHero from './MindHero';
import MindContent from './MindContent';

const Mind = () => {
    return (
        <div>
            {/* Helmet for metadata */}
        <Helmet>
        <title>Mindfulness Stress Reduction App</title>
        <meta name="description" content="Mindfulness Stress Reduction App" />
        </Helmet>
            <MindHero/>
            <MindContent/>
        </div>
    );
};

export default Mind;