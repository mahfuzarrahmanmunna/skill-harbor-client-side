import React, { Suspense, useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import EnrolledCourseTable from './EnrolledCourseTable';
import Fallback from '../../../Components/Fallback/Fallback';
import usePageTitle from '../../../Hooks/usePageTitle';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const MyEnrolledCourse = () => {
    usePageTitle()
    const { user, setLoading } = useAuth()
    const [courses, setCourses] = useState();
    // const { myEnrolledCoursePromise } = useMyEnrolledApi()
    // console.log(myEnrolledCoursePromise);
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get(`my-enrolled-course?email=${user?.email}`)
            .then(res => {
                setCourses(res.data);
                setLoading(false)
            })
    }, [])
    return (
        <div>
            <Suspense fallback={<Fallback />}>
                <EnrolledCourseTable courses={courses} setCourses={setCourses} />
            </Suspense>
        </div>
    );
};

export default MyEnrolledCourse;