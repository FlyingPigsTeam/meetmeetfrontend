import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import AuthContext from "../context/AuthContext";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(8, "Must be at least 8 characters.")
    .max(32, "Must be 32 characters or less.")
    .matches(passwordRules, {
      message: "Must vahe at least one lower , upper and digit",
    })
    .required("Required"),
  first_name: yup.string().required("Required"),
  last_name: yup.string().required("Required"),
  username: yup.string().required("Required"),
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const onSubmit = async (values, actions) => {
  await delay(4000);
};
export const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  return (
    <div className="center">
      <h1>Register</h1>

      <form onSubmit={registerUser}>
        <div className="txt_field">
          <input
            className={
              formik.errors.first_name && formik.touched.first_name
                ? "input-error"
                : ""
            }
            value={formik.values.first_name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            name="first_name"
            id="first_name"
            required
          />
          <span></span>
          <label>FirstName</label>
        </div>
        {formik.errors.first_name && formik.touched.first_name && (
          <p className="text-error-input">{formik.errors.first_name} </p>
        )}

        <div className="txt_field">
          <input
            className={
              formik.errors.last_name && formik.touched.last_name
                ? "input-error"
                : ""
            }
            value={formik.values.last_name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            name="last_name"
            id="last_name"
            required
          />
          <span></span>
          <label>LastName </label>
        </div>
        {formik.errors.last_name && formik.touched.last_name && (
          <p className="text-error-input">{formik.errors.last_name} </p>
        )}

        <div className="txt_field">
          <input
            className={
              formik.errors.email && formik.touched.email ? "input-error" : ""
            }
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            name="email"
            id="email"
            required
          />
          <span></span>
          <label>Email</label>
        </div>
        {formik.errors.email && formik.touched.email && (
          <p className="text-error-input">{formik.errors.email} </p>
        )}

        <div className="txt_field">
          <input
            className={
              formik.errors.username && formik.touched.username
                ? "input-error"
                : ""
            }
            value={formik.values.username}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            name="username"
            id="username"
            required
          />
          <span></span>
          <label>UserName</label>
        </div>
        {formik.errors.username && formik.touched.username && (
          <p className="text-error-input">{formik.errors.username} </p>
        )}

        <div className="txt_field">
          <input
            className={
              formik.errors.password && formik.touched.password
                ? "input-error"
                : ""
            }
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="password"
            name="password"
            id="password"
            required
          />
          <span></span>
          <label>Password</label>
        </div>
        {formik.errors.password && formik.touched.password && (
          <p className="text-error-input">{formik.errors.password} </p>
        )}

        <button
          disabled={formik.isSubmitting}
          className={formik.isSubmitting ? "locked-sub" : ""}
          type="submit"
          value="Register"
        >
          Submit
        </button>

        {/* <input disabled={formik.isSubmitting} type="submit" value="Register" /> */}
        <div className="signup_link">
          Already have account?{" "}
          <Link className="link-btn" to={"/login"}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
