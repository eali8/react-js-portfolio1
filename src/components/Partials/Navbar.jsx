import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import Reveal from '../Animation/Reveal';

const Navbar = () => {
    const location = useLocation();
    // const [isNameVisible, setIsNameVisible] = useState(false);

    return (
        <div className="container mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px]">
            <div className="columns-12 navbar bg-base-100" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                <div className="columns-6 navbar-start">
                    <Reveal>
                        <div className="flex justify-center items-center py-2"
                        // onMouseEnter={() => setIsNameVisible(true)}
                        // onMouseLeave={() => setIsNameVisible(false)}
                        >
                            <Link to='/' className="logo-container" title="Emmy Ali">
                                <img width={60} src="/images/Logo.svg" className={`rounded-lg cursor-pointer`} />
                            </Link>
                        </div>
                    </Reveal>
                </div>
                <div className="columns-6 navbar-end">
                    <MobileMenu />
                    <ul className="menu menu-horizontal px-1 hidden lg:flex text-lg uppercase">
                        <li><Link to='/projects'className={`relative after:ease-in after:duration-300 after:right-1/2 after:translate-x-1/2 hover:after:w-3/4 after:h-1/4 after:bg-[#EAFDF8] after:absolute after:bottom-0 hover:text-primary focus:bg-transparent hover:bg-transparent ${(location.pathname.includes('/project')) ? 'text-primary focus:text-primary' : 'after:w-0'}`}>Projects</Link></li>
                        <li><Link to='/about'className={`relative after:ease-in after:duration-300 after:right-1/2 after:translate-x-1/2 hover:after:w-3/4 after:h-1/4 after:bg-[#217F91] after:absolute after:bottom-0 z-20 hover:text-primary focus:bg-transparent hover:bg-transparent ${location.pathname === '/about' ? 'text-primary focus:text-primary' : 'after:w-0'}`}>About</Link></li>
                        <li><a href='mailto:emitooo852@gmail.com'className={`relative after:ease-in after:duration-300 after:right-1/2 after:translate-x-1/2 hover:after:w-3/4 after:h-1/4 after:bg-[#FFC759] after:absolute after:bottom-0 z-20 hover:text-primary focus:bg-transparent hover:bg-transparent ${(location.pathname === '/contact') ? 'text-primary focus:text-primary' : 'after:w-0'}`}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;