import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import AppLogo from "../../assets/images/app-logo.svg";
//import swal from "sweetalert";
import Swal from "sweetalert2";
import classNames from "../../utils/classNames";
import { BASEURL } from "../../data/BASEURL";

const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: yup.object().shape({
      password: yup
        .string()
        .min(8, "Must be at least 8 characters.")
        .max(32, "Must be 32 characters or less.")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/, {
          message:
            "Must have at least one lowercase letter, one uppercase letter & one digit",
        })
        .required("Required"),
    }),
    onSubmit: async (values, e) => {
      gettoken(values);
      //e.preventDefault();
      console.log(values);
    },
  });
  const Navigate = useNavigate();
  const queryString = window.location.href;
  const urlParams = new URL(queryString).searchParams;
  const token1 = urlParams.get("token");
  useEffect(() => {
    gettoken();
  }, []);

  const gettoken = async (values) => {
    // e.preventDefault();
    //console.log("form submitted")
    const response = await fetch(
      BASEURL +
        "/auth/reset-password/?" +
        new URLSearchParams({
          token: token1,
        }),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: values.password,
        }),
      }
    );
    const data = await response.json();
    console.log(response);
    if (response.status === 200) {
      //swal("success!", "your password successfully reset", "success");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "your password successfully reset",
        showConfirmButton: false,
        timer: 2000,
      });
      Navigate("/login");
    } else {
      //swal("Error!", data.error, "error");
      Swal.fire({
        position: "center",
        icon: "error",
        title: data.error,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <div
      id="root"
      className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900"
    >
      <main className="grid w-full grow grid-cols-1 place-items-center">
        <div className="w-full max-w-[26rem] p-4 sm:px-5">
          <div className="text-center">
            <img
              className=" m-auto h-16 w-16 transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
              src={AppLogo}
              alt="logo"
            />
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                New Password
              </h2>
              <p className="text-slate-400 dark:text-navy-300">
                Please enter your new password
              </p>
            </div>
          </div>
          <div className="card mt-5 rounded-lg p-5 lg:p-7">
            <form onSubmit={formik.handleSubmit}>
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
                  <i className="fa-solid fa-lock"></i>
                </span>
              </label>
              {formik.errors.password && formik.touched.password && (
                <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                  {formik.errors.password}
                </span>
              )}
              <button
                className={classNames(
                  "btn mt-5 w-full  font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90",
                  "bg-primary"
                )}
                disabled={formik.isSubmitting}
                type="submit"
                value="Submit"
              >
                Reset Password
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

export default ResetPassword;

{
  /* <div className="center">
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
</div> */
}
