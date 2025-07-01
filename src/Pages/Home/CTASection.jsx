import React, { useMemo } from 'react';
import { motion } from "motion/react"
import { Link } from 'react-router';

const CTASection = () => {

    return (
        <motion.section
            className={` text-white py-12 px-6 text-center rounded-3xl shadow-xl bg-gradient-to-r  from-green-400 via-blue-500 to-purple-600`}
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
