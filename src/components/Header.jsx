import React from "react";

const Header = () => {
  return (
    <div className="grid dark:bg-navy-800 bg-slate-400 grid-cols-12 justify-items-start fixed w-screen z-50">
      <div className="text-slate-800 dark:text-navy-100 dark:hover:text-navy-200 hover:text-slate-700 cursor-pointer col-start-1 col-end-10 m-6 text-5xl font-bold">
        <h2>Meet Meet</h2>
      </div>
      <div className=" text-slate-200 hover:text-slate-300 bg-slate-800 hover:bg-slate-700 dark:text-navy-800 dark:bg-navy-100 dark:hover:text-navy-700 dark:hover:bg-navy-200 duration-200  cursor-pointer col-start-10 col-end-11 m-6 text-xl mt-6 h-12 pt-2.5 w-32 rounded-lg font-bold">
        <button>Log Out</button>
      </div>
      <div className="my-auto ml-20 text-3xl cursor-pointer font-semibold flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8  text-slate-800 hover:text-slate-700 dark:text-navy-100 dark:hover:text-navy-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <div className="text-slate-800 hover:text-slate-700 dark:text-navy-100 dark:hover:text-navy-200">Username</div>
      </div>
    </div>
  );
};

export default Header;
