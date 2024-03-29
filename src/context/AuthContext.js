import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate, useLocation, Link } from "react-router-dom";
//import swal from "sweetalert";
import Swal from "sweetalert2";
import axios from "axios";
import { BASEURL } from "../data/BASEURL";

const AuthContext = createContext(null);

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const [loading, setloading] = useState(true);

  const Navigate = useNavigate();
  const location = useLocation();
  //const from = location.state?.from?.pathname || "/home";
  console.log(location.state?.form);

  const loginUser = async (values) => {
    // e.preventDefault();
    //console.log("form submitted")
    const response = await fetch(BASEURL + "/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      //Navigate(-1);
      // Navigate(from, { replace: true });
      const from = location.state?.form || "/home";

      Navigate(from, { replace: true });
    } else {
      console.log(data.error);
      if (data.error === "Invalid credentials") {
        //show pop up
        //swal("Error!", "Invalid credentials!", "error");
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Invalid credentials!",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      if (data.error === "email is not verified") {
        //swal("Error!", "check your mailbox for verification", "error");
        //show pop up with  check your mailbox for verification
        Swal.fire({
          position: "center",
          icon: "error",
          title: "check your mailbox for verification",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };
  const forgetpassUser = async (values) => {
    // e.preventDefault();
    //console.log("form submitted")
    const response = await fetch(BASEURL + "/auth/forget-password/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
      }),
    });
    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
      //check your email to reset your password
      //swal("success!", "check your email to reset your password!", "success");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "check your email to reset your password!",
        showConfirmButton: false,
        timer: 2000,
      });
    } else if (response.status === 400) {
      //swal("Error!", "Invalid Email", "error");
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Invalid Email",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  const registerUser = async (values) => {
    //e.preventDefault();
    //console.log("form submitted")
    const reg_response = await fetch(BASEURL + "/auth/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        username: values.username,
        password: values.password,
      }),
    });
    const reg_data = await reg_response.json();
    if (reg_response.status === 201) {
      //swal("success!", "please verify your email!", "success");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "please verify your email",
        showConfirmButton: false,
        timer: 2000,
      });
      Navigate("/login");
    } else {
      if (reg_data.message.email) {
        //swal("Error!", reg_data.message.email[0], "error");
        //console.log(reg_data.message.email[0]); //show pop up
        Swal.fire({
          position: "center",
          icon: "error",
          title: reg_data.message.email[0],
          showConfirmButton: false,
          timer: 2000,
        });
      }
      if (reg_data.message.username) {
        //swal("Error!", reg_data.message.username[0], "error");
        //console.log(reg_data.message.username[0]);
        Swal.fire({
          position: "center",
          icon: "error",
          title: reg_data.message.username[0],
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    Navigate("/login");
  };

  const updateToken = async () => {
    const response = await fetch(BASEURL + "/auth/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }

    if (loading) {
      setloading(false);
    }
  };
  const contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    registerUser: registerUser,
    logoutUser: logoutUser,
    forgetpassUser: forgetpassUser,
  };
  useEffect(() => {
    //console.log(authTokens);
    if (loading && authTokens) {
      updateToken();
    }
    const interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, 240000);
    return () => clearInterval(interval);
  }, [authTokens, loading]);
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
