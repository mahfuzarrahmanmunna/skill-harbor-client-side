import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const CourseCard = ({ course, index = 0 }) => {
    const { image, title, description = "No description available." } = course;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
        >
            <div className="max-w-sm p-6 rounded-2xl shadow-xl bg-white/80 dark:bg-slate-900 dark:text-white backdrop-blur-md transition-all duration-300 hover:shadow-2xl border border-slate-200 dark:border-slate-700">
                <img
                    src={image}
                    alt={title}
                    className="object-cover object-center w-full rounded-xl h-52 mb-4 shadow-md"
                />

                <div className="mb-3">
                    <span className="block text-xs font-semibold tracking-widest uppercase text-accent">Featured</span>

                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                        <Typewriter
                            options={{
                                strings: [title, ""],
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                deleteSpeed: 25,
                            }}
                        />
                    </h2>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {description?.slice(0, 200)}...
                </p>
            </div>
        </motion.div>
    );
};

export default CourseCard;
