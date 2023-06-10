import React, { useState, useContext, useEffect } from "react";
import classNames from "../utils/classNames";
import Avatar200x200 from "../assets/images/200x200.png";
import AppLogo from "../assets/images/app-logo.svg";
import { render } from "@testing-library/react";
import Chat from "../pages/Chat/Chat";
import { ClosingSidebar, OpeningSidebar } from "../Redux/Action";
import { useDispatch } from "react-redux";

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

// TODO : Search Mobile & right Sidebar Toggle
