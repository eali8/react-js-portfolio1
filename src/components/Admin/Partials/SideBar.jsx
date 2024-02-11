import React, { useContext } from 'react';
import { FaFire, FaUserCircle, FaFileAlt, FaLayerGroup, FaUpload, FaCogs, FaPowerOff } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const SideBar = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    }
    return (
        <div className="drawer-side">
            <div className='py-4 bg-base-200'>
                <div className="avatar flex justify-center">
                    <div className="w-24 rounded-full">
                        <img src="/images/author.png" alt='Emmy Ali-Profile' />
                    </div>
                </div>
                <h2 className='font-bold text-2xl mb-2 text-center'>Emmy Ali</h2>
                <p className='font-bold text-xl mb-2 text-center'>UI UX Designer</p>
                <div className="mx-5 divider m-0"></div>
            </div>
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <div className="min-h-full bg-base-200">
                <div className="bg-white ms-12 drop-shadow-xl overflow-hidden rounded-xl rounded-r-none">
                    <ul className="menu m-1 mr-0 w-80 border text-base-content rounded-xl">
                        {/* <li className='menu-title'>My Menus</li> */}
                        <li><Link to='/admin' className='font-semibold py-3 text-md border-b ps-2 mx-4 rounded-none'> <FaFire />Dashboard</Link></li>
                        <li><Link to='/admin/profile' className='font-semibold py-3 text-md border-b ps-2 mx-4 rounded-none'> <FaUserCircle /> My Profile</Link></li>
                        <li><Link to='/admin/categories' className='font-semibold py-3 text-md border-b ps-2 mx-4 rounded-none'><FaFileAlt /> Categories</Link></li>
                        <li><Link to='/admin/projects' className='font-semibold py-3 text-md border-b ps-2 mx-4 rounded-none'><FaLayerGroup />Projects</Link></li>
                        <li><Link to='/admin/uploads' className='font-semibold py-3 text-md border-b ps-2 mx-4 rounded-none'><FaUpload />Uploads</Link></li>
                        <li><Link to='/admin/settings' className='font-semibold py-3 text-md border-b ps-2 mx-4 rounded-none'><FaCogs />Page Settings</Link></li>
                        <li><button onClick={handleLogout} className='font-semibold py-3 text-md border-b ps-2 mx-4 rounded-none'><FaPowerOff />LogOut</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;