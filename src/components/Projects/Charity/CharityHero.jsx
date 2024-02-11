import React, { useState } from 'react';
import Reveal from '../../Animation/Reveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CharityHero = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='bg-[#FFB6B640] py-[50px]'>
            <div className="container mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] md:px-0 px-4">
                <div className="grid gap-4 md:grid-cols-12 mb-9">
                    <div className="md:col-span-6 text-center my-2">
                        <h3 className='text-3xl text-primary font-bold'>Children Charity Website</h3>
                        <p className='text-2xl'>UX / UI Case Study</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 gap-4 mx-4">
                    <div className="md:col-span-6 md:py-6 md:pr-4">
                        <Reveal>
                            <motion.img src={`/images/children_charity.png`} className="rounded-lg w-full" initial={{ scale: 1 }} whileHover={{ scale: 1.01 }} />
                        </Reveal>
                    </div>
                    <div className="md:col-span-6">
                        <Reveal reverse={1}>
                            <div className="grid grid-cols-3 gap-6 py-4 mb-9">
                                <div className="text-lg">
                                    <h4 className='text-primary mb-4 font-bold font-[Inter] uppercase text-lg'>Role:</h4>
                                    <ul>
                                        <li>UX Researcher </li>
                                        <li> Product Designer</li>
                                    </ul>
                                </div>
                                <div className="text-lg">
                                    <h4 className='text-primary mb-4 font-bold font-[Inter] uppercase text-lg'>Timeline:</h4>
                                    <ul>
                                        <li>6 Week Duration</li>
                                        <li>7 Feb 2023-15 March 2023</li>
                                    </ul>
                                </div>
                                <div className="text-lg">
                                    <h4 className='text-primary mb-4 font-bold font-[Inter] uppercase text-lg'>Tools:</h4>
                                    <ul>
                                        <li>Adobe XD </li>
                                        <li>WordPress</li>
                                        <li>Figma</li>
                                        <li>InVision</li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-primary mt-2">Overview:</h3>
                            <p className="text-[18px] leading-8"> This case study explores the design solution and creating detailed pages website for making an impactful project that would help to raise awareness, funds and support. The primary goals of this endeavor was to design a user-friendly, engaging, and informative website that appeals to both potential donors and those seeking assistance for children in need. <br /> <br/>I worked on this real-time project as a part of the BCIT Information Architecture Design course in Term 1 in a 6-week sprint..</p>
                            <div className="flex justify-center mt-12">
                                <Link to='https://childreninternational.em-venus.com/' target='children'
                                    onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                                    className='btn bg-primary overflow-hidden shadow-lg border-primary text-white w-56'>
                                    <motion.span
                                        initial={{ x: 0 }}
                                        animate={isHovered ? { x: -10 } : { x: 0 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className='hover:text-white'
                                    >
                                        See Website
                                    </motion.span>
                                    <span>
                                        <motion.svg
                                            initial={{ width: 0, x: 0 }}
                                            animate={isHovered ? { width: 20, x: -10 } : { width: 0, x: 0 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            width="130" height="36" viewBox="0 0 130 36" fill="none" stroke-width="40" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M130 18L100 0.679492V35.3205L130 18ZM0 21H103V15H0V21Z" fill="white" />
                                        </motion.svg>
                                    </span>
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharityHero;