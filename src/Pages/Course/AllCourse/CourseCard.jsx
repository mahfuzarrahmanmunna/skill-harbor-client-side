import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router';
import { Fade } from 'react-awesome-reveal';

const CourseCard = ({ course, index = 0 }) => {
    const { image, title, tags = [], description = "No description available.", _id } = course || {};

    return (
        <Fade className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1], // Smooth ease
                }}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
            >
                <div className="flex flex-col justify-between h-[500px] max-w-sm p-6 rounded-2xl shadow-md bg-white/90 dark:bg-slate-800 dark:text-white backdrop-blur-sm border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl">

                    {/* Image */}
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-52 object-cover object-center rounded-xl shadow-sm mb-4"
                    />

                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap text-xs font-semibold uppercase text-accent mb-2">
                        {tags.slice(0, 2).map(tag => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded text-green-600 dark:text-green-400">
                                #{tag.slice(0, 12)}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-bold line-clamp-2 text-slate-800 dark:text-white mb-2">
                        {title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-4">
                        {description}
                    </p>

                    {/* Button */}
                    <div className="mt-auto">
                        <Link
                            to={`/course-details/${_id}`}
                            className="block w-full text-center py-2 px-4 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition duration-300 font-medium"
                        >
                            See Details
                        </Link>
                    </div>
                </div>
            </motion.div>
        </Fade>
    );
};

export default CourseCard;
