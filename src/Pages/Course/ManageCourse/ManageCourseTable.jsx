import React, { use } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Pencil, Trash2 } from 'lucide-react';
import { Link } from 'react-router';

const ManageCourseTable = ({ manageCoursePromise }) => {
    const courses = use(manageCoursePromise);

    return (
        <div className="max-w-6xl mx-auto my-16 px-4">
            {/* Title with Typewriter */}
            <motion.h2
                className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Typewriter
                    options={{
                        strings: ['Manage Your Courses', 'Edit or Remove Courses'],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 30,
                    }}
                />
            </motion.h2>

            {/* Table Container */}
            <motion.div
                className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <table className="min-w-full table text-sm text-left">
                    {/* Table Header */}
                    <thead className="bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-200 uppercase text-xs tracking-wider">
                        <tr>
                            <th className="p-4">#</th>
                            <th className="p-4">Title</th>
                            <th className="p-4">Description</th>
                            <th className="p-4">Action</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-gray-100 dark:divide-neutral-700">
                        {courses.map((course, index) => (
                            <motion.tr
                                key={index}
                                className="hover:bg-gray-50 dark:hover:bg-neutral-700 transition"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <td className="p-4 font-medium text-gray-800 dark:text-gray-100">{index + 1}</td>
                                <td className="p-4 text-gray-700 dark:text-gray-200">{course?.title}</td>
                                <td className="p-4 text-gray-600 dark:text-gray-400 max-w-xs truncate">
                                    {course?.description}
                                </td>
                                <td className="p-4 flex gap-3">
                                    <Link to={`/edit-my-posted-course/${course?._id}`}
                                        className="text-indigo-600 btn btn-xs btn-outline hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition duration-200"
                                        title="Edit"
                                    >
                                        <Pencil size={18} />
                                    </Link>
                                    <button
                                        className="text-red-600 btn btn-xs btn-outline hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition duration-200"
                                        title="Delete"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>
        </div>
    );
};

export default ManageCourseTable;
