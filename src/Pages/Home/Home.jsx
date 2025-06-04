import React, { use } from 'react';
import { AuthContext } from '../../Authentication/AuthContext/AuthContext';
import usePageTitle from '../../Hooks/usePageTitle';

const Home = () => {
    usePageTitle()
    const userInfo = use(AuthContext)
    console.log(userInfo);
    return (
        <div>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;