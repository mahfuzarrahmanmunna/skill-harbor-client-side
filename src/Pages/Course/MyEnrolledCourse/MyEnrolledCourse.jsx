import React, { Suspense } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyEnrolledCourse = () => {
    const { user } = useAuth()
    return (
        <div>
            <Suspense>

            </Suspense>
        </div>
    );
};

export default MyEnrolledCourse;