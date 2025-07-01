import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitStatus, setSubmitStatus] = useState(null);

    // Handle form changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just set the submit status to "success"
        setSubmitStatus("success");
        // You can also handle sending the form data to a backend here
    };

    return (
        <motion.section
            className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto max-w-4xl bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8">
                <motion.h1
                    className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Contact Us
                </motion.h1>

                <motion.p
                    className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    We would love to hear from you! Fill out the form below to get in touch.
                </motion.p>

                {submitStatus === "success" ? (
                    <motion.div
                        className="text-center p-4 bg-green-100 text-green-800 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <p>Thank you for reaching out! We will get back to you soon.</p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div
                            className="flex flex-col space-y-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <label className="text-gray-800 dark:text-white text-lg" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </motion.div>

                        <motion.div
                            className="flex flex-col space-y-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                        >
                            <label className="text-gray-800 dark:text-white text-lg" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </motion.div>

                        <motion.div
                            className="flex flex-col space-y-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.7 }}
                        >
                            <label className="text-gray-800 dark:text-white text-lg" htmlFor="message">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="5"
                            />
                        </motion.div>

                        <motion.button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 p-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                            <ArrowRightCircle size={20} />
                        </motion.button>
                    </form>
                )}
            </div>

            {/* Back to Top Button */}
            <BackToTopButton />
        </motion.section>
    );
};

// Back to Top Button Component
const BackToTopButton = () => {
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.div
            className="fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full cursor-pointer shadow-lg hover:bg-blue-600 transition-all"
            whileHover={{ scale: 1.1 }}
            onClick={handleScroll}
        >
            <ArrowRightCircle size={30} />
        </motion.div>
    );
};

export default ContactUs;
