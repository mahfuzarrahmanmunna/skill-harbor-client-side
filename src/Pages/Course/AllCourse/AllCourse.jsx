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

    if (!courses || courses.length === 0) return <NoCourseFound />;

    return (
        <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-12 bg-gradient-to-b from-white to-gray-50 dark:from-slate-800 dark:to-slate-800 min-h-screen">
            {/* Header */}
            <motion.h1
                className="text-3xl md:text-4xl font-bold text-accent text-center mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Typewriter
                    words={['Explore All Courses', 'Find Your Next Skill', 'Start Learning Today!']}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
            </motion.h1>

            <Toaster position="top-center" />

            {/* Course Grid */}
            <Fade cascade damping={0.1} triggerOnce>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {courses.map((course, index) => (
                        <CourseCard key={course._id || index} course={course} index={index} />
                    ))}
                </div>
            </Fade>
        </div>
    );
};

export default AllCourse;
