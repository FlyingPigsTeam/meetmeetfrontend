import { Route, Routes, Navigate, useParams } from "react-router-dom";
import React from "react";

import { AuthProvider } from "../context/AuthContext";
import Homepage from "../pages/Home/Homepage";
import PrivateRoute from "../utils/PrivateRoute";
import AxiosGlobalConfig from "../api/AxiosGlobalConfig";

// import Home from "../pages/Home/Home";
// import Header from "../components/Header";
import Login from "../pages/LoginRegister/Login";
import Register from "../pages/LoginRegister/Register";
import ForgetPassword from "../pages/LoginRegister/ForgetPassword";
import ResetPassword from "../pages/LoginRegister/ResetPassword";
import VerifyEmail from "../pages/LoginRegister/VerifyEmail";
import InfoTab from "../pages/Room/InfoTab/InfoTab";
import InformationForm from "../pages/Room/InfoTab/InformationForm";
import InformationPage from "../pages/Room/InfoTab/InformationPage";
import PanelMain from "../pages/Home/PanelMain";
import Paneltest from "../pages/Home/Paneltest";
import EditProfile from "../pages/Profile/Setting";
import Profile from "../pages/Profile/Profile";
import Setting from "../pages/Profile/Setting";
import ChangePassword from "../pages/Profile/ChangePassword";
import Task from "../pages/Room/Task/Task";
import Chat from "../pages/Chat/Chat";
import Chat_test from "../pages/Chat/Chat_test";
import JoinRoom from "../pages/Room/InfoTab/joinRoom";
import Search from "../pages/Room/Task/Search";
import InfiniteQuery from "../pages/Chat/InfiniteQuery";
import LandingPage from "../pages/Landing/LandingPage";
import Subscribtion from "../pages/Subscribtion/Subscribtion";
import ActiveRedirect from "./ActiveRedirect";
import PopOverTest from "../pages/Tests/PopOverTest";

const Router = () => {
  return (
    <div>
      <AuthProvider>
        <AxiosGlobalConfig />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<PrivateRoute />}>
            {/* <Route element={<Home />} path="/" /> */}
            <Route path="/home" element={<Homepage />} />
            <Route path="/joinRoom/:randomId" element={<JoinRoom />} />
            <Route path="/room/:idroom" element={<ActiveRedirect />} />
            <Route path="/room/:idroom/info" element={<InfoTab />} />
            <Route
              path="/room/:idroom/info/edit"
              element={<InformationForm Title="Edit" />}
            />
            <Route path="/room/:idroom/task" element={<Task />} />
            <Route path="/room/:idroom/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/EditProfile" element={<EditProfile />} />
            <Route path="/profileEdit" element={<Setting />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/email-verify" element={<VerifyEmail />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path="/email-verify" element={<VerifyEmail />} />
          <Route path="/change-password" element={<ChangePassword />} />

          <Route path="/subscribtion" element={<Subscribtion />} />
          {/* <Route path="/room/info" element={<InfoTab />} /> */}

          <Route path="/panel" element={<PanelMain />} />
          <Route path="/panel2" element={<Paneltest />} />
          <Route path="/chat" element={<Chat_test />} />
          <Route path="/search" element={<Search />} />
          <Route path="/reactquery" element={<InfiniteQuery />} />
          <Route path="/poper" element={<PopOverTest />} />

          {/* <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes> */}
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default Router;
