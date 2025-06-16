import React from 'react';
import { motion } from "motion/react"
import { Link } from 'react-router';
import { Fade } from 'react-awesome-reveal';

const CourseCard = ({ course, index = 0 }) => {
    const { image, title, tags, description = "No description available.", _id } = course || {};

    return (
        <Fade className='md:mx-auto w-full'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
            >
                <div className="max-w-sm xl:h-[450px] p-6 spy-2 rounded-2xl shadow-xl bg-white/80 dark:bg-slate-800 dark:text-white backdrop-blur-md transition-all duration-300 hover:shadow-2xl border border-slate-200 dark:border-slate-700">
                    <img
                        src={image}
                        alt={title}
                        className="object-cover object-center w-full rounded-xl h-52 mb-4 shadow-md"
                    />

                    <div className="mb-3 space-y-3">
                        <span className="flex gap-1 flex-wrap text-xs font-semibold tracking-widest uppercase text-accent">{
                            tags.map(tag =>
                                <div key={tag} className="badge badge-soft badge-success border-gray-200 bg-gray-50"># {tag}</div>
                            )
                        }</span>

                        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                            {title?.slice(0, 30)}...
                        </h2>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {description?.slice(0, 90)}...
                    </p>
                    <div>
                        <Link to={`/course-details/${_id}`} className='btn btn-primary btn-outline'>
                            See Details
                        </Link>
                    </div>
                </div>
            </motion.div>
        </Fade>
    );
};

export default CourseCard;
