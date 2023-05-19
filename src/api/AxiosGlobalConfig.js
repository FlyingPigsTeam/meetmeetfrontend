import React from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { BASEURL } from '../data/BASEURL';

const AxiosGlobalConfig = () => {
    const authTokens = React.useContext(AuthContext).authTokens;
    axios.defaults.baseURL = BASEURL;
    axios.defaults.headers.common['Authorization'] = "Bearer " + authTokens?.access;
    axios.defaults.headers.common["Content-Type"] = "application/json";
    return (
        null
    )
}

export default AxiosGlobalConfig;