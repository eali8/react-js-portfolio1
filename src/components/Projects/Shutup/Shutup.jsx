import React from 'react';
import { Helmet } from 'react-helmet';
import ShutupHero from './ShutupHero';
import ShutupContent from './ShutupContent';

const Shutup = () => {
    return (
        <div>
        <Helmet>
        <title>Shut Up App</title>
        <meta name="description" content="For busy individuals looking to find a peace!" />
        </Helmet>
            <ShutupHero></ShutupHero>
            <ShutupContent></ShutupContent>
        </div>
    );
};

export default Shutup;