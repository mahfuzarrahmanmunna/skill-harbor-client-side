import React, { useEffect, useState } from 'react';
import CourseCard from '../../Pages/Course/AllCourse/CourseCard';
import { motion } from 'framer-motion';
import NotLatest from './NotLatest';
import { Fade } from 'react-awesome-reveal';

const LatestCourse = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/latest-course`)
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((err) => console.error("Error fetching latest courses:", err));
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            {/* Animated Heading */}
            <motion.h1
                className="text-4xl sm:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-pink-500 to-emerald-500"
                animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                style={{ backgroundSize: '200% 200%' }}
            >
                ✨ Latest Courses
            </motion.h1>

            {/* Subheading */}
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
                Discover our most recent content curated by top experts to boost your learning journey.
            </p>

            {/* No Courses */}
            <div>
                {courses.length === 0 ? (
                    <NotLatest />
                ) : (
                    // Cards Grid with Staggered Animation
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {courses.map((course, idx) => (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                                <Fade
                                    direction='up'
                                    delay={idx * 100}
                                >
                                    <CourseCard course={course} index={idx} />
                                </Fade>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default LatestCourse;
