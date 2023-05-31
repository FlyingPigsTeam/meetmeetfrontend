import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthAPI from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

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
const queryClient = new QueryClient({
  defaultOptions: { queries: { suspense: true } },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  </Provider>
);
