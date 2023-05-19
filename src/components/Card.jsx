import {
  InformationCircleIcon,
  PlusCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import React, { useContext, useEffect, useState } from "react";
import SlideOver from "./SlideOver";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const data = props.info;
  const mydata = props.data ? props.data : {};
  const categories = mydata.categories ? mydata.categories : {};
  const navigate = useNavigate();
  const [slideover, setslideover] = useState(false);
  const id = mydata ? mydata.id : "";
  //onsole.log(id);
  let category = [];
  for (let i = 0; i < categories.length; i++) {
    category.push(categories[i].name);
  }
  const startDate = mydata.start_date ? mydata.start_date.slice(0, 10) : "";
  const endDate = mydata.end_date ? mydata.end_date.slice(0, 10) : "";
  // const startDate = "";
  // const endDate = "";
  // const startTime = mydata ? mydata.start_date.slice(11, 19) : "";
  // const endTime = mydata ? mydata.end_date.slice(11, 19) : "";
  let authTokens = useContext(AuthContext).authTokens;
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
    console.log(data);
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

  return (
    <div>
      <div className="rounded-lg bg-slate-200 dark:bg-navy-800 shadow-slate-300 dark:shadow-navy-700 shadow-md">
        <div className="flex items-center justify-between p-4 md:p-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="md:text-3xl text-2xl font-bold text-slate-700 dark:text-navy-100 basis-10/12 md:basis-11/12" style={{whiteSpace:"initial", width:"50vw"}}>
                {mydata.title}
              </h3>
              <div className="grid grid-cols-2 text-xl md:text-2xl text-slate-700 dark:text-navy-100">
                <span>{parseInt(mydata.member_count)}</span>
                <UsersIcon
                  className={
                    parseInt(mydata.member_count) < 10
                      ? "-ml-2 w-8 h-8"
                      : "-ml-1 w-8 h-8"
                  }
                />
              </div>
            </div>
            {category.map((item, index) => (
              <span
                key={index}
                className="inline-block flex-shrink-0 mr-2 rounded-xl md:text-lg text-base bg-slate-400 text-slate-900 px-3 py-1 md:mt-2 mt-3 md:font-medium font-semibold"
              >
                {item}
              </span>
            ))}
            <p className="mt-4 truncate text-md text-slate-700 dark:text-navy-100">
              from{" "}
              <span className="text-slate-700 dark:text-navy-100">
                {startDate}
              </span>{" "}
              to{" "}
              <span className="text-slate-700 dark:text-navy-100">
                {endDate}
              </span>
            </p>
          </div>
        </div>
        <div className="md:pl-6 md:pb-6 flex flex-col md:flex-row md:items-baseline p-4">
          <SlideOver
            slideover={slideover}
            setslideover={setslideover}
            id={id}
          />
          <button
            onClick={() => {
              setslideover(true);
            }}
            type="button"
            className="inline-flex mb-2 md:mb-0 items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm bg-info text-slate-900 hover:opacity-80 dark:text-navy-900 duration-300"
          >
            <InformationCircleIcon
              className="-ml-1 mr-2 h-5 w-5"
              aria-hidden="true"
            />
            More Info!
          </button>
          <button
            onClick={() => JoinReq()}
            type="button"
            className="inline-flex md:ml-3 items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm bg-success text-slate-900 hover:opacity-80 dark:text-navy-900 duration-300"
          >
            <PlusCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Join Event{" "}
            <span className="ml-1">
              (
              {mydata
                ? parseInt(mydata.maximum_member_count) -
                  parseInt(mydata.member_count)
                : ""}{" "}
              Left)
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
