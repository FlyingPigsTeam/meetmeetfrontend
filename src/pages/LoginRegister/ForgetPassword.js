import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import AuthContext from "../../context/AuthContext";

const ForgetPassword = () => {
  const { forgetpassUser } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email("Please enter a valid email").required("Required"),
    }),
    onSubmit: async (values, e) => {
      registerUser(values);
      await delay(4000);
      //e.preventDefault();
      console.log(values);
    },
  });
  
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
