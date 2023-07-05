import React from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { BASEURL } from '../data/BASEURL';

const AxiosGlobalConfig = () => {
    const authTokens = React.useContext(AuthContext).authTokens;
    axios.defaults.baseURL = BASEURL;
    if (authTokens.access) {
        axios.defaults.headers.common['Authorization'] = "Bearer " + authTokens?.access;
        console.log("AccessToken Added to Axios");

    }
    else{
        console.log("No AccessToken Added to Axios Config");
    }
    axios.defaults.headers.common["Content-Type"] = "application/json";
    return (
        null
    )
}

export default AxiosGlobalConfig;