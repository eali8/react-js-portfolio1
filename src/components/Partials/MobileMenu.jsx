import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useCycle } from 'framer-motion';

const sidebar = {
    open: (height = document.documentElement.scrollHeight) => ({
        clipPath: `circle(${height * 2 + 200}px at 300px 26px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(0 at 300px 26px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const ul = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="#217F91"
        strokeLinecap="round"
        {...props}
    />
);

const MobileMenu = () => {
    const containerRef = useRef(null);
    const [isOpen, toggleOpen] = useCycle(false, true);
    
    return (
        <motion.div className="w-80 z-20 lg:hidden"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={containerRef}
        >
            <label className="relative block w-full z-30 lg:hidden">
                <button onClick={() => toggleOpen()} className='absolute bottom-1/2 right-2 translate-y-1/2'>
                    <svg width="23" height="23" viewBox="0 0 23 23">
                        <Path
                            variants={{
                                closed: { d: "M 2 2.5 L 20 2.5" },
                                open: { d: "M 3 16.5 L 17 2.5" }
                            }}
                        />
                        <Path
                            d="M 2 9.423 L 20 9.423"
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                            }}
                            transition={{ duration: 0.1 }}
                        />
                        <Path
                            variants={{
                                closed: { d: "M 10 16.346 L 20 16.346" },
                                open: { d: "M 3 2.5 L 17 16.346" }
                            }}
                        />
                    </svg>
                </button>
            </label>
            <motion.div className="fixed top-0 right-0 bottom-0 w-full bg-base-100 shadow-xl lg:hidden" variants={sidebar} />
            <motion.ul className="absolute right-0 w-full menu menu-lg dropdown-content mt-3 z-[1] p-2 rounded-box"
                initial={{ x: '-100vw' }}
                variants={ul}
                animate={isOpen ? { x: 0 } : { x: '-100vw' }}
                transition={{ delay: 0.5, duration: 0.25 }}
            >
                <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to='/projects' onClick={() => toggleOpen()} className='hover:text-primary text-primary text-center block uppercase'>Projects</Link>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to='/about' onClick={() => toggleOpen()} className='hover:text-primary text-center block uppercase'>About</Link>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to='mailto:emitooo852@gmail.com' onClick={() => toggleOpen()} className='hover:text-primary text-center block uppercase'>Contact</Link>
                </motion.li>
            </motion.ul>
        </motion.div>
    );
};

export default MobileMenu;