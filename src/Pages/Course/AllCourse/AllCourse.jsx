import React, { useState } from 'react';
import usePageTitle from '../../../Hooks/usePageTitle';
import { useLoaderData } from 'react-router';
import CourseCard from './CourseCard';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import NoCourseFound from '../ManageCourse/NoCourseFound';
import { Toaster } from 'react-hot-toast';

const AllCourse = () => {
    usePageTitle();
    const courses = useLoaderData();
    console.log(courses);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("title");

    // Filter courses based on search query (search by title or tag)
    const filteredCourses = courses.filter(course => {
        const lowercasedQuery = searchQuery.toLowerCase();
        return (
            course.title.toLowerCase().includes(lowercasedQuery) ||
            course.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery))
        );
    });

    // Sort courses based on selected sort option
    const sortedCourses = filteredCourses.sort((a, b) => {
        if (sortOption === "title") {
            return a.title.localeCompare(b.title);
        } else if (sortOption === "price") {
            return a.price - b.price;
        }
        return 0;
    });

    // Handle search query change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Handle sorting option change
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    if (!courses || courses.length === 0) return <NoCourseFound />;

    return (
        <div className="px-6 md:px-10 lg:px-16 flex flex-col space-y-24 py-12 min-h-screen">
            {/* Header */}
            <motion.h1
                className="text-3xl md:text-4xl font-bold text-accent text-center mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Typewriter
                    words={['Explore All Courses', 'Find Your Next Skill', 'Start Learning Today!']}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
            </motion.h1>

            <Toaster position="top-center" />

            {/* Search and Sort Bar */}
            <div className="flex justify-between items-center mb-10">
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search Courses"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="p-3 w-full md:w-1/3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Sort Dropdown */}
                <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className="ml-4 p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="title">Sort by Title</option>
                    <option value="price">Sort by Price</option>
                </select>
            </div>

            {/* Course Grid */}
            <Fade cascade damping={0.1} triggerOnce>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {sortedCourses.map((course, index) => (
                        <CourseCard key={course._id || index} course={course} index={index} />
                    ))}
                </div>
            </Fade>
        </div>
    );
};

export default AllCourse;
