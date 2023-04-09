import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import SidebarNavigation from "../../components/SidebarNavigation";
import Filters from "./Filter";
import axios from "axios";
import { json } from "react-router-dom";
import { string } from "yup";
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
  //console.log(authTokens.access);
  const [status, setstatus] = useState("");
  const req = async () => {
    const { data } = await axios.get("http://127.0.0.1:8000/api/rooms", {
      
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authTokens.access,
      },
    }).then((response) => response);
    setstatus(data);
    console.log(data);
  };
  useEffect(() => {
    req();
  }, [authTokens]);
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
          className="bg-myDark1 text-left pb-10 pl-10"
          style={{ width: "85vw", marginLeft: "13.9vw" }}
        >
          <div className="text-5xl font-bold text-myGrey mb-8 mt-5">Events</div>
          <Filters />

          <div
            className="grid grid-cols-2 gap-4"
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
