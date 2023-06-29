import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
//import swal from "sweetalert";
import Swal from "sweetalert2";
import AuthContext from "../../../context/AuthContext";
import Avatar200x200 from "../../../assets/images/200x200.png";
import { useParams, useNavigate } from "react-router-dom";
import Moment from "react-moment";

function JoinRoom() {
  const Navigate = useNavigate();
  const { randomId } = useParams();
  const navigate = useNavigate();
  let authTokens = useContext(AuthContext).authTokens;
  // const my cats = [
  //   { name: "cinema", id: 1 },
  //   { name: "sport", id: 2 },
  //   { name: "relogion", id: 3 },
  //   { name: "fishing", id: 4 },
  // ];

  let [roomData, setRoomData] = useState({});

  const linkRequest = async () => {
    const checkdata = await axios
      .get(`/api/rooms/${randomId}`)
      .then((response) => response)
      .catch((err) => {
        // Handle error
        console.log(err);
        let error = err.response.data.fail;
        let idRoomError = err.response.data.id;
        if (error === "wrong link") {
          //swal("Error!", "Room with this link does not exist ", "error");
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Room with this link does not exist ",
            showConfirmButton: false,
            timer: 2000,
          });
          Navigate("/home");
        } else if (error === "already joined") {
          //swal("Error!", "Your are already join the group", "error");
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Your are already join the group",
            showConfirmButton: false,
            timer: 2000,
          });
          //Navigate("/room/:idroom/info");
          Navigate(`/room/${idRoomError}/info`);
        }
      });
    setRoomData(checkdata?.data);
  };
  console.log("roomData :", roomData);
  useEffect(() => {
    linkRequest();
  }, [randomId]);
  const joinRoom = async () => {
    const data = await axios
      .post(`/api/my-rooms/${roomData?.id}`, null)
      .then((response) => response)
      .catch((err) => {
        // Handle error
        //console.log(err);
        let error = err.response.data.fail;
        if (error === "already requested") {
          //swal("Error!", "Room with this link does not exist ", "error");
          Swal.fire({
            position: "center",
            icon: "error",
            title: "You have been already requested ",
            showConfirmButton: false,
            timer: 2000,
          });
          Navigate("/home");
        }
      });
    if (data?.status === 202) {
      //swal("Success!", "Request sent!", "success");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Request sent!",
        showConfirmButton: false,
        timer: 2000,
      });
      Navigate("/home");
    }
    // else if (data.status === 406) {
    //   //swal("Error!", data.error, "error");
    //   Swal.fire({
    //     position: "center",
    //     icon: "error",
    //     title: data.error,
    //     showConfirmButton: false,
    //     timer: 2000,
    //   });
    //   Navigate("/home");
    // }
  };
  return (
    <>
      {roomData ? (
        <div className="bg-slate-50 fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6  sm:px-5">
          <div className="card mt-5  rounded-lg p-12 lg:p-7 ">
            <div className="flex flex-col my-2 items-center">
              <div className="avatar mt-1.5 h-20 w-20 ">
                <img
                  className="mask is-squircle"
                  src={
                    roomData.main_picture_path === "" ||
                    roomData.main_picture_path === "__"
                      ? Avatar200x200
                      : roomData.main_picture_path
                  }
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
                      {roomData.is_premium === 1 && (
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

                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-3 ">
                  <dt className="text-sm font-medium sm:py-2">Categories</dt>
                  <dd className="mt-1 flex  text-sm  sm:col-span-2 sm:mt-0">
                    {roomData?.categories && (
                      <span className="flex-grow ">
                        {roomData.categories.map((item) => (
                          <div className="badge">
                            <p className="tag h-7 rounded-full bg-slate-150 text-xs+ text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-700 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                              {item.name}
                            </p>
                          </div>
                        ))}
                      </span>
                    )}
                  </dd>
                </div>

                {/* <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-4">
                  <dt className="text-sm font-medium ">Start Date </dt>
                  <dd className="mt-1 flex text-sm  sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">
                      {new Date(roomData.start_date).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          second: "numeric",
                          timeZoneName: "short",
                        }
                      )}
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
                </div> */}
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-4">
                  <dt className="text-sm font-medium ">Start Date </dt>
                  <dd className="mt-1 flex text-sm  sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">
                      <Moment format="YYYY/MM/DD HH:mm">
                        {roomData.start_date}
                      </Moment>
                      <br />
                    </span>
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-4">
                  <dt className="text-sm font-medium ">End Date</dt>
                  <dd className="mt-1 flex text-sm  sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">
                      <Moment format="YYYY/MM/DD HH:mm">
                        {roomData.end_date}
                      </Moment>
                      <br />
                    </span>
                  </dd>
                </div>
                <div className="flex justify-center space-x-5 pt-8">
                  <button
                    onClick={() => navigate(`/`)}
                    className="badge space-x-2 bg-error text-white hover:opacity-75"
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
                    onClick={joinRoom}
                    className="badge space-x-5 bg-success text-slate-800 hover:opacity-75 "
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
      ) : (
        <div
          className="dark:text-navy-50 text-slate-900 pt-20 text-2xl font-semibold"
          style={{ paddingLeft: "35vw" }}
        >
          No Room Found
        </div>
      )}
    </>
  );
}

export default JoinRoom;
