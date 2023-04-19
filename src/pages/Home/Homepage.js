import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/tm_Header";
import SidebarNavigation from "../../components/SidebarNavigation";
import Filters from "./Filter";
import axios from "axios";

import AuthContext from "../../context/AuthContext";

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
  let authTokens = useContext(AuthContext).authTokens;
  console.log(authTokens.access);
  const [paramsFilter, setparamsFilter] = useState("");
  // console.log("Homepage: ", paramsFilter);
  const removeEmptyValues = (object) => {
    const keys = Object.keys(object);
    for (var i = 0; i < keys.length; ++i) {
      const key = keys[i];
      const value = object[key];
      if (value === null || value === undefined || value === "") {
        delete object[key];
      }
    }
  };
  removeEmptyValues(paramsFilter);
  console.log("JSON paramFinal: ", paramsFilter);

  let url = new URLSearchParams(paramsFilter).toString();

  url = url.replaceAll("%3D", "=");
  url = url.replaceAll("%26", "&");
  url = url.replaceAll("%3A", ":");
  url = url.replace("categories=", "");
  console.log("params", url);

  const [status, setstatus] = useState("");
  const req = async () => {
    const { data } = await axios
      .get(`http://127.0.0.1:8000/api/rooms?${url}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authTokens.access,
        },
      })
      .then((response) => response);
    setstatus(data);
    console.log(data);
  };
  useEffect(() => {
    req();
  }, [authTokens, paramsFilter]);
  let cards = status ? status.results : {};
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
          className=" bg-slate-100 dark:bg-navy-900 text-left pb-10 pl-10"
          style={{ width: "85vw", marginLeft: "13.9vw" }}
        >
          <div className="text-5xl font-bold text-myGrey mb-8 mt-5">Events</div>
          <Filters
            paramsFilter={paramsFilter}
            setparamsFilter={setparamsFilter}
          />

          <div
            className="grid grid-cols-2 gap-6"
            style={{ width: "75.6vw", marginTop: "5vh" }}
          >
            {status ? (
              cards.map((item, index) => (
                <Card key={index} info={information} data={item} />
              ))
            ) : (
              <Card info={information} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
