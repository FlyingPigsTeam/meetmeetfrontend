import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Menu, Transition } from "@headlessui/react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AutoComplete from "../../../components/AutoComplete";
import AuthContext from "../../../context/AuthContext";

import Avatar200x200 from "../../../assets/images/200x200.png";

const Members = () => {
  const {idroom} =useParams();
  const navigate = useNavigate();
  let authTokens = useContext(AuthContext).authTokens;
  let [users_Data, setUser_Data] = useState([]);
  let [roomData, setRoomData] = useState({});
  const req = async () => {
    const { data } = await axios
      .get(`http://127.0.0.1:8000/api/my-rooms/${idroom}/requests?show_members=1`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authTokens.access,
        },
      })
      .then((response) => response);
    console.log("memberFetch", data);
    setUser_Data(data);
  };
  const thisroom = async () => {
    const { data } = await axios
        .get(`http://127.0.0.1:8000/api/my-rooms/${idroom}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + authTokens.access,
          },
        })
        .then((response) => response);
    console.log("roomDataFetch", data);
    setRoomData(data);

  };
  useEffect(() => {
    req();
    thisroom();
  }, [idroom]);

  useEffect(() => {
    req();
  }, [idroom]);


  const ConvertRole = (member) => {
    const result =
      member.is_owner === true &&
      member.is_member === true &&
      member.request_status === 3
        ? "Owner"
        : member.is_member === true && member.is_owner === false
        ? "Member"
        : member.request_status === 0 &&
          member.is_member === false &&
          member.is_owner === false
        ? "Pending"
        : "WTF USER ROLE";
    if (result === "WTF USER ROLE") {
      console.log("🚀Members.js:131 ~ ConvertRole", result);
    }
    return result;
  };
  const actionsDetails = {
    Accept: {
      actionName: "Accept",
      iconPath: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </>
      ),
      action: (requestId) => {
        console.log("YAROO",`http://127.0.0.1:8000/api/my-rooms/${idroom}/requests?request_id=${requestId}` ,
            )
        const acceptUser = async () => {
          const { data } = await axios
            .put(
              `http://127.0.0.1:8000/api/my-rooms/${idroom}/requests?request_id=${requestId}`,
              { is_member: true, request_status: 2 },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + authTokens.access,
                },
              }
            )
            .then((response) => response);
          console.log("memberAccept", data);
        };
        acceptUser();
        navigate(0);
      },
    },
    Kick: {
      actionName: "Kick",
      iconPath: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </>
      ),
      action: (requestId) => {

        const deleteUser = async () => {
          const { data } = await axios
            .delete(
              `http://127.0.0.1:8000/api/my-rooms/${idroom}/requests?request_id=${requestId}`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + authTokens.access,
                },
              }
            )
            .then((response) => response);
          console.log("memberKick", data);
        };
        deleteUser();
        navigate(0);
      },
    },

    Reject: {
      actionName: "Reject",
      iconPath: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </>
      ),
      action: (requestId) => {

        const deleteUser = async () => {
          const { data } = await axios
            .delete(
              `http://127.0.0.1:8000/api/my-rooms/${idroom}/requests?request_id=${requestId}`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + authTokens.access,
                },
              }
            )
            .then((response) => response);
          console.log("memberReject", data);
        };
        deleteUser();
        navigate(0);
      },
    },
  };
  const roleDetails = {
    Owner: {
      Title: "Owner",
      ListBadge: (
        <>
          <div className="badge rounded-full border border-secondary text-secondary dark:border-secondary-light dark:text-secondary-light">
            Owner
          </div>
        </>
      ),
      Actions: [],
    },
    Member: {
      Title: "Member",
      ListBadge: (
        <>
          <div className="badge rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light">
            Member
          </div>
        </>
      ),
      Actions: ["Kick"],
    },
    Pending: {
      Title: "Pending",
      ListBadge: (
        <>
          <div className="badge rounded-full border border-info text-info">
            Pending
          </div>
        </>
      ),
      Actions: ["Accept", "Reject"],
    },
  };
  return (
    <>
      <div>
        {/* <div className="flex items-center justify-between">
          <h2 className="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
            Users Table
          </h2>
          <div className="flex">

            <div className="flex items-center" x-data="{isInputActive:false}">
              <label className="block">
                <input
                  // x-effect="isInputActive === true && $nextTick(() => { $el.focus()});"
                  // :className="isInputActive ? 'w-32 lg:w-48' : 'w-0'"
                  className="form-input bg-transparent px-1 text-right transition-all duration-100 placeholder:text-slate-500 dark:placeholder:text-navy-200"
                  placeholder="Search here..."
                  type="text"
                />
              </label>
              <button
                // @click="isInputActive = !isInputActive"
                className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4.5 w-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <div
              // x-data="usePopper({placement:'bottom-end',offset:4})"
              // @click.outside="isShowPopper && (isShowPopper = false)"
              className="inline-flex"
            >
              <button
                // x-ref="popperRef"
                // @click="isShowPopper = !isShowPopper"
                className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4.5 w-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
              <div
                x-ref="popperRoot"
                className="popper-root"
                // :className="isShowPopper && 'show'"
              >
                <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                      >
                        Another Action
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                      >
                        Something else
                      </a>
                    </li>
                  </ul>
                  <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                      >
                        Separated Link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="card mt-3">
          <AutoComplete></AutoComplete>
          <div
            className="is-scrollbar-hidden min-w-full overflow-x-auto"
            // x-data="pages.tables.initExample1"
          >
            <table className="is-hoverable w-full text-left">
              <thead>
                <tr>
                  <th className="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                    #
                  </th>
                  <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                    Avatar
                  </th>
                  <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                    Username
                  </th>
                  <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                    Firstname
                  </th>
                  <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                    Lastname
                  </th>
                  <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                    Role
                  </th>
                  {/* <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                    Status
                  </th> */}
                  {roomData.is_admin && <th
                      className="whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                    Action
                  </th>}
                </tr>
              </thead>
              <tbody>
                {users_Data?.map((user, idx) => {
                  return (
                    <tr
                      key={`user-item-${idx}`}
                      className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                    >
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {idx + 1}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        <div className="avatar flex h-10 w-10">
                          <img
                            className="mask is-squircle"
                            src={Avatar200x200}
                            alt="avatar"
                          />
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">
                        {user.member.username}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {user.member.first_name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {user.member.last_name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        <div className="badge rounded-full">
                          {roleDetails[ConvertRole(user)].ListBadge}
                        </div>
                      </td>
                      {/* <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        <label className="inline-flex items-center">
                          <input
                            // :checked="user.status"
                            className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                            type="checkbox"
                            value={user.status}
                          />
                        </label>
                      </td> */}
                      {roomData.is_admin && <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        <Menu
                            as="div"
                            className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button
                                className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                              >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                />
                              </svg>
                            </Menu.Button>
                          </div>
                          {ConvertRole(user) !== "Owner" && (
                              <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                              >
                                {
                                  <Menu.Items
                                      className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                                    <div>
                                      {roleDetails[ConvertRole(user)].Actions.map(
                                          (action, index) => (
                                              <Menu.Item id={`action-item-${index}`}>
                                                <button
                                                    onClick={() => actionsDetails[action].action(user.id)}
                                                    className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      className="mt-px h-4.5 w-4.5"
                                                      fill="none"
                                                      viewBox="0 0 24 24"
                                                      stroke="currentColor"
                                                      strokeWidth="1.5"
                                                  >
                                                    {actionsDetails[action].iconPath}
                                                  </svg>
                                                  <span>
                                              {" "}
                                                    {
                                                      actionsDetails[action]
                                                          .actionName
                                                    }
                                            </span>
                                                </button>
                                              </Menu.Item>
                                          )
                                      )}
                                    </div>
                                  </Menu.Items>
                                }
                              </Transition>
                          )}
                        </Menu>
                      </td>}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* <div className="flex flex-col justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5">
            <div className="flex items-center space-x-2 text-xs+">
              <span>Show</span>
              <label className="block">
                <select className="form-select rounded-full border border-slate-300 bg-white px-2 py-1 pr-6 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
                  <option>10</option>
                  <option>30</option>
                  <option>50</option>
                </select>
              </label>
              <span>entries</span>
            </div>

            <ol className="pagination">
              <li className="rounded-l-lg bg-slate-150 dark:bg-navy-500">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </a>
              </li>
              <li className="bg-slate-150 dark:bg-navy-500">
                <a
                  href="#"
                  className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                  1
                </a>
              </li>
              <li className="bg-slate-150 dark:bg-navy-500">
                <a
                  href="#"
                  className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                >
                  2
                </a>
              </li>
              <li className="bg-slate-150 dark:bg-navy-500">
                <a
                  href="#"
                  className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                  3
                </a>
              </li>
              <li className="bg-slate-150 dark:bg-navy-500">
                <a
                  href="#"
                  className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                  4
                </a>
              </li>
              <li className="bg-slate-150 dark:bg-navy-500">
                <a
                  href="#"
                  className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                  5
                </a>
              </li>
              <li className="rounded-r-lg bg-slate-150 dark:bg-navy-500">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
            </ol>

            <div className="text-xs+">1 - 10 of 10 entries</div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Members;

{
  /* <a
href="#"
className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide text-error outline-none transition-all hover:bg-error/20 focus:bg-error/20"
>
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-4.5 w-4.5"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth="1.5"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  />
</svg>
<span> Delete item</span>
</a> */
}
