import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
// var asc_color = "bg-sky-500";
// var des_color = " ";

export default function Filters({ paramsFilter, setparamsFilter }) {
  const [category, setcategory] = useState([]);
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [starttime, setstarttime] = useState("");
  const [endtime, setendtime] = useState("");
  const [capacity, setcapacity] = useState("");
  const [sort, setSort] = useState("None");
  // const [asc, setasc] = useState(1);

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
  };

  useEffect(() => {
    setparamsFilter(filter_params);
  }, [startdate, enddate, starttime, endtime, category, capacity, sort]);
  // if (asc) {
  //   asc_color = "bg-sky-500";
  //   des_color = " ";
  // } else {
  //   asc_color = " ";
  //   des_color = "bg-sky-500";
  // }

  return (
    <div>
      <div className="w-11/12">
        {/* Filters */}
        <section aria-labelledby="filter-heading">
          <div className="border-b pb-0">
            <div className="flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="date mb-1">
                <div className="flex items-center -ml-8">
                  <label className="inline text-1xl mr-0  mb-7  font-medium text-slate-700 dark:text-navy-100">
                    Duration:
                  </label>
                  <div className="relative inset-y-0 left-0 flex items-center pl-3  ">
                    <input
                      name="startDate"
                      type="Date"
                      className="rounded-md mb-7 py-2 text-sm text-slate-700 focus:ring-slate-600 focus:border-slate-600 bg-slate-300 dark:bg-navy-500 dark:text-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer block w-full pl-10 p-2.5 "
                      placeholder="Select date start"
                      onChange={(e) => setstartdate(e.target.value)}
                    />
                  </div>
                  <div className="relative inset-y-0 left-0 flex items-center pl-3  ">
                    <input
                      name="startTime"
                      type="time"
                      className="rounded-md mb-7 py-2  text-sm block w-full pl-10 p-2.5 text-slate-700 focus:ring-slate-600 focus:border-slate-600 bg-slate-300 dark:bg-navy-500 dark:text-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer"
                      placeholder="Select time start"
                      onChange={(e) => setstarttime(e.target.value)}
                    />
                  </div>
                  <span className="mb-7 py-2 mr-3 ml-6 dark:text-navy-100 text-slate-700">
                    to
                  </span>
                  <div className="relative inset-y-0 left-0 flex items-center pl-3  ">
                    <input
                      name="endDate"
                      type="Date"
                      className="rounded-md mb-7 py-2 text-sm block w-full pl-10 p-2.5 text-slate-700 focus:ring-slate-600 focus:border-slate-600 bg-slate-300 dark:bg-navy-500 dark:text-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer"
                      placeholder="Select date end"
                      onChange={(e) => setenddate(e.target.value)}
                    />
                  </div>
                  <div className="relative inset-y-0 left-0 flex items-center pl-3  ">
                    <input
                      name="endtime"
                      type="time"
                      className="rounded-md mb-7 py-2 text-sm block w-full pl-10 p-2.5 text-slate-700 focus:ring-slate-600 focus:border-slate-600 bg-slate-300 dark:bg-navy-500 dark:text-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer"
                      placeholder="Select time end"
                      onChange={(e) => setendtime(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="inline ml-5 text-1xl font-medium text-slate-700 dark:text-navy-100">
                  Capacity:
                </label>
                <select
                  className="inline rounded-md py-2 pl-1 text-1xl mb-7 ml-2 -mr-20 font-bold hover:font-bold w-30 pr-10 text-base focus:outline-none sm:text-sm text-slate-700 focus:ring-slate-600 focus:border-slate-600 bg-slate-300 dark:bg-navy-500 dark:text-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer"
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
              <div className="hidden sm:block">
                <div className="flow-root">
                  <Popover.Group className="ml-10 mb-4 flex items-center divide-x divide-slate-700 text-slate-700">
                    {filters.map((section) => (
                      <Popover
                        key={section.name}
                        className="relative inline-block ml-3 text-left"
                      >
                        <Popover.Button className="group border rounded-md py-1 pl-7 mb-3 -mr-7 ml-9 font-bold inline-flex justify-center text-1xl font-lg text-slate-700 focus:ring-slate-600 focus:border-slate-600 bg-slate-300 dark:bg-navy-500 dark:text-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer">
                          <span>{section.name}</span>
                          <ChevronDownIcon
                            className="-mr-1 ml-1 h-7  w-10 flex-shrink-0 text-myGrey group-hover:text-mygrey"
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
                          <Popover.Panel className="absolute dark:bg-navy-500 bg-slate-200 top-9 mt-0.5 right-0 z-10 -mr-7  origin-top-right rounded-md bg-myDark1 p-4 shadow-2xl  focus:outline-none">
                            <form className="space-y-2">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-cente"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    onChange={handlecategory}
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-myGrey"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-slate-700 focus:ring-slate-600 focus:border-slate-600 dark:text-navy-100 dark:focus:ring-navy-100 dark:focus:border-navy-100 cursor-pointer"
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
            </div>
          </div>
        </section>
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

        <div className=" mt-3">
          <ul className="flex  font-medium mt-0 mr-6 space-x-12 text-1xl">
            <li>
              <button
                onClick={() => setSort("The Earliest")}
                className="text-myGrey focus:text-myTeal2  hover:underline hover:text-myTeal1 cursor-pointer"
              >
                The Earliest
              </button>
            </li>
            <li>
              <button
                onClick={() => setSort("The Latest")}
                className="text-myGrey focus:text-myTeal2  dark:text-white hover:underline hover:text-myTeal1 cursor-pointer"
              >
                The Latest
              </button>
            </li>
            <li>
              <button
                onClick={() => setSort("The Longest")}
                className="text-myGrey focus:text-myTeal2  hover:underline hover:text-myTeal1 cursor-pointer"
              >
                The Longest
              </button>
            </li>
            <li>
              <button
                onClick={() => setSort("The Shortest")}
                className="text-myGrey focus:text-myTeal2  hover:underline hover:text-myTeal1 cursor-pointer"
              >
                The Shortest
              </button>
            </li>
            <li>
              <button
                onClick={() => setSort("More Capacity")}
                className="text-myGrey focus:text-myTeal2  hover:underline hover:text-myTeal1 cursor-pointer"
              >
                More Capacity
              </button>
            </li>
            <li>
              <button
                onClick={() => setSort("Less Capacity")}
                className="text-myGrey focus:text-myTeal2 hover:underline hover:text-myTeal1 cursor-pointer"
              >
                Less Capacity
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
