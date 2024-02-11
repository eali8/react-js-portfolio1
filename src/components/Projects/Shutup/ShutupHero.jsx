import React, { useState } from 'react';
import Reveal from '../../Animation/Reveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ShutupHero = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='bg-[#FDD39440] py-[50px]'>
            <div className="container mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] md:px-0 px-4">
                <div className="grid gap-4 md:grid-cols-12 mb-9">
                    <div className="md:col-span-6 text-center my-2">
                        <h3 className='text-3xl text-primary font-bold'>“Shut UP” Mobile App</h3>
                        <p className='text-2xl'>UX / UI Case Study</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 gap-4 mx-4">
                    <div className="md:col-span-6 md:py-6 md:pr-4">
                        <Reveal>
                            <motion.img src={`/images/shutup-hero.png`} className="rounded-lg w-full" initial={{ scale: 1 }} whileHover={{ scale: 1.01 }} alt="Shut Up Hero" />
                        </Reveal>
                    </div>
                    <div className="md:col-span-6">
                        <Reveal reverse={1}>
                            <div className="grid grid-cols-3 gap-6 py-4 mb-9">
                                <div className="text-lg">
                                    <h4 className='text-primary mb-4 font-bold font-[Inter] uppercase text-lg'>Role:</h4>
                                    <ul>
                                        <li>UX Researcher </li>
                                        <li>Product Designer</li>
                                    </ul>
                                </div>
                                <div className="text-lg">
                                    <h4 className='text-primary mb-4 font-bold font-[Inter] uppercase text-lg'>Timeline:</h4>
                                    <ul>
                                        <li>6 Weeks Duration</li>
                                        <li>15 May 2023 - 27 June 2023</li>
                                    </ul>
                                </div>
                                <div className="text-lg">
                                    <h4 className='text-primary mb-4 font-bold font-[Inter] uppercase text-lg'>Tools:</h4>
                                    <ul>
                                        <li>Photoshop </li>
                                        <li>Figma</li>
                                        <li>InDesign</li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-primary mt-2">Overview:</h3>
                            <p className="text-[18px] leading-8"> The "Shut Up" app is designed for busy individuals, who are annoyed by other people and would love to Shut them Up, but instead of saying it they would rather notify them by sound or funny noise. After undergoing testing in 160 languages, this app achieved an astounding success rate. <br /> <br />I worked on this real-time project as a part of the BCIT UX/UI Design course in Term 2 in a 6 week sprint. </p>
                            <div className="flex justify-center mt-12">
                                <Link to='https://www.figma.com/proto/jz8OMvjBsxIbpXsLQgmeed/Mobile-App-UX%2F-UI?type=design&node-id=127-556&t=pAEWlSEeJbhMVs0I-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=277%3A982&show-proto-sidebar=1' target='_blank'
                                    onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                                    className='btn bg-primary overflow-hidden shadow-lg border-primary text-white w-56'>
                                    <motion.span
                                        initial={{ x: 0 }}
                                        animate={isHovered ? { x: -10 } : { x: 0 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className='hover:text-white'
                                    >
                                        See Prototype
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
                        </Reveal >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShutupHero;