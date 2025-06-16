import React from 'react';
import usePageTitle from '../../../Hooks/usePageTitle';
import { useLoaderData } from 'react-router';
import CourseCard from './CourseCard';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import NoCourseFound from '../ManageCourse/NoCourseFound';
import { Toaster } from 'react-hot-toast';

const AllCourse = () => {
    usePageTitle();
    const courses = useLoaderData();

    if (courses.length <= 0) return <NoCourseFound />

    return (
        <div className='lg:px-12 xl:px-24 md:px-12 px-6 py-12'>
            {/* Typewriter Header */}
            <motion.h1
                className='text-3xl md:text-4xl font-bold text-accent text-center mb-10'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Typewriter
                    words={['Explore All Courses', 'Find Your Next Skill', 'Start Learning Today!']}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
            </motion.h1>
            <Toaster />

            {/* Course Grid with Animation */}
            <Fade cascade damping={0.1} triggerOnce>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {courses?.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <CourseCard course={course} index={index} />
                        </motion.div>
                    ))}
                </div>
            </Fade>
        </div>
    );
};

export default AllCourse;
