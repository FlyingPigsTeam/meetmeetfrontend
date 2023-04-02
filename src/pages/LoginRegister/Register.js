import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import AuthContext from "../../context/AuthContext.js";
import classNames from "../../utils/classNames";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// const onSubmit = async (values, actions) => {
//   await delay(4000);
// };
export const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      repeat_password: "",
      acceptPrivacyPolicy: false,
    },
    validationSchema: yup.object().shape({
      first_name: yup.string().required("Required"),
      last_name: yup.string().required("Required"),
      email: yup
        .string()
        .email("Please enter a valid email")
        .required("Required"),
      username: yup
        .string()
        .min(3, "Username must be at least 3 characters long")
        .required("Required"),
      password: yup
        .string()
        .min(8, "Must be at least 8 characters.")
        .max(32, "Must be 32 characters or less.")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/, {
          message:
            "Must have at least one lowercase letter, one uppercase letter & one digit",
        })
        .required("Required"),
      repeat_password: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password must match")
        .required("Required"),
      acceptPrivacyPolicy: yup
        .boolean()
        .oneOf([true], "Please accept the privacy policy")
        .required("Please accept the privacy policy"),
    }),
    onSubmit: async (values, e) => {
      registerUser(values);
      await delay(4000);
      //e.preventDefault();
      console.log(values);
    },
  });

  return (
    <div
      id="root"
      className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900"
    >
      <main className="grid w-full grow grid-cols-1 place-items-center">
        <div className="w-full max-w-[26rem] p-4 sm:px-5">
          <div className="text-center">
            <img
              className="mx-auto h-16 w-16"
              src="images/app-logo.svg"
              alt="logo"
            />
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                Welcome To MeetMeet
              </h2>
              <p className="text-slate-400 dark:text-navy-300">
                Please sign up to continue
              </p>
            </div>
          </div>
          <div className="card mt-5 rounded-lg p-5 lg:p-7">
            <form onSubmit={formik.handleSubmit}>
              <label className="relative flex">
                <input
                  className={classNames(
                    "form-input peer w-full rounded-lg border bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent",
                    formik.errors.first_name && formik.touched.first_name
                      ? "border-error"
                      : "border-slate-300"
                  )}
                  placeholder="First name"
                  type="text"
                  value={formik.values.first_name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="first_name"
                  id="first_name"
                  required
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i class="fa-solid fa-circle-user"></i>
                </span>
              </label>
              {formik.errors.first_name && formik.touched.first_name && (
                <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                  {formik.errors.first_name}
                </span>
              )}
              <label className="relative mt-4 flex">
                <input
                  className={classNames(
                    "form-input peer w-full rounded-lg border bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent",
                    formik.errors.last_name && formik.touched.last_name
                      ? "border-error"
                      : "border-slate-300"
                  )}
                  placeholder="Last name"
                  type="text"
                  value={formik.values.last_name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="last_name"
                  id="last_name"
                  required
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i class="fa-solid fa-circle-user"></i>
                </span>
              </label>
              {formik.errors.last_name && formik.touched.last_name && (
                <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                  {formik.errors.last_name}
                </span>
              )}
              <label className="relative mt-4 flex">
                <input
                  className={classNames(
                    "form-input peer w-full rounded-lg border bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent",
                    formik.errors.email && formik.touched.email
                      ? "border-error"
                      : "border-slate-300"
                  )}
                  placeholder="Email"
                  type="email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="email"
                  id="email"
                  required
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i class="fa-solid fa-envelope"></i>
                </span>
              </label>
              {formik.errors.email && formik.touched.email && (
                <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                  {formik.errors.email}
                </span>
              )}

              <label className="relative mt-4 flex">
                <input
                  className={classNames(
                    "form-input peer w-full rounded-lg border bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent",
                    formik.errors.username && formik.touched.username
                      ? "border-error"
                      : "border-slate-300"
                  )}
                  placeholder="Username"
                  type="text"
                  value={formik.values.username}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="username"
                  id="username"
                  required
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i class="fa-solid fa-user"></i>
                </span>
              </label>
              {formik.errors.username && formik.touched.username && (
                <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                  {formik.errors.username}
                </span>
              )}

              <label className="relative mt-4 flex">
                <input
                  className={classNames(
                    "form-input peer w-full rounded-lg border bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent",
                    formik.errors.password && formik.touched.password
                      ? "border-error"
                      : "border-slate-300"
                  )}
                  placeholder="Password"
                  type="password"
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="password"
                  id="password"
                  required
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i class="fa-solid fa-lock"></i>
                </span>
              </label>
              {formik.errors.password && formik.touched.password && (
                <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                  {formik.errors.password}
                </span>
              )}

              <label className="relative mt-4 flex">
                <input
                  className={classNames(
                    "form-input peer w-full rounded-lg border bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent",
                    formik.errors.repeat_password &&
                      formik.touched.repeat_password
                      ? "border-error"
                      : "border-slate-300"
                  )}
                  placeholder="Repeat Password"
                  type="password"
                  value={formik.values.repeat_password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="repeat_password"
                  id="repeat_password"
                  required
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i class="fa-solid fa-lock"></i>
                </span>
              </label>
              {formik.errors.repeat_password &&
                formik.touched.repeat_password && (
                  <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                    {formik.errors.repeat_password}
                  </span>
                )}

              <div className="mt-4 flex items-center space-x-2">
                <input
                  className={classNames(
                    "form-checkbox is-basic h-5 w-5 rounded checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent",
                    formik.errors.acceptPrivacyPolicy &&
                      formik.touched.acceptPrivacyPolicy
                      ? "border-error"
                      : "border-slate-400/70"
                  )}
                  type="checkbox"
                  value={formik.values.acceptPrivacyPolicy}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="acceptPrivacyPolicy"
                  id="acceptPrivacyPolicy"
                  required
                />
                <p className="line-clamp-1">
                  I agree with
                  <a
                    href="#"
                    className="text-slate-400 hover:underline dark:text-navy-300"
                  >
                    {" "}
                    privacy policy
                  </a>
                </p>
              </div>
              {formik.errors.acceptPrivacyPolicy &&
                formik.touched.acceptPrivacyPolicy && (
                  <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                    {formik.errors.acceptPrivacyPolicy}
                  </span>
                )}

              <button
                className={classNames(
                  "btn mt-5 w-full  font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90",
                  formik.isSubmitting && "bg-warning",
                  !formik.isSubmitting && "bg-primary"
                )}
                disabled={formik.isSubmitting}
                type="submit"
                value="Register"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-4 text-center text-xs+">
              <p className="line-clamp-1">
                <span>Already have an account? </span>
                <a
                  className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  href="pages-login-1.html"
                >
                  Sign In
                </a>
              </p>
            </div>
            {/* <div className="my-7 flex items-center space-x-3">
              <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
              <p className="text-tiny+ uppercase">or sign up with email</p>
              <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
            </div>
            <div className="flex space-x-4">
              <button className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                <img className="h-5.5 w-5.5" src="images/100x100.png" alt="logo" />
                <span>Google</span>
              </button>
              <button className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                <img className="h-5.5 w-5.5" src="images/100x100.png" alt="logo" />
                <span>Github</span>
              </button>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;

// <div className="center">
//   <h1>Register</h1>

//   <form onSubmit={formik.handleSubmit}>
//     <div className="txt_field">
//       <input
//         className={
//           formik.errors.first_name && formik.touched.first_name
//             ? "input-error"
//             : ""
//         }
//         value={formik.values.first_name}
//         onBlur={formik.handleBlur}
//         onChange={formik.handleChange}
//         type="text"
//         name="first_name"
//         id="first_name"
//         required
//       />
//       <span></span>
//       <label>FirstName</label>
//     </div>
//     {formik.errors.first_name && formik.touched.first_name && (
//       <p className="text-error-input">{formik.errors.first_name} </p>
//     )}

//     <div className="txt_field">
//       <input
//         className={
//           formik.errors.last_name && formik.touched.last_name
//             ? "input-error"
//             : ""
//         }
//         value={formik.values.last_name}
//         onBlur={formik.handleBlur}
//         onChange={formik.handleChange}
//         type="text"
//         name="last_name"
//         id="last_name"
//         required
//       />
//       <span></span>
//       <label>LastName </label>
//     </div>
//     {formik.errors.last_name && formik.touched.last_name && (
//       <p className="text-error-input">{formik.errors.last_name} </p>
//     )}

//     <div className="txt_field">
//       <input
//         className={
//           formik.errors.email && formik.touched.email ? "input-error" : ""
//         }
//         value={formik.values.email}
//         onBlur={formik.handleBlur}
//         onChange={formik.handleChange}
//         type="text"
//         name="email"
//         id="email"
//         required
//       />
//       <span></span>
//       <label>Email</label>
//     </div>
//     {formik.errors.email && formik.touched.email && (
//       <p className="text-error-input">{formik.errors.email} </p>
//     )}

//     <div className="txt_field">
//       <input
//         className={
//           formik.errors.username && formik.touched.username
//             ? "input-error"
//             : ""
//         }
//         value={formik.values.username}
//         onBlur={formik.handleBlur}
//         onChange={formik.handleChange}
//         type="text"
//         name="username"
//         id="username"
//         required
//       />
//       <span></span>
//       <label>UserName</label>
//     </div>
//     {formik.errors.username && formik.touched.username && (
//       <p className="text-error-input">{formik.errors.username} </p>
//     )}

//     <div className="txt_field">
//       <input
//         className={
//           formik.errors.password && formik.touched.password
//             ? "input-error"
//             : ""
//         }
//         value={formik.values.password}
//         onBlur={formik.handleBlur}
//         onChange={formik.handleChange}
//         type="password"
//         name="password"
//         id="password"
//         required
//       />
//       <span></span>
//       <label>Password</label>
//     </div>
//     {formik.errors.password && formik.touched.password && (
//       <p className="text-error-input">{formik.errors.password} </p>
//     )}

//     <button
//       disabled={formik.isSubmitting}
//       className={formik.isSubmitting ? "locked-sub" : ""}
//       type="submit"
//       value="Register"
//     >
//       Submit
//     </button>

//     {/* <input disabled={formik.isSubmitting} type="submit" value="Register" /> */}
//     <div className="signup_link">
//       Already have account?{" "}
//       <Link className="link-btn" to={"/login"}>
//         Login
//       </Link>
//     </div>
//   </form>
// </div>
