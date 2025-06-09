import React from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';

const Instructor = () => {
    return (
        < motion.section
            className="my-20 max-w-6xl mx-auto px-4"
            initial={{ opacity: 0 }
            }
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-10">Meet Our Top Instructors</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <Fade
                    direction='up'
                    delay={100}
                >
                    <div className="p-4 bg-white dark:bg-neutral-900 rounded-xl shadow-md border dark:border-neutral-700 text-center">
                        <img src={`https://i.pravatar.cc/150?img=12`} alt="Instructor" className="mx-auto w-24 h-24 rounded-full mb-4" />
                        <h4 className="font-semibold text-lg">Mahfuzar Rahman Munna</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-300">Full-Stack Developer | 8+ years experience</p>
                    </div>
                </Fade>
                <Fade
                    direction='up'
                    delay={200}
                >
                    <div className="p-4 bg-white dark:bg-neutral-900 rounded-xl shadow-md border dark:border-neutral-700 text-center">
                        <img src={`https://i.pravatar.cc/150?img=11`} alt="Instructor" className="mx-auto w-24 h-24 rounded-full mb-4" />
                        <h4 className="font-semibold text-lg">Abdur Rahman</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-300">AI Developer | 5+ years experience</p>
                    </div>
                </Fade>
                <Fade
                    direction='up'
                    delay={300}
                >
                    <div className="p-4 bg-white dark:bg-neutral-900 rounded-xl shadow-md border dark:border-neutral-700 text-center">
                        <img src={`https://i.pravatar.cc/150?img=11`} alt="Instructor" className="mx-auto w-24 h-24 rounded-full mb-4" />
                        <h4 className="font-semibold text-lg">Abdullah Al</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-300">Backend Developer | 6+ years experience</p>
                    </div>
                </Fade>
            </div>
        </motion.section >
    );
};

export default Instructor;