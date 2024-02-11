import React from 'react';
import Charity from './Charity/Charity';
import { ScrollRestoration, useParams } from 'react-router-dom';
import Shutup from './Shutup/Shutup';
import Fufu from './Fufu/Fufu';
import Mind from './Mind/Mind';
import Animation from './Animation/Animation';
import Prototype from './Prototype/Prototype';
import BreadCrumb from '../Partials/BreadCrumb';

const Projects = () => {
    const {name} = useParams();

    return (
        <div>
            {name === 'charity' && <Charity></Charity>}
            {name === 'shutup' && <Shutup></Shutup>}
            {name === 'mind' && <Mind></Mind>}
            {name === 'fufu' && <Fufu></Fufu>}
            {name === 'animation' && <Animation></Animation>}
            {name === 'prototype' && <Prototype></Prototype>}
            <BreadCrumb/>
            <ScrollRestoration/>
        </div>
    );
};

export default Projects;