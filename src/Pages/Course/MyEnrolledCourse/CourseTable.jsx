import axios from 'axios';
import { Trash2 } from 'lucide-react';
import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const CourseTable = ({ course, setCourse, index }) => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const {
        title,
        instructor,
        fee,
        _id
    } = course || {}
    const handleDeleteEnrolledCourse = (id) => {
        const email = user?.email; // Make sure you have this

        Swal.fire({
            title: 'Are you sure?',
            text: 'You are about to remove this enrollment.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`${import.meta.env.VITE_API_URL}/course-order/${id}?email=${email}`)
                    .then(res => {
                        if (res.data?.deletedCount > 0 || res.status === 200) {
                            setCourse(prev => prev.filter(c => c._id !== id));
                            Swal.fire('Removed!', 'Enrollment removed successfully.', 'success');
                        } else {
                            Swal.fire('Failed!', 'Something went wrong.', 'error');
                        }
                    })
                    .catch(() => {
                        Swal.fire('Error!', 'Unable to remove enrollment.', 'error');
                    });
            }
        });

    };
    return (
        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-neutral-800 transition duration-300">
            <td className="py-3 px-5">{index + 1}</td>
            <td className="py-3 px-5 font-semibold">{title || 'Untitled Course'}</td>
            <td className="py-3 px-5">{instructor || 'Unknown'}</td>
            <td className="py-3 px-5">{fee ? fee : 'Free'}</td>
            <td className="py-3 px-5 text-center">
                <button
                    onClick={() => handleDeleteEnrolledCourse(_id)}
                    className='btn btn-xs btn-outline '>
                    <Trash2 className='py-1' />
                </button>
            </td>
        </tr>
    );
};

export default CourseTable;