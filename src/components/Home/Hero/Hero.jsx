    import React, { useEffect, useRef, useState } from 'react';
    import { motion, useScroll, useTransform } from "framer-motion";
    import { Link } from 'react-router-dom';  
    import Reveal from '../../Animation/Reveal';
    import Wave from '../../Animation/Wave';
    import Typed from "typed.js";

    const Hero = ({scrollToTarget}) => {
        const itemRef = useRef(null);
        const el = useRef(null);
        const [isHoveredProject, setIsHoveredProjects] = useState(false);
        const [isTextTyped, setIsTyped] = useState(false); 

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['User Experience Designer', 'Front End Developer', 'Product Designer'],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            // loop: true, 
            onComplete: () => {
                if (!isTextTyped){
                    setIsTextTyped(true);
                } else {
                    setIsTextTyped(false); 
                }
            }, 
            showCursor: false, 
            });

    return () => {
        typed.destroy();
        };
        }, [setIsTyped]);

    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ['start end', 'end start']
        });

    const xTransform = useTransform(scrollYProgress, [0, 0.1, 1], ['-150vw', 0, 0]);

    return (
    <div ref={itemRef} className="grid grid-cols-12 gap-4 z-10 relative mb-16 md:mt-16">
    <Wave />
    <div className="col-span-12 md:col-span-4 md:col-start-9 md:order-2">
    <Reveal reverse={1}>
        <motion.img src={`/images/author.png`} className="max-w-full mx-auto" initial={{ scale: 1 }} whileHover={{ scale: 1.01 }} />
    </Reveal>
    </div>
    <div className='md:col-span-7 col-span-12'>
    <Reveal>
        <h1 className="text-5xl font-bold text-primary font-[inter]">Hi! <br /> I’m Emmy Ali, <span ref={el} className='text-5xl font-bold'></span></h1>
        <p className="py-6">I enjoy creating experiences that make an emotional connection. With a background in Marketing and Finance, I am using my analytical skills to create user-centered experiences that blend aesthetic appeal with functionality. My passion extends to coding and design, where I relish the creative process of bringing ideas to life. </p>

        <button onClick={scrollToTarget} className='btn bg-primary shadow-lg text-white p-0 w-[320px] h-[48px] flex items-center justify-center flex-col' 
        onMouseEnter={() => setIsHoveredProjects(true)} 
        onMouseLeave={() => setIsHoveredProjects(false)}>

            <motion.span
                initial={{ x: 0 }}
                animate={isHoveredProject ? { x: -10 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-white"
            >
                Explore My Projects
            </motion.span>
            
            <span>
            <motion.svg
                initial={{ width: 0, x: 0 }}
                animate={
                isHoveredProject ? { width: 20, x: -10 } : { width: 0, x: 0 }
                }
                transition={{ type: "spring", stiffness: 300 }}
                width="130"
                height="36"
                viewBox="0 0 130 36"
                fill="none"
                stroke-width="40"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M130 18L100 0.679492V35.3205L130 18ZM0 21H103V15H0V21Z"
                fill="white"
                />
            </motion.svg>
            </span>
       
    <div className="flex-justify-center mt-16"></div>
    </button>
    </Reveal>
    </div>
    </div>

    );
    };

    export default Hero;
