import React from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';


const StudentSuccess = () => {
    return (
        <motion.section
            className="my-20 max-w-6xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-10">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {[
                    {
                        name: "Tania Rahman",
                        story: "After completing the Full-Stack Web Dev course, I got my first internship at a tech startup!",
                    },
                    {
                        name: "Rashed Ahmed",
                        story: "CareerCode's MERN course helped me build a real-world portfolio and get freelance clients.",
                    },
                ].map((item, idx) => (
                    <Fade key={idx}
                        direction='up'
                        delay={idx * 100}
                    >
                        <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border dark:border-neutral-700 shadow-md">
                            <p className="italic text-gray-600 dark:text-gray-300 mb-2">"{item.story}"</p>
                            <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">– {item.name}</h4>
                        </div>
                    </Fade>
                ))}
            </div>
        </motion.section>
    );
};

export default StudentSuccess;