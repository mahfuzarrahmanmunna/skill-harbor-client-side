import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const RootLayouts = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-361px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default RootLayouts;