import React, { useState } from "react";

function AccountInfo({ handleEdit, user }) {
const handleEditProfileClick = () => {
    handleEdit();
};

return (
<div className="min-h-full">
<main className="py-10">
{/* Page header */}
<h1 className="text-3xl font-bold text-center mb-8">Account Information</h1>
    <section>
      <div className="  sm:rounded-lg">
        <div className=" sm:px-6">
          <h2 className="text-lg font-medium leading-6 ">
            Personal Information
          </h2>
          <p className=" ">
            View and edit your personal details.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-12 gap-x-6 gap-y-6 sm:grid-cols-1">
            <div className="sm:col-span-4">
              <dt className="text-sm font-medium ">
                First Name
              </dt>
              <dd className="mt-1 text-sm ">{user.first_name}</dd>
            </div>
            <div className="sm:col-span-4">
              <dt className="text-sm font-medium ">
                Last Name
              </dt>
              <dd className="mt-1 text-sm ">{user.last_name}</dd>
            </div>
            <div className="sm:col-span-4">
              <dt className="text-sm font-medium ">
                Username
              </dt>
              <dd className="mt-1 text-sm ">{user.username}</dd>
            </div>
            <div className="sm:col-span-12">
              <dt className="text-sm font-medium ">Email</dt>
              <dd className="mt-1 text-sm ">{user.email}</dd>
            </div>
            <div className="sm:col-span-12">
              <dt className="text-sm font-medium">Bio</dt>
              <dd className="mt-1 text-sm ">{user.bio}</dd>
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
    </section>
  </main>
</div>
);
}

export default AccountInfo;