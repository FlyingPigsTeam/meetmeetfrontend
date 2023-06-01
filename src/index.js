import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider, } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import React from "react";
import ReactDOM from "react-dom/client";

import 'animate.css';

import App from "./App";

import "./index.css";

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
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
  </QueryClientProvider>
);
