import React, { useEffect, useState } from 'react';
import CourseCard from '../../Pages/Course/AllCourse/CourseCard';

const LatestCourse = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/latest-course')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCourses(data);
            })
            .catch(err => {
                console.error("Error fetching latest courses:", err);
            });
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Latest Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses ? (

                    courses.map((course, idx) => (
                        <CourseCard course={course} index={idx} key={idx} />
                    ))
                ) : (
                    <div className="col-span-3 w-full">
                        <motion.div
                            className="bg-gradient-to-r col-span-3 from-white to-gray-100 dark:from-neutral-700 dark:to-neutral-800 border border-dashed border-gray-300 dark:border-neutral-500 rounded-2xl p-8 shadow-inner text-center flex flex-col items-center justify-center space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Sparkles size={48} className="text-indigo-500 dark:text-indigo-400 animate-pulse" />
                            <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                                No Featured Tasks
                            </h2>
                            <p className="text-gray-500 dark:text-gray-300 max-w-sm">
                                There are currently no featured tasks available. Please check back later or explore other categories.
                            </p>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LatestCourse;
