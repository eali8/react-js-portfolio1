import React from 'react';
import { Helmet } from 'react-helmet';
import CharityHero from './CharityHero';
import CharityContent from './CharityContent';

const Charity = () => {
    return (
        <div>
        {/* Helmet for metadata */}
        <Helmet>
        <title>Children Charity</title>
        <meta name="description" content="Supporting children in need - Donate today!" />
        </Helmet>
            <CharityHero/>
            <CharityContent/>
        </div>
    );
};

export default Charity;