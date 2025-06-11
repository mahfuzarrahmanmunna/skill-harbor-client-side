import React, { Suspense } from 'react';
import useAuth from '../../../Hooks/useAuth';
import EnrolledCourseCard from './EnrolledCourseCard';

const MyEnrolledCourse = () => {
    const { user } = useAuth()
    return (
        <div>
            <Suspense>
                <EnrolledCourseCard enrolledCoursePromiseApi={ } />
            </Suspense>
        </div>
    );
};

export default MyEnrolledCourse;