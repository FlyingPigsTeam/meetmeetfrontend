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
import { Fragment, useState } from 'react'
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
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
// import { MdAccountCircle } from 'react-icons/md';


export default function Setting({user ,onUpdate,onCancel }) {
    console.log(user.first_name);
    const [firstName, setFName] = useState(user.first_name);
    console.log(user.firstName);
    const [lastName, setLName] = useState(user.last_name);
    const [userName, setUserName] = useState(user.username);
    const [bio, setBio] = useState(user.bio);
    const [email, setEmail] = useState(user.email);
    const [image, setImage] = useState('');
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
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-blue-gray-50">
        <body class="h-full overflow-hidden">
        ```
      */}
            <div className="flex h-full">
                
                {/* Static sidebar for desktop */}


                <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                    

                    <main className="flex flex-1 overflow-hidden">
                        <div className="flex flex-1 flex-col overflow-y-auto xl:overflow-hidden">
                            {/* Breadcrumb */}
                            <nav aria-label="Breadcrumb" className="border-b border-blue-gray-200 bg-white xl:hidden">
                                <div className="mx-auto flex max-w-3xl items-start py-3 px-4 sm:px-6 lg:px-8">
                                    <a
                                        href="#"
                                        className="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-blue-gray-900"
                                    >
                                        <ChevronLeftIcon className="h-5 w-5 text-blue-gray-400" aria-hidden="true" />
                                        <span>Settings</span>
                                    </a>
                                </div>
                            </nav>

                            <div className="flex flex-1 xl:overflow-hidden">
                                {/* Secondary sidebar */}


                                {/* Main content */}
                                <div className="flex-1 xl:overflow-y-auto">
                                    <div className="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
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
                                                            <div className="inline-block h-12 w-12 rounded-full bg-blue-gray-100"></div>
                                                        )}
                                                        <div className="ml-4 flex">
                                                            <div className="relative flex cursor-pointer items-center rounded-md border border-blue-gray-300 bg-white py-2 px-3 shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 hover:bg-blue-gray-50">
                                                                <label
                                                                    htmlFor="user-photo"
                                                                    className="pointer-events-none relative text-sm font-medium text-blue-gray-900"
                                                                >
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
                                                            <button
                                                                type="button"
                                                                className="ml-3 rounded-md border border-transparent bg-transparent py-2 px-3 text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:border-blue-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-gray-50"
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label htmlFor="first-name" className="block text-sm font-medium text-blue-gray-900">
                                                        First name
                                                    </label>
                                                    <input
                                                        value={firstName}
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="mt-1 block w-full rounded-md border-blue-gray-300 text-blue-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                                        onChange={(event) => setFName(event.target.value)}
                                                    />
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-blue-gray-900">
                                                        Last name
                                                    </label>
                                                    <input
                                                        value={lastName}
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="mt-1 block w-full rounded-md border-blue-gray-300 text-blue-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                                        onChange={(event) => setLName(event.target.value)}
                                                    />
                                                </div>

                                                <div className="sm:col-span-6">
                                                    <label htmlFor="username" className="block text-sm font-medium text-blue-gray-900">
                                                        Username
                                                    </label>
                                                    <div className="mt-1 flex rounded-md shadow-sm">
                                                        {/* <span className="inline-flex items-center rounded-l-md border border-r-0 border-blue-gray-300 bg-blue-gray-50 px-3 text-blue-gray-500 sm:text-sm">
                                                            workcation.com/
                                                        </span> */}
                                                        <input
                                                            value={userName}
                                                            type="text"
                                                            name="username"
                                                            id="username"
                                                            autoComplete="username"
                                                            // defaultValue="lisamarie"
                                                            className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-blue-gray-300 text-blue-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                                            onChange={(event) => setUserName(event.target.value)}
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
                                                        className="mt-1 block w-full rounded-md border-blue-gray-300 text-blue-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                                        onChange={(event) => setEmail(event.target.value)}
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
                                                    <label htmlFor="description" className="block text-sm font-medium text-blue-gray-900">
                                                        Description
                                                    </label>
                                                    <div className="mt-1">
                                                        <textarea
                                                            value={bio}
                                                            id="description"
                                                            name="description"
                                                            rows={4}
                                                            className="block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                                            defaultValue={''}
                                                            onChange={(event) => setBio(event.target.value)}
                                                        />
                                                    </div>
                                                    
                                                </div>

                                                
                                            </div>

                                            <div className="flex justify-end pt-8">
                                                <button
                                                    type="button"
                                                    className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-blue-gray-900 shadow-sm hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                                    onClick={() =>onCancel()}
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
