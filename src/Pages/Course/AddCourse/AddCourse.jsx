import React from 'react';
import usePageTitle from '../../../Hooks/usePageTitle';

const AddCourse = () => {
    usePageTitle()
    return (
        <div>
            <h1 className='text-primary'>Added course here</h1>
        </div>
    );
};

export default AddCourse;