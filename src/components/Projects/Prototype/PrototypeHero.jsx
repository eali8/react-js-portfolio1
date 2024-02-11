import React from 'react';
import Reveal from '../../Animation/Reveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrototypeHero = () => {
    return (
        <div className='bg-[#E2E2E2] py-[50px]'>
            <div className="container mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] md:px-0 px-4">
                <div className="grid gap-4 md:grid-cols-12 mb-9">
                    <div className="md:col-span-6 text-center my-2">
                        <h3 className='text-3xl text-primary font-bold'>Prototyping and Experiments</h3>
                        <p className='text-2xl'>Interactions and techniques in prototyping with Figma</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 gap-4 mx-4">
                    <div className="md:col-span-6 md:pr-4">
                        <Reveal>
                            <motion.img src={`/images/proto-hero.png`} className="rounded-lg w-full" initial={{ scale: 1 }} whileHover={{ scale: 1.01 }} />
                        </Reveal>
                    </div>
                    <div className="md:col-span-6">
                        <Reveal reverse={1}>
                            <div className="grid grid-cols-3 gap-6 py-4 mb-9">
                                <div className="text-lg">
                                    <h4 className='text-primary mb-4 font-bold font-[Inter] uppercase text-lg'>Role:</h4>
                                    <ul>
                                        <li>Product Designer</li>
                                    </ul>
                                </div>
                                <div className="text-lg">
                                    <h4 className='text-primary mb-4 font-bold font-[Inter] uppercase text-lg'>Timeline:</h4>
                                    <p className='font-regular'>On-going</p>
                                </div>
                                <div className="text-lg">
                                    <h4 className='text-primary mb-4 font-bold font-[Inter] uppercase text-lg'>Tools:</h4>
                                    <ul>
                                        <li>Figma</li>
                                        <li>WordPress</li>
                                        <li>SquareSpace</li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-primary mt-2">Overview:</h3>
                            <p className="text-[18px] leading-8"> In my spare time, I relish the opportunity to explore fresh avenues of interaction and pioneering prototyping techniques. <br></br> Keep an eye out for upcoming uploads—I'll be sharing more soon!</p>
                        </Reveal >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrototypeHero;