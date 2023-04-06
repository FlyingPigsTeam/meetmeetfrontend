import React from "react";

import SidebarNavigation from "../../../components/SidebarNavigation";
import Header from "../../../components/Header";
import InformationForm from "./InformationForm";
import AddRoom from "../AddRoom";
import Avatar200x200 from "../../../assets/images/200x200.png";
import InformationPage from "./InformationPage";
import Members from "./Members";


const InfoTab = () => {
  return (
    <>
      <div id="root" class="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
        {/* <div class="flex items-center space-x-4 py-5 lg:py-6">
          <h2 class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
            Form Layout 5
          </h2>
          <div class="hidden h-full py-1 sm:flex">
            <div class="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
          </div>
          <ul class="hidden flex-wrap items-center space-x-2 sm:flex">
            <li class="flex items-center space-x-2">
              <a
                class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                href="#"
              >
                Forms
              </a>
              <svg
                x-ignore
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li>Form Layout 5</li>
          </ul>
        </div> */}
        {/* <Header />
      <div
        style={{
          paddingTop: "12vh",
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
        }}
      >
        <SidebarNavigation />
        <div
          className="bg-cyan-900 text-left"
          style={{ width: "85vw", marginLeft: "13.9vw" }}
        > */}
        <main class="main-content w-full px-[var(--margin-x)] pb-8">
          {/* <TestInf /> */}
          <div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
            <div class="col-span-12 lg:col-span-6">
              {/* <VerticalNav />
              <AddRoom /> */}
                <InformationPage />
                <Members/>

            </div>
            <div class="col-span-12 lg:col-span-6">
              {/* <div class="card"> */}
                <InformationForm Title="Edit" />
              {/* </div> */}
            </div>
          </div>
        </main>
        {/* </div>
      </div> */}
      </div>
    </>
  );
};

export default InfoTab;

const VerticalNav = () => {
  return (
    <>
      <div class="card p-4 sm:p-5">
        <div class="flex items-center space-x-4">
          <div class="avatar h-14 w-14">
            <img class="rounded-full" src={Avatar200x200} alt="avatar" />
          </div>
          <div>
            <h3 class="text-base font-medium text-slate-700 dark:text-navy-100">
              Travis Fuller
            </h3>
            <p class="text-xs+ text-left">Admin</p>
          </div>
        </div>
        <ul class="mt-6 space-y-1.5 font-inter font-medium">
          <li>
            <a
              class="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent"
              href="#"
            >
              <i class="fa-solid fa-circle-info "></i>

              <span>Information</span>
            </a>
          </li>
          <li>
            <a
              class="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
              href="#"
            >
              <i class="fa-solid fa-users"></i>

              <span>Members</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
