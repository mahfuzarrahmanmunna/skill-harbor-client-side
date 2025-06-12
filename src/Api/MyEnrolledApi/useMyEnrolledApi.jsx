import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const useMyEnrolledApi = () => {
    const axiosSecure = useAxiosSecure();
    const myEnrolledCoursePromise = email => {
        return axiosSecure.get(`my-enrolled-course?email=${email}`)
            .then(res => res.data)
    }
    return {
        myEnrolledCoursePromise
    }
};

export default useMyEnrolledApi;