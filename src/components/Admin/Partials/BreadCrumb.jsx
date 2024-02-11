import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = ({path}) => {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>{path}</li>
            </ul>
        </div>
    );
};

export default BreadCrumb;