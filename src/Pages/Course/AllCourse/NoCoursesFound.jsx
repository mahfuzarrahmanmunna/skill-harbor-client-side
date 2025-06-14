import React from 'react';
import { Link } from 'react-router-dom';
import { Frown } from 'lucide-react';
import { motion } from 'framer-motion';

const NoCoursesFound = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center p-6 min-h-[60vh] bg-gray-100 dark:bg-neutral-800 rounded-2xl shadow-md"
        >
            <Frown className="text-gray-400 dark:text-gray-500 w-16 h-16 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-2">No Courses Found</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
                It seems there are no available courses right now. Please check back later or add a new course.
            </p>

            <div className="flex gap-4">
                <Link to="/add-course">
                    <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all duration-200">
                        Add Course
                    </button>
                </Link>
                <Link to="/">
                    <button className="px-5 py-2 border border-indigo-500 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-neutral-700 rounded-xl transition-all duration-200">
                        Back to Home
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

export default NoCoursesFound;
