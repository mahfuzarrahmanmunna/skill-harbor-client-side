import React from 'react';

const ManageApi = (email) => {
    return fetch(`http://localhost:3000/course?email=${email}`)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
            throw err
        })
};

export default ManageApi;