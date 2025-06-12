import React from 'react';

const ManageApi = (email, accessToken) => {
    return fetch(`http://localhost:3000/course?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
        .then(res => res.json())
        .catch(err => {
            console.log(err);
            throw err
        })
};

export default ManageApi;