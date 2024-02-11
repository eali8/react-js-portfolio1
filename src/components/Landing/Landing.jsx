import React, { useEffect, useRef, useState } from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import projects from "./data/projects.json";
import ProjectItem from "../Home/Projects/ProjectItem";
import { motion } from "framer-motion";
import Typed from "typed.js";

const Landing = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredProject, setIsHoveredProject] = useState(false);
  const [isHoveredMore, setisHoveredMore] = useState(false);
  // const [isTextTyped, setIsTextTyped] = useState(false); 
  const el = useRef(null);
  const el2 = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["challenges with a novel outlook"], // Strings to display
      // Speed settings, try diffrent values untill I get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      // showCursor: false,
      });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const typed2 = new Typed(el2.current, {
      strings: ["from initial design to final implementation"], // Strings to display
      // Speed settings, try diffrent values untill I get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      // showCursor: false,
    });

    // Destropying
    return () => {
      typed2.destroy();
    };
  }, []);

  const circleOver = () => {
    let circles = document.getElementById("circles");
    let each = circles.getElementsByClassName("circle");
    each[0].style.transform = "translate(100px,-209px)";
    each[1].style.transform = "translate(-100px,-209px)";
  };

  const circleLeave = () => {
    let circles = document.getElementById("circles");
    let each = circles.getElementsByClassName("circle");
    each[0].style.transform = "translate(0,0)";
    each[1].style.transform = "translate(0,0)";
  };

  return (
    <div className="container mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] md:px-0 px-4">
      <div className="grid md:grid-cols-12 gap-4">
        <div className="md:col-span-8 relative">
          <h1 className="md:text-[48px] text-[36px] font-bold leading-24 mt-16">
            Optimizing{" "}
            <span className="strokeText md:text-[48px] text-[36px] font-bold">
              <Link to="/projects" style={{WebkitTextStroke: '1.6px #217F91', textDecoration: 'none' }}>work</Link>
            </span>
            , <br /> crafting emotional{" "}
            <span className="strokeText md:text-[48px] text-[36px] font-bold">
              <Link to='./projects' style={{WebkitTextStroke: '1.6px #217F91', textDecoration: 'none' }}>experiences</Link>
            </span>
            .
          </h1>
          <div className="py-16 text-[18px]">
            <p>
              Approaching <span ref={el}>challenges with a novel outlook</span>
            </p>
            <p className="text-base-300">
              / /{" "}
              <span ref={el2}>
                from initial design to final implementation;
              </span>
            </p>
          </div>
        </div>

        <div className="absolute pt-10px md:relative md:col-span-4 right-0">
        {/* <img className="circle  w-full" src="/images/landing-hero.png" alt="whitedots" 
          style={{animation: 'moveCircles 4s linear infinite'}}
          />
        </div> */}

         {/* Helmet for metadata */}
          <Helmet>
          <title>Landing page - Emmy Ali</title>
          <meta name="landing page" content="Home page - Emmy Ali" />
          </Helmet>
          <div
            className="flex justify-center"
            onMouseOver={circleOver}
            onMouseLeave={circleLeave}
          >
            <img className="-z-10 circle w-1/2 mt-10 -mb-2" src="/images/white_dots.png" alt="whitedots" style={{animation: 'moveCircles 4s linear infinite'}}
          />
          </div>
          <div
            id="circles"
            className="relative flex justify-center -mt-12 -z-10 ml-6"
          >
            <img
              className="circle  transition-all duration-300 w-full"
              src="/images/white_dots.png"
              alt="whitedots" 
              style={{
                animation: 'moveCircles 4s linear infinite',
                animationDelay: '1s', 
              }}
            />
            <img
              className="circle transition-all duration-300 w-full -ml-2"
              src="/images/white_dots.png"
              alt="whitedots"
              style={{
                animation: 'moveCircles 4s linear infinite',
                animationDelay: '2s', 
              }}
            />
          </div>
        </div>

     <div className=" md:col-span-2">
          <Link
            onMouseEnter={() => setIsHoveredProject(true)}
            onMouseLeave={() => setIsHoveredProject(false)}
            to="/projects"
            className="btn bg-primary w-full shadow-lg text-white"
          >
            <motion.span
              initial={{ x: 0 }}
              animate={isHoveredProject ? { x: -10 } : { x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-white"
            >
              Projects
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
          </Link>
        </div>
        <div className="md:col-span-2">
          <Link
            to="mailto:emitooo852@gmail.com"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="btn bg-transparent arrow-hover w-full overflow-hidden shadow-lg border-primary hover:bg-primary hover:text-white"
          >
            <motion.span
              initial={{ x: 0 }}
              animate={isHovered ? { x: -10 } : { x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Work with Me
            </motion.span>
            <span>
              <motion.svg
                initial={{ width: 0, x: 0 }}
                animate={isHovered ? { width: 20, x: -10 } : { width: 0, x: 0 }}
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
          </Link>
        </div>
      </div>

      {/* Feature Product */}
      <div className="grid md:grid-cols-12 gap-4">
        <div className="md:col-span-12">
          <h2 className="mt-36 mb-6 text-3xl font-bold">Featured Projects</h2>
          <div className="grid md:grid-cols-12 gap-6">
            {projects?.map((project, index) => {
              if (index < 3) {
                return (
                  <div key={project._id} className="md:col-span-4">
                    <ProjectItem project={project} index={index + 1} />
                  </div>
                );
              }
            })}
          </div>
          <div className="flex justify-center mt-16">
            <Link
              onMouseEnter={() => setisHoveredMore(true)}
              onMouseLeave={() => setisHoveredMore(false)}
              to="/projects"
              className="btn bg-primary shadow-lg w-52 text-white"
            >
              <motion.span
                initial={{ x: 0 }}
                animate={isHoveredMore ? { x: -10 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-white"
              >
                See More
              </motion.span>
              <span>
                <motion.svg
                  initial={{ width: 0, x: 0 }}
                  animate={
                    isHoveredMore ? { width: 20, x: -10 } : { width: 0, x: 0 }
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;