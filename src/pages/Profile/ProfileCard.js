import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
          { (
            <div className="flex justify-center space-x-2">
              
              
            </div>
          )}
        </div>
        {/* <div className="flex flex-col my-2">
          <div className="avatar mt-1.5 h-20 w-20">
            <img className="mask is-squircle" src={Avatar200x200} alt="avatar" />
          </div>
        </div> */}
        {/* <div className=" sm:px-6">
          <h2 className="text-lg font-medium leading-6 ">
            Personal Information
          </h2>
          <p className=" ">
            View and edit your personal details.
          </p>
        </div> */}
        <div className="mt-5 border-t border-slate-200 dark:border-navy-500">
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
        <div className="px-4 py-3 sm:px-6">
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md -sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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