import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import '../LogGroup.css';
// import style from '../LogGroup.module.css';

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  return (
    <div className="center">
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <div className="txt_field">
          <input type="email" name="email" required />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="password" name="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass_link">
          <Link className="link-btn" to={"/forgetpassword"}>
            forget password?
          </Link>
        </div>
        <input type="submit" value="Login" />
        <div className="signup_link">
          Don't have an account?
          <Link className="link-btn" to={"/register"}>
            Register here.
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
