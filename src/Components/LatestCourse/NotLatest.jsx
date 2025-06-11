import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from "motion/react"


const NotLatest = () => {
    return (
        <motion.div
            className="border-2 border-dashed rounded-2xl p-10 text-center shadow-md bg-white dark:bg-neutral-800 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 2.2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
            }}
        >
            <div className="flex justify-center">
                <Sparkles size={48} className="text-indigo-500 dark:text-indigo-400 mb-4 animate-pulse" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                No Latest Courses Found
            </h2>
            <p className="text-gray-500 dark:text-gray-300 max-w-md mx-auto">
                We’re currently updating our catalog. Check back soon or explore other categories!
            </p>
        </motion.div>
    );
};

export default NotLatest;