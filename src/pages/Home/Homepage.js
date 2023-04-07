import React, { useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import SidebarNavigation from "../../components/SidebarNavigation";
import Filters from "./Filter";

const Homepage = () => {
  // const [sort, setSort] = useState("None");
  // const notificationMethods = [
  //   { id: "nearestEvent", title: "Nearest Events" },
  //   { id: "numberOfVisits", title: "Number of Visits" },
  //   { id: "unfinishedTasks", title: "Unfinished Tasks" },
  //   { id: "none", title: "None" },
  // ];
  const information = {
    name: "Name of the event",
    categories: ["sport", "cultural"],
    startDate: "3/30/2023",
    endDate: "16/4/2023",
    member: 31,
    maxMember: 40,
  };
  // const handleChangeSubject = (e) => {
  //   setSubject(e.target.value);
  // };
  // const [subject, setSubject] = useState("None");
  // const handleChangeCount = (e) => {
  //   setcountOfPeople(e.target.value);
  // };
  // const [countOfPeople, setcountOfPeople] = useState("None");
  // const handleChangeDuration = (e) => {
  //   setduration(e.target.value);
  // };
  // const [duration, setduration] = useState("None");
  /* console.log(sort);
  console.log(subject);
  console.log(countOfPeople);
  console.log(duration); */
  return (
    <div>
      <Header />
      <div
        style={{
          paddingTop: "12vh",
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
        }}
      >
        <SidebarNavigation />
        <div
          className="bg-myDark1 text-left pb-10 pl-10"
          style={{ width: "85vw", marginLeft: "13.9vw" }}
        >
          <div className="text-5xl font-bold text-myGrey mb-8 mt-5">Events</div>
          <Filters />
          {/* <div className="text-3xl font-bold text-myGrey">Sort Based On:</div>
          <div>
            <fieldset className="mt-4">
              <legend className="sr-only">Notification method</legend>
              <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                {notificationMethods.map((notificationMethod) => (
                  <div
                    key={notificationMethod.id}
                    className="flex items-center"
                  >
                    <input
                      id={notificationMethod.id}
                      name="notification-method"
                      type="radio"
                      defaultChecked={notificationMethod.id === "email"}
                      className="h-4 w-4 text-1xl border-myGrey text-myBlueGreen1"
                      onChange={() => setSort(notificationMethod.id)}
                    />
                    <label
                      htmlFor={notificationMethod.id}
                      className="ml-3 text-1xl font-medium text-myGrey"
                    >
                      {notificationMethod.title}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
          <div className="text-3xl font-bold text-myGrey mt-6 mb-4">
            Filters:{" "}
          </div>
          <div>
            <label className="text-1xl font-medium text-myGrey inline">
              Select The Subject:
            </label>
            <select
              className="inline rounded-md border-myGrey py-2 font-bold focus:font-bold w-48 mb-4 pl-3 bg-myDark1 text-myGrey pr-10 text-base focus:border-myBlueGreen1 focus:outline-none focus:ring-myBlueGreen1 sm:text-sm"
              defaultValue="None"
              style={{ marginLeft: "17.2em" }}
              value={subject}
              onChange={handleChangeSubject}
            >
              <option value="None">None</option>
              <option value="Sport">Sport</option>
              <option value="Religious">Religious</option>
              <option value="Culrural">Cultural</option>
            </select>
          </div>
          <div>
            <label className="inline text-1xl font-medium text-myGrey">
              The number of people attending the event:
            </label>
            <select
              className="inline rounded-md border-myGrey py-2 pl-3 text-1xl mb-4 ml-16 font-bold hover:font-bold w-48 pr-10 bg-myDark1 text-myGrey text-base focus:border-myBlueGreen1 focus:outline-none focus:ring-myBlueGreen1 sm:text-sm"
              defaultValue="None"
              value={countOfPeople}
              onChange={handleChangeCount}
            >
              <option value="None">Doesn't Matter</option>
              <option value="1-10">1-10</option>
              <option value="10-20">10-20</option>
              <option value="20<">More than 20</option>
            </select>
          </div>
          <div className="mb-5">
            <label className="inline text-1xl font-medium text-myGrey">
              Duration of the Event:
            </label>
            <select
              className="inline rounded-md border-myGrey py-2 font-bold focus:font-bold w-48 mb-4 pl-3 bg-myDark1 text-myGrey pr-10 text-base focus:border-myBlueGreen1 focus:outline-none focus:ring-myBlueGreen1 sm:text-sm"
              defaultValue="None"
              style={{ marginLeft: "15.55em" }}
              value={duration}
              onChange={handleChangeDuration}
            >
              <option value="None">Doesn't Matter</option>
              <option value="<1">Less Than 1 Hour</option>
              <option value="1-2">1 - 2 Hours</option>
              <option value="2<">More Than 2 Hours</option>
            </select>
          </div> */}
          <div
            className="grid grid-cols-2 gap-4"
            style={{ width: "75.6vw", marginTop: "5vh" }}
          >
            <Card info={information} />
            <Card info={information} />
            <Card info={information} />
            <Card info={information} />
            <Card info={information} />
            <Card info={information} />
            <Card info={information} />
            <Card info={information} />
            <Card info={information} />
            <Card info={information} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
