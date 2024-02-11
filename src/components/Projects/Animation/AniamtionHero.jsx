import React from 'react';
import Reveal from '../../Animation/Reveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AniamtionHero = () => {
    return (
        <div className='bg-[#FAEED7C9] py-[50px]'>
            <div className="container mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] md:px-0 px-4">
                <div className="grid gap-4 md:grid-cols-12 mb-9">
                    <div className="md:col-start-1 md:col-span-6 text-center my-2">
                        <h3 className='text-3xl text-primary font-bold'>Web Animations</h3>
                        <p className='text-2xl'>Designing and developing animations</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 gap-4 mx-4">
                    <div className="md:col-span-6 md:py-6 md:pr-4">
                        <Reveal>
                            <motion.img src={`/images/anim-hero.png`} 
                            alt="Animation Hero"
                            className="rounded-lg w-full" initial={{ scale: 1 }} whileHover={{ scale: 1.01 }} />
                        </Reveal>
                    </div>
                    <div className="md:col-span-6">
                        <Reveal reverse={1}>
                            <div className="grid grid-cols-3 gap-6 py-4 mb-9">
                                <div className="text-lg">
                                    <h4 className='text-primary mb-4 font-bold font-[Inter] uppercase text-lg'>Role:</h4>
                                    <ul>
                                        <li>Developer </li>
                                    </ul>
                                </div>
                                <div className="text-lg">
                                    <h4 className='text-primary mb-4 font-bold font-[Inter] uppercase text-lg'>Timeline:</h4>
                                    <p>10 Weeks Duration</p>
                                </div>
                                <div className="text-lg">
                                    <h4 className='text-primary mb-4 font-bold font-[Inter] uppercase text-lg'>Tools:</h4>
                                    <ul>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>GSAP</li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-primary mt-2">Overview:</h3>
                            <p className="text-[18px] leading-8"> A compilation of animation projects crafted through various methods. <br /><br /> Employing keyframes, requestAnimationFrame, and an array of GSAP methods, these projects bring forth both static and interactive animations..</p>
                        </Reveal >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AniamtionHero;