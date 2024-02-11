import React, { useState } from 'react';
import Reveal from '../../Animation/Reveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MindHero = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='bg-[#E5F2F9] py-[50px]'>
            <div className="container mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] md:px-0 px-4">
                <div className="grid gap-4 md:grid-cols-12 mb-9">
                    <div className="md:col-span-6 text-center my-2">
                        <h3 className='text-3xl text-primary font-bold'>“Mindfulness Stress Reduction” <br /> Mobile App</h3>
                        <p className='text-2xl'>UX / UI Case Study</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 gap-4 mx-4">
                    <div className="md:col-span-6 md:py-6 md:pr-4">
                        <Reveal>
                            <motion.img src={`/images/mind-hero.png`} alt="MSRA Hero" className="rounded-lg w-full" initial={{ scale: 1 }} whileHover={{ scale: 1.01 }} />
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
                                    <p>6 Weeks Duration <br /> 15 May, 2023 - 27 June 2023</p>
                                </div>
                                <div className="text-lg">
                                    <h4 className='text-primary mb-4 font-bold font-[Inter] uppercase text-lg'>Tools:</h4>
                                    <ul>
                                        <li>Photoshop </li>
                                        <li>Figma</li>
                                        <li>Google Forms</li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-primary mt-2">Overview:</h3>
                            <p className="text-[18px] leading-8"> Mindfulness Stress Reduction is a blend of meditation, body awareness and mindful movement: learning through practice and study how your body handles the stress. In this full of distraction world, we need to find our inner peace and happiness! Stress has become a common issue in today's fast-paced and demanding world, leading to various physical and mental health problems. <br/> <br/> Mindfulness practices have been proven to be effective in reducing stress, anxiety, and improving overall well-being. With this app, I am aiming to support users in their mindfulness journey! </p>
                            <div className="flex justify-center mt-12">
                                <Link to='https://www.figma.com/proto/z2HMwjyA9TEo1QhtonGlbe/Term-Project-2-%2F-UX-UI?type=design&node-id=39-504&t=U16r41cPavFPBYNc-0&scaling=scale-down&page-id=2%3A3&starting-point-node-id=6%3A5' target='_blank'
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

export default MindHero;