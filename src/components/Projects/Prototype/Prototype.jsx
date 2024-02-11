import React from 'react';
import { Helmet } from 'react-helmet';
import PrototypeHero from './PrototypeHero';
import PrototypeContent from './PrototypeContent';

const Prototype = () => {
    return (
        <div>
        {/* Helmet for metadata */}
        <Helmet>
        <title>Prototypes and Experiments</title>
        <meta name="description" content="Prototypes and Experiments" />
        </Helmet>
            <PrototypeHero/>
            <PrototypeContent/>
        </div>
    );
};

export default Prototype;