import { Trash, Trash2 } from 'lucide-react';
import React from 'react';

const CourseTable = ({ course, setCourse, index }) => {
    const {
        title,
        instructor,
        fee
    } = course || {}
    return (
        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-neutral-800 transition duration-300">
            <td className="py-3 px-5">{index + 1}</td>
            <td className="py-3 px-5 font-semibold">{title || 'Untitled Course'}</td>
            <td className="py-3 px-5">{instructor || 'Unknown'}</td>
            <td className="py-3 px-5">{fee ? fee : 'Free'}</td>
            <td className="py-3 px-5 text-center">
                <button className='btn btn-xs btn-outline '>
                    <Trash2 className='py-1' />
                </button>
            </td>
        </tr>
    );
};

export default CourseTable;