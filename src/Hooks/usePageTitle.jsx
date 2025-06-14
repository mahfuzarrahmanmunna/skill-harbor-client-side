import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const usePageTitle = () => {
    const location = useLocation()

    useEffect(() => {
        const path = location.pathname;

        if (path === '/') document.title = "Home | Skill Harbor"
        if (path === '/all-course') document.title = "Courses | Skill Harbor"
        if (path === '/add-course') document.title = "Add Course | Skill Harbor"
        if (path === '/manage-course') document.title = "Manage Course | Skill Harbor"
        if (path === '/sign-up') document.title = "Sign Up | Skill Harbor"
        if (path === '/sign-in') document.title = "Sign In | Skill Harbor"
        if (path === '/about-us') document.title = "About Us | Skill Harbor"
        if (path === '/my-enrolled-course') document.title = "My Enrolled Course | Skill Harbor"
        if (path.startsWith('/course-details/')) document.title = 'Course Details | Skill Harbor';
        if (path.startsWith('/edit-my-posted-course/')) document.title = 'Update Manage Course | Skill Harbor';
    }, [location])
};

export default usePageTitle;