import React, { useContext, useEffect, useState } from "react";
import SliderForEditting from "./SliderForEditting";
import SliderForAdding from "./SliderForAdding";
import Slider from "./Slider";
import Skeleton from "../../../components/Skeleton";
import axios from "axios";
import AuthContext from "../../../context/AuthContext";
import Swal from "sweetalert2";
import PageWrapper from "../../../components/PageWrapper";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import DarkModeToggle from "../../../components/DarkModeToggle";
import MainSection from "../../../components/MainSection";
import { useParams } from "react-router";

const Task = () => {
  const [slideoverAdd, setslideoverAdd] = useState(false);
  const [slideoverEdit, setslideoverEdit] = useState(false);
  const [addChanges, setaddChanges] = useState(0);
  const [editChanges, seteditChanges] = useState(0);
  const [taskId, settaskId] = useState();
  const data = [
    {
      title: "Hello World",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isFinished: true,
      difficulty: "easy",
    },
    { title: "Hello World", isFinished: false, difficulty: "medium" },
    { title: "Hello World", isFinished: true, difficulty: "hard" },
  ];
  const params = useParams();
  const roomId = params.idroom;
  let authTokens = useContext(AuthContext).authTokens;
  //this part is for getting all tasks of a room
  const [tasks, settasks] = useState([]);
  const reqForGettingAll = async () => {
    const { data } = await axios
      .get(`/api/my-rooms/${roomId}/tasks?show_all=1`)
      .then((response) => response);
    settasks(data);
  };

  const [deleteStatus, setdeleteStatus] = useState([]);
  const reqForDeleting = async (taskId) => {
    const { data } = await axios
      .delete(`/api/my-rooms/${roomId}/tasks?task_id=${taskId}`)
      .then((response) => response);
    setdeleteStatus(data);
  };
  //console.log(deleteStatus);
  const deleting = (task_id) => {
    Swal.fire({
      title: "Are you sure to delete the task?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        reqForDeleting(task_id);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Task Deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const [checkStatus, setcheckStatus] = useState();
  const [checking, setchecking] = useState();
  const reqForChecking = async (taskID, status) => {
    console.log(status);
    const { data } = await axios
      .put(`/api/my-rooms/${roomId}/tasks?task_id=${taskID}`, {
        done: status == "off" ? 1 : 0,
      })
      .then((response) => response);
    setchecking(data);
  };
  const reqForUnChecking = async (taskID) => {
    const { data } = await axios
      .put(`/api/my-rooms/${roomId}/tasks?task_id=${taskID}`, {
        done: 0,
      })
      .then((response) => response);
    setchecking(data);
  };
  const [search, setsearch] = useState("");
  const [showSearch, setshowSearch] = useState(false);
  console.log(search);
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (search.length < 3) {
      setshowSearch(true);
    } else {
      // part for getting api
      const { data } = await axios
        .get(`/api/my-rooms/${roomId}/tasks?task_name=${search}`)
        .then((response) => response);
      console.log(data);
      if (data.length == 0) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "No Task Found",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        settasks(data);
      }
      // setshowSearch(false);
      setsearch("");
    }
  };
  useEffect(() => {
    if (search.length > 2) {
      setshowSearch(false);
    }
  }, [search]);
  //console.log(checking);

  // useEffect(() => {
  //   if (checkStatus && checkStatus[0] == "on") {
  //     reqForChecking(checkStatus[1]);
  //     setcheckStatus([]);
  //   }
  //   if (checkStatus && checkStatus[0] == "off") {
  //     reqForUnChecking(checkStatus[1]);
  //     setcheckStatus([]);
  //   }
  // }, [checkStatus]);
  useEffect(() => {
    reqForGettingAll();
  }, [authTokens, deleteStatus, addChanges, editChanges, checking]);
  console.log("Tasks:", tasks);
  const [Filter, setFilter] = useState("");
  const [Label, setLabel] = useState("");
  // useEffect(() => {
  //   if (Label == "") reqForGettingAll();
  //   let temp = [];
  //   for (let i = 0; i < tasks.length; i++) {
  //     if (tasks[i].priority == Label) {
  //       temp.push(tasks[i]);
  //     }
  //   }
  //   settasks(temp);
  // }, [Filter, Label]);
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
                {/* <Sidebar.Secondary.Expanded.Body.Middle.TopButton /> */}
                <div className="mt-2 px-4">
                  <button
                    onClick={() => {
                      setslideoverAdd(true);
                    }}
                    className="btn w-full space-x-2 rounded-full border border-slate-200 py-2 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <span> New Task </span>
                  </button>
                </div>
                {/* <Sidebar.Secondary.Expanded.Body.Middle.Items>
                          <Sidebar.Secondary.Expanded.Body.Middle.Items.AllItem />
                        </Sidebar.Secondary.Expanded.Body.Middle.Items> */}
                <ul className="mt-5 space-y-1.5 px-2 font-inter text-xs+ font-medium">
                  <li>
                    <span
                      onClick={() => setFilter("assigned")}
                      className={
                        Filter == "assigned"
                          ? "cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all bg-slate-300 dark:bg-navy-500 text-slate-800 dark:text-navy-100"
                          : "cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all text-slate-800 hover:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4.5 h-4.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>

                      <span>Assigned Tasks</span>
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => setFilter("notAssigned")}
                      className={
                        Filter == "notAssigned"
                          ? "cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all bg-slate-300 dark:bg-navy-500 text-slate-800 dark:text-navy-100"
                          : "cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all text-slate-800 hover:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4.5 h-4.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                        />
                      </svg>

                      <span>Not Assigned Tasks</span>
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => setFilter("done")}
                      className={
                        Filter == "done"
                          ? "cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all bg-slate-300 dark:bg-navy-500 text-slate-800 dark:text-navy-100"
                          : "cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all text-slate-800 hover:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4.5 w-4.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span>Done Tasks</span>
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => setFilter("unDone")}
                      className={
                        Filter == "unDone"
                          ? "cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all bg-slate-300 dark:bg-navy-500 text-slate-800 dark:text-navy-100"
                          : "cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all text-slate-800 hover:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4.5 h-4.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span>unDone Tasks</span>
                    </span>
                  </li>
                </ul>

                <Sidebar.Secondary.Expanded.Body.Middle.Divider />
                <Sidebar.Secondary.Expanded.Body.Middle.SectionHeader />
                {/* <Sidebar.Secondary.Expanded.Body.Middle.Items>
                  <Sidebar.Secondary.Expanded.Body.Middle.Items.AllLabelItems />
                </Sidebar.Secondary.Expanded.Body.Middle.Items> */}

                <ul className="mt-5 space-y-1.5 px-2 font-inter text-xs+ font-medium">
                  <li>
                    <span
                      onClick={() => setLabel(3)}
                      className={
                        Label == 3
                          ? " cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all bg-success/20"
                          : " cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all hover:bg-success/20 focus:bg-success/20"
                      }
                    >
                      <svg
                        className="h-4.5 w-4.5 text-success"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 6H21M7 12H21M7 18H21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 6H4M3 12H4M3 18H4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-slate-800 dark:text-navy-100">
                        Low
                      </span>
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => setLabel(2)}
                      className={
                        Label == 2
                          ? " cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all bg-warning/20"
                          : " cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all hover:bg-warning/20 focus:bg-warning/20"
                      }
                    >
                      <svg
                        className="h-4.5 w-4.5 text-warning"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 6H21M7 12H21M7 18H21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 6H4M3 12H4M3 18H4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-slate-800 dark:text-navy-100">
                        Medium
                      </span>
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => setLabel(1)}
                      className={
                        Label == 1
                          ? " cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all bg-error/20"
                          : " cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all hover:bg-error/20 focus:bg-error/20"
                      }
                    >
                      <svg
                        className="h-4.5 w-4.5 text-error"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 6H21M7 12H21M7 18H21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 6H4M3 12H4M3 18H4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-slate-800 dark:text-navy-100">
                        High
                      </span>
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => {
                        setLabel("");
                        setFilter("");
                      }}
                      className=" cursor-pointer group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all"
                    >
                      <span className="text-slate-600 dark:text-navy-300 hover:text-slate-500 dark:hover:text-navy-200 transition-all">
                        Reset All Filters
                      </span>
                    </span>
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
        <MainSection classes={"todo-app"}>
          <div
            className="py-5"
            x-data="{isSearchbarActive:false}"
            x-effect="$store.breakpoints.smAndUp && (isSearchbarActive = false)"
          >
            <SliderForAdding
              slideover={slideoverAdd}
              setslideover={setslideoverAdd}
              roomId={roomId}
              setaddChanges={setaddChanges}
            />
            {taskId && (
              <SliderForEditting
                slideover={slideoverEdit}
                setslideover={setslideoverEdit}
                roomId={roomId}
                taskId={taskId}
                seteditChanges={seteditChanges}
              />
            )}
            {tasks.length == 0 ? (
              <p className="mt-1 text-sm">Start Writting Your Tasks</p>
            ) : (
              <div className="">
                <div
                  x-show="!isSearchbarActive"
                  className="flex items-center justify-between"
                >
                  <div>
                    <div className="flex space-x-2">
                      <p className="text-2xl basis-3/4 font-semibold text-slate-900 dark:text-navy-50">
                        Tasks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {showSearch ? (
                      <div className=" text-red-500">
                        Your word must have more than 3 letters
                      </div>
                    ) : (
                      ""
                    )}
                    <form
                      onSubmit={handlesubmit}
                      className="relative flex sm:w-72"
                    >
                      <input
                        className="form-input peer h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Search todos..."
                        type="text"
                        value={search}
                        onChange={(e) => setsearch(e.target.value)}
                      />
                      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4.5 w-4.5 transition-colors duration-200"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z" />
                        </svg>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="card px-4 pt-2 pb-4">
            <div
              x-init="Sortable.create($el, {
              animation: 200,
              easing: 'cubic-bezier(0, 0, 0.2, 1)',
              direction: 'vertical',
              delay: 150,
              delayOnTouchOnly: true,
          })"
            >
              {tasks
                ? tasks
                    .filter((item) => {
                      return Label != "" ? item.priority == Label : true;
                    })
                    .filter((item) => {
                      if (Filter == "assigned") return item.user.length != 0;
                      else if (Filter == "notAssigned") return item.user.length == 0;
                      else if (Filter == "done") return item.done == true;
                      else if (Filter == "unDone") return item.done == false;
                      else return true;
                    })
                    .map((item, index) => (
                      <div className="grid sm:grid-cols-5 items-center border-b border-slate-200 py-3 dark:border-navy-500">
                        <div className=" col-start-1 xl:col-end-4 sm:col-end-4">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <label className="flex">
                              <input
                                onChange={(e) => {
                                  reqForChecking(item.id, e.target.value);
                                  // window.location.reload()
                                }}
                                value={item.done == 1 ? "on" : "off"}
                                checked={item.done == 1 ? "checked" : ""}
                                type="checkbox"
                                className="form-checkbox is-outline text-green-600 h-5 w-5 rounded-full border-slate-400/70 before:bg-white checked:border-green-600 hover:border-green-600 focus:border-green-600 dark:border-navy-400 dark:before:bg-white dark:checked:border-green-600 dark:hover:border-green-600 dark:focus:border-green-600"
                              />
                            </label>

                            <h2 className="text-lg font-bold text-slate-600 line-clamp-1 dark:text-navy-100">
                              {item.title}
                            </h2>
                          </div>
                          <h2 className="text-left mt-2 text-sm font-medium text-slate-500 line-clamp-1 dark:text-navy-200">
                            {item.description}
                          </h2>
                          <div className="grid grid-cols-2 w-64 items-center">
                            <div className="mt-1 flex items-end justify-between">
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
                            </div>
                            <div className="mt-2">
                              <Skeleton members={item.user} />
                            </div>
                          </div>
                        </div>
                        <div className="xl:col-start-4 xl:ml-[12vw] sm:col-start-4 sm:col-end-6 mt-2 sm:mt-0">
                          <button
                            onClick={() => {
                              setslideoverEdit(true);
                              settaskId(item.id);
                            }}
                            className="badge space-x-2 h-9 w-28 bg-slate-150 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
                          >
                            <span>Edit Task</span>
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
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => deleting(item.id)}
                            className="badge space-x-2 h-9 w-28 ml-3 bg-error text-white"
                          >
                            <span>Delete</span>
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
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))
                : ""}

              {/*                         
          <div className="border-b border-slate-150 py-3 dark:border-navy-500">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <label className="flex">
                <input
                  type="checkbox"
                  className="form-checkbox is-outline h-5 w-5 rounded-full border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent"
                />
              </label>
              <h2 className="cursor-pointer text-slate-600 line-clamp-1 dark:text-navy-100">
                Lorem ipsum dolor.
              </h2>
            </div>
            <div className="mt-1 flex items-end justify-between">
              <div className="flex flex-wrap items-center font-inter text-xs">
                <div className="badge space-x-2.5 px-1 text-warning">
                  <div className="h-2 w-2 rounded-full bg-current"></div>
                  <span>Medium</span>
                </div>
                <div className="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"></div>
                <div className="badge space-x-2.5 px-1 text-info">
                  <div className="h-2 w-2 rounded-full bg-current"></div>
                  <span>Update</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-slate-150 py-3 dark:border-navy-500">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <label className="flex">
                <input
                  type="checkbox"
                  className="form-checkbox is-outline h-5 w-5 rounded-full border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent"
                />
              </label>
              <h2 className="cursor-pointer text-slate-600 line-clamp-1 dark:text-navy-100">
                Chat App fragment.
              </h2>
            </div>
            <div className="mt-1 flex items-end justify-between">
              <div className="flex flex-wrap items-center font-inter text-xs">
                <div className="badge space-x-2.5 px-1 text-error">
                  <div className="h-2 w-2 rounded-full bg-current"></div>
                  <span>High</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-slate-150 py-3 dark:border-navy-500">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <label className="flex">
                <input
                  checked
                  type="checkbox"
                  className="form-checkbox is-outline h-5 w-5 rounded-full border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent"
                />
              </label>
              <h2 className="cursor-pointer text-slate-600 line-clamp-1 dark:text-navy-100">
                Unit Testing
              </h2>
            </div>
            <div className="mt-1 flex items-end justify-between">
              <div className="flex flex-wrap items-center font-inter text-xs">
                <div className="badge space-x-2.5 px-1 text-info">
                  <div className="h-2 w-2 rounded-full bg-current"></div>
                  <span>Update</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-slate-150 py-3 dark:border-navy-500">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <label className="flex">
                <input
                  type="checkbox"
                  className="form-checkbox is-outline h-5 w-5 rounded-full border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent"
                />
              </label>
              <h2 className="cursor-pointer text-slate-600 line-clamp-1 dark:text-navy-100">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid minus numquam vero.
              </h2>
            </div>
            <div className="mt-1 flex items-end justify-between">
              <div className="flex flex-wrap items-center font-inter text-xs">
                <div className="badge space-x-2.5 px-1 text-error">
                  <div className="h-2 w-2 rounded-full bg-current"></div>
                  <span>High</span>
                </div>
              </div>
            </div>
          </div> */}
            </div>
            <button
              onClick={() => {
                setslideoverAdd(true);
              }}
              type="button"
              className=" grid h-10 w-full items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm bg-primary text-slate-100 hover:opacity-80 dark:text-navy-50 duration-300"
            >
              Add Task
            </button>
          </div>
        </MainSection>
      </PageWrapper>
    </>
  );
};

export default Task;
