import React from 'react';

const CourseCard = ({ course }) => {
    const { image, title } = course || {}
    return (
        <div>
            <div className="max-w-sm p-6 rounded-md shadow-md bg-gray-50 dark:bg-gray-800 dark:text-gray-900">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-52 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
                    <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
                </div>
                <p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
            </div>
        </div>
    );
};

export default CourseCard;