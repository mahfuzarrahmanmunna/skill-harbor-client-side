import React, { Suspense } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Fallback from '../../../Components/Fallback/Fallback';
import ManageCourseTable from './ManageCourseTable';
import ManageApi from '../../../Api/ManageApi/ManageApi';

const ManageCourse = () => {
    const { user } = useAuth();

    return (
        <div>
            <Suspense fallback={<Fallback />}>
                <ManageCourseTable manageCoursePromise={ManageApi(user?.email)} />
            </Suspense>
        </div>
    );
};

export default ManageCourse;