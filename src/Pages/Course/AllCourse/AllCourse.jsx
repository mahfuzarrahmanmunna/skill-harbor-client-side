import React from 'react';
import usePageTitle from '../../../Hooks/usePageTitle';
import { useLoaderData } from 'react-router';
import CourseCard from './CourseCard';

const AllCourse = () => {
    usePageTitle()
    const courses = useLoaderData()
    console.log(courses);
    return (
        <div className='lg:px-24 md:px-12 px-6 '>
            <h1 className='text-accent'>All Course here</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12'>
                {
                    courses?.map((course, index) =>
                        <CourseCard course={course} index={index} key={index} />
                    )
                }
            </div>
        </div>
    );
};

export default AllCourse;