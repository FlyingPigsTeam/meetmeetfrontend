import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import AuthContext from "../../context/AuthContext";
import classNames from "../../utils/classNames";
import AppLogo from "../../assets/images/app-logo.svg";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("Please enter a valid email")
        .required("Required"),
      password: yup.string().required("Required"),
    }),
    onSubmit: async (values, e) => {
      loginUser(values);
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
            {/* <div class="avatar h-16 w-16">
              <div class="is-initial rounded-full bg-slate-200 text-4xl uppercase text-white dark:bg-navy-500">
                <i class="fa fa-user"></i>
              </div>
            </div> */}
            <img
              className=" m-auto h-16 w-16 transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
              src={AppLogo}
              alt="logo"
            />
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                Welcome Back
              </h2>
              <p className="text-slate-400 dark:text-navy-300">
                Please sign in to continue
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
              <div className="mt-4 flex items-center justify-between space-x-2">
                <label className="inline-flex items-center space-x-2">
                  <input
                    className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                    type="checkbox"
                  />
                  <span className="line-clamp-1">Remember me</span>
                </label>
                <Link
                  to={"/forgetpassword"}
                  className="text-xs text-slate-400 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                className={classNames(
                  "btn mt-5 w-full  font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90",
                  formik.isSubmitting && "bg-slate-100",
                  !formik.isSubmitting && "bg-primary"
                )}
                disabled={formik.isSubmitting}
                type="submit"
                value="Login"
              >
                {formik.isSubmitting ? (
                  <>
                    <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent"></div>
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
            <div className="mt-4 text-center text-xs+">
              <p className="line-clamp-1">
                <span>Dont have Account? </span>

                <Link
                  className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  to={"/register"}
                >
                  Create account
                </Link>
              </p>
            </div>
            {/* <div className="my-7 flex items-center space-x-3">
              <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
              <p>OR</p>
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

export default Login;

/* <div className="center">
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
</div> */
