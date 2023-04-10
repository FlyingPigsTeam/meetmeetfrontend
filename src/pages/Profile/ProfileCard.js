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
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            View and edit your personal details.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                First Name
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{user.first_name}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Last Name
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{user.last_name}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Username
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{user.username}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Bio</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.bio}</dd>
            </div>
          </dl>
        </div>
        <div className="px-4 py-3 sm:px-6">
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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