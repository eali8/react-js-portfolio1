import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './components/Admin/Partials/SideBar';
import { Toaster } from 'react-hot-toast';

const Admin = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content px-4 py-12">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <SideBar/>
            <Toaster/>
        </div>
    );
};

export default Admin;