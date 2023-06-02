import React, { useContext, useEffect, useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { BASEURL } from "../data/BASEURL";

const SlideOver = ({ slideover, setslideover, id }) => {
  let authTokens = useContext(AuthContext).authTokens;
  //console.log(authTokens.access);
  const [status, setstatus] = useState("none");
  const req = async () => {
    const { data } = await axios
      .get(`/api/my-rooms/${id}`)
      .then((response) => response);
    setstatus(data);
  };
  useEffect(() => {
    if (slideover == true) req();
  }, [slideover]);

  const [joinRequest, setJoinRequest] = useState({});
  const JoinReq = async () => {
    const data = await fetch(BASEURL + `/api/my-rooms/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authTokens.access,
      },
    }).then((response) => response);
    setJoinRequest(data);
  };
  useEffect(() => {
    if (joinRequest && joinRequest.status == 406) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "User already joined",
        showConfirmButton: false,
        timer: 2000,
      });
    } else if (joinRequest && joinRequest.status == 202) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Request Sent",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, [joinRequest]);

  const title = status ? status.title : "";
  const isPremium = status ? status.is_premium : false;
  const startDate = status.start_date ? status.start_date.slice(0, 10) : "";
  const endDate = status.end_date ? status.end_date.slice(0, 10) : "";
  const startTime = status.start_date ? status.start_date.slice(11, 19) : "";
  const endTime = status.end_date ? status.end_date.slice(11, 19) : "";
  const description = status ? status.description : "";
  const categories = status.categories ? status.categories : {};
  let category = [];
  for (let i = 0; i < categories.length; i++) {
    category.push(categories[i].name);
  }
  const tasks = status.tasks ? status.tasks : [];
  // const tasks = [
  //   { priority: 2, title: "salam" },
  //   { priority: 3, title: "khubi" },
  //   { priority: 1, title: "cheroti" },
  //   { priority: 1, title: "mamad" },
  //   { priority: 3, title: "amin" },
  // ];
  //console.log(tasks);
  const members = status ? status.room_members : {};
  const member_count = members ? members.length : 0;
  const member_maximum_count = status
    ? parseInt(status.maximum_member_count)
    : 0;
  // const memberList = [
  //   {
  //     username: "Matin2001",
  //     bio: "member of the flying pigs frontend team",
  //     image_path: "url(....)",
  //   },
  //   {
  //     username: "M_Mirzaei",
  //     bio: "member of the flying pigs frontend team and loves playing football.he is inteligent",
  //     image_path: "url(....)",
  //   },
  //   {
  //     username: "AliSoltani",
  //     bio: "member of the flying pigs frontend team",
  //     image_path: "url(....)",
  //   },
  //   {
  //     username: "Arian Sabet",
  //     bio: "member of the flying pigs frontend team",
  //     image_path: "url(....)",
  //   },
  //   {
  //     username: "Matin2001",
  //     bio: "member of the flying pigs frontend team",
  //     image_path: "url(....)",
  //   },
  //   {
  //     username: "Matin2001",
  //     bio: "member of the flying pigs frontend team",
  //     image_path: "url(....)",
  //   },
  // ];
  return (
    <div>
      <Transition.Root show={slideover} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => {
            setslideover(false);
          }}
        >
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-slate-200 dark:bg-navy-600 py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        {isPremium ? (
                          <div className=" -ml-4 -mt-4 bg-amber-400 text-slate-900 dark:text-navy-800 text-lg opacity-90 -rotate-12 font-bold w-36 p-1 z-0 rounded-2xl">
                            Premium Room
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="flex mt-4 items-start justify-between">
                          <Dialog.Title className="text-2xl font-bold text-slate-800 dark:text-navy-50 z-10">
                            {title}
                          </Dialog.Title>
                          <div className="ml-3 flex items-center">
                            <button
                              type="button"
                              className=" mt-2 rounded-md bg-myGrey text-navy hover:text-myGrey hover:bg-navy duration-200 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                              onClick={() => {
                                setslideover(false);
                              }}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-full m-6 mt-4 flex-1 px-4 sm:px-6">
                        <div className="absolute inset-0">
                          <p className=" truncate text-lg font-normal text-slate-800 dark:text-navy-50">
                            From <span className="font-bold">{startDate}</span>{" "}
                            At <span className="font-bold">{startTime}</span>
                            <br />
                            To <span className="font-bold">
                              {endDate}
                            </span> At{" "}
                            <span className="font-bold">{endTime}</span>
                          </p>
                          <div className="text-slate-800 dark:text-navy-50 mt-4 font-medium text-sm">
                            {description}
                          </div>
                          {/* <div className="text-myDark1 mt-4">
                            This event is being hold from{" "}
                            <span className="text-xl">{startDate}</span> to <span className="text-xl">{endDate}</span>
                      
                          </div> */}
                          <div className=" text-slate-800 dark:text-navy-50 text-xl font-bold mt-2">
                            Categories:
                          </div>
                          {category.map((item, index) => (
                            <span
                              key={index}
                              className="inline-block flex-shrink-0 mr-2 rounded-lg text-lg px-3 py-1 mt-2 font-medium bg-slate-400 text-slate-900"
                            >
                              {item}
                            </span>
                          ))}
                          <div className="  mt-4">
                            <div className=" text-slate-800 dark:text-navy-50 text-xl font-bold mb-2">
                              Members:
                            </div>
                            {members
                              ? members.map((item, index) =>
                                  index < 6 ? (
                                    <div
                                      key={index}
                                      className=" grid grid-cols-5 align-middle p-2 items-center hover:rounded-lg hover:bg-slate-500 hover:text-slate-200 text-slate-800 dark:hover:bg-navy-200 dark:hover:text-navy-800 dark:text-navy-50 cursor-pointer duration-200 "
                                    >
                                      <div class="avatar h-8 w-8">
                                        <div class="is-initial rounded-full bg-slate-200 text-xs+ uppercase text-slate-800 ring ring-slate-800 dark:bg-navy-600 dark:ring-navy-50 dark:text-navy-50">
                                          <i class="fa fa-user"></i>
                                        </div>
                                      </div>
                                      <div className=" col-start-2 col-end-6">
                                        <div className=" text-lg font-bold">
                                          {item.username}
                                        </div>
                                        {item.bio.length < 70 ? (
                                          <div className=" opacity-80">
                                            {item.bio}
                                          </div>
                                        ) : (
                                          <div className=" opacity-80">
                                            {item.bio.slice(0, 70)}...
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  ) : (
                                    ""
                                  )
                                )
                              : ""}
                          </div>
                          <div className=" text-slate-800 dark:text-navy-50 text-xl font-bold my-2">
                            Task Part:
                            <div className="border border-slate-50 rounded-md overflow-y-scroll h-40">
                              {tasks
                                ? tasks.map((item, index) => (
                                    <ol className="timeline line-space mt-5 px-4 [--size:1.5rem]">
                                      <li className="timeline-item">
                                        <div className="timeline-item-point rounded-full border border-current bg-white text-primary dark:bg-navy-700">
                                          <i className="fa-solid fa-check text-tiny"></i>
                                        </div>

                                        <div className="timeline-item-content flex-1 pl-4">
                                          <div className="flex flex-col justify-between pb-2 sm:flex-col-1 sm:pb-0">
                                            <p className="pb-2 font-medium text-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                                              {item.title}
                                            </p>
                                          </div>
                                          <p className="py-1 text-sm">
                                            {/* {item.priority} */}
                                            {item.priority == 3 ? (
                                              <div className="flex flex-wrap items-center font-inter text-xs">
                                                <div className="badge space-x-2.5 px-1 text-success">
                                                  <div className="h-2 w-2 rounded-full bg-current"></div>
                                                  <span className=" font-medium text-sm">
                                                    Low
                                                  </span>
                                                </div>
                                              </div>
                                            ) : item.priority == 2 ? (
                                              <div className="flex flex-wrap items-center font-inter text-xs">
                                                <div className="badge space-x-2.5 px-1 text-warning">
                                                  <div className="h-2 w-2 rounded-full bg-current"></div>
                                                  <span className=" font-medium text-sm">
                                                    Medium
                                                  </span>
                                                </div>
                                              </div>
                                            ) : (
                                              <div className="flex flex-wrap items-center font-inter text-xs">
                                                <div className="badge space-x-2.5 px-1 text-error">
                                                  <div className="h-2 w-2 rounded-full bg-current"></div>
                                                  <span className=" font-medium text-sm">
                                                    Hard
                                                  </span>
                                                </div>
                                              </div>
                                            )}
                                          </p>
                                          <div class="flex-grow h-px bg-slate-50"></div>
                                          {/* <div>
                                    <p class="text-xs text-slate-400 dark:text-navy-50">
                                      Members:
                                    </p>
                                    <div class="mt-2 flex justify-between">
                                      <div class="flex flex-wrap -space-x-2">
                                        <div class="avatar h-7 w-7 hover:z-10">
                                          <img
                                            class="rounded-full ring ring-white dark:ring-navy-700"
                                            src="images/200x200.png"
                                            alt="avatar"
                                          />
                                        </div>

                                        <div class="avatar h-7 w-7 hover:z-10">
                                          <div class="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                                            jd
                                          </div>
                                        </div>

                                        <div class="avatar h-7 w-7 hover:z-10">
                                          <img
                                            class="rounded-full ring ring-white dark:ring-navy-700"
                                            src="images/200x200.png"
                                            alt="avatar"
                                          />
                                        </div>

                                        <div class="avatar h-7 w-7 hover:z-10">
                                          <img
                                            class="rounded-full ring ring-white dark:ring-navy-700"
                                            src="images/200x200.png"
                                            alt="avatar"
                                          />
                                        </div>

                                        <div class="avatar h-7 w-7 hover:z-10">
                                          <img
                                            class="rounded-full ring ring-white dark:ring-navy-700"
                                            src="images/200x200.png"
                                            alt="avatar"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div> */}
                                        </div>
                                      </li>
                                    </ol>
                                  ))
                                : ""}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={JoinReq}
                            className="w-full items-center rounded-md border-2 h-12 py-1 mt-2 text-lg font-semibold shadow-sm hover:bg-slate-200 hover:border-slate-800 hover:text-slate-800 text-slate-800 bg-slate-400 dark:hover:bg-navy-100 dark:hover:border-navy-100 dark:hover:text-navy-800 dark:text-navy-50 dark:bg-navy-400 dark:border-navy-400 duration-300"
                          >
                            Join Event ({member_maximum_count - member_count}{" "}
                            Left)
                          </button>
                          <div className="h-5"></div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default SlideOver;
// {/* <ol class="timeline line-space mt-5 px-4 [--size:1.5rem]">
// <li class="timeline-item">
//   <div class="timeline-item-point rounded-full border border-current bg-white text-secondary dark:bg-navy-700 dark:text-secondary-light">
//     <i class="fa fa-user-edit text-tiny"></i>
//   </div>
//   <div class="timeline-item-content flex-1 pl-4">
//     <div class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
//       <p class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
//         User Photo Changed
//       </p>
//       <span class="text-xs text-slate-400 dark:text-navy-300">
//         12 minute ago
//       </span>
//     </div>
//     <p class="py-1">
//       John Doe changed his avatar photo
//     </p>
//     <div class="avatar mt-2 h-20 w-20">
//       <img
//         class="mask is-squircle"
//         src="images/200x200.png"
//         alt="avatar"
//       />
//     </div>
//   </div>
// </li>
// <li class="timeline-item">
//   <div class="timeline-item-point rounded-full border border-current bg-white text-primary dark:bg-navy-700 dark:text-accent">
//     <i class="fa-solid fa-image text-tiny"></i>
//   </div>
//   <div class="timeline-item-content flex-1 pl-4">
//     <div class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
//       <p class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
//         Images Added
//       </p>
//       <span class="text-xs text-slate-400 dark:text-navy-300">
//         1 hour ago
//       </span>
//     </div>
//     <p class="py-1">
//       Mores Clarke added new image gallery
//     </p>
//     <div class="mt-4 grid grid-cols-3 gap-3">
//       <img
//         class="rounded-lg"
//         src="images/800x600.png"
//         alt="image"
//       />
//       <img
//         class="rounded-lg"
//         src="images/800x600.png"
//         alt="image"
//       />
//       <img
//         class="rounded-lg"
//         src="images/800x600.png"
//         alt="image"
//       />
//       <img
//         class="rounded-lg"
//         src="images/800x600.png"
//         alt="image"
//       />
//       <img
//         class="rounded-lg"
//         src="images/800x600.png"
//         alt="image"
//       />
//       <img
//         class="rounded-lg"
//         src="images/800x600.png"
//         alt="image"
//       />
//     </div>
//     <div class="mt-4">
//       <span class="font-medium text-slate-600 dark:text-navy-100">
//         Category:
//       </span>

//       <a
//         href="#"
//         class="text-xs text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
//       >
//         #Tag
//       </a>

//       <a
//         href="#"
//         class="text-xs text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
//       >
//         #Category
//       </a>
//     </div>
//   </div>
// </li>
// <li class="timeline-item">
//   <div class="timeline-item-point rounded-full border border-current bg-white text-success dark:bg-navy-700">
//     {/* <i class="fa fa-leaf text-tiny"></i> */}
//     <i class="fa-solid fa-check text-tiny"></i>
//   </div>
//   <div class="timeline-item-content flex-1 pl-4">
//     <div class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
//       <p class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
//         Design Completed
//       </p>
//       <span class="text-xs text-slate-400 dark:text-navy-300">
//         3 hours ago
//       </span>
//     </div>
//     <p class="py-1">
//       Robert Nolan completed the design of the CRM
//       application
//     </p>
//     <a
//       href="#"
//       class="inline-flex items-center space-x-1 pt-2 text-slate-600 transition-colors hover:text-primary dark:text-navy-100 dark:hover:text-accent"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         class="h-5 w-5"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         stroke-width="1.5"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//         />
//       </svg>
//       <span>File_final.fig</span>
//     </a>
//     <div class="pt-2">
//       <a
//         href="#"
//         class="tag rounded-full border border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:border-secondary-light/30 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
//       >
//         UI/UX
//       </a>

//       <a
//         href="#"
//         class="tag rounded-full border border-info/30 bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
//       >
//         CRM
//       </a>

//       <a
//         href="#"
//         class="tag rounded-full border border-success/30 bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
//       >
//         Dashboard
//       </a>
//     </div>
//   </div>
// </li>
// <li class="timeline-item">
//   <div class="timeline-item-point rounded-full border border-current bg-white text-primary dark:bg-navy-700">
//     {/* //<i class="fa fa-project-diagram text-tiny"></i> */}
//     <i class="fa-solid fa-check text-tiny"></i>
//   </div>
//   <div class="timeline-item-content flex-1 pl-4">
//     <div class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
//       <p class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
//         ER Diagram
//       </p>
//       <span class="text-xs text-slate-400 dark:text-navy-300">
//         a day ago
//       </span>
//     </div>
//     <p class="py-1">
//       Team completed the ER diagram app
//     </p>
//     <div>
//       <p class="text-xs text-slate-400 dark:text-navy-300">
//         Members:
//       </p>
//       <div class="mt-2 flex justify-between">
//         <div class="flex flex-wrap -space-x-2">
//           <div class="avatar h-7 w-7 hover:z-10">
//             <img
//               class="rounded-full ring ring-white dark:ring-navy-700"
//               src="images/200x200.png"
//               alt="avatar"
//             />
//           </div>

//           <div class="avatar h-7 w-7 hover:z-10">
//             <div class="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
//               jd
//             </div>
//           </div>

//           <div class="avatar h-7 w-7 hover:z-10">
//             <img
//               class="rounded-full ring ring-white dark:ring-navy-700"
//               src="images/200x200.png"
//               alt="avatar"
//             />
//           </div>

//           <div class="avatar h-7 w-7 hover:z-10">
//             <img
//               class="rounded-full ring ring-white dark:ring-navy-700"
//               src="images/200x200.png"
//               alt="avatar"
//             />
//           </div>

//           <div class="avatar h-7 w-7 hover:z-10">
//             <img
//               class="rounded-full ring ring-white dark:ring-navy-700"
//               src="images/200x200.png"
//               alt="avatar"
//             />
//           </div>
//         </div>
//         <button class="btn h-7 w-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             class="h-5 w-5 rotate-45"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M7 11l5-5m0 0l5 5m-5-5v12"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   </div>
// </li>
// <li class="timeline-item">
//   <div class="timeline-item-point rounded-full border border-current bg-white text-error dark:bg-navy-700">
//     <i class="fa fa-history text-tiny"></i>
//   </div>
//   <div class="timeline-item-content flex-1 pl-4">
//     <div class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
//       <p class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
//         Weekly Report
//       </p>
//       <span class="text-xs text-slate-400 dark:text-navy-300">
//         a day ago
//       </span>
//     </div>
//     <p class="py-1">
//       The weekly report was uploaded
//     </p>
//   </div>
// </li>
// </ol> */}
