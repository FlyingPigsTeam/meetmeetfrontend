import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

// axios.defaults.baseURL = "http://127.0.0.1:8000/";
// axios.defaults.baseURL = "";
// axios.defaults.headers.common['Authorization'] = 'Auth Token';


// axios.interceptors.request.use(request=> {
//   // request.headers.channelName= "Meet Meet"
//   console.log(request);
//   return request;
// })
// axios.interceptors.response.use(response=> {
//   console.log(response);
//   return response;
// })

// const instance = axios.create({baseURL:''});
// instance.defaults.headers.common['Authorization'] = 'Auth Token';
// export default instance;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
