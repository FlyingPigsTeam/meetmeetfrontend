/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          'blue-gray': colors.blueGray,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React, { Fragment, useContext, useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import {
  BanknotesIcon,
  Bars3Icon,
  BellIcon,
  BookmarkSquareIcon,
  CogIcon,
  FireIcon,
  HomeIcon,
  InboxIcon,
  KeyIcon,
  MagnifyingGlassCircleIcon,
  PhotoIcon,
  SquaresPlusIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import ChangePassword from "./ChangePassword";
import Avatar200x200 from "../../assets/images/200x200.png";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { Form } from "formik";
// import { MdAccountCircle } from 'react-icons/md';

export default function Setting({ user, onCancel }) {
  const { authTokens } = useContext(AuthContext);
  const [firstName, setFName] = useState(user.first_name);
  const [lastName, setLName] = useState(user.last_name);
  const [userName, setUserName] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [email, setEmail] = useState(user.email);

  const navigate = useNavigate();
  const [showChangePassword, setShowChangePassword] = useState(true);
  const changeshowtotrue = () => {
    setShowChangePassword(true);
  };
  const changeshowtofalse = () => {
    setShowChangePassword(false);
  };
  // const fetchData = async () => {
  //     try {
  //         const response = await fetch("http://127.0.0.1:8000/api/profile", {
  //             headers: {
  //                 Authorization: `Bearer ${authTokens.access}`,
  //             },
  //         });
  //         const data = await response.json();
  //         setData(data);
  //         console.log(data)
  //         setIsLoading(false);
  //     } catch (error) {
  //         console.error(error);
  //     }
  // };

  // const [editing, setEditing] = useState(false);
  // const handleEdit = () => {
  //     setEditing(true);
  //     };

  //     const handleSave = () => {
  //         setEditing(false);
  //         // Call API to save the updated first name
  //     };

  //     const handleCancel = () => {
  //         setEditing(false);
  //         // Reset the first name value to the original value
  //     };

  const [image2, setImage2] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const onSelectImage = (e) => {
    console.log(image2);
    const selectedImage2 = e.target.files[0];
    console.log("enter1");
    if (selectedImage2) {
      console.log("selectedImage");

      setImage2(selectedImage2);
      console.log(image2);

      const reader1 = new FileReader();
      reader1.onload = () => {
        setPreviewUrl(reader1.result);
        // formik.setFieldValue("main_picture_path", previewUrl);
      };
      reader1.readAsDataURL(selectedImage2);
    }
    console.log(image2);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("onsubmit");
    const user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: userName,
      bio: bio,
    };
    try {
      const { data } = await axios
        .put("/api/profile", user)
        .then((response) => response);
    } catch (error) {
      console.error(error);
    }

    if (image2) {
      const formData = new FormData();
      formData.append("image", image2);

      console.log("image=true");
      const resPic = await axios
        .putForm(`/api/upload?id=1&where=profile`, formData)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          // navigate(0);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    navigate(0);
  };
  const UploadProfileID = useId();

  return (
    <>
      <div className="flex h-full">
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <main className="flex flex-1 overflow-hidden">
            <div className="flex flex-1 flex-col overflow-y-auto xl:overflow-hidden">
              <div className="flex flex-1 xl:overflow-hidden">
                {/* Secondary sidebar */}

                {/* Main content */}
                <div className="flex-1 xl:overflow-y-auto">
                  <div className="text-left mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-blue-gray-900">
                      Account
                    </h1>

                    <form
                      className="divide-y-blue-gray-200 mt-6 space-y-8 divide-y"
                      onSubmit={handleUpdate}
                    >
                      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6">
                          <h2 className="text-xl font-medium text-blue-gray-900">
                            Profile
                          </h2>
                          <p className="mt-1 text-sm text-blue-gray-500">
                            This information will be displayed publicly so be
                            careful what you share.
                          </p>
                        </div>

                        <div className="sm:col-span-6">
                          <div className="avatar mt-1.5 h-20 w-20">
                            <img
                              className="mask is-squircle "
                              src={
                                previewUrl != ""
                                  ? previewUrl
                                  : user.picture_path != "" &&
                                    user.picture_path != "__"
                                  ? user.picture_path
                                  : Avatar200x200
                              }
                              alt="avatar"
                            />
                            <div className="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-navy-700">
                              <label
                                htmlFor={UploadProfileID}
                                className="btn h-6 w-6 rounded-full border border-slate-200 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:border-navy-500 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                              >
                                <input
                                  id={UploadProfileID}
                                  type="file"
                                  accept=".jpg, .jpeg, .png"
                                  onChange={onSelectImage}
                                  hidden
                                />
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3.5 w-3.5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium "
                          >
                            First name
                          </label>
                          <label className="block text-left">
                            <span className="relative mt-1.5 flex">
                            <input
                            value={firstName}
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                            onChange={(event) => setFName(event.target.value)}
                            required
                            
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
                                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                        />
                                    </svg>
                                </span>
                            </span>
                            
                            
                        </label>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium "
                          >
                            Last name
                          </label>
                          <label className="block text-left">
                            <span className="relative mt-1.5 flex">
                            <input
                            value={lastName}
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                            onChange={(event) => setLName(event.target.value)}
                            required
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
                                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                        />
                                    </svg>
                                </span>
                            </span>
                            
                            
                        </label>
                          
                        </div>

                        <div className="sm:col-span-6">
                          <label
                            htmlFor="username"
                            className="block text-sm font-medium "
                          >
                            Username
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                          <label className="block text-left">
                            <span className="relative mt-1.5 flex">
                            <input
                              value={userName}
                              type="text"
                              name="username"
                              id="username"
                              autoComplete="username"
                              className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                              onChange={(event) =>
                                setUserName(event.target.value)
                              }
                              disabled // Add the disabled attribute
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
                                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                        />
                                    </svg>
                                </span>
                            </span>
                            
                            
                        </label>
                            
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-blue-gray-900"
                          >
                            Email address
                          </label>
                          <label className="block text-left">
                            <span className="relative mt-1.5 flex">
                            <input
                            value={email}
                            type="text"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                            onChange={(event) => setEmail(event.target.value)}
                            disabled
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
                                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                        />
                                    </svg>
                                </span>
                            </span>
                            
                            
                        </label>
                          
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-y-6 pt-8 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6">
                          <h2 className="text-xl font-medium text-blue-gray-900">
                            Personal Information
                          </h2>
                          <p className="mt-3 text-sm text-blue-gray-500">
                            Brief description for your profile.
                          </p>
                        </div>
                        <div className="sm:col-span-6">
                          <label
                            htmlFor="description"
                            className="block text-sm  font-medium text-blue-gray-900"
                          >
                            
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                        className="inline-flex w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                        />
                                    </svg>
                            Description
                          </label>
                          
                          <div className="mt-1">
                            <textarea
                              value={bio}
                              id="description"
                              name="description"
                              rows={4}
                              className="form-textarea resize-none w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                              defaultValue={""}
                              onChange={(event) => setBio(event.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      

                      <div className="flex justify-end pt-8">
                        <button
                          type="submit"
                          className="mx-1 ml-3 inline-flex justify-center rounded-md border border-transparent text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                      <div style={{ borderTop: "1px solid white" }}></div>
                    </form>
                    {/* <button
                        className="absolute bottom-18 left-70 mx-2 flex items-center justify-between p px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 mr-2"
                        onClick={()=>changeshowtotrue()}
                        >
                        Change Password
                    </button> */}
                    <div>
                      {<ChangePassword setfalse={setShowChangePassword} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
