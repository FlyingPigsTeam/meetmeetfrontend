/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import AuthContext from "../../../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import AutoComplete from "../../../components/AutoCompleteTask";

export default function SliderForEditting({
  slideover,
  setslideover,
  roomId,
  taskId,
  seteditChanges,
}) {
  const [listUser, setUser] = useState([]);
  const [mydata, setmydata] = useState([]);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [loading, setloading] = useState(true);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  function handleDifficultyChange(event) {
    setSelectedDifficulty(event.target.value);
  }
  const handleTitleChange = (event) => {
    settitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setdescription(event.target.value);
  };

  let authTokens = useContext(AuthContext).authTokens;
  const reqForGettingTask = async () => {
    if (taskId) {
      const { data } = await axios
        .get(`/api/my-rooms/${roomId}/tasks?task_id=${taskId}`)
        .then((response) => response);
      settitle(data.title);
      setdescription(data.description);
      setSelectedDifficulty(data.priority);
      //console.log("member", data.user);
      setUser(data.user.map((member) => member.id));
      setmydata(data.user);
      setloading(false);
    }
  };
  useEffect(() => {
    setloading(true);
    reqForGettingTask();
  }, [slideover]);

  const [editStatus, seteditStatus] = useState([]);
  const reqForEditing = async () => {
    //console.log("listuser", listUser);
    // console.log(
    //   "put request ",
    //   JSON.stringify({
    //     title: title,
    //     priority: selectedDifficulty,
    //     description: description,
    //     user: listUser,
    //     room: roomId,
    //   })
    // );
    const { data } = await axios
      .put(`/api/my-rooms/${roomId}/tasks?task_id=${taskId}`, {
        title: title,
        priority: selectedDifficulty,
        description: description,
        user: listUser,
        room: roomId,
      })
      .then((response) => response);
    seteditStatus(data);
    seteditChanges((e) => e + 1);
  };
  useEffect(() => {
    if (editStatus && editStatus.length != 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Task Edited",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, [editStatus]);

  return (
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
                <Dialog.Panel className="pointer-events-auto w-96 max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-navy-600 pb-6 shadow-xl">
                    <div className="px-4 sm:px-6 bg-slate-150 p-4 dark:bg-navy-500">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-medium text-slate-700 dark:text-navy-100">
                          Edit Task
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            onClick={() => {
                              setslideover(false);
                            }}
                            className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div
                          className="h-full border-2 border-dashed border-gray-200"
                          aria-hidden="true"
                        />
                      </div>
                      <div className=" h-[60vh] flex grow flex-col space-y-4  p-4">
                        <label className="block">
                          <span className=" dark:text-navy-50">Task Title</span>
                          <input
                            value={title}
                            onChange={(e) => handleTitleChange(e)}
                            className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 dark:placeholder:text-navy-100 hover:border-slate-400 focus:border-primary dark:border-navy-200 dark:hover:border-navy-100 dark:focus:border-accent"
                            placeholder="Enter todo title"
                            type="text"
                          />
                        </label>
                        <label className="block">
                          <span className=" dark:text-navy-50">
                            Task Description
                          </span>
                          <textarea
                            onChange={(e) => handleDescriptionChange(e)}
                            value={description}
                            className="form-input mt-1.5 h-24 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 dark:placeholder:text-navy-100 hover:border-slate-400 focus:border-primary dark:border-navy-200 dark:hover:border-navy-100 dark:focus:border-accent"
                            placeholder="Enter todo title"
                            type="text"
                          />
                        </label>
                        <label className="block z-40">
                          <span className=" dark:text-navy-50">Priority:</span>
                          <select
                            //x-init="$el._x_tom = new Tom($el)"
                            className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent dark:bg-navy-600 px-3 py-2 placeholder:text-slate-400/70 dark:placeholder:text-navy-100 hover:border-slate-400 focus:border-primary dark:border-navy-200 dark:hover:border-navy-100 dark:focus:border-accent"
                            //multiple
                            value={selectedDifficulty}
                            onChange={handleDifficultyChange}
                            placeholder="Select difficulty of the task"
                            //autoComplete="off"
                          >
                            <option value="3">Low</option>
                            <option value="2">Medium</option>
                            <option value="1">Hard</option>
                          </select>
                        </label>
                        {/* <label className="block z-50">
                          <span className=" dark:text-navy-50">Assigned To:</span>
                          <div className="dark:bg-navy-500 card mt-30 p-4 grow"><AutoComplete setmember={setUser}/></div> */}

                        <label className="block z-40">
                          <span className=" dark:text-navy-50">
                            Assigned To:
                          </span>
                          <div className="mt-3">
                            {!loading && (
                              <AutoComplete
                                assignedmember={mydata}
                                setmember={setUser}
                              />
                            )}
                          </div>
                          {/* <select
                            //x-init="$el._x_tom = new Tom($el)"
                            className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 dark:placeholder:text-navy-100 hover:border-slate-400 focus:border-primary dark:border-navy-200 dark:hover:border-navy-100 dark:focus:border-accent"
                            //multiple
                            value={selectedDifficulty}
                            onChange={handleDifficultyChange}
                            placeholder="Select difficulty of the task"
                          //autoComplete="off"
                          >
                            <option value=""></option>
                          </select> */}
                        </label>
                      </div>
                      <div className="flex items-center justify-between fixed md:w-[83%] w-[90%] bottom-6 py-3 px-4">
                        <button
                          onClick={async () => {
                            await reqForEditing();
                            setslideover(false);
                          }}
                          className="z-20 grid h-10 w-full items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm bg-primary text-slate-100 hover:opacity-80 dark:text-navy-50 duration-300"
                        >
                          Save
                        </button>
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
  );
}
