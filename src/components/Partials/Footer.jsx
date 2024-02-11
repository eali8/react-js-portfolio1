
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import Wave from '../Animation/Wave';

const Footer = () => {
    const date = new Date();
    const location = useLocation();

    return (
        <footer className="footer footer-center p-4 text-base-content relative overflow-hidden mt-24">
            <div>
                {location.pathname.includes('/project/') || location.pathname === '/' ||
                    <>
                        <p className='font-bold'>Let's Connect</p>
                        <p className='text-center'>Feel free to reach out for collaboration or just a friendly hello <span className='bg-[url(/images/smile.png)] bg-cover w-6 h-6 inline-block -mb-2' alt='Smile Icon'></span></p>
                        <p><Link to='mailto:emitooo852@gmail.com' className='text-primary'>emitooo852@gmail.com</Link></p>
                    </>
                }
                <ul className='list-none flex'>
                    <li className='px-2 rounded-circle bg-base-400'><Link to="https://www.facebook.com/emaslarova" target='_blank'> <img src="/images/facebook.svg" alt="facebook" /> </Link></li>
                    <li className='px-2 rounded-circle bg-base-400'><Link to="https://www.instagram.com/missevrem/" target='_blank'> <img src="/images/instagram.svg" alt="instagram" /> </Link></li>
                    <li className='px-2 rounded-circle bg-base-400'><Link to="https://www.linkedin.com/in/emine-ali/" target='_blank'> <img src="/images/linkedin.svg" alt="linkedin" /> </Link></li>
                </ul>
                {location.pathname.includes('/project/') || location.pathname === '/' ? <p>Hand coded with <i><FiHeart className='inline text-red-500' /></i> | Copyright &copy; {date.getFullYear()} Emmy Ali</p>:''}
                {location.pathname.includes('/project/') || location.pathname === '/' ? '':<p>Copyright &copy; {date.getFullYear()} Emmy Ali</p>}
            </div>
            <Wave right={1} />
        </footer>
    );
};

export default Footer;