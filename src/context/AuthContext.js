import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

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

  const loginUser = async (values) => {
    // e.preventDefault();
    //console.log("form submitted")
    const response = await fetch("http://127.0.0.1:8000/auth/login/", {
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
      Navigate("/");
    } else {
      console.log(data.error);
      if (data.error === "Invalid credentials") {
        //show pop up
        swal("Error!", "Invalid credentials!", "error");
      }
      if (data.error === "email is not verified") {
        swal("Error!", "check your mailbox for verification", "error");
        //show pop up with  check your mailbox for verification
      }
    }
  };
  const forgetpassUser = async (values) => {
    // e.preventDefault();
    //console.log("form submitted")
    const response = await fetch(
      "http://127.0.0.1:8000/auth/forget-password/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
        }),
      }
    );
    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
      //check your email to reset your password
      swal("success!", "check your email to reset your password!", "success");
    } else if (response.status === 400) {
      swal("Error!", "Invalid Email", "error");
    }
  };
  const registerUser = async (values) => {
    //e.preventDefault();
    //console.log("form submitted")
    const reg_response = await fetch("http://127.0.0.1:8000/auth/register/", {
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
      swal("success!", "please verify your email!", "success");
      Navigate("/login");
    } else {
      if (reg_data.message.email) {
        swal("Error!", reg_data.message.email[0], "error");
        //console.log(reg_data.message.email[0]); //show pop up
      }
      if (reg_data.message.username) {
        swal("Error!", reg_data.message.username[0], "error");
        //console.log(reg_data.message.username[0]);
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
    const response = await fetch("http://127.0.0.1:8000/auth/token/refresh/", {
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
    if (loading) {
      updateToken()
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
