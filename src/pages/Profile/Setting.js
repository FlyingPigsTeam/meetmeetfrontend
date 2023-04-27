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
import { Fragment, useState } from 'react';
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
// import { MdAccountCircle } from 'react-icons/md';


export default function Setting({ user, onUpdate, onCancel }) {
  console.log(user.first_name);
  const [firstName, setFName] = useState(user.first_name);
  console.log(user.firstName);
  const [lastName, setLName] = useState(user.last_name);
  const [userName, setUserName] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState('');
  const navigate=useNavigate();
  const [showChangePassword,setShowChangePassword] = useState(false);
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
      await onUpdate(user);
    } catch (error) {
      console.error(error);
    }
  }
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    // call your API to upload the file and get the URL of the uploaded image
    // then update the state with the URL
    setImage(URL.createObjectURL(file));
  }

  return (
    <>
    <button
      className=" absolute px-4 py-2 text-white top-0 right-0 bg-blue-500 rounded hover:bg-blue-600 mr-2"
      onClick={()=>changeshowtotrue()}
    >
      Change Password
    </button>

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
                          <label htmlFor="photo" className="block text-sm font-medium text-blue-gray-900">
                            Photo
                          </label>
                          <div className="mt-1 flex items-center">
                            {image ? (
                              <img
                                className="inline-block h-12 w-12 rounded-full"
                                src={image}
                                alt=""
                              />
                            ) : (
                              <div className="inline-block h-12 w-12 rounded-full bg-gradient-to-tr from-purple-400 to-pink-500 flex items-center justify-center">
                                <span className="text-white text-2xl font-bold">+</span>
                              </div>
                            )}
                            <div className="ml-4 flex">
                              <div className="flex flex-col">
                                <div className="relative flex cursor-pointer items-center rounded-md border border-blue-gray-300 text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-3 shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 hover:bg-blue-gray-50">
                                  <label htmlFor="user-photo" className="pointer-events-none relative  text-sm font-medium text-blue-gray-900">
                                    <span>Change</span>
                                    <span className="sr-only"> user photo</span>
                                  </label>
                                  <input
                                    id="user-photo"
                                    name="user-photo"
                                    type="file"
                                    className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                                    onChange={handleImageUpload}
                                  />
                                </div>
                                {/* <span className="text-sm text-blue-gray-500 mt-1">(max size: 5MB)</span> */}
                              </div>
                              <div className="ml-3 flex">
                                <div className="relative flex cursor-pointer items-center rounded-md border border-red-500 bg-blue-600 py-2 px-3 shadow-sm text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 focus-within:ring-offset-red-50 hover:bg-red-600">
                                  <label
                                    htmlFor="remove-photo"
                                    className="pointer-events-none relative text-sm font-medium"
                                  >
                                    <span>Remove</span>
                                    <span className="sr-only"> user photo</span>
                                  </label>
                                  <input
                                    id="remove-photo"
                                    name="remove-photo"
                                    type="button"
                                    className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                                  // onClick={handleRemoveImage}
                                  />
                                </div>
                              </div>
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
                      <div>
                        
                        {showChangePassword && <ChangePassword />}
                      </div>
  
                      <div className="flex justify-end pt-8">
                      
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center rounded-md border border-transparent text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                    
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
