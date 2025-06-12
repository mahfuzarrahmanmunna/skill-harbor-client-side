import React, { Suspense } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Fallback from '../../../Components/Fallback/Fallback';
import ManageCourseTable from './ManageCourseTable';
import ManageApi from '../../../Api/ManageApi/ManageApi';
import useManageApiPromise from '../../../Api/ManageApi/useManageApi';

const ManageCourse = () => {
    const { user } = useAuth();
    const { manageApiPromise } = useManageApiPromise()
    return (
        <div>
            <Suspense fallback={<Fallback />}>
                <ManageCourseTable manageCoursePromise={manageApiPromise(user?.email)} />
            </Suspense>
        </div>
    );
};

export default ManageCourse;