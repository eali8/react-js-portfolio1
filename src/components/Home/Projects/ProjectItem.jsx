import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useLocation } from 'react-router-dom';

const ProjectItem = ({ project, index }) => {
    const location = useLocation();
    const { name, short_description, link, slug } = project;
    const itemRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ['start end', 'end start']
    })
    const effect = useTransform(scrollYProgress, [0, 0.4], [0, 1]);


    return (
        <motion.div ref={itemRef} className={`col-span-12 md:col-span-4 mb-8 ${index % 2 === 0 ? 'md:col-start-8':'md:col-start-2'}`}
            style={{ scale: effect }}
        >
            <Link to={`/project/${slug}`}>
                <motion.div className="card-body border-primary bg-cover text-center rounded-lg p-0 py-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ delay: 0.2, duration: 0.3, type: "smooth" }}
                >
                    <img src={`/images/${link}`} className={location.pathname === '/' ? 'max-h-[308px]':'max-h-[275px]'} alt="project" />
                </motion.div>
            </Link>
            <div className={`lg:col-span-6 col-span-12 my-auto ${index % 2 === 0 ? 'lg:order-2':'lg:order-1'}`}>
                <Link to={`/project/${slug}`}><h2 className="text-center text-primary text-xl font-bold">{name}</h2></Link>
                <Link to={`/project/${slug}`}><p className='text-center'>{short_description}</p></Link>
            </div>
        </motion.div>
    );
};

export default ProjectItem;