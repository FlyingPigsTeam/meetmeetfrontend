import React, { useState, useEffect, useContext } from "react";
// import { Route, Link, Routes } from "react-router-dom";
import axios from "axios";

import "../../index.css";
import AuthContext from "../../context/AuthContext";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MainSection from "../../components/MainSection";
import PageWrapper from "../../components/PageWrapper";
import DarkModeToggle from "../../components/DarkModeToggle";
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
import { CheckIcon } from "@heroicons/react/24/outline";

const pricing = {
  tiers: [
    {
      title: "Freelancer",
      price: 24,
      frequency: "/month",
      description: "The essentials to provide your best work for clients.",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
      cta: "Monthly billing",
      mostPopular: false,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Subscribtion = () => {
  const { authTokens, user } = useContext(AuthContext);
  const [data, setData] = useState({});
  const handleGetAccess = async () => {
    try {
      await axios.put("api/premium");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <PageWrapper>
        <Header>
          <Header.Items>
            {/* <Header.SidebarToggle /> */}
            <Header.Right>
              <Header.Right.DarkModeToggle />
              <Header.Right.Notification />
            </Header.Right>
          </Header.Items>
        </Header>
        <Sidebar>
          <Sidebar.Primary>
            <Sidebar.Primary.Logo />
            <Sidebar.Primary.Middle>
              <Sidebar.Primary.Middle.Home />
              {/* <Sidebar.Primary.Middle.LaterThings/> */}
              <Sidebar.Secondary.Expanded.Body.Middle.Divider />
              <Sidebar.Primary.Middle.Rooms>
                {/* <Sidebar.Primary.Middle.Rooms.Item /> */}
                <Sidebar.Primary.Middle.Rooms.LoadItems />
                <Sidebar.Primary.Middle.Rooms.AddRoom />

                {/* <Sidebar.Primary.Middle.Rooms.AllItem/> */}
              </Sidebar.Primary.Middle.Rooms>
            </Sidebar.Primary.Middle>
            <Sidebar.Primary.Bottom>
              {/* <Sidebar.Primary.Bottom.LogOut /> */}
              <Sidebar.Primary.Bottom.Profile />
            </Sidebar.Primary.Bottom>
          </Sidebar.Primary>
        </Sidebar>
        <MainSection>
          <div className="mx-auto max-w-7xl  py-12 px-4 sm:px-6 lg:px-8 card dark:bg-navy-800">
            <h2 className="text-3xl font-bold  sm:text-5xl sm:leading-none lg:text-6xl text-slate-800 dark:text-navy-50">
              Premium
            </h2>
            <p className="mt-6 text-lg text-slate-700 dark:text-navy-100">
              With the premium feature, you get the ability to expand the number
              of people in your group, and also display your event in a unique
              way, in a way that will be completely different and attract the
              opinion of other people.
            </p>
            <p class="mt-6 text-lg text-slate-700 dark:text-navy-100">
              You don't have to worry about the task creation limit anymore,
              with this ability you can easily create up to 30 tasks and easily
              coordinate all your programs. Also, your events will have a brief
              plan feature that will present your program with details and
              photos, which will double its appeal and will be very effective in
              increasing the number of people in the program..
            </p>

            <div class="  m-auto p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div class=" drop-shadow-lg shadow-soft shadow-slate-200 dark:shadow-navy-600   mt-10 rounded-2xl py-10 text-center bg-slate-100 dark:bg-navy-900 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div class=" mx-auto max-w-xs px-3">
                  <h3 class="text-4xl font-bold dark:text-navy-50 text-slate-800">
                    Premium Feature
                  </h3>
                  <p class=" mt-4 text-base font-semibold text-slate-500 dark:text-gray-100">
                    Pay once, own it forever
                  </p>
                  <p class="mt-6 flex items-baseline justify-center gap-x-2">
                    <span class="text-5xl font-bold tracking-tight text-slate-600 dark:text-navy-100">
                      $26
                    </span>
                    <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-100">
                      USD
                    </span>
                  </p>
                  <ul
                    role="list"
                    class="mt-16 grid gap-2 text-md text-slate-600 text-left dark:text-gray-100"
                  >
                    <li class="flex gap-x-3">
                      <svg
                        class="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Increasing the number of group members to 40
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        class="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Increasing the number of tasks to 30
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        class="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Add a brief plan
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        class="h-6 w-5 flex-none text-indigo-600 "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      All features of the general panel
                    </li>
                  </ul>
                  <button
                    onClick={handleGetAccess}
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </MainSection>
      </PageWrapper>
    </>
  );
};

export default Subscribtion;
