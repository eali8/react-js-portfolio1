import React from 'react';
import { Helmet } from 'react-helmet';
import ProjectItem from './ProjectItem';
import Reveal from '../../Animation/Reveal';
import projects from './data/projects';

const Projects = ({reference}) => {
    return (
        <Reveal reverse={1}>
            <div ref ={reference} className="relative grid grid-cols-12 gap-4">
        {/* Helmet for metadata */}
        <Helmet>
        <title>Projects - Emmy Ali</title>
        <meta name="description" content="UI UX Projects - Emmy Ali" />
        </Helmet>
        {
            projects?.map((project, index) => {
                return (
                    <ProjectItem key={index} project={project} index={index + 1} />
                )
            })
        }
            </div>
        </Reveal>
    );
};

export default Projects;