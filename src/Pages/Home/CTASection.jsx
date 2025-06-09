import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const CTASection = () => {
    // Define an array of gradient classes
    // const gradients = [
    //     'from-indigo-500 via-purple-500 to-pink-500',
    //     'from-green-400 via-blue-500 to-purple-600',
    //     'from-amber-500 via-orange-600 to-yellow-500',
    //     'from-rose-500 via-red-400 to-pink-400',
    //     'from-cyan-500 via-blue-500 to-indigo-600',
    // ];

    // // Use useMemo to avoid new random gradient every re-render
    // const randomGradient = useMemo(() => {
    //     const index = Math.floor(Math.random() * gradients.length);
    //     return gradients[index];
    // }, []);

    return (
        <motion.section
            className={`my-24 mx-6 text-white py-12 px-6 text-center rounded-3xl shadow-xl max-w-6xl md:mx-12 lg:mx-auto bg-gradient-to-r  from-green-400 via-blue-500 to-purple-600`}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Career Today</h2>
            <p className="mb-6">Join thousands of students transforming their careers with CareerCode.</p>
            <Link to="/all-course" className="btn btn-lg bg-white text-black hover:bg-slate-200 font-semibold transition-all">
                Browse Courses
            </Link>
        </motion.section>
    );
};

export default CTASection;
