import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
const ResetPassword = () => {
  const Navigate = useNavigate();
  const queryString = window.location.href;
  const urlParams = new URL(queryString).searchParams;
  const token1 = urlParams.get("token");
  useEffect(() => {
    gettoken();
  }, []);

  const gettoken = async (e) => {
    e.preventDefault();
    //console.log("form submitted")
    const response = await fetch(
      "http://127.0.0.1:8000/auth/reset-password/?" +
        new URLSearchParams({
          token: token1,
        }),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: e.target.password.value,
        }),
      }
    );
    const data = await response.json();
    console.log(response);
    if (response.status === 200) {
      swal("success!", "your password successfully reset", "success");
      Navigate("/login");
    } else {
      swal("Error!", data.error, "error");
    }
  };

  return (
    <div className="center">
      <h1>Reset Password</h1>
      <form onSubmit={gettoken}>
        <div className="txt_field">
          <input type="password" name="password" placeholder="Enter password" />
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

export default ResetPassword;
