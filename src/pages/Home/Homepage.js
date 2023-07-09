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
import { useQuery } from "react-query";
import Skeleton from "../../components/Skeleton";

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

  const { data: tasks , isError } = useQuery("mytasks",
    () => { 
      try {
        return axios.get("/api/my-tasks")
      } catch (error) {
        if(error.statusCode === 404) {
          return []
        }
        throw error
      }
      }
  );
  if
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
                <div
                  class="is-scrollbar-hidden mt-3 flex grow flex-col overflow-y-auto"
                >

                  <ol class="timeline line-space mt-5 px-4 [--size:1.5rem]">
                    {tasks?.data?.map(item => (


                      <li class="timeline-item">
                        <div
                          class="timeline-item-point rounded-full border border-current bg-info/10 dark:bg-info/15"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div class="timeline-item-content flex-1 pl-4">
                          <div
                            class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                          >
                            <p
                              class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                            >
                              {item?.title}
                            </p>
                            <span
                              class="text-xs text-slate-400 dark:text-navy-300"
                            >
                              {item.priority == 3 ? (
                                <div className="flex flex-wrap items-center font-inter text-xs">
                                  <div className="badge space-x-2.5 px-1 text-success">
                                    <div className="h-2 w-2 rounded-full bg-current"></div>
                                    <span className=" font-medium text-sm">
                                      Low
                                    </span>
                                  </div>
                                </div>
                              ) : item.priority == 2 ? (
                                <div className="flex flex-wrap items-center font-inter text-xs">
                                  <div className="badge space-x-2.5 px-1 text-warning">
                                    <div className="h-2 w-2 rounded-full bg-current"></div>
                                    <span className=" font-medium text-sm">
                                      Medium
                                    </span>
                                  </div>
                                </div>
                              ) : (
                                <div className="flex flex-wrap items-center font-inter text-xs">
                                  <div className="badge space-x-2.5 px-1 text-error">
                                    <div className="h-2 w-2 rounded-full bg-current"></div>
                                    <span className=" font-medium text-sm">
                                      Hard
                                    </span>
                                  </div>
                                </div>
                              )}
                            </span>
                          </div>
                          <p class="py-1">
                            {item?.description}

                          </p>
                          {item.user.length !== 0 && <div>
                            <p class="text-xs text-slate-400 dark:text-navy-300">
                              Assigned to:
                            </p>
                            <div class="mt-2 flex justify-between">
                              <div class="flex flex-wrap -space-x-2">
                                {<Skeleton members={item.user} />}

                              </div>
                              {/* <button
                          class="btn h-7 w-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 11l5-5m0 0l5 5m-5-5v12"
                            />
                          </svg>
                        </button> */}
                            </div>
                          </div>}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

              </Sidebar.Secondary.Expanded.Body>
            </Sidebar.Secondary.Expanded>
            {/* <Sidebar.Secondary.Minimized>
              <Sidebar.Secondary.Minimized.Header />
              <Sidebar.Secondary.Minimized.Body>
              <Sidebar.Secondary.Minimized.Body.Middle />
              <Sidebar.Secondary.Minimized.Body.MoreActions />
            </Sidebar.Secondary.Minimized.Body>
            </Sidebar.Secondary.Minimized> */}
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
