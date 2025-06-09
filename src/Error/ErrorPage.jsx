import React from 'react';
import { Link } from 'react-router';
import { BiLeftArrow } from 'react-icons/bi';
import { Fade } from 'react-awesome-reveal';

const ErrorPage = () => {
    return (
        <div className='flex  min-h-screen bg-gray-100 dark:bg-gray-700 flex-col gap-6 justify-center items-center px-4'>
            <Fade direction='down'>
                <iframe className='h-72 lg:w-96 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-xl' src="https://lottie.host/embed/d11c368f-38db-4aa3-98cc-3a90c49612ee/B6IzCirQw7.lottie"></iframe>
            </Fade>
            <Fade direction='up'>
                <Link to='/' className='btn btn-primary btn-outline'>
                    <BiLeftArrow />  Go Back To Home
                </Link>
            </Fade>
        </div>
    );
};

export default ErrorPage;