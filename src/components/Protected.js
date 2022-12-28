// protected component 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import redirect 
import { Navigate } from 'react-router-dom';
import { api } from '../constants';

export default function Protected({ Component }) {
    const [authentic, setAuthentic] = useState(true);

    useEffect(() => {
        axios.get(`${api}/auth/isloggedin`, { withCredentials: true })
            .then(res => {
                if (res.data.status === "success") {
                    setAuthentic(true);
                } else {
                    setAuthentic(false);
                }
            })
            .catch(err => {
                setAuthentic(false);
            })
    }, [])

    return authentic ? <Component /> : <Navigate to="/login" />;
}
