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
import InformationForm from "../pages/Room/InfoTab/InformationForm";
import InformationPage from "../pages/Room/InfoTab/InformationPage";
import VerifyEmail from "../pages/LoginRegister/VerifyEmail";

import Profile from "../pages/Profile/Profile";
import Setting from "../pages/Profile/Setting";
import ChangePassword from "../pages/Profile/ChangePassword";
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
          <Route path="/email-verify" element={<VerifyEmail />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* <Route path="/room/info" element={<InfoTab />} /> */}
          <Route path="/room/:idroom/info" element={<InfoTab />} />
          <Route path="/room/:idroom/info/edit" element={<InformationForm Title="Edit" />} />
          <Route path="/profile" element={<Profile />} />

          {/* <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes> */}
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default Router;
