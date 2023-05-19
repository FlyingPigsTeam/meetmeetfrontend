import React from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const BASEURL = 'http://127.0.0.1:8000';

const AxiosIns = () => {
    const authTokens = React.useContext(AuthContext).authTokens;
    const instance = axios.create({ baseURL: BASEURL });
    instance.defaults.headers.common['Authorization'] = "Bearer " + authTokens.access;
    instance.defaults.headers.common["Content-Type"] = "application/json";
    return instance;
}



export default AxiosIns;