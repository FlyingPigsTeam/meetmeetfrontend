import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home/Homepage";
import React from "react";

import { AuthProvider } from "../context/AuthContext";
import PrivateRoute from "../utils/PrivateRoute";

// import Home from "../pages/Home/Home";
// import Header from "../components/Header";
import Login from "../pages/LoginRegister/Login";
import Register from "../pages/LoginRegister/Register";
import ForgetPassword from "../pages/LoginRegister/ForgetPassword";
import ResetPassword from "../pages/LoginRegister/ResetPassword";
import InfoTab from "../pages/Room/InfoTab/InfoTab";

const Router = () => {
  return (
    <div>
      <AuthProvider>
        {/* <Header /> */}
        <Routes>
          <Route element={<PrivateRoute />}>
            {/* <Route element={<Home />} path="/" /> */}
            <Route path="/" element={<Homepage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/room/info" element={<InfoTab />} />

          {/* <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes> */}
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default Router;
