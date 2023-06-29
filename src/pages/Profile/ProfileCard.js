import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar200x200 from '../../assets/images/200x200.png'
function AccountInfo({ handleEdit, user }) {
  const navigate=useNavigate();
const handleEditProfileClick = () => {
    handleEdit();
};

return (
<div >
{/* Page header */}

      <div className="  text-left">
      <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
          <h2 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
          Personal Information
          </h2>
          <div className="badge space-x-2 bg-primary text-white dark:bg-accent">
                    {user.usertype==1 ? (
                      <>
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                        
                        <span>Premium</span>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>

                        <span>Normal</span>
                      </>
                    )}
                  </div>
          { (
            <div className="flex justify-center space-x-2">
              {/* <button onClick={()=>navigate("/profile")} className="badge space-x-2 bg-error text-white">
                <span>Cancle</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
               */}
            </div>
          )}
        </div>
         <div className="flex flex-col my-2">
          <div className="avatar mt-1.5 h-20 w-20">
            <img className="mask is-squircle"
                 src={user.picture_path === "" || user.picture_path === "__" ? Avatar200x200 : user.picture_path}
                 alt="avatar" />
          </div>
        </div>

        {/* <div className=" sm:px-6">*/}
        {/*  <h2 className="text-lg font-medium leading-6 ">*/}
        {/*    Personal Information*/}
        {/*  </h2>*/}
        {/*  <p className=" ">*/}
        {/*    View and edit your personal details.*/}
        {/*  </p>*/}
        {/*</div>*/}
        <div className="mt-5  dark:border-navy-500">
          <dl className="divide-y divide-slate-200 dark:divide-navy-500">
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="text-sm font-medium ">FirstName</dt>
              <dd className="mt-1 flex text-sm  sm:col-span-2 sm:mt-0">
                <span className="flex-grow">{user.first_name}</span>
                {/* <span className="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Update
                  </button>
                </span> */}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="text-sm font-medium ">LastName</dt>
              <dd className="mt-1 flex text-sm  sm:col-span-2 sm:mt-0">
                <span className="flex-grow">{user.last_name}</span>
                {/* <span className="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Update
                  </button>
                </span> */}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="text-sm font-medium ">UserName</dt>
              <dd className="mt-1 flex text-sm  sm:col-span-2 sm:mt-0">
                <span className="flex-grow">{user.username}</span>
                {/* <span className="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Update
                  </button>
                </span> */}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="text-sm font-medium ">Email</dt>
              <dd className="mt-1 flex text-sm  sm:col-span-2 sm:mt-0">
                <span className="flex-grow">{user.email}</span>
                {/* <span className="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Update
                  </button>
                </span> */}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="text-sm font-medium ">Bio</dt>
              <dd className="mt-1 flex text-sm  sm:col-span-2 sm:mt-0">
                <span className="flex-grow">{user.bio}</span>
                {/* <span className="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Update
                  </button>
                </span> */}
              </dd>
            </div>
          </dl>
        </div>
        <div className="px-4 py-2 sm:px-6">
          <button
            className=" inline-flex items-center px-4 py-2 border border-transparent rounded-md -sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleEdit}
          >
            Edit Profile
          </button>
        </div>
      </div>
</div>
);
}

export default AccountInfo;