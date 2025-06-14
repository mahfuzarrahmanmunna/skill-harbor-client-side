import React from 'react';
import { motion } from "motion/react"


const WhyChoseUs = () => {
    return (
        <div>
            {/* Why Choose Us Section */}
            <motion.section
                className="my-20 max-w-6xl mx-auto px-4 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                    Why Choose SkillHarbor?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-10">
                    Empowering learners with top-tier education, guided by experts and powered by modern tech.
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    {[
                        {
                            title: "Industry Expert Instructors",
                            desc: "Learn from professionals who have real-world experience in top tech companies.",
                        },
                        {
                            title: "Flexible Learning",
                            desc: "Access your courses anytime, anywhere. Self-paced for modern life.",
                        },
                        {
                            title: "Certification & Resume Builder",
                            desc: "Get certified and boost your resume to impress recruiters and land your dream job.",
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 rounded-2xl shadow-md bg-white dark:bg-neutral-900 border dark:border-neutral-700">
                            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-300">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default WhyChoseUs;