import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import AuthContext from "../../context/AuthContext";
import classNames from "../../utils/classNames";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const ForgetPassword = () => {
  const { forgetpassUser } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("Please enter a valid email")
        .required("Required"),
    }),
    onSubmit: async (values, e) => {
      forgetpassUser(values);
      await delay(4000);
      //e.preventDefault();
      console.log(values);
    },
  });

  return (
    <div id="root" className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
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
                Reset Password
              </h2>
              <p className="text-slate-400 dark:text-navy-300">
                Please enter your Email to continue
              </p>
            </div>
          </div>
          <div className="card mt-5 rounded-lg p-5 lg:p-7">
            <form onSubmit={formik.handleSubmit}>
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
                  <i className="fa-solid fa-envelope"></i>
                </span>
              </label>
              {formik.errors.email && formik.touched.email && (
                <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                  {formik.errors.email}
                </span>
              )}
              <button
                className={classNames(
                  "btn mt-5 w-full  font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90",
                  formik.isSubmitting && "bg-slate-100",
                  !formik.isSubmitting && "bg-primary"
                )}
                disabled={formik.isSubmitting}
                type="submit"
                value="Submit"
              >
                {formik.isSubmitting ? (
                  <>
                    <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent"></div>
                  </>
                ) : (
                  "Send Email"
                )}
              </button>
            </form>
          </div>
          {/* <div className="mt-8 flex justify-center text-xs text-slate-400 dark:text-navy-300">
            <a href="#">Privacy Notice</a>
            <div className="mx-3 my-1 w-px bg-slate-200 dark:bg-navy-500"></div>
            <a href="#">Term of service</a>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default ForgetPassword;

// <div className="center">
//   <h1>Forget Password</h1>
//   <form onSubmit={forgetpassUser}>
//     <div className="txt_field">
//       <input type="email" name="email" required />
//       <span></span>
//       <label>Email</label>
//     </div>
//     <div className="sub-btn">
//       <input type="submit" value="Submit" />
//     </div>
//   </form>
// </div>
