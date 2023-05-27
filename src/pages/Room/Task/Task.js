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
      .get(`http://127.0.0.1:8000/api/my-rooms/${roomId}/tasks?show_all=1`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authTokens.access,
        },
      })
      .then((response) => response);
    settasks(data);
  };

  const [deleteStatus, setdeleteStatus] = useState([]);
  const reqForDeleting = async (taskId) => {
    const { data } = await axios
      .delete(
        `http://127.0.0.1:8000/api/my-rooms/${roomId}/tasks?task_id=${taskId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + authTokens.access,
          },
        }
      )
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
      .put(
        `http://127.0.0.1:8000/api/my-rooms/${roomId}/tasks?task_id=${taskID}`,
        JSON.stringify({
          done: status == "off" ? 1 : 0,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + authTokens.access,
          },
        }
      )
      .then((response) => response);
    setchecking(data);
  };
  const reqForUnChecking = async (taskID) => {
    const { data } = await axios
      .put(
        `http://127.0.0.1:8000/api/my-rooms/${roomId}/tasks?task_id=${taskID}`,
        JSON.stringify({
          done: 0,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + authTokens.access,
          },
        }
      )
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
        .get(`http://127.0.0.1:8000/api/my-rooms/${roomId}/tasks?task_name=${search}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + authTokens.access,
          },
        })
        .then((response) => response);
      settasks(data);
      setshowSearch(false);
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
  //console.log(tasks);
  return (
    <>
      <PageWrapper>
        <Header>
          <Header.Items>
            <Header.SidebarToggle />
            <Header.Right>
              <DarkModeToggle />
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
              <Sidebar.Primary.Bottom.LogOut />
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
            <SliderForEditting
              slideover={slideoverEdit}
              setslideover={setslideoverEdit}
              roomId={roomId}
              taskId={taskId}
              seteditChanges={seteditChanges}
            />
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
              {tasks.map((item, index) => (
                <div className="grid sm:grid-cols-5 items-center border-b border-slate-200 py-3 dark:border-navy-500">
                  <div className=" col-start-1 xl:col-end-5 sm:col-end-4">
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
                              <span className=" font-medium text-sm">Low</span>
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
                              <span className=" font-medium text-sm">Hard</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="mt-2">
                        <Skeleton />
                      </div>
                    </div>
                  </div>
                  <div className="xl:col-start-5 sm:col-start-4 sm:col-end-6 mt-2 sm:mt-0">
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
              ))}

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
