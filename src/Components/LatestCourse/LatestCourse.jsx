import React, { useEffect, useState } from 'react';
import CourseCard from '../../Pages/Course/AllCourse/CourseCard';
import { motion } from 'framer-motion';
import NotLatest from './NotLatest';
import { Toaster } from 'react-hot-toast';
import Fallback from '../Fallback/Fallback';

const LatestCourse = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/latest-course`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data); // Check the API response
                setCourses(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching latest courses:", err);
                setLoading(false);
            });
    }, []);

    // Framer Motion variants
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section>
            {/* Gradient Animated Title */}
            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-pink-500 to-emerald-500"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                style={{ backgroundSize: '200% 200%' }}
            >
                ✨ Latest Courses
            </motion.h1>

            {/* Subheading */}
            <motion.p
                className="text-center text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-lg mb-12"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Discover our freshest content curated by top experts to boost your learning journey.
            </motion.p>

            <Toaster />

            {/* Courses Grid */}
            {loading ? (
                <Fallback />
            ) : courses.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <NotLatest />
                </motion.div>
            ) : (
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {courses.map((course, idx) => (
                        <motion.div
                            key={course._id || idx}
                            variants={cardVariants}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            <CourseCard course={course} index={idx} />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </section>
    );
};

export default LatestCourse;
