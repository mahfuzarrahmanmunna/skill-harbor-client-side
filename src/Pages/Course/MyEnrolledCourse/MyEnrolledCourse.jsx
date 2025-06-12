import React, { Suspense } from 'react';
import useAuth from '../../../Hooks/useAuth';
import EnrolledCourseTable from './EnrolledCourseTable';
import Fallback from '../../../Components/Fallback/Fallback';
import useMyEnrolledApi from '../../../Api/MyEnrolledApi/useMyEnrolledApi';

const MyEnrolledCourse = () => {
    const { user } = useAuth()
    const { myEnrolledCoursePromise } = useMyEnrolledApi()
    // console.log(myEnrolledCoursePromise);
    return (
        <div>
            <Suspense fallback={<Fallback />}>
                <EnrolledCourseTable enrolledCoursePromiseApi={myEnrolledCoursePromise(user?.email)} />
            </Suspense>
        </div>
    );
};

export default MyEnrolledCourse;