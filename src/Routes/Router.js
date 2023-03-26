import React from "react";
import { Route, Routes } from "react-router-dom";

//import Home from "./Home";
import HomePage from "./HomePage";

import Room from "./Room";

import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import VerifyEmail from "./pages/VerifyEmail";
import ResetPassword from "./pages/ResetPassword";
import ForgetPassword from "./pages/ForgetPassword";



const Router = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/room" element={<Room />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/email-verify" element={<VerifyEmail />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default Router;
