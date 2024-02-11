import React, { useState } from 'react';
import Reveal from '../../Animation/Reveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FufuHero = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='bg-[#FFDACC] py-[50px]'>
            <div className="container mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] md:px-0 px-4">
                <div className="grid gap-4 md:grid-cols-12 mb-9">
                    <div className="md:col-span-6 text-center my-2">
                        <h3 className='text-3xl text-primary font-bold'>“Fufu Bakery” Website</h3>
                        <p className='text-2xl'>UX / UI Case Study</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 gap-4 mx-4">
                    <div className="md:col-span-6 md:py-6 md:pr-4">
                        <Reveal>
                            <motion.img src={`/images/fufu-hero.png`} 
                            alt='Fufu Bakery Hero'
                            className="rounded-lg w-full" initial={{ scale: 1 }} whileHover={{ scale: 1.01 }} />
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
                                        <li>Mural</li>
                                        <li>Figma</li>
                                        <li>InDesign</li>
                                        <li>Adobe Illustrator</li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-primary mt-2">Overview:</h3>
                            <p className="text-[18px] leading-8"> The main objective was the opening of a new branch of Fufu Bakery in Vancouver Downtown, attracting a new target audience and increasing sales. <br /> <br />
                                Fufu Bakery already has a thriving bakery situated in the Brentwood area, serving as a strong foundation for the brand's reputation and success. "Fufu" also aims to increase its web visibility and increase the number of events it attends monthly. This was a fictitious company for a Project with BCIT. I have worked, as a UX / UI Designer and Project Manager of a group of three people. </p>
                            <div className="flex justify-center mt-12">
                                <Link to='https://www.figma.com/proto/Q4ciU3b6YuYEtTZGwp0p8r/InDesign-Term-Project?type=design&node-id=168-1101&t=Ybew5H7zfgMxD6KP-0&scaling=scale-down&page-id=26%3A1147' target='_blank'
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
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FufuHero;