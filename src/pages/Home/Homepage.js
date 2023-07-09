import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

import PageWrapper from "../../components/PageWrapper";
import MainSection from "../../components/MainSection";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import DarkModeToggle from "../../components/DarkModeToggle";
import Card from "../../components/Card";
import Filters from "./Filter";

import AuthContext from "../../context/AuthContext";
import { number } from "yup";
import Spinner from "../../components/Spinner";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  let authTokens = useContext(AuthContext).authTokens;
  // console.log(authTokens.access);
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
  // console.log("JSON paramFinal: ", paramsFilter);

  let url = new URLSearchParams(paramsFilter).toString();

  url = url.replaceAll("%3D", "=");
  url = url.replaceAll("%26", "&");
  url = url.replaceAll("%3A", ":");
  url = url.replace("categories=", "");
  // console.log("params", url);
  const [spinner, setspinner] = useState(false);
  const [status, setstatus] = useState("");
  const req = async () => {
    setspinner(true);
    const { data } = await axios.get(`/api/rooms?${url}&page=${currentPage}`);
    // .then((response) => response);
    setstatus(data);
    setspinner(false);
    // console.log(`http://127.0.0.1:8000/api/rooms?${url}&page=${currentPage}`);
    // console.log(currentPage);
    let count = data.count;
    let number = 1;
    if (count % 10 == 0) {
      number = count / 10;
    } else {
      number = (count - (count % 10)) / 10 + 1;
    }
    setTotalPages(number);
    // console.log(url);
  };

  useEffect(() => {
    req();
  }, [authTokens, paramsFilter, currentPage, totalPages]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (filterParams) => {
    setparamsFilter(filterParams);
    setCurrentPage(1); // Reset to page 1 when filters change
  };
  // console.log(`data is ${status.results}`);
  let cards = status ? status.results : {};
  console.log(status.count);
  return (
    <>
      <PageWrapper>
        <Header>
          <Header.Items>
            <Header.SidebarToggle />
            <Header.Right>
              <Header.Right.DarkModeToggle />
              <Header.Right.Notification />
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
                {/* <Sidebar.Primary.Middle.Rooms.Item /> */}
                <Sidebar.Primary.Middle.Rooms.LoadItems />
                <Sidebar.Primary.Middle.Rooms.AddRoom />

                {/* <Sidebar.Primary.Middle.Rooms.AllItem/> */}
              </Sidebar.Primary.Middle.Rooms>
            </Sidebar.Primary.Middle>
            <Sidebar.Primary.Bottom>
              {/* <Sidebar.Primary.Bottom.LogOut /> */}
              <Sidebar.Primary.Bottom.Profile />
            </Sidebar.Primary.Bottom>
          </Sidebar.Primary>
          <Sidebar.Secondary>
            <Sidebar.Secondary.Expanded>
              <Sidebar.Secondary.Expanded.Header>
                <Sidebar.Secondary.Expanded.Header.Title>
                  <Sidebar.Secondary.Expanded.Header.Title.Icon />
                  <Sidebar.Secondary.Expanded.Header.Title.Text>
                    Menu
                  </Sidebar.Secondary.Expanded.Header.Title.Text>
                </Sidebar.Secondary.Expanded.Header.Title>
                <Sidebar.Secondary.Expanded.Header.MinimizeButton />
              </Sidebar.Secondary.Expanded.Header>
              <Sidebar.Secondary.Expanded.Body>
                {/* <Sidebar.Secondary.Expanded.Body.Tabs>
                  <Sidebar.Secondary.Expanded.Body.Tabs.Chat />
                  <Sidebar.Secondary.Expanded.Body.Tabs.Todo />
                  <Sidebar.Secondary.Expanded.Body.Tabs.InfoTab />
                  
                </Sidebar.Secondary.Expanded.Body.Tabs> */}
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
        <MainSection>
          <div className=" text-left pb-10">
            <div className="text-5xl font-bold text-myGrey mb-8 mt-5">
              Events
            </div>
            <Filters
              paramsFilter={paramsFilter}
              setparamsFilter={handleFilterChange}
            />
            {spinner ? (
              <div className=" flex justify-center mb-4 mt-[6vh]" style={{}}>
                <div className=" m-auto " style={{ margin: "0 auto" }}>
                  <Spinner />
                </div>
              </div>
            ) : (
              <div>
                {status.count ? (
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 "
                    style={{ width: "78vw", marginTop: "5vh" }}
                  >
                    {cards.map((item, index) => (
                      <Card key={index} info={information} data={item} />
                    ))}
                  </div>
                ) : (
                  <div
                    className="dark:text-navy-50 text-slate-900 pt-20 text-2xl font-semibold"
                    style={{ paddingLeft: "35vw" }}
                  >
                    No Room Found
                  </div>
                )}
              </div>
            )}
          </div>
          {totalPages !== 1 && (
            <Pagination
              current={currentPage}
              total={totalPages}
              setPage={(page) => setCurrentPage(page)}
            />
          )}
        </MainSection>
      </PageWrapper>
    </>
  );
};

export default Homepage;
