import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import PageWrapper from "../../components/PageWrapper";
import MainSection from "../../components/MainSection";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import DarkModeToggle from "../../components/DarkModeToggle";
import Card from "../../components/Card";
import Filters from "./Filter";


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
    <>
      <PageWrapper>
        <Header>
          <Header.Items>
            {/* <Header.SidebarToggle /> */}
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
                <Sidebar.Primary.Middle.Rooms.Item />
                <Sidebar.Primary.Middle.Rooms.AddRoom />

                {/* <Sidebar.Primary.Middle.Rooms.AllItem/> */}
              </Sidebar.Primary.Middle.Rooms>
            </Sidebar.Primary.Middle>
            <Sidebar.Primary.Bottom>
              <Sidebar.Primary.Bottom.Settings />
              <Sidebar.Primary.Bottom.Profile />
            </Sidebar.Primary.Bottom>
          </Sidebar.Primary>
        
        </Sidebar>
        <MainSection>
          <div
            className=" bg-slate-100 dark:bg-navy-900 text-left pb-10 pl-10"

          >
            <div className="text-5xl font-bold text-myGrey mb-8 mt-5">
              Events
            </div>
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
        </MainSection>
      </PageWrapper>
    </>
  );
};

export default Homepage;
