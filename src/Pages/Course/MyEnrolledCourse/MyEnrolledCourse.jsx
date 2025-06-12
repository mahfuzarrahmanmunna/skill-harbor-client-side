import React, { Suspense } from 'react';
import useAuth from '../../../Hooks/useAuth';
import EnrolledCourseTable from './EnrolledCourseTable';
import EnrolledApi from '../../../Api/ManageApi/EnrolledApi';
import Fallback from '../../../Components/Fallback/Fallback';

const MyEnrolledCourse = () => {
    const { user } = useAuth()
    console.log(user.accessToken);
    return (
        <div>
            <Suspense fallback={<Fallback />}>
                <EnrolledCourseTable enrolledCoursePromiseApi={EnrolledApi(user?.email, user?.accessToken)} />
            </Suspense>
        </div>
    );
};

export default MyEnrolledCourse;