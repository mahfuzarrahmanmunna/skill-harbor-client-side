import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ✅ Fix import
import Fallback from '../../../Components/Fallback/Fallback';

const PopularCourse = () => {
    const [popularCourses, setPopularCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopularCourses = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/highest-enrolled-courses`);
                setPopularCourses(data);
            } catch (error) {
                console.error("Error fetching popular courses:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPopularCourses();
    }, []);

    if (loading) {
        return <Fallback />;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto my-16 px-4"
        >
            <h2 className="text-4xl font-bold text-center mb-10 text-primary"> Most Enrolled Courses</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {popularCourses.map((course, i) => (
                    <Fade
                        direction={i % 2 === 0 ? 'left' : 'right'}
                        // delay={i * 100}
                        key={course._id}
                    >
                        <Link to={`/course-details/${course._id}`}>
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: 'spring', stiffness: 200 }}
                                className="bg-white dark:bg-slate-700 rounded-xl border border-transparent dark:border-slate-700 shadow-lg p-6 hover:shadow-xl"
                            >
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="h-48 w-full object-cover rounded-md mb-4"
                                />
                                <h3 className="text-xl font-semibold text-accent mb-2">{course.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                    {course.description?.slice(0, 100)}...
                                </p>
                                <div className="text-sm text-gray-700 dark:text-gray-400 space-y-1">
                                    <p><strong>👤 Instructor:</strong> {course.createdBy}</p>
                                    <p><strong>💸 Fee:</strong> ${course.fee}</p>
                                    <p><strong>👥 Enrolled:</strong> {course.enrolledBy?.length || 0}</p>
                                </div>
                            </motion.div>
                        </Link>
                    </Fade>
                ))}

            </div>
        </motion.div>
    );
};

export default PopularCourse;
