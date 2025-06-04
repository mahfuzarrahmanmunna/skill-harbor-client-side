import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const usePageTitle = () => {
    const location = useLocation()

    useEffect(() => {
        const path = location.pathname;

        if (path === '/') document.title = "Home | Skill Harbor"
    }, [location])
};

export default usePageTitle;