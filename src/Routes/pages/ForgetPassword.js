import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const ForgetPassword = () => {
  const { forgetpassUser } = useContext(AuthContext);
  return (
    <div className="center">
      <h1>Forget Password</h1>
      <form onSubmit={forgetpassUser}>
        <div className="txt_field">
          <input type="email" name="email" required />
          <span></span>
          <label>Email</label>
        </div>
        <div className="sub-btn">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
