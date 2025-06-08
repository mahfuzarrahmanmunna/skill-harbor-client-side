import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const RootLayouts = () => {
    return (
        <div className="font-sans text-base text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-1 bg-gray-100 dark:bg-neutral-800 transition-colors duration-300">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default RootLayouts;