import React, { Suspense } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Fallback from '../../../Components/Fallback/Fallback';
import ManageCourseTable from './ManageCourseTable';
import ManageApi from '../../../Api/ManageApi/ManageApi';

const ManageCourse = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1>Mange Course</h1>
            <Suspense fallback={<Fallback />}>
                <ManageCourseTable manageCoursePromise={ManageApi(user?.email)} />
            </Suspense>
        </div>
    );
};

export default ManageCourse;