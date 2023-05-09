import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import AuthContext from "../../../context/AuthContext";
import Avatar200x200 from "../../../assets/images/200x200.png";
import { useParams, useNavigate } from "react-router-dom";

function JoinRoom() {
  const { idroom } = useParams();
  const navigate = useNavigate();
  let authTokens = useContext(AuthContext).authTokens;

  let [roomData, setRoomData] = useState({});

  const req = async () => {
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
  }, [idroom]);
  const refreshLink = async () => {
    const { data } = await axios
      .put(`http://127.0.0.1:8000/api/my-rooms/${idroom}`, null, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authTokens.access,
        },
      })
      .then((response) => response);
  };
  return (
    <div className="bg-slate-50 fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6  sm:px-5">
      <div className="card mt-5  rounded-lg p-12 lg:p-7 ">
        <div className="flex flex-col my-2 flex flex-col items-center">
          <div className="avatar mt-1.5 h-20 w-20 ">
            <img
              className="mask is-squircle"
              src={Avatar200x200}
              alt="avatar"
            />
          </div>
        </div>

        <div className="mt-5 border-t border-slate-200 dark:border-navy-500">
          <dl className="divide-y divide-slate-200 dark:divide-navy-500">
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="text-sm font-medium ">Title</dt>
              <dd className="mt-1 flex text-sm  sm:col-span-2 sm:mt-0">
                <span className="flex-grow">{roomData.title}</span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="text-sm font-medium ">Status</dt>
              <dd className="mt-1 flex text-sm  sm:col-span-2 sm:mt-0">
                <span className="flex-grow space-x-2 ">
                  <div className="badge space-x-2 bg-primary text-white dark:bg-accent">
                    {!roomData.room_type ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>

                        <span>Public</span>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                        <span>Public</span>
                      </>
                    )}
                  </div>
                  {roomData.is_premium == 1 && (
                    <div className="badge space-x-2 bg-secondary text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>

                      <span>Premium</span>
                    </div>
                  )}
                  <div className="badge space-x-2 bg-info text-white">
                    {roomData.open_status ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="h-4 w-4"
                          fill="currentColor"
                        >
                          <path d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z" />
                        </svg>
                        <span>Open</span>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="h-4 w-4"
                          fill="currentColor"
                        >
                          <path d="M96 64c0-35.3 28.7-64 64-64H416c35.3 0 64 28.7 64 64V448h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H432 144 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96V64zM384 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                        </svg>
                        <span>Closed</span>
                      </>
                    )}
                  </div>
                </span>
              </dd>
            </div>

            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 ">
              <dt className="text-sm  font-medium ">Categories</dt>
              <dd className="mt-1 flex  text-sm  sm:col-span-2 sm:mt-0">
                {roomData?.categories && (
                  <span className="flex-grow space-x-2 space-y-2">
                    {roomData.categories.map((item) => (
                      <div className="flex">
                        <a
                          href="#"
                          className="tag h-7 rounded-full bg-slate-150 text-xs+ text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-700 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                        >
                          {item.name}
                        </a>
                      </div>
                    ))}
                  </span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-4">
              <dt className="text-sm font-medium ">Start Date </dt>
              <dd className="mt-1 flex text-sm  sm:col-span-2 sm:mt-0">
                <span className="flex-grow">
                  {new Date(roomData.start_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short",
                  })}
                </span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-4">
              <dt className="text-sm font-medium ">End Date</dt>
              <dd className="mt-1 flex text-sm  sm:col-span-2 sm:mt-0">
                <span className="flex-grow">
                  {new Date(roomData.end_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short",
                  })}
                </span>
              </dd>
            </div>
            <div className="flex justify-center space-x-5 pt-8">
              <button
                //onClick={}
                className="badge space-x-2 bg-error text-white"
              >
                <span>Cancle</span>
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
              </button>
              <button
                onClick={() => navigate(`/room/${idroom}/info/edit`)}
                className="badge space-x-5 bg-success text-slate-50 text-slate-800 "
              >
                <span>Join</span>
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
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default JoinRoom;
