import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Reveal = ({ children, reverse }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
            slideControls.start('visible')
        }
    }, [controls, isInView])

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { x: reverse ? '100vw' : '-100vw' },
                    visible: { x: 0 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            {/* {
                !reverse &&
                <motion.div className='absolute top-0 left-0 right-0 bottom-0 bg-primary'
                    variants={{
                        hidden: { left: 0 },
                        visible: { left: '100%' }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.5, ease: 'easeIn' }}
                >
                    {children}
                </motion.div>
            } */}
        </div>
    );
};

export default Reveal;