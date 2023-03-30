import "./App.css";
import Router from "./utils/Router";
import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/LoginRegister/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/LoginRegister/Register";
import ForgetPassword from "./pages/LoginRegister/ForgetPassword";
// import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyEmail from "./pages/LoginRegister/VerifyEmail";
import ResetPassword from "./pages/LoginRegister/ResetPassword";

function App() {
  return (
    <div className="App">
      <Router />
      <BrowserRouter>
        <AuthProvider>
          {/* <Header /> */}
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route element={<Home />} path="/" />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/email-verify" element={<VerifyEmail />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
