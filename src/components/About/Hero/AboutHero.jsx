import React, { useState } from 'react';
import Reveal from '../../Animation/Reveal';
import { motion } from 'framer-motion';

const AboutHero = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="grid grid-cols-12 gap-4">
            <div className='md:col-span-6 col-span-12 md:pr-4'>
                <Reveal>
                    <h1 className='text-3xl font-bold font-[inter] text-primary mb-10 text-center'>"Fusing Culture, and Creativity to Redefine User Experiences"</h1>
                    <motion.img src="/images/about.png" alt="About me" className="w-full rounded-lg shadow-2xl" initial={{ scale: 1 }} whileHover={{ scale: 1.01 }} />
                </Reveal>
            </div>
            <div className='md:col-span-6 col-span-12'>
                <Reveal reverse={1}>
                    <div className="my-auto">
                        <h1 className="text-lg font-bold">I am Emmy Ali, a Product Designer based in Vancouver,  Canada, with a background of Finance and Marketing.</h1>
                        <p className="py-4"> I am combining my analytical background with my passion, to design and create impactful digital experiences. Graduated from British Columbia Institute of Technology, Vancouver Canada in New Media Design and Web Development. <br /><br /> I have lived in two different continents (Australia and Canada), backpacked around Asia for 6 months and my ability to adjust to new challenges in life comes from that. Owing to my diverse upbringing, I embrace all cultures and try to bring it to the design I create. All those life experiences encouraged me to think holistically about the user’s experiences, emotions and needs throughout their interaction with digital products, resulting in more engaging and satisfying user experiences. <br /><br /> In my free time, I love studying Spanish, drawing, hiking and meeting friends.</p>
                        <p className="text-primary mb-6">Nice to meet you!</p>
                        <a href="/Emmy_ALi.pdf"
                            title="Check out my resume" target="_blank" rel="norefferer"
                            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                            className='btn bg-primary overflow-hidden shadow-lg border-primary text-white w-52'>
                            <motion.span
                                initial={{ x: 0 }}
                                animate={isHovered ? { x: -10 } : { x: 0 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className='hover:text-white'
                            >
                                Resume
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
                        </a>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default AboutHero;