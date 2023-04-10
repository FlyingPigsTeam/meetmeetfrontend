import React, { useContext, useEffect, useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const SlideOver = ({ slideover, setslideover, id }) => {
  let authTokens = useContext(AuthContext).authTokens;
  //console.log(authTokens.access);
  const [status, setstatus] = useState("none");
  const req = async () => {
    const { data } = await axios
      .get(`http://127.0.0.1:8000/api/my-rooms/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authTokens.access,
        },
      })
      .then((response) => response);
    setstatus(data);
  };
  useEffect(() => {
    if (slideover == true) req();
  }, [slideover]);

  const [joinRequest, setJoinRequest] = useState({});
  const JoinReq = async () => {
    const data = await fetch(`http://127.0.0.1:8000/api/my-rooms/${id}`, {
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
                                      <img
                                        src={item.picture_path}
                                        alt=""
                                        className=" border-2 border-slate-500 dark:border-navy-100 hover:border-2 hover:border-slate-200 dark:hover:border-navy-800 w-14 h-14 rounded-full"
                                      />
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
                          <div className="h-40 border-darkBlue border-4 rounded-lg p-3 mt-4">
                            Task Part
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
