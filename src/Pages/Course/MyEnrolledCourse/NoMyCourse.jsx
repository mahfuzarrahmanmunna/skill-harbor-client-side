import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { BiLeftArrow } from 'react-icons/bi';

const NoMyCourse = () => {
    return (
        <Fade direction="up" triggerOnce>
            <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
                    <Typewriter
                        options={{
                            strings: [
                                "No courses enrolled yet.",
                                "Your learning journey starts here!",
                                "Explore new skills today!",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 30
                        }}
                    />
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Discover courses that match your passion and ambition.
                </p>
                <Link to="/all-course">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary btn-wide"
                    >
                        <BiLeftArrow />  Browse Courses
                    </motion.button>
                </Link>
            </motion.div>
        </Fade>
    );
};

export default NoMyCourse;
