import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion"

const Wave = ({ right }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();
    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

    return (
        <div className="absolute top-0">
            <motion.div ref={ref} className={`w-96 h-96 opacity-70 absolute ${right ? "right-0" : "left-0"} z-0 bg-[url('/images/sprinckles.png')]`}
                variants={{
                    hidden: { scale: 1, translateY: [0, 0, 0], translateX: [0, 0, 0] },
                    visible: { scale: [1, 0.5, 1], translateY: [0, -10, 0], translateX: [0, -20, 0], rotate: -360 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
            >
            </motion.div>
            <motion.div ref={ref} className={`w-96 h-96 opacity-70 absolute ${right ? "right-0" : "left-0"} z-0 bg-[url('/images/sprinckles.png')]`}
             alt="Sprinckles for decoration"
                variants={{
                    hidden: { scale: 1, translateY: [0, 0, 0], translateX: [0, 0, 0] },
                    visible: { scale: [0.8, 0.3, 0.8], translateY: [0, -10, 0], translateX: [0, -20, 0], rotate: 360 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
            >
            </motion.div>
        </div>
    );
};

export default Wave;