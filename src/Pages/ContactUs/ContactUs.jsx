import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle, Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import usePageTitle from "../../Hooks/usePageTitle";

const ContactUs = () => {
    usePageTitle();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitStatus("success");
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen relative">
            {/* Sidebar - Vertical on md+ | Top row on mobile */}
            <div className="md:fixed md:left-0 md:top-1/2 md:-translate-y-1/2 z-10 w-full md:w-auto flex justify-center md:block p-4 md:p-0 bg-transparent">
                <motion.div
                    className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 p-3 bg-gray-800 rounded-lg shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <IconLink href="https://wa.me/01314181695" Icon={FaWhatsapp} />
                    <IconLink href="mailto:mdmahfuzarrahmanmunna44@gmail.com" Icon={Mail} />
                    <IconLink href="https://www.facebook.com/profile.php?id=61558381851640" Icon={Facebook} />
                    <IconLink href="https://twitter.com" Icon={Twitter} />
                    <IconLink href="https://linkedin.com/in/md-mahfuzar-rahman-munna-41a342351/" Icon={Linkedin} />
                    <IconLink href="https://github.com/mahfuzarrahmanmunna" Icon={Github} />
                </motion.div>
            </div>

            {/* Main Content */}
            <motion.section
                className="flex-1 md:ml-20 px-4 sm:px-6 md:px-12 py-12 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 sm:p-8">
                    <motion.h1
                        className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Contact Us
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-lg text-center text-gray-600 dark:text-gray-300 mb-8"
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
                            <InputField
                                label="Full Name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                delay={0.5}
                            />
                            <InputField
                                label="Email Address"
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                delay={0.6}
                            />
                            <TextareaField
                                label="Your Message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                delay={0.7}
                            />

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
            </motion.section>
        </div>
    );
};

// Icon Component
const IconLink = ({ href, Icon }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-700 text-white hover:bg-blue-500 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
    >
        <Icon size={24} />
    </motion.a>
);

// Input Field
const InputField = ({ label, id, type = "text", value, onChange, delay }) => (
    <motion.div
        className="flex flex-col space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay }}
    >
        <label htmlFor={id} className="text-gray-800 dark:text-white text-lg">
            {label}
        </label>
        <input
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </motion.div>
);

// Textarea Field
const TextareaField = ({ label, id, value, onChange, delay }) => (
    <motion.div
        className="flex flex-col space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay }}
    >
        <label htmlFor={id} className="text-gray-800 dark:text-white text-lg">
            {label}
        </label>
        <textarea
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
        />
    </motion.div>
);

export default ContactUs;
