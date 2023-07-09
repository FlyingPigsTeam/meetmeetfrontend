import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";

import PageWrapper from "../../../components/PageWrapper";
import MainSection from "../../../components/MainSection";

import AddRoom from "../AddRoom";

import InformationForm from "./InformationForm";
import InformationPage from "./InformationPage";
import Members from "./Members";

import Avatar200x200 from "../../../assets/images/200x200.png";
import { useState } from "react";
import Spinner from "../../../components/Spinner"

const InfoTab = () => {
  const { idroom } = useParams();
  const [spinner1, setSpinner1] = useState(true)
  const [spinner2, setSpinner2] = useState(true)

  return (
    <>
      <PageWrapper>
        <Header>
          <Header.Items>
            <Header.SidebarToggle />
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
          <Sidebar.Secondary>
            <Sidebar.Secondary.Expanded>
              <Sidebar.Secondary.Expanded.Header>
                <Sidebar.Secondary.Expanded.Header.Title>
                  <Sidebar.Secondary.Expanded.Header.Title.Icon />
                  <Sidebar.Secondary.Expanded.Header.Title.Text>
                    Tabs
                  </Sidebar.Secondary.Expanded.Header.Title.Text>
                </Sidebar.Secondary.Expanded.Header.Title>
                <Sidebar.Secondary.Expanded.Header.MinimizeButton />
              </Sidebar.Secondary.Expanded.Header>
              <Sidebar.Secondary.Expanded.Body>
                <Sidebar.Secondary.Expanded.Body.Tabs>
                  <Sidebar.Secondary.Expanded.Body.Tabs.Chat />
                  <Sidebar.Secondary.Expanded.Body.Tabs.Todo />
                  <Sidebar.Secondary.Expanded.Body.Tabs.InfoTab />
                  {/* <Sidebar.Secondary.Expanded.Body.Tabs.AllItems /> */}
                </Sidebar.Secondary.Expanded.Body.Tabs>
                {/* <Sidebar.Secondary.Expanded.Body.Middle.TopButton />
              <Sidebar.Secondary.Expanded.Body.Middle.Items>
                <Sidebar.Secondary.Expanded.Body.Middle.Items.AllItem />
              </Sidebar.Secondary.Expanded.Body.Middle.Items>
              <Sidebar.Secondary.Expanded.Body.Middle.Divider />
              <Sidebar.Secondary.Expanded.Body.Middle.SectionHeader />
              <Sidebar.Secondary.Expanded.Body.Middle.Items>
                <Sidebar.Secondary.Expanded.Body.Middle.Items.AllLabelItems />
              </Sidebar.Secondary.Expanded.Body.Middle.Items> */}
                <ul className="mt-5 space-y-1.5 px-2 font-inter  font-medium">
                  <li>
                    <Link
                      to={`/room/${idroom}/info`}

                      className={
                        false
                          ? "cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all bg-slate-300 dark:bg-navy-500 text-slate-800 dark:text-navy-100"
                          : "cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all text-slate-800 hover:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600"
                      }
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>

                      <span>Room Informations</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/room/${idroom}/chat`}

                      className={
                        false
                          ? "cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all bg-slate-300 dark:bg-navy-500 text-slate-800 dark:text-navy-100"
                          : "cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all text-slate-800 hover:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>

                      <span>Chat</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/room/${idroom}/task`}

                      className={
                        false
                          ? "cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all bg-slate-300 dark:bg-navy-500 text-slate-800 dark:text-navy-100"
                          : "cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all text-slate-800 hover:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600"
                      }
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5293 18L20.9999 8.40002"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M3 13.2L7.23529 18L17.8235 6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>

                      <span>Tasks</span>
                    </Link>
                  </li>

                </ul>
              </Sidebar.Secondary.Expanded.Body>
            </Sidebar.Secondary.Expanded>
            <Sidebar.Secondary.Minimized>
              <Sidebar.Secondary.Minimized.Header />
              {/* <Sidebar.Secondary.Minimized.Body>
              <Sidebar.Secondary.Minimized.Body.Middle />
              <Sidebar.Secondary.Minimized.Body.MoreActions />
            </Sidebar.Secondary.Minimized.Body> */}
            </Sidebar.Secondary.Minimized>

          </Sidebar.Secondary>
        </Sidebar>
        <MainSection>

          {spinner1 && spinner2 && <div className=" flex justify-center mb-4 mt-[6vh]" style={{}}>
            <div className=" m-auto " style={{ margin: "0 auto" }}>
              <Spinner />
            </div>
          </div>}
          <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
            <div className="col-span-12 lg:col-span-6">
              {/* <VerticalNav />
              <AddRoom /> */}
              <InformationPage UpperLoading={spinner2} setUpperLoading={setSpinner2} />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Members UpperLoading={spinner1} setUpperLoading={setSpinner1} />
              {/* <div className="card"> */}
              {/* <InformationForm Title="Add" /> */}
              {/* </div> */}
            </div>
          </div>
        </MainSection>
      </PageWrapper>
    </>
  );
};

export default InfoTab;

const VerticalNav = () => {
  return (
    <>
      <div className="card p-4 sm:p-5">
        <div className="flex items-center space-x-4">
          <div className="avatar h-14 w-14">
            <img className="rounded-full" src={Avatar200x200} alt="avatar" />
          </div>
          <div>
            <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
              Travis Fuller
            </h3>
            <p className="text-xs+ text-left">Admin</p>
          </div>
        </div>
        <ul className="mt-6 space-y-1.5 font-inter font-medium">
          <li>
            <a
              className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent"
              href="#"
            >
              <i className="fa-solid fa-circle-info "></i>

              <span>Information</span>
            </a>
          </li>
          <li>
            <a
              className="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
              href="#"
            >
              <i className="fa-solid fa-users"></i>

              {/* <span>Members</span> */}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
