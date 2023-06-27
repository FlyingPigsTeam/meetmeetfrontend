import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthContext from "../../context/AuthContext";
import MainSection from "../../components/MainSection";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import PageWrapper from "../../components/PageWrapper";
import DarkModeToggle from "../../components/DarkModeToggle";
import { BASEURL } from "../../data/BASEURL";

const ChangePassword = (props) => {
  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { authTokens, user } = useContext(AuthContext);
  const [submitted, setSubmitted] = useState(false);

  const validationSchema = Yup.object({
    currentPassword: Yup.string().required("Required"),
    newPassword: Yup.string()
      .required("Required")
      .min(8, "Must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
  });
  const handleUpdate = async (updatedUser) => {
    let response = "";
    try {
      response = await fetch(BASEURL + "/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`,
        },
        body: JSON.stringify(updatedUser),
      });
      if (parseInt(response.status) >= 400 && parseInt(response.status) < 500) {
        setError("Bad request. Please check your input and try again.");
      }
    } catch (error) {
      //   console.error(error);
      //   if ( parseInt(error.response.status) >= 400 && parseInt(error.response.status) < 500) {
      //     setError("Bad request. Please check your input and try again.");
      //   } else {
      //     setError("An error occurred. Please try again.");
      //   }
      //   setIsSubmitting(false);
    }
  };

  async function handleSubmit(values) {
    setError(null);
    try {
      setIsSubmitting(true);
      const user = {
        current_password: values.currentPassword,
        new_password: values.newPassword,
      };
      const response = await handleUpdate(user);

      setIsSubmitting(false);
      console.log(response);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      if (
        parseInt(error.response.status) >= 400 &&
        parseInt(error.response.status) < 500
      ) {
        setError("Bad request. Please check your input and try again.");
      } else {
        setError("An error occurred. Please try again.");
      }
      setIsSubmitting(false);
    }
  }

  return (
    <>

      <div className="card mt-3 dark:bg-navy-800 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4"></div>
        <div className=" mt-4">
          <h1 className="text-xl font-bold mb-2">Change Password</h1>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="  rounded pt-6 pb-8 mb-4">
                {error && <div className="text-red-500 mb-4">{error}</div>}
                {submitted && error === null ? (
                  <div className="text-green-500 mb-4">
                    Password updated successfully!
                  </div>
                ) : null}
                <div className="mb-4">
                  <label
                    htmlFor="currentPassword"
                    className="block  font-bold mb-2"
                  >
                    Current Password
                  </label>
                  <label className="block text-left">
                    <span className="relative mt-1.5 flex">
                    <Field
                    type="password"
                    name="currentPassword"
                    id="currentPassword"
                    autoComplete="current-password"
                    placeholder="Enter current password"
                    className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  />
                  <ErrorMessage
                    name="currentPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                      <span
                        className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </span>
                    </span>


                  </label>

                  
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="newPassword"
                    className="block  font-bold mb-2"
                  >
                    New Password
                  </label>
                  <label className="block text-left">
                    <span className="relative mt-1.5 flex">
                      <Field
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        autoComplete="new-password"
                        placeholder="Enter new password"
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      />
                      <ErrorMessage
                        name="newPassword"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                      <span
                        className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </span>
                    </span>


                  </label>

                </div>

                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block  font-bold mb-2"
                  >
                    Confirm Password
                  </label>
                  <label className="block text-left">
                    <span className="relative mt-1.5 flex">
                      <Field
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        autoComplete="new-password"
                        placeholder="Confirm new password"
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                      <span
                        className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                      </span>
                    </span>


                  </label>

                </div>


                <div className="flex items-center justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mx-1 ml-3 inline-flex justify-center rounded-md border border-transparent text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {isSubmitting ? "Updating..." : "Update Password"}
                  </button>
                  {/* <button
                    className=" px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={() => props.setfalse(false)}
                >
                  Close
                </button> */}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

    </>
  );
};
export default ChangePassword;
