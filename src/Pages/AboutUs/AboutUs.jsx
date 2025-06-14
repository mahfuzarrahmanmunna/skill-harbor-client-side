import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Testimonials from "../Testimonials/Testimonials";
import usePageTitle from "../../Hooks/usePageTitle";

const AboutUs = () => {
    usePageTitle()
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-neutral-900 text-gray-800 dark:text-white px-4 py-10">
            <div className="max-w-5xl mx-auto">
                <Fade cascade>
                    <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600 dark:text-indigo-400">
                        About Us
                    </h1>
                </Fade>

                <motion.p
                    className="text-lg mb-6 leading-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Welcome to <span className="font-semibold">Skill Harbor</span> — a platform dedicated to empowering learners and instructors alike through modern, streamlined course management. Whether you're here to master new skills or to share your expertise with others, we provide a seamless and secure environment for your educational journey.
                </motion.p>

                <motion.div
                    className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg mb-8"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                        🎯 Our Mission
                    </h2>
                    <p className="leading-7">
                        Our mission is to break barriers in education by making professional and creative courses accessible to everyone — students, freelancers, and working professionals. We aim to promote lifelong learning, self-growth, and the freedom to teach or learn anytime, anywhere.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg mb-8"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                        ⚙️ What We Offer
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>📚 A wide range of curated and instructor-created courses</li>
                        <li>🔒 Secure enrollment system with seat tracking</li>
                        <li>🧑‍🏫 Tools for instructors to manage their own courses</li>
                        <li>📊 Dashboard for students and teachers</li>
                        <li>🌙 Light and dark theme for better accessibility</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                        👨‍💻 About the Developer
                    </h2>
                    <p className="leading-7">
                        This platform was created by <span className="font-medium">Md: Mahfuzar Rahman Munna</span>, a passionate web developer and diploma student with a dream to pursue CSE in Japan through the MEXT Scholarship. With limited resources but unlimited determination, he built this platform to showcase practical skills and bring value to learners across the globe.
                    </p>
                </motion.div>
            </div>

            <Testimonials />
        </div>
    );
};

export default AboutUs;
