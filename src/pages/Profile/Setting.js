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
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
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
} from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import ChangePassword from './ChangePassword';
import Avatar200x200 from "../../assets/images/200x200.png";
// import { MdAccountCircle } from 'react-icons/md';


export default function Setting({ user, onUpdate, onCancel }) {
  console.log(user.first_name);
  const [firstName, setFName] = useState(user.first_name);
  console.log(user.firstName);
  const [lastName, setLName] = useState(user.last_name);
  const [userName, setUserName] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [email, setEmail] = useState(user.email);

  const navigate=useNavigate();
  const [showChangePassword,setShowChangePassword] = useState(true);
  const changeshowtotrue = ()=>{
    setShowChangePassword(true);
  };
  const changeshowtofalse = ()=>{
    setShowChangePassword(false);
  };
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

  async function handleSubmit() {
    try {
      const user = {
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "username": userName,
        "bio": bio
      };
      await onUpdate(user,image);
    } catch (error) {
      console.error(error);
    }
  }



  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const onSelectImage = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {

      setImage(selectedImage);

      const reader = new FileReader();
      reader.onload = () => {

        setPreviewUrl(reader.result);
        // formik.setFieldValue("main_picture_path", previewUrl);
      };
      reader.readAsDataURL(selectedImage);
    }
  };
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
                    <h1 className="text-3xl font-bold tracking-tight text-blue-gray-900">Account</h1>

                    <form className="divide-y-blue-gray-200 mt-6 space-y-8 divide-y" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6">
                          <h2 className="text-xl font-medium text-blue-gray-900">Profile</h2>
                          <p className="mt-1 text-sm text-blue-gray-500">
                            This information will be displayed publicly so be careful what you share.
                          </p>
                        </div>

                        <div className="sm:col-span-6">
                          <div className="avatar mt-1.5 h-20 w-20">
                            <img className="mask is-squircle "
                                 src={
                                   previewUrl != '' ? previewUrl :
                                       user.picture_path != "" &&
                                       user.picture_path != "__" ? user.picture_path :
                                           Avatar200x200
                                 }
                                 alt="avatar"/>
                            <div
                                className="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-navy-700">

                              <label htmlFor={"edit-avatar-btn"}
                                     className="btn h-6 w-6 rounded-full border border-slate-200 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:border-navy-500 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                <input type="file" id="edit-avatar-btn" onChange={onSelectImage} hidden/>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                  <path
                                      d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                                </svg>
                              </label>
                            </div>
                          </div>
                        </div>



                        <div className="sm:col-span-3">
                          <label htmlFor="first-name" className="block text-sm font-medium ">
                            First name
                          </label>
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
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium ">
                            Last name
                          </label>
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
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="username" className="block text-sm font-medium ">
                            Username
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">

                            <input
                              value={userName}
                              type="text"
                              name="username"
                              id="username"
                              autoComplete="username"
                              className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                              onChange={(event) => setUserName(event.target.value)}
                              disabled // Add the disabled attribute
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label htmlFor="email-address" className="block text-sm font-medium text-blue-gray-900">
                            Email address
                          </label>
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
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-y-6 pt-8 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6">
                          <h2 className="text-xl font-medium text-blue-gray-900">Personal Information</h2>
                          <p className="mt-3 text-sm text-blue-gray-500">
                            Brief description for your profile.
                          </p>
                        </div>
                        <div className="sm:col-span-6">
                          <label htmlFor="description" className="block text-sm  font-medium text-blue-gray-900">
                            Description
                          </label>
                          <div className="mt-1">
                            <textarea
                              value={bio}
                              id="description"
                              name="description"
                              rows={4}
                              className="form-textarea resize-none w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                              defaultValue={''}
                              onChange={(event) => setBio(event.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    
                    
                      <div className="flex justify-end pt-8    ">
                      
                        
                        
                        <button
                          type="submit"
                          className="mx-1 ml-3 inline-flex justify-center rounded-md border border-transparent text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                      <div style={{ borderTop: '1px solid white' }}></div>
                    </form>
                    {/* <button
                          className="absolute bottom-18 left-70 mx-2 flex items-center justify-between p px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 mr-2"
                          onClick={()=>changeshowtotrue()}
                        >
                          Change Password
                    </button> */}
                    <div >
                        
                        { <ChangePassword setfalse={setShowChangePassword} />}
                      </div>
                      <div style={{ borderTop: '1px solid white' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
