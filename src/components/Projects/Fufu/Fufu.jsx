import React from 'react';
import { Helmet } from 'react-helmet';
import FufuHero from './FufuHero';
import FufuContent from './FufuContent';

const Fufu = () => {
    return (
        <div>
             {/* Helmet for metadata */}
        <Helmet>
        <title>Fufu Bakery Website</title>
        <meta name="description" content="Fufu Bakery - UX/UI Case Study" />
        </Helmet>
            <FufuHero/>
            <FufuContent/>
        </div>
    );
};

export default Fufu;