import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
// var asc_color = "bg-sky-500";
// var des_color = " ";

export default function Filters({ paramsFilter, setparamsFilter }) {
  // const [windowSize, setWindowSize] = useState([
  //   window.innerWidth,
  //   window.innerHeight,
  // ]);

  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowSize([window.innerWidth, window.innerHeight]);
  //   };

  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);
  // console.log(windowSize[0]);
  const [category, setcategory] = useState([]);
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [starttime, setstarttime] = useState("");
  const [endtime, setendtime] = useState("");
  const [capacity, setcapacity] = useState("");
  const [sort, setSort] = useState("None");
  const [search, setSearch] = useState("");
  const [searchFinal, setSearchFinal] = useState("");
  // const [asc, setasc] = useState(1);
  const [toggle, settoggle] = useState(true);
  function handlecategory(e) {
    const { value, checked } = e.target;
    console.log(e.target);
    if (checked) {
      setcategory((pre) => [...pre, value]);
    } else {
      setcategory((pre) => {
        return [...pre.filter((categ) => categ !== value)];
      });
    }
  }
  // function handleasc() {
  //   setasc(1);
  //   //console.log(asc);
  // }
  // function handledes() {
  //   setasc(0);
  //   //console.log("sdjksndvb");
  // }

  // const handle_start_date = (e) => {
  //   const get_startdate_value = e.target.value;
  //   const setdateformat = get_startdate_value.split("-");
  //   const settoyear = setdateformat[0];
  //   const settomonth = setdateformat[1];
  //   const settodate = setdateformat[2];
  //   const settodateformat = settoyear + "" + settomonth + "" + settodate;
  //   setstartdate(settodateformat);
  //   console.log(startdate);
  // };
  // const handle_end_date = (e) => {
  //   const get_enddate_value = e.target.value;
  //   const setdateformat = get_enddate_value.split("-");
  //   const settoyear = setdateformat[0];
  //   const settomonth = setdateformat[1];
  //   const settodate = setdateformat[2];
  //   const settodateformat = settoyear + "" + settomonth + "" + settodate;
  //   setenddate(settodateformat);
  //   console.log(enddate);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   //alert("todate "+todate+ "form date"+ fromdate);

  //   if (startdate > enddate) {
  //     alert("Please select valid date");
  //   } else {
  //     alert("Successfull ! Please set API URL");
  //   }
  // };

  const filters = [
    {
      id: "category",
      name: "Category",
      options: [
        {
          value: "sport",
          label: "sport",
          checked: category.includes("sport") ? true : false,
        },
        {
          value: "cinema",
          label: "cinema",
          checked: category.includes("cinema") ? true : false,
        },
        {
          value: "religion",
          label: "religion",
          checked: category.includes("religion") ? true : false,
        },
      ],
    },
  ];
  // const notificationMethods = [
  //   { id: "Time", title: "Time" },
  //   { id: "Duration", title: "Duration" },
  //   { id: "Capacity", title: "Capacity" },
  //   { id: "None", title: "None" },
  // ];

  // console.log("category : ", category);
  // console.log("startdate : ", startdate);
  // console.log("enddate : ", enddate);
  // console.log("starttime : ", starttime);
  // console.log("endtime : ", endtime);
  // console.log("capacity : ", capacity);
  // console.log("sort : ", sort);
  let asc = 1;
  let sort_type = "";

  if (sort === "The Earliest") {
    sort_type = "time";
    asc = 1;
  }
  if (sort === "The Latest") {
    sort_type = "time";
    asc = 0;
  }
  if (sort === "The Shortest") {
    sort_type = "duration";
    asc = 1;
  }
  if (sort === "The Longest") {
    sort_type = "duration";
    asc = 0;
  }
  if (sort === "Less Capacity") {
    sort_type = "capacity";
    asc = 1;
  }
  if (sort === "More Capacity") {
    sort_type = "capacity";
    asc = 0;
  }
  let set_category = "";
  for (let i = 0; i < category.length; i++) {
    set_category += `categories=${category[i]}&`;
  }
  set_category = set_category.substring(0, set_category.length - 1);
  const filter_params = {
    start_date:
      startdate && starttime ? `${startdate}T${starttime}` : startdate,
    end_date: enddate && endtime ? `${enddate}T${endtime}` : enddate,
    categories: set_category,
    member_count: capacity,
    order: asc,
    sort: sort_type,
    room_name: search,
  };

  useEffect(() => {
    setparamsFilter(filter_params);
    setSearch("");
  }, [
    startdate,
    enddate,
    starttime,
    endtime,
    category,
    capacity,
    sort,
    searchFinal,
  ]);
  // if (asc) {
  //   asc_color = "bg-sky-500";
  //   des_color = " ";
  // } else {
  //   asc_color = " ";
  //   des_color = "bg-sky-500";
  // }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setSearchFinal(search);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchFinal(search);
  };
  return (
    <div>
      <div className="">
        <div class="flex items-center justify-end">
          {toggle && (
            <form onSubmit={handleSubmit}>
              <div class="flex items-center gap-2">
                <label class="block">
                  <input
                    className="rounded-md mb-7 py-2 text-sm block w-full  placeholder-slate-700 focus:ring-slate-600 focus:border-slate-600 bg-slate-300 dark:bg-navy-500 dark:placeholder-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer"
                    placeholder="Search here..."
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                </label>
                <button
                  //@click="isInputActive = !isInputActive"
                  type="submit"
                  value="submit"
                  className="btn h-8 w-8 rounded-full p-0 mb-7 focus:ring-slate-600 focus:border-slate-600 hover:bg-slate-300 dark:hover:bg-navy-500 dark:text-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4.5 w-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          )}
          {/* <button
            //@click="isFilterExpanded = !isFilterExpanded"
            className=" btn xl:invisible lg:invisible md:invisible sm:invisible  h-8 w-8 rounded-full p-0 mb-7 mr-15 focus:ring-slate-600 focus:border-slate-600 hover:bg-slate-300 dark:hover:bg-navy-500 dark:text-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer"
            onClick={() => {
              settoggle(!toggle);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4.5 w-4.5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M18 11.5H6M21 4H3m6 15h6"
              />
            </svg>
          </button> */}
        </div>
        {/* Filters */}
        {toggle && (
          <section aria-labelledby="filter-heading">
            <div class=" py-5">
              <div class="grid grid-cols-1 gap-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:gap-5 lg:gap-3 xl:gap-17">
                <div class="flex">
                  <label className="inline text-1xl mt-2 font-medium text-slate-700 dark:text-navy-100">
                    Duration:
                  </label>
                  <div className="relative inset-y-0 left-0 flex items-center pl-2  ">
                    <input
                      name="startDate"
                      type="Date"
                      className="rounded-md mb-7 py-2 text-sm block w-full p-1 text-slate-700 focus:ring-slate-600 focus:border-slate-600 bg-slate-300 dark:bg-navy-500 dark:text-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer"
                      placeholder="Select date start"
                      onChange={(e) => setstartdate(e.target.value)}
                    />
                  </div>
                  <div className="relative inset-y-0 left-0 flex items-center pl-3  ">
                    <input
                      name="startTime"
                      type="time"
                      className="rounded-md mb-7 py-2 text-sm block w-full p-1 text-slate-700 focus:ring-slate-600 focus:border-slate-600 bg-slate-300 dark:bg-navy-500 dark:text-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer"
                      placeholder="Select time start"
                      onChange={(e) => setstarttime(e.target.value)}
                    />
                  </div>
                </div>
                <div class="flex">
                  <span className=" py-2 ml-7 text-1xl font-medium text-slate-700 dark:text-navy-100">
                    to
                  </span>
                  <div className="relative ml-5 inset-y-0 left-0 flex items-center pl-2  ">
                    <input
                      name="endDate"
                      type="Date"
                      className="rounded-md mb-7 py-2 text-sm block w-full p-1 text-slate-700 focus:ring-slate-600 focus:border-slate-600 bg-slate-300 dark:bg-navy-500 dark:text-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer"
                      placeholder="Select date end"
                      onChange={(e) => setenddate(e.target.value)}
                    />
                  </div>
                  <div className="relative inset-y-0 left-0 flex items-center pl-3  ">
                    <input
                      name="endtime"
                      type="time"
                      className="rounded-md mb-7 py-2 text-sm block w-full p-1 text-slate-700 focus:ring-slate-600 focus:border-slate-600 bg-slate-300 dark:bg-navy-500 dark:text-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer"
                      placeholder="Select time end"
                      onChange={(e) => setendtime(e.target.value)}
                    />
                  </div>
                </div>
                <div class="flex xl:mx-8">
                  <label className="inline text-1xl mt-2 font-medium text-slate-700 dark:text-navy-100">
                    category:
                  </label>
                  <div className="flow-root">
                    <Popover.Group className="mb-4 flex items-center divide-x divide-slate-700 text-slate-700 ">
                      {filters.map((section) => (
                        <Popover
                          key={section.name}
                          className="relative inline-block ml-2 text-left"
                        >
                          <Popover.Button className="group border-slate-600 border rounded-md py-1 px-7 mb-3   font-bold inline-flex justify-center text-1xl font-lg text-slate-700 focus:ring-slate-600 focus:border-2 bg-slate-300 dark:bg-navy-500 dark:text-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer">
                            <span>{"No Matter"}</span>
                            <ChevronDownIcon
                              className="h-7  w-8 flex-shrink-0 text-slate-300 group-hover:text-slate-600"
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Popover.Panel className="absolute dark:bg-navy-500 bg-slate-200 top-9 mt-0.5 px-7 z-10   origin-top-right rounded-md  p-4 shadow-2xl  focus:outline-none">
                              <form className="space-y-2">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      onChange={handlecategory}
                                      defaultChecked={option.checked}
                                      className="h-5 w-5 rounded border-slate-600"
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 whitespace-nowrap pr-6 text-md font-medium text-slate-700 focus:ring-slate-600 focus:border-slate-600 dark:text-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </form>
                            </Popover.Panel>
                          </Transition>
                        </Popover>
                      ))}
                    </Popover.Group>
                  </div>
                </div>
                {/* <div class="">
                  <span className="relative mt-1.5 flex">
                  <Flatpickr
                    ref={calref}
                    options={{
                        //mode: "range",
                        enableTime: true,
                        dateFormat: "Y-m-d H:i",
                        // defaultDate: ["2016-10-10", "2016-10-20"],
                        onChange: (selectedDates) => {
                            console.log(selectedDates[0].toISOString(),selectedDates[0].toLocaleString())
                        },
                        // onClose: () => {
                        //     formik.setFieldTouched("dateRange", true);
                        //     formik.validateForm();
                        // },
                    }}
                    render={({defaultValue, value, ...props}, ref) => {
                        return (
                            <input
                                defaultValue={defaultValue}
                                ref={ref}
                                className="form-input peer  rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                placeholder="Choose date..."
                                type="text"
                                onChange={() => console.log(calref)}
                            />
                        );
                    }}
                />
                  {/* <span
                    className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
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
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                {/* </span>
                </span>
                  </div>
                </div>
                <span className="relative mt-1.5 flex">
                  <Flatpickr
                    ref={calref}
                    options={{
                        //mode: "range",
                        enableTime: true,
                        dateFormat: "Y-m-d H:i",
                        // defaultDate: ["2016-10-10", "2016-10-20"],
                        onChange: (selectedDates) => {

                        },
                        // onClose: () => {
                        //     formik.setFieldTouched("dateRange", true);
                        //     formik.validateForm();
                        // },
                    }}
                    render={({defaultValue, value, ...props}, ref) => {
                        return (
                            <input
                                defaultValue={defaultValue}
                                ref={ref}
                                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                placeholder="Choose date..."
                                type="text"
                                onChange={() => console.log(calref)}
                            />
                        );
                    }}
                />
                  <span
                    className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
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
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                </span>
                </span> */}
                <div class="flex ">
                  <label className="inline text-1xl mt-2 font-medium text-slate-700 dark:text-navy-100">
                    Capacity:
                  </label>
                  <select
                    className="inline rounded-md  px-7 text-1xl mb-7 ml-2  font-bold hover:font-bold w-40  text-base focus:outline-none sm:text-sm text-slate-700 focus:ring-slate-600 focus:border-slate-600 bg-slate-300 dark:bg-navy-500 dark:text-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer"
                    defaultValue="None"
                    value={capacity}
                    onChange={(e) => setcapacity(e.target.value)}
                  >
                    <option value="">No Matter</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* <div>
          <fieldset className="mt-4 ">
            <legend className="sr-only">Notification method</legend>
            <div className="space-x-20 flex justify-center">
              <div>
                <button className={asc_color} onClick={handleasc}>
                  ▲
                </button>
                <button className={des_color} onClick={handledes}>
                  ▼
                </button>
              </div>
              {notificationMethods.map((notificationMethod) => (
                <div key={notificationMethod.id} className="flex items-center">
                  <input
                    id={notificationMethod.id}
                    name="notification-method"
                    type="radio"
                    defaultChecked={notificationMethod.id === "email"}
                    className="h-4 w-4 text-1xl border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    onChange={() => setSort(notificationMethod.id)}
                  />
                  <label
                    htmlFor={notificationMethod.id}
                    className="ml-3 text-1xl font-medium text-grey"
                  >
                    {notificationMethod.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div> */}
        {toggle && (
          <div className=" mt-3">
            <ul className="grid grid-cols-2 font-medium pr-3 gap-3 sm:grid-cols-3 xl:grid-cols-6 lg:grid-cols-3  md:grid-cols-3 sm:gap-5 lg:gap-3 xl:gap-20">
              <li>
                <button
                  onClick={() => setSort("The Earliest")}
                  className="text-slate-500 dark:text-navy-200 focus:text-slate-900 dark:focus:text-navy-50  hover:underline hover:text-slate-700 dark:hover:text-navy-100 cursor-pointer"
                >
                  The Earliest
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSort("The Latest")}
                  className="text-slate-500 focus:text-slate-900 dark:focus:text-navy-50  dark:text-navy-200 hover:underline hover:text-slate-700 dark:hover:text-navy-100 cursor-pointer"
                >
                  The Latest
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSort("The Longest")}
                  className="text-slate-500 dark:text-navy-200 focus:text-slate-900 dark:focus:text-navy-50  hover:underline hover:text-slate-700 dark:hover:text-navy-100 cursor-pointer"
                >
                  The Longest
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSort("The Shortest")}
                  className="text-slate-500 dark:text-navy-200 focus:text-slate-900 dark:focus:text-navy-50  hover:underline hover:text-slate-700 dark:hover:text-navy-100 cursor-pointer"
                >
                  The Shortest
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSort("More Capacity")}
                  className="text-slate-500 dark:text-navy-200 focus:text-slate-900 dark:focus:text-navy-50  hover:underline hover:text-slate-700 dark:hover:text-navy-100 cursor-pointer"
                >
                  More Capacity
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSort("Less Capacity")}
                  className="text-slate-500 dark:text-navy-200 focus:text-slate-900 dark:focus:text-navy-50 hover:underline hover:text-slate-700 dark:hover:text-navy-100 cursor-pointer"
                >
                  Less Capacity
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
