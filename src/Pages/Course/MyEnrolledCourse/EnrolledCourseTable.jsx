import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Fade, Slide } from 'react-awesome-reveal';
import Typewriter from 'typewriter-effect';
import { FaBookOpen, FaChalkboardTeacher, FaMoneyBillWave } from 'react-icons/fa';
import CourseTable from './CourseTable';
import { ActivityIcon } from 'lucide-react';

const EnrolledCourseTable = ({ enrolledCoursePromiseApi }) => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        enrolledCoursePromiseApi
            .then(data => setCourses(data))
            .catch(err => console.error("Error loading courses:", err))
            .finally(() => setLoading(false));
    }, [enrolledCoursePromiseApi]);

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Animated Heading */}
            <Fade direction="up" cascade damping={0.1} triggerOnce>
                <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 via-pink-500 to-emerald-500 text-transparent bg-clip-text">
                    <Typewriter
                        options={{
                            strings: ['Your Enrolled Courses', 'Keep Learning & Growing'],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 30,
                        }}
                    />
                </h2>
                <p className="text-center text-gray-500 dark:text-gray-300 text-sm md:text-base mb-10">
                    A snapshot of the courses you’re currently enrolled in.
                </p>
            </Fade>

            {/* Loading Spinner */}
            {loading && (
                <motion.div
                    className="text-center text-lg text-gray-600 dark:text-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Loading your enrolled courses...
                </motion.div>
            )}

            {/* Table Display */}
            {!loading && courses.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="overflow-x-auto rounded-xl shadow-2xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
                >
                    <table className="min-w-full table-auto text-sm">
                        <thead className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white uppercase tracking-wider">
                            <tr>
                                <th className="py-3 px-5 text-left">#</th>
                                <th className="py-3 px-5 text-left"><FaBookOpen className="inline mr-2" />Course</th>
                                <th className="py-3 px-5 text-left"><FaChalkboardTeacher className="inline mr-2" />Instructor</th>
                                <th className="py-3 px-5 text-left"><FaMoneyBillWave className="inline mr-2" />Price</th>
                                <th className="py-3 px-5 text-left"><ActivityIcon className="inline mr-2" />Activity</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700 text-gray-800 dark:text-gray-100">

                            {courses.map((course, index) => (
                                <CourseTable course={course} key={index} index={index} setCourse={setCourses} />
                            ))}

                        </tbody>
                    </table>

                </motion.div>
            )}

            {/* No Courses Message */}
            {!loading && courses.length === 0 && (
                <Fade direction="up" triggerOnce>
                    <div className="text-center text-gray-500 dark:text-gray-300 mt-10">
                        <p>No courses enrolled yet. Explore and start learning today!</p>
                    </div>
                </Fade>
            )}
        </div>
    );
};

export default EnrolledCourseTable;
