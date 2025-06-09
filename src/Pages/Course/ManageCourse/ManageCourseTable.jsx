import React, { use } from 'react';

const ManageCourseTable = ({ manageCoursePromise }) => {
    const courses = use(manageCoursePromise)
    console.log(courses);
    return (
        <div>

        </div>
    );
};

export default ManageCourseTable;