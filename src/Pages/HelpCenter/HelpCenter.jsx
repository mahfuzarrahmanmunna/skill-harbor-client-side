import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const HelpCenter = () => {
    const [expandedFAQ, setExpandedFAQ] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const faqs = [
        { id: 1, question: "How do I reset my password?", answer: "To reset your password, go to settings and click on 'Forgot Password'. Follow the instructions to reset it." },
        { id: 2, question: "How can I contact support?", answer: "You can contact our support team through the 'Contact Us' page, or email us directly at support@company.com." },
        { id: 3, question: "What is the refund policy?", answer: "Refunds are processed within 7-10 business days. Please refer to our refund policy page for more details." },
        { id: 4, question: "How do I change my subscription plan?", answer: "To change your plan, go to 'Account Settings' and select 'Subscription'. From there, you can upgrade or downgrade your plan." },
        { id: 5, question: "Where can I find the user manual?", answer: "The user manual is available in the 'Resources' section on your dashboard. You can download it from there." },
    ];

    // Handle search input change
    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    // Filter FAQs based on search query
    const filteredFAQs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery)
    );

    // Toggle expanded FAQ
    const toggleFAQ = (id) => {
        setExpandedFAQ(expandedFAQ === id ? null : id);
    };

    return (
        <motion.section
            className="min-h-screen py-12 px-6"
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
                    Help Center
                </motion.h1>

                <motion.p
                    className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Find answers to frequently asked questions or search for help on specific topics.
                </motion.p>

                {/* Search Bar */}
                <motion.input
                    type="text"
                    placeholder="Search for help..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full p-3 mb-6 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                />

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {filteredFAQs.map((faq) => (
                        <motion.div
                            key={faq.id}
                            className="border-b pb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(faq.id)}
                            >
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{faq.question}</h2>
                                <div className="text-gray-600 dark:text-gray-300">
                                    {expandedFAQ === faq.id ? (
                                        <ChevronUp size={24} />
                                    ) : (
                                        <ChevronDown size={24} />
                                    )}
                                </div>
                            </div>
                            {expandedFAQ === faq.id && (
                                <motion.p
                                    className="mt-4 text-gray-700 dark:text-gray-300"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default HelpCenter;
