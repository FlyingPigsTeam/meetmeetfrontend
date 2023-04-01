import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
var asc_color = "bg-sky-500";
var des_color = " ";

export default function Filters() {
  const [category, setcategory] = useState([]);
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [capacity, setcapacity] = useState(0);
  const [sort, setSort] = useState("None");
  const [asc, setasc] = useState(1);

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
  function handleasc() {
    setasc(1);
    //console.log(asc);
  }
  function handledes() {
    setasc(0);
    //console.log("sdjksndvb");
  }

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
          label: "Tees",
          checked: category.includes("cinema") ? true : false,
        },
        {
          value: "climbing",
          label: "climbing",
          checked: category.includes("climbing") ? true : false,
        },
      ],
    },
  ];
  const notificationMethods = [
    { id: "Time", title: "Time" },
    { id: "Duration", title: "Duration" },
    { id: "Capacity", title: "Capacity" },
    { id: "None", title: "None" },
  ];
  console.log("category : ", category);
  console.log("startdate : ", startdate);
  console.log("enddate : ", enddate);
  console.log("capacity : ", capacity);
  console.log("sort : ", sort);
  console.log("asc : ", asc);
  if (asc) {
    asc_color = "bg-sky-500";
    des_color = " ";
  } else {
    asc_color = " ";
    des_color = "bg-sky-500";
  }

  return (
    <div>
      <div className="bg-white w-11/12">
        {/* Filters */}
        <section aria-labelledby="filter-heading">
          <div className="border-b border-myGrey1 bg-myDark1 pb-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="date">
                <div date-rangepicker className="flex items-center">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                    <label>Start Date :</label>
                    <input
                      name="start"
                      type="Date"
                      className="bg-myDark1 border-4 border-myGrey1 text-myGrey1 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Select date start"
                      onChange={(e) => setstartdate(e.target.value)}
                    />
                  </div>
                  <span className="mx-4 mt-6 text-gray-500">to</span>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                    <label>End Date :</label>
                    <input
                      name="end"
                      type="Date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Select date end"
                      onChange={(e) => setenddate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="room-capacity">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                  <label>Room's Capacity :</label>
                  <input
                    name="room-capacity"
                    type="text"
                    pattern="^[0-9]+$"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Room's capacity"
                    onBlur={(e) => setcapacity(e.target.value)}
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="flow-root">
                  <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                    {filters.map((section) => (
                      <Popover
                        key={section.name}
                        className="relative inline-block px-4 text-left"
                      >
                        <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                          <span>{section.name}</span>
                          <ChevronDownIcon
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
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
                          <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <form className="space-y-4">
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
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
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
        <div>
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
        </div>
      </div>
    </div>
  );
}
