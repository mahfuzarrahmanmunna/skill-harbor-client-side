import React, { Suspense, useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Fallback from '../../../Components/Fallback/Fallback';
import ManageCourseTable from './ManageCourseTable';
// import useManageApiPromise from '../../../Api/ManageApi/useManageApi';
import usePageTitle from '../../../Hooks/usePageTitle';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageCourse = () => {
    usePageTitle()
    const [courses, setCourses] = useState([])
    const { user, setLoading } = useAuth();
    // const { manageApiPromise } = useManageApiPromise()
    const axiosSecure = useAxiosSecure()
    // const manageApiPromise = axiosSecure.get(`course?email=${user?.email}`)
    //     .then(res => res?.data)

    useEffect(() => {
        axiosSecure.get(`course?email=${user?.email}`)
            .then(res => {
                setCourses(res.data)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <Suspense fallback={<Fallback />}>
                <ManageCourseTable courses={courses} setCourses={setCourses} />
            </Suspense>
        </div>
    );
};

export default ManageCourse;