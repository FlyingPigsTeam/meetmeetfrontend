import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
// var asc_color = "bg-sky-500";
// var des_color = " ";

export default function Filters() {
  const [category, setcategory] = useState([]);
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [starttime, setstarttime] = useState("");
  const [endtime, setendtime] = useState("");
  const [capacity, setcapacity] = useState(0);
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
  // const notificationMethods = [
  //   { id: "Time", title: "Time" },
  //   { id: "Duration", title: "Duration" },
  //   { id: "Capacity", title: "Capacity" },
  //   { id: "None", title: "None" },
  // ];
  console.log("category : ", category);
  console.log("startdate : ", startdate);
  console.log("enddate : ", enddate);
  console.log("starttime : ", starttime);
  console.log("endtime : ", endtime);
  console.log("capacity : ", capacity);
  console.log("sort : ", sort);
  // console.log("asc : ", asc);
  // if (asc) {
  //   asc_color = "bg-sky-500";
  //   des_color = " ";
  // } else {
  //   asc_color = " ";
  //   des_color = "bg-sky-500";
  // }

  return (
    <div>
      <div className="bg-white w-11/12">
        {/* Filters */}
        <section aria-labelledby="filter-heading">
          <div className="border-b border-myGrey1 bg-myDark1 pb-0">
            <div className="flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="date mb-1">
                <div className="flex items-center -ml-8">
                  <label className="inline text-1xl mr-0  mb-7  font-medium text-myGrey">
                    Duration:
                  </label>
                  <div className="relative inset-y-0 left-0 flex items-center pl-3  ">
                    <input
                      name="startDate"
                      type="Date"
                      className="bg-myDark1 border-myGrey rounded-md mb-7 py-2  text-myGrey text-sm  focus:ring-myBlueGreen1 focus:border-myBlueGreen1 block w-full pl-10 p-2.5  dark:bg-myGrey dark:border-myGrey dark:placeholder-myGrey dark:text-myGrey dark:focus:ring-myBlueGreen1 dark:focus:border-myDark2"
                      placeholder="Select date start"
                      onChange={(e) => setstartdate(e.target.value)}
                    />
                  </div>
                  <div className="relative inset-y-0 left-0 flex items-center pl-3  ">
                    <input
                      name="startTime"
                      type="time"
                      className="bg-myDark1 border-myGrey rounded-md mb-7 py-2  text-myGrey text-sm  focus:ring-myBlueGreen1 focus:border-myBlueGreen1 block w-full pl-10 p-2.5  dark:bg-myGrey dark:border-myGrey dark:placeholder-myGrey dark:text-myGrey dark:focus:ring-myBlueGreen1 dark:focus:border-myDark2"
                      placeholder="Select time start"
                      onChange={(e) => setenddate(e.target.value)}
                    />
                  </div>
                  <span className="mb-7 py-2 mr-3 ml-6 text-myGrey">to</span>
                  <div className="relative inset-y-0 left-0 flex items-center pl-3  ">
                    <input
                      name="endDate"
                      type="Date"
                      className="bg-myDark1 border-myGrey rounded-md mb-7 py-2  text-myGrey text-sm  focus:ring-myBlueGreen1 focus:border-myBlueGreen1 block w-full pl-10 p-2.5  dark:bg-myGrey dark:border-myGrey dark:placeholder-myGrey dark:text-myGrey dark:focus:ring-myBlueGreen1 dark:focus:border-myDark2"
                      placeholder="Select date end"
                      onChange={(e) => setstarttime(e.target.value)}
                    />
                  </div>
                  <div className="relative inset-y-0 left-0 flex items-center pl-3  ">
                    <input
                      name="endtime"
                      type="time"
                      className="bg-myDark1 border-myGrey rounded-md mb-7 py-2  text-myGrey text-sm  focus:ring-myBlueGreen1 focus:border-myBlueGreen1 block w-full pl-10 p-2.5  dark:bg-myGrey dark:border-myGrey dark:placeholder-myGrey dark:text-myGrey dark:focus:ring-myBlueGreen1 dark:focus:border-myDark2"
                      placeholder="Select time end"
                      onChange={(e) => setendtime(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="inline ml-5 text-1xl font-medium text-myGrey">
                  Capacity:
                </label>
                <select
                  className="inline rounded-md border-myGrey py-2 pl-1 pr-3 text-1xl mb-7 ml-2 -mr-20 font-bold hover:font-bold w-30 pr-10 bg-myDark1 text-myGrey text-base focus:border-myBlueGreen1 focus:outline-none focus:ring-myBlueGreen1 sm:text-sm"
                  defaultValue="None"
                  value={capacity}
                  onChange={(e) => setcapacity(e.target.value)}
                >
                  <option value="None">No Matter</option>
                  <option value="1-10">1-10</option>
                  <option value="10-20">10-20</option>
                  <option value="20<">More than 20</option>
                </select>
              </div>
              <div className="hidden sm:block">
                <div className="flow-root">
                  <Popover.Group className="ml-10 mb-4 flex items-center divide-x divide-myGrey">
                    {filters.map((section) => (
                      <Popover
                        key={section.name}
                        className="relative inline-block ml-3 text-left"
                      >
                        <Popover.Button className="group border rounded-md py-1 pl-7 mb-3 -mr-7 ml-9 font-bold inline-flex justify-center text-1xl font-lg text-myGrey hover:text-myGrey">
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
                          <Popover.Panel className="absolute top-9 mt-0.5 right-0 z-10 -mr-7  origin-top-right rounded-md bg-myDark1 p-4 shadow-2xl ring-1 ring-myGrey  focus:outline-none">
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
                                    className="h-4 w-4 rounded border-myGrey text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-myGrey"
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

        <div class=" mt-3">
          <ul class="flex  font-medium mt-0 mr-6 space-x-12 text-1xl">
            <li>
              <button
                onClick={() => setSort("The Earliest")}
                class="text-myGrey focus:text-myTeal2  hover:underline hover:text-myTeal1 cursor-pointer"
              >
                The Earliest
              </button>
            </li>
            <li>
              <button
                onClick={() => setSort("The Latest")}
                class="text-myGrey focus:text-myTeal2  dark:text-white hover:underline hover:text-myTeal1 cursor-pointer"
              >
                The Latest
              </button>
            </li>
            <li>
              <button
                onClick={() => setSort("The Longest")}
                class="text-myGrey focus:text-myTeal2  hover:underline hover:text-myTeal1 cursor-pointer"
              >
                The Longest
              </button>
            </li>
            <li>
              <button
                onClick={() => setSort("The Shortest")}
                class="text-myGrey focus:text-myTeal2  hover:underline hover:text-myTeal1 cursor-pointer"
              >
                The Shortest
              </button>
            </li>
            <li>
              <button
                onClick={() => setSort("More Capacity")}
                class="text-myGrey focus:text-myTeal2  hover:underline hover:text-myTeal1 cursor-pointer"
              >
                More Capacity
              </button>
            </li>
            <li>
              <button
                onClick={() => setSort("Less Capacity")}
                class="text-myGrey focus:text-myTeal2 hover:underline hover:text-myTeal1 cursor-pointer"
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
