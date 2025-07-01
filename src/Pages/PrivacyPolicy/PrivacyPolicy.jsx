import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";

const PrivacyPolicy = () => {
    const [expandedSections, setExpandedSections] = useState({
        personalData: false,
        dataCollection: false,
        cookies: false,
        userRights: false,
        security: false,
    });

    const toggleSection = (section) => {
        setExpandedSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6">
            <motion.div
                className="container mx-auto max-w-4xl bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6">
                    Privacy Policy
                </h1>
                <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
                    Your privacy is important to us. This privacy policy outlines the
                    information we collect, how we use it, and your rights.
                </p>

                <div className="space-y-6">
                    <Section
                        title="Personal Data We Collect"
                        content="We may collect personal information such as your name, email address, and phone number. This data is necessary for registration, communication, and support."
                        expanded={expandedSections.personalData}
                        onToggle={() => toggleSection("personalData")}
                    />
                    <Section
                        title="Data Collection and Usage"
                        content="We collect and use your data to personalize your experience, improve the website, and deliver relevant content. We also use your data for analytical purposes."
                        expanded={expandedSections.dataCollection}
                        onToggle={() => toggleSection("dataCollection")}
                    />
                    <Section
                        title="Cookies and Tracking Technologies"
                        content="We use cookies and similar tracking technologies to enhance your experience and analyze site traffic. You can control cookie settings through your browser."
                        expanded={expandedSections.cookies}
                        onToggle={() => toggleSection("cookies")}
                    />
                    <Section
                        title="Your Rights"
                        content="You have the right to access, update, or delete your personal information. You can also opt-out of certain data collection practices at any time."
                        expanded={expandedSections.userRights}
                        onToggle={() => toggleSection("userRights")}
                    />
                    <Section
                        title="Data Security"
                        content="We take appropriate security measures to protect your personal data. However, no method of transmission or storage is 100% secure, and we cannot guarantee the absolute security of your data."
                        expanded={expandedSections.security}
                        onToggle={() => toggleSection("security")}
                    />
                </div>

                <BackToTopButton />
            </motion.div>
        </section>
    );
};

const Section = ({ title, content, expanded, onToggle }) => {
    return (
        <motion.div
            className="border-b pb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center justify-between cursor-pointer" onClick={onToggle}>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white transition-all duration-300 ease-in-out hover:text-gray-600 dark:hover:text-gray-300">
                    {title}
                </h2>
                <div className="text-gray-600 dark:text-gray-300 transition-transform duration-300">
                    {expanded ? (
                        <ArrowUpCircle size={24} />
                    ) : (
                        <ArrowDownCircle size={24} />
                    )}
                </div>
            </div>
            {expanded && (
                <motion.p
                    className="mt-4 text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    {content}
                </motion.p>
            )}
        </motion.div>
    );
};

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
            <ArrowUpCircle size={30} />
        </motion.div>
    );
};

export default PrivacyPolicy;
