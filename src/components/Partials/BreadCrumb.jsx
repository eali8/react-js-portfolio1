import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumb = () => {
    const location = useLocation();

    return (
        <div className='container mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] md:px-0 px-4'>
            <div className="grid grid-cols-12 gap-4 mt-24">
                <div className="col-span-5 col-start-2">
                    <p>Back To &nbsp;
                        {location.pathname === '/project/charity' && <Link className='text-base-300 hover:text-black ease-in duration-300' to="/project/animation">Web Animations</Link>}
                        {location.pathname === '/project/shutup' && <Link className='text-base-300 hover:text-black ease-in duration-300' to="/project/charity">Children Charity</Link>}
                        {location.pathname === '/project/mind' && <Link className='text-base-300 hover:text-black ease-in duration-300' to="/project/shutup">“Shut UP” App</Link>}
                        {location.pathname === '/project/fufu' && <Link className='text-base-300 hover:text-black ease-in duration-300' to="/project/mind">“Mindfulness Stress Reduction” App</Link>}
                        {location.pathname === '/project/prototype' && <Link className='text-base-300 hover:text-black ease-in duration-300' to="/project/fufu">“Fufu Bakery” Website</Link>}
                        {location.pathname === '/project/animation' && <Link className='text-base-300 hover:text-black ease-in duration-300' to="/project/prototype">Prototyping and Experiments</Link>}
                    </p>
                </div>
                <div className="col-span-5 col-start-7">
                    <p className='text-right'>Read &nbsp;
                        {location.pathname === '/project/charity' && <Link className='text-base-300 hover:text-black ease-in duration-300' to="/project/shutup">“Shut UP” App</Link>}
                        {location.pathname === '/project/shutup' && <Link className='text-base-300 hover:text-black ease-in duration-300' to="/project/mind">“Mindfulness Stress Reduction” App</Link>}
                        {location.pathname === '/project/mind' && <Link className='text-base-300 hover:text-black ease-in duration-300' to="/project/fufu">“Fufu Bakery” Website</Link>}
                        {location.pathname === '/project/fufu' && <Link className='text-base-300 hover:text-black ease-in duration-300' to="/project/prototype">Prototyping and Experiments</Link>}
                        {location.pathname === '/project/prototype' && <Link className='text-base-300 hover:text-black ease-in duration-300' to="/project/animation">Web Animations</Link>}
                        {location.pathname === '/project/animation' && <Link className='text-base-300 hover:text-black ease-in duration-300' to="/project/charity">Children Charity</Link>}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;