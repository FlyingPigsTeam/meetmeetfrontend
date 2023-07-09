import React, { useState, useContext, useEffect } from "react";
import classNames from "../utils/classNames";
import Avatar200x200 from "../assets/images/200x200.png";
import AppLogo from "../assets/images/app-logo.svg";
import EmptyBox from "../assets/images/illustrations/empty-girl-box.svg";
import { render } from "@testing-library/react";
import Chat from "../pages/Chat/Chat";
import { ClosingSidebar, OpeningSidebar } from "../Redux/Action";
import { useDispatch } from "react-redux";
import DarkModeToggle from "./DarkModeToggle";
import PopOver from "./PopOver";
import PopOverContext from "../context/PopOverContext";
import { useClickOutside } from "@mantine/hooks";
import NotifContext from "../context/NotifContext";
import { useQuery } from "react-query";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { data } from "autoprefixer";

export default function Header({ classes, children, ...restProps }) {
  return (
    <nav className={classNames("header print:hidden", classes)}>
      <div
        className={classNames(
          "header-container relative flex w-full bg-white dark:bg-navy-750 print:hidden",
          classes
        )}
      >
        {children}
      </div>
    </nav>
  );
}
Header.Items = function HeaderItem({ classes, children, ...restProps }) {
  return (
    <div
      className={classNames(
        "flex w-full items-center justify-between",
        classes
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};
Header.SidebarToggle = function HeaderSidebarToggle() {
  const [isSidebarExpanded, setSidebarExpanded] = useState(
    localStorage.getItem("sidebar") == "true" ? true : false
  );
  !document.body.classList.contains("is-sidebar-open")
    ? document.body.classList.add("is-sidebar-open")
    : document.body.classList.remove("is-sidebar-open");
  const dispatch = useDispatch();
  return (
    <div className={classNames("h-7 w-7")}>
      <button
        className={classNames(
          "menu-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
        )}
        onClick={() => {
          //console.log(isSidebarExpanded);
          setSidebarExpanded((curr) => !curr);
          setTimeout(() => {
            if (isSidebarExpanded) {
              dispatch(OpeningSidebar());
              localStorage.setItem("sidebar", "false");
            } else {
              localStorage.setItem("sidebar", "true");
              dispatch(ClosingSidebar());
            }
          }, 0);
          //dispatch(OpeningSidebar());
        }}
        // TODO : ="isSidebarExpanded && 'active'"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};
// TODO : CHAT HEADER

Header.Right = function HeaderRightItems({ children }, restProps) {
  return (
    <div className={classNames("-mr-1.5 flex items-center space-x-2")}>
      {children}
    </div>
  );
};

Header.Right.DarkModeToggle = DarkModeToggle;
Header.Right.Notification = function HeaderRightNotificationButton({
  classes,
  children,
  ...restProps
}) {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("tabAll");

  const toggle = () => {
    setShow((cur) => !cur);
    setNewnotif(false);
  };
  const notif_box = useClickOutside(() => setShow(false));
  const { Newnotif, setNewnotif } = useContext(NotifContext);
  const { user } = useContext(AuthContext);
  const { isLoading: isLoadingNotification, data: notification } = useQuery(
    "notification",
    () => {
      return axios.get(
        `https://meet-meet.ir/notification/notif/${user.user_id}`
      );
    }
  );
  console.log("data in notif part ", notification);
  console.log("new notif ", Newnotif);
  return (
    <>
      <PopOver
        Show={show}
        popperConfigs={{ placement: "bottom-end", offset: 12 }}
      >
        <PopOverContext.Consumer>
          {({
            referenceElement,
            setReferenceElement,
            popperElement,
            setPopperElement,
            arrowElement,
            setArrowElement,
            styles,
            attributes,
            Show,
          }) => (
            <>
              <div className="flex">
                <button
                  ref={setReferenceElement}
                  onClick={toggle}
                  className="btn relative h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-slate-500 dark:text-navy-100"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15.375 17.556h-6.75m6.75 0H21l-1.58-1.562a2.254 2.254 0 01-.67-1.596v-3.51a6.612 6.612 0 00-1.238-3.85 6.744 6.744 0 00-3.262-2.437v-.379c0-.59-.237-1.154-.659-1.571A2.265 2.265 0 0012 2c-.597 0-1.169.234-1.591.65a2.208 2.208 0 00-.659 1.572v.38c-2.621.915-4.5 3.385-4.5 6.287v3.51c0 .598-.24 1.172-.67 1.595L3 17.556h12.375zm0 0v1.11c0 .885-.356 1.733-.989 2.358A3.397 3.397 0 0112 22a3.397 3.397 0 01-2.386-.976 3.313 3.313 0 01-.989-2.357v-1.111h6.75z"
                    />
                  </svg>
                  {Newnotif && (
                    <span className="absolute -top-px -right-px flex h-3 w-3 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-80"></span>
                      <span className="inline-flex h-2 w-2 rounded-full bg-secondary"></span>
                    </span>
                  )}
                </button>
                <div
                  className={classNames("popper-root", Show && "show")}
                  ref={setPopperElement}
                  style={styles.popper}
                  {...attributes.popper}
                >
                  <div
                    ref={notif_box}
                    className="popper-box mx-4 mt-1 flex max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] flex-col rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-800 dark:bg-navy-700 dark:shadow-soft-dark sm:m-0 sm:w-80"
                  >
                    <div className="rounded-t-lg bg-slate-100 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
                      <div className="flex items-center justify-between px-4 pt-2">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-slate-700 dark:text-navy-100">
                            Notifications
                          </h3>
                          <div className="badge h-5 rounded-full bg-primary/10 px-1.5 text-primary dark:bg-accent-light/15 dark:text-accent-light">
                            {notification?.data?.length}
                          </div>
                        </div>

                        {/* <button className="btn -mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button> */}
                      </div>

                      <div className="is-scrollbar-hidden flex shrink-0 overflow-x-auto px-3">
                        <button
                          onClick={() => setActiveTab("tabAll")}
                          className={classNames(
                            "btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5",
                            activeTab === "tabAll"
                              ? "border-primary dark:border-accent text-primary dark:text-accent-light"
                              : "border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                          )}
                        >
                          <span>All</span>
                        </button>
                        <button
                          onClick={() => setActiveTab("tabTasks")}
                          className={classNames(
                            "btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5",
                            activeTab === "tabTasks"
                              ? "border-primary dark:border-accent text-primary dark:text-accent-light"
                              : "border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                          )}
                        >
                          <span>Tasks</span>
                        </button>
                        <button
                          onClick={() => setActiveTab("tabAddrooms")}
                          className={classNames(
                            "btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5",
                            activeTab === "tabAddrooms"
                              ? "border-primary dark:border-accent text-primary dark:text-accent-light"
                              : "border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                          )}
                        >
                          <span>AddRooms</span>
                        </button>
                        <button
                          onClick={() => setActiveTab("tabAccepts")}
                          className={classNames(
                            "btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5",
                            activeTab === "tabAccepts"
                              ? "border-primary dark:border-accent text-primary dark:text-accent-light"
                              : "border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                          )}
                        >
                          <span>Accepts</span>
                        </button>
                      </div>
                    </div>

                    <div className="tab-content flex flex-col overflow-hidden">
                      {activeTab === "tabAll" && (
                        <div
                          // x-transition:enter="transition-all duration-300 easy-in-out"
                          // x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]"
                          // x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]"
                          className="is-scrollbar-hidden space-y-4 overflow-y-auto px-4 py-4"
                        >
                          {notification?.data?.map((item, key) => (
                            <div
                              className="flex items-center space-x-3"
                              key={item.id}
                            >
                              {item.type === 1 && (
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 dark:bg-secondary-light/15">
                                  <i className="fa fa-user-edit text-secondary dark:text-secondary-light"></i>
                                </div>
                              )}
                              {item.type === 2 && (
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success/10 dark:bg-success-light/15">
                                  <i className="fa fa-user-edit text-success dark:text-success-light"></i>
                                </div>
                              )}
                              {item.type === 3 && (
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-info/10 dark:bg-info/15">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-info"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                </div>
                              )}
                              <div>
                                <p className="font-medium line-clamp-1 text-slate-600 dark:text-navy-100">
                                  {item.message}
                                </p>
                                <div className="mt-1 text-xs text-slate-400  dark:text-navy-300">
                                  {item.message}
                                </div>
                              </div>
                            </div>
                          ))}
                          {notification?.data?.filter((item) => true).length ===
                            0 && (
                            <div className="mt-8 pb-8 text-center">
                              <img
                                className="mx-auto w-36"
                                src={EmptyBox}
                                alt="image"
                              />
                              <div className="mt-5">
                                <p className="text-base font-semibold text-slate-700 dark:text-navy-100">
                                  No any logs
                                </p>
                                <p className="text-slate-400 dark:text-navy-300">
                                  There are no unread logs yet
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      {activeTab === "tabTasks" && (
                        <div
                          // x-transition:enter="transition-all duration-300 easy-in-out"
                          // x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]"
                          // x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]"
                          className="is-scrollbar-hidden space-y-4 overflow-y-auto px-4 py-4"
                        >
                          {notification?.data
                            ?.filter((item) => item.type === 3)
                            .map((item, key) => (
                              <div
                                className="flex items-center space-x-3"
                                key={item.id}
                              >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-info/10 dark:bg-info/15">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-info"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                </div>

                                <div>
                                  <p className="font-medium line-clamp-1 text-slate-600 dark:text-navy-100">
                                    {item.message}
                                  </p>
                                  <div className="mt-1 text-xs text-slate-400  dark:text-navy-300">
                                    {item.message}
                                  </div>
                                </div>
                              </div>
                            ))}
                          {notification?.data?.filter((item) => item.type === 3)
                            .length === 0 && (
                            <div className="mt-8 pb-8 text-center">
                              <img
                                className="mx-auto w-36"
                                src={EmptyBox}
                                alt="image"
                              />
                              <div className="mt-5">
                                <p className="text-base font-semibold text-slate-700 dark:text-navy-100">
                                  No any logs
                                </p>
                                <p className="text-slate-400 dark:text-navy-300">
                                  There are no unread logs yet
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      {activeTab === "tabAddrooms" && (
                        <div
                          // x-transition:enter="transition-all duration-300 easy-in-out"
                          // x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]"
                          // x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]"
                          className="is-scrollbar-hidden space-y-4 overflow-y-auto px-4 py-4"
                        >
                          {notification?.data
                            ?.filter((item) => item.type === 1)
                            .map((item, key) => (
                              <div
                                className="flex items-center space-x-3"
                                key={item.id}
                              >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 dark:bg-secondary-light/15">
                                  <i className="fa fa-user-edit text-secondary dark:text-secondary-light"></i>
                                </div>

                                <div>
                                  <p className="font-medium line-clamp-1 text-slate-600 dark:text-navy-100">
                                    {item.message}
                                  </p>
                                  <div className="mt-1 text-xs text-slate-400  dark:text-navy-300">
                                    {item.message}
                                  </div>
                                </div>
                              </div>
                            ))}
                          {notification?.data?.filter((item) => item.type === 1)
                            .length === 0 && (
                            <div className="mt-8 pb-8 text-center">
                              <img
                                className="mx-auto w-36"
                                src={EmptyBox}
                                alt="image"
                              />
                              <div className="mt-5">
                                <p className="text-base font-semibold text-slate-700 dark:text-navy-100">
                                  No any logs
                                </p>
                                <p className="text-slate-400 dark:text-navy-300">
                                  There are no unread logs yet
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      {activeTab === "tabAccepts" && (
                        <div
                          // x-transition:enter="transition-all duration-300 easy-in-out"
                          // x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]"
                          // x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]"
                          className="is-scrollbar-hidden overflow-y-auto px-4 py-4"
                        >
                          {notification?.data
                            ?.filter((item) => item.type === 2)
                            .map((item, key) => (
                              <div
                                className="flex items-center space-x-3"
                                key={item.id}
                              >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success/10 dark:bg-success-light/15">
                                  <i className="fa fa-user-edit text-success dark:text-success-light"></i>
                                </div>

                                <div>
                                  <p className="font-medium line-clamp-1 text-slate-600 dark:text-navy-100">
                                    {item.message}
                                  </p>
                                  <div className="mt-1 text-xs text-slate-400  dark:text-navy-300">
                                    {item.message}
                                  </div>
                                </div>
                              </div>
                            ))}

                          {notification?.data?.filter((item) => item.type === 2)
                            .length === 0 && (
                            <div className="mt-8 pb-8 text-center">
                              <img
                                className="mx-auto w-36"
                                src={EmptyBox}
                                alt="image"
                              />
                              <div className="mt-5">
                                <p className="text-base font-semibold text-slate-700 dark:text-navy-100">
                                  No any logs
                                </p>
                                <p className="text-slate-400 dark:text-navy-300">
                                  There are no unread logs yet
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    {/* <PopOver.Popper.Arrow /> */}
                  </div>
                </div>
              </div>

              {/* 
                                        <div
                                            className={classNames("popper-root", Show && "show")}
                                            ref={setPopperElement}
                                            style={styles.popper}
                                            {...attributes.popper}
                                        >
                                            <div className="popper-box max-w-xs">
                                                <div className="rounded-md border border-slate-150 bg-white p-4 dark:border-navy-600 dark:bg-navy-700">
                                                    <PopOver.Popper.Body.Default />
                                                </div>
                                                <PopOver.Popper.Arrow />
                                            </div>
                                        </div> */}
            </>
          )}
        </PopOverContext.Consumer>
      </PopOver>
    </>
  );
};

// TODO : Search Mobile & right Sidebar Toggle
