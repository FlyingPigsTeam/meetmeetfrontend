import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { w3cwebsocket } from "websocket";
import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import DarkModeToggle from "../../components/DarkModeToggle";
import MainSection from "../../components/MainSection";
import { useNavigate, useParams } from "react-router-dom";
import Avatar200x200 from "../../assets/images/200x200.png";
import AuthContext from "../../context/AuthContext";
import { data } from "browserslist";
import { async } from "q";
import axios from "axios";
import { useSelector } from "react-redux";
import { useInfiniteQuery, useQuery } from "react-query";
import { useIntersection } from "@mantine/hooks";

const Chat = () => {
  const sidebarExp = useSelector((state) => state.SidebarExpanded);
  console.log("opensidebsar: ", sidebarExp);
  const params = useParams();
  const roomId = params.idroom;
  const { user } = useContext(AuthContext);
  // const [client, setclient] = useState(new w3cwebsocket(`ws://localhost:8080/${roomId}`));
  const client = useMemo(
    () => new w3cwebsocket(`ws://meet-meet.ir/chat/${roomId}`),
    []
  );
  const [message, setmessage] = useState([]);
  const [payam, setpayam] = useState("");
  const messageEndRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    // console.log(event.target.msg.value);
    // console.log(event.target.id.value);
    if (event.target[0].value != "") {
      client.send(
        JSON.stringify({
          username: user.username,
          user_id: user.user_id,
          message: event.target[0].value,
        })
      );
    }
    //setpayam("");
    event.target[0].value = "";
  };
  // function insertSpaceEvery70Words(words) {
  //   const wordsWithSpace = [];
  //   for (let i = 0; i < words.length; i++) {
  //     wordsWithSpace.push(words[i]);
  //     if ((i + 1) % 20 === 0) {
  //       wordsWithSpace.push(" ");
  //     }
  //   }
  //   return wordsWithSpace.join("");
  // }

  // const [history, setHistory] = useState([]);
  // const reqForGettingAll = async () => {
  //   const { data } = await axios
  //     .get(`/history/api/history/${roomId}`)
  //     .then((response) => response);
  //   setHistory(data);
  // };
  // console.log(history);
  // useEffect(() => {
  //   reqForGettingAll();
  // }, []);

  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      let dataFromServer = JSON.parse(message.data);
      // if (!dataFromServer.message.includes(" ")) {
      //   const outputString = insertSpaceEvery70Words(dataFromServer.message);
      //   dataFromServer.message = outputString;
      // }
      setmessage((e) => [...e, dataFromServer]);
      //console.log("got reply! ", dataFromServer);
    };
    client.onclose = () => {
      console.log("WebSocket Client disConnected");
    };
  }, [client.onmessage, client.onopen, client.onclose]);
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ block: "end" });
  }, [message]);

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = async (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  // console.log(message);
  // console.log(user);

  //Chat History
  // const [count, setcount] = useState(0);
  // const [AllMassages, setAllMassages] = useState([]);
  // let counter = 0;
  // const req = async (roomId) => {
  //   const { data } = await axios
  //     .get(`http://meet-meet.ir/history/api/history/count/${roomId}`)
  //     .then((response) => response);
  //   setcount(data.count);
  //   // console.log(data.count)
  // };
  // const req1 = async (roomId, i) => {
  //   const { data } = await axios
  //     .get(`http://meet-meet.ir/history/api/history/${roomId}?page=${i}`)
  //     .then((response) => response);
  //   console.log(data);
  //   setAllMassages((e) => [data.reverse(), ...e]);
  //   // console.log(data.count)
  // };
  // useEffect(() => {
  //   req(roomId);
  //   let i = 1;
  //   while (i <= Math.round(count / 10)) {
  //     req1(roomId, i);
  //     i++;
  //   }
  // }, [count]);
  // console.log(count);
  // console.log(AllMassages);

  // const fetchRepositories = async (page) => {
  //   const response = await fetch(
  //     `http://166.0.162.72/history/api/history/4?page=${page}`
  //   );
  //   return response.json();
  // };

  // const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
  //   "repositories",
  //   ({ pageParam = 1 }) => fetchRepositories(pageParam),
  //   {
  //     getNextPageParam: (lastPage, allPages) => {
  //       console.log("LastPages:", lastPage);
  //       console.log("AllPages:", allPages);
  //       const maxPages = 2;
  //       const nextPage = allPages.length + 1;
  //       return nextPage <= maxPages ? nextPage : undefined;
  //     },
  //     suspense: true,
  //   }
  // );
  // useEffect(() => {
  //   let fetching = false;
  //   const onScroll = async (event) => {
  //     const { scrollHeight, scrollTop, clientHeight } =
  //       event.target.scrollingElement;

  //     if (!fetching && scrollTop < 10) {
  //       fetching = true;
  //       if (hasNextPage) await fetchNextPage();
  //       fetching = false;
  //     }
  //   };

  //   document.addEventListener("scroll", onScroll);
  //   return () => {
  //     document.removeEventListener("scroll", onScroll);
  //   };
  // }, []);

  const PAGE_SIZE = 10;

  const fetchChatCount = async () => {
    const response = await axios.get(
      `http://meet-meet.ir/history/api/history/count/${roomId}`
    );
    return response.data;
  };

  const fetchChatHistory = async ({ pageParam = 1 }) => {
    const response = await axios.get(
      `http://meet-meet.ir/history/api/history/${roomId}?page=${pageParam}`
    );
    return response.data;
  };

  const {
    data: countData,
    isLoading: countLoading,
    isError: countError,
  } = useQuery("chatCount", fetchChatCount);

  const totalPage = Math.ceil(countData?.count / PAGE_SIZE);

  const {
    data: historyData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading: historyLoading,
    isError: historyError,
  } = useInfiniteQuery("chatHistory", fetchChatHistory, {
    enabled: !!countData,
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1 <= totalPage ? pages.length + 1 : undefined;
    },
  });
  const firstPostRef = React.useRef(null);
  const { ref, entry } = useIntersection({
    root: firstPostRef.current,
    threshold: 1,
  });

  React.useEffect(() => {
    if (entry?.isIntersecting && hasNextPage) {
      fetchNextPage();
      // console.log(document.scrollingElement.scrollHeight)
    }
  }, [entry, fetchNextPage, hasNextPage]);

  const chatMessages = historyData?.pages.flatMap((page) => page);

  const [Pics, setPics] = useState([]);
  const reqForGettingPics = async () => {
    const { data } = await axios
      .get(`/api/my-rooms/${roomId}/requests?show_members=1&picture=1`)
      .then((response) => response);
    setPics(data);
  };
  const [PicsObject, setPicsObject] = useState([]);
  function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      rv[arr[i].username] = arr[i].picture_path;
    return rv;
  }
  useEffect(() => {
    reqForGettingPics();
  }, []);
  useEffect(() => {
    setPicsObject(toObject(Pics));
  }, [Pics]);

  console.log(Pics);
  console.log(PicsObject);
  
  return (
    <>
      <PageWrapper>
        <Header>
          <Header.Items>
            <Header.SidebarToggle />
            <div
              className={
                sidebarExp == false
                  ? " xl: text-2xl font-bold font-serif"
                  : " xl: text-2xl font-bold font-serif"
              }
            >
              {localStorage.getItem("RoomTitle")}
            </div>
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
                <Sidebar.Primary.Middle.Rooms.LoadItems />
                <Sidebar.Primary.Middle.Rooms.AddRoom />

                {/* <Sidebar.Primary.Middle.Rooms.AllItem/> */}
              </Sidebar.Primary.Middle.Rooms>
            </Sidebar.Primary.Middle>
            <Sidebar.Primary.Bottom>
              {/* /<Sidebar.Primary.Bottom.LogOut /> */}
              <Sidebar.Primary.Bottom.Profile />
            </Sidebar.Primary.Bottom>
          </Sidebar.Primary>
          <Sidebar.Secondary>
            <Sidebar.Secondary.Expanded>
              <Sidebar.Secondary.Expanded.Header>
                <Sidebar.Secondary.Expanded.Header.Title>
                  <Sidebar.Secondary.Expanded.Header.Title.Icon />
                  <Sidebar.Secondary.Expanded.Header.Title.Text>
                    Tabs
                  </Sidebar.Secondary.Expanded.Header.Title.Text>
                </Sidebar.Secondary.Expanded.Header.Title>
                <Sidebar.Secondary.Expanded.Header.MinimizeButton />
              </Sidebar.Secondary.Expanded.Header>
              <Sidebar.Secondary.Expanded.Body>
                <Sidebar.Secondary.Expanded.Body.Tabs>
                  <Sidebar.Secondary.Expanded.Body.Tabs.Chat />
                  <Sidebar.Secondary.Expanded.Body.Tabs.Todo />
                  <Sidebar.Secondary.Expanded.Body.Tabs.InfoTab />
                  {/* <Sidebar.Secondary.Expanded.Body.Tabs.AllItems /> */}
                </Sidebar.Secondary.Expanded.Body.Tabs>
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
        <MainSection className="w-full">
          <main
            className={"mt-0 flex flex-col"}
            style={{ height: "80vh", width: "107%" }}
          >
            <div className="grow overflow-y-auto px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s]">
              <div className="space-y-2">
                <div className="mx-4 flex items-center space-x-3">
                  {/* <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                  <p>Yesterday</p>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div> */}
                </div>
                {/* content at the end */}
                <div>
                  <div ref={ref}></div>
                  {console.log(chatMessages)}
                  {chatMessages &&
                    chatMessages.reverse().map((item, index) => {
                      return (
                        <div key={index}>
                          {item.username != user.username ? (
                            <div className="flex items-start space-x-2.5 sm:space-x-5">
                              <div className="avatar h-10 w-10 hover:z-10 relative mt-2">
                                {PicsObject[item.username] &&
                                PicsObject[item.username] !== "" &&
                                PicsObject[item.username] !== "__" ? (
                                  <img
                                    className="rounded-full"
                                    src={PicsObject[item.username]}
                                    alt="avatar"
                                  />
                                ) : (
                                  <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ">
                                    {item.username[0] + item.username[1]}
                                  </div>
                                )}
                              </div>
                              {/* <div className="avatar">
                                <img
                                  className="rounded-full"
                                  src={Avatar200x200}
                                  alt="avatar"
                                />
                              </div> */}
                              <div className="flex flex-col items-start space-y-3.5">
                                <div className="mr-4 max-w-lg sm:mr-10">
                                  <div className=" text-left text-md  text-slate-600 dark:text-navy-200">
                                    {item.username}:
                                  </div>
                                  <div
                                    style={{
                                      whiteSpace: "initial",
                                      wordWrap: "break-word",
                                    }}
                                    className="rounded-2xl text-left rounded-tl-none bg-slate-200 p-2 text-slate-900 shadow-sm dark:bg-navy-700 dark:text-navy-50"
                                  >
                                    <p> {item.message}</p>
                                  </div>
                                  <p className="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300">
                                    {item.time.slice(11, 16)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-start justify-end space-x-2.5 sm:space-x-5">
                              <div className="flex flex-col items-end space-y-3.5">
                                <div className="ml-4 max-w-lg sm:ml-10">
                                  <div
                                    style={{
                                      whiteSpace: "initial",
                                      wordWrap: "break-word",
                                    }}
                                    className=" text-ellipsis rounded-2xl text-left rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
                                  >
                                    <p>{item.message}</p>
                                  </div>
                                  <p className="mt-1 ml-4 max-w-lg sm:ml-10 text-left text-xs text-slate-400 dark:text-navy-300">
                                    {item.time.slice(11, 16)}
                                  </p>
                                </div>
                              </div>
                              <div className="avatar h-10 w-10 hover:z-10 relative">
                                {PicsObject[item.username] &&
                                PicsObject[item.username] !== "" &&
                                PicsObject[item.username] !== "__" ? (
                                  <img
                                    className="rounded-full"
                                    src={PicsObject[item.username]}
                                    alt="avatar"
                                  />
                                ) : (
                                  <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ">
                                    {item.username[0] + item.username[1]}
                                  </div>
                                )}
                              </div>
                              {/* <div className="avatar">
                                <img
                                  className="rounded-full"
                                  src={Avatar200x200}
                                  alt="avatar"
                                />
                              </div> */}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>

                {message.length != 0
                  ? message.map((item, index) => (
                      <div key={index}>
                        {item.username != user.username ? (
                          <div className="flex items-start space-x-2.5 sm:space-x-5">
                            {/* <div className="avatar">
                              <img
                                className="rounded-full"
                                src={Avatar200x200}
                                alt="avatar"
                              />
                            </div> */}
                            <div className="avatar h-10 w-10 hover:z-10 relative mt-2">
                              {PicsObject[item.username] &&
                              PicsObject[item.username] !== "" &&
                              PicsObject[item.username] !== "__" ? (
                                <img
                                  className="rounded-full"
                                  src={PicsObject[item.username]}
                                  alt="avatar"
                                />
                              ) : (
                                <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ">
                                  {item.username[0] + item.username[1]}
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col items-start space-y-3.5">
                              <div className="mr-4 max-w-lg sm:mr-10">
                                <div className=" text-left text-md  text-slate-600 dark:text-navy-200">
                                  {item.username}:
                                </div>
                                <div
                                  style={{
                                    whiteSpace: "initial",
                                    wordWrap: "break-word",
                                  }}
                                  className="rounded-2xl text-left rounded-tl-none bg-slate-200 p-2 text-slate-900 shadow-sm dark:bg-navy-700 dark:text-navy-50"
                                >
                                  <p> {item.message}</p>
                                </div>
                                <p className="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300">
                                  {item.time.split(" ")[1]}
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-start justify-end space-x-2.5 sm:space-x-5">
                            <div className="flex flex-col items-end space-y-3.5">
                              <div className="ml-4 max-w-lg sm:ml-10">
                                <div
                                  style={{
                                    whiteSpace: "initial",
                                    wordWrap: "break-word",
                                  }}
                                  className=" text-ellipsis rounded-2xl text-left rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
                                >
                                  <p>{item.message}</p>
                                </div>
                                <p className="mt-1 ml-4 max-w-lg sm:ml-10 text-left text-xs text-slate-400 dark:text-navy-300">
                                  {item.time.split(" ")[1]}
                                </p>
                              </div>
                            </div>
                            {/* <div className="avatar">
                              <img
                                className="rounded-full"
                                src={Avatar200x200}
                                alt="avatar"
                              />
                            </div> */}
                            <div className="avatar h-10 w-10 hover:z-10 relative">
                              {PicsObject[item.username] &&
                              PicsObject[item.username] !== "" &&
                              PicsObject[item.username] !== "__" ? (
                                <img
                                  className="rounded-full"
                                  src={PicsObject[item.username]}
                                  alt="avatar"
                                />
                              ) : (
                                <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ">
                                  {item.username[0] + item.username[1]}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  : ""}
              </div>
              <div ref={messageEndRef} />
            </div>
            {/* <div
              style={{ width: "89%" }}
              className="chat-footer fixed bottom-0 bg-slate-200  h-12 border-slate-150 transition-[padding,width] duration-[.25s] dark:border-navy-600 dark:bg-navy-800"
            >
              <form
                onSubmit={handleSubmit}
                id="form"
                className="flex items-center justify-between "
              >
                <input
                  type="text"
                  id="msg"
                  size="64"
                  className="form-input h-12 border-none bg-slate-200 dark:bg-navy-800 placeholder:text-slate-400/70 focus:border-navy-50 outline-none "
                  placeholder="Write the message"
                  style={{ width: "95%" }}
                />
                <button
                  type="submit"
                  value="send"
                  style={{ marginRight: "2vw" }}
                  className="btn h-9 w-9 shrink-0 rounded-full p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5.5 w-5.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.813 5.146 9.027 3.99c4.05 1.79 4.05 4.718 0 6.508l-9.027 3.99c-6.074 2.686-8.553.485-5.515-4.876l.917-1.613c.232-.41.232-1.09 0-1.5l-.917-1.623C1.26 4.66 3.749 2.46 9.813 5.146ZM6.094 12.389h7.341"
                    />
                  </svg>
                </button>
              </form>
            </div> */}
            <div
              className={
                sidebarExp == false
                  ? "chat-footer fixed bottom-0 -ml-6 flex h-12 w-full shrink-0 items-center justify-between border-t border-slate-150 bg-white px-[calc(var(--margin-x)-.25rem)] transition-[padding,width] duration-[.25s] dark:border-navy-600 dark:bg-navy-800"
                  : "chat-footer fixed bottom-0 -ml-12 flex h-12 w-full shrink-0 items-center justify-between border-t border-slate-150 bg-white px-[calc(var(--margin-x)-.25rem)] transition-[padding,width] duration-[.25s] dark:border-navy-600 dark:bg-navy-800"
              }
            >
              <form
                onSubmit={handleSubmit}
                className="-ml-1.5 flex flex-1 space-x-2"
              >
                <input
                  style={{ width: "80vw" }}
                  type="text"
                  id="msg"
                  autoComplete="off"
                  className={
                    sidebarExp == false
                      ? "form-input h-9 border-none lg:!w-[83vw] bg-transparent placeholder:text-slate-400/70"
                      : "form-input h-9 border-none lg:!w-[74vw] bg-transparent placeholder:text-slate-400/70"
                  }
                  placeholder="Write the message"
                />

                <div className="-mr-1.5 flex">
                  <button className="btn h-9 w-9 shrink-0 rounded-full p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5.5 w-5.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.813 5.146 9.027 3.99c4.05 1.79 4.05 4.718 0 6.508l-9.027 3.99c-6.074 2.686-8.553.485-5.515-4.876l.917-1.613c.232-.41.232-1.09 0-1.5l-.917-1.623C1.26 4.66 3.749 2.46 9.813 5.146ZM6.094 12.389h7.341"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* <div className="chat-footer fixed bottom-0 flex h-12  items-center justify-between border-slate-150 bg-white transition-[padding,width] duration-[.25s] dark:border-navy-600 dark:bg-navy-800">
              <div style={{ width: "82vw" }}>
                <input
                  type="text"
                  className="form-input h-12 border-none w-full bg-transparent placeholder:text-slate-400/70"
                  placeholder="Write the message"
                />
              </div>

              <div>
                <button className="btn h-9 w-9 shrink-0 rounded-full p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5.5 w-5.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.813 5.146 9.027 3.99c4.05 1.79 4.05 4.718 0 6.508l-9.027 3.99c-6.074 2.686-8.553.485-5.515-4.876l.917-1.613c.232-.41.232-1.09 0-1.5l-.917-1.623C1.26 4.66 3.749 2.46 9.813 5.146ZM6.094 12.389h7.341"
                    />
                  </svg>
                </button>
              </div>
            </div> */}
            {/* <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="msg"
                  name="msg"
                  placeholder="Enter msg"
                />
                <input type="text" id="id" name="id" placeholder="Enter id" />
                <button type="submit" value="submit">
                  Submit
                </button>
              </form>
            </div> */}
          </main>
        </MainSection>
      </PageWrapper>
    </>
  );
};

export default Chat;

{
  /* {data
                  ? data.pages.map((e) =>
                      e.map((repo, index) => (
                        <li className=" ml-[50vw]" key={repo.index}>
                          <p>
                            <p>{repo.username}</p>
                            <p>{repo.user_id}</p>
                          </p>
                          <p>{repo.message}</p>
                          <br />
                        </li>
                      ))
                    )
                  : ""} */
}

{
  /* {AllMassages
                  ? AllMassages.map((data, index) =>
                      data.map((item, index) => (
                        <div key={index}>
                          {item.username != user.username ? (
                            <div className="flex items-start space-x-2.5 sm:space-x-5">
                              <div className="avatar">
                                <img
                                  className="rounded-full"
                                  src={Avatar200x200}
                                  alt="avatar"
                                />
                              </div>
                              <div className="flex flex-col items-start space-y-3.5">
                                <div className="mr-4 max-w-lg sm:mr-10">
                                  <div className=" text-left text-md  text-slate-600 dark:text-navy-200">
                                    {item.username}:
                                  </div>
                                  <div
                                    style={{
                                      whiteSpace: "initial",
                                      wordWrap: "break-word",
                                    }}
                                    className="rounded-2xl text-left rounded-tl-none bg-slate-200 p-2 text-slate-900 shadow-sm dark:bg-navy-700 dark:text-navy-50"
                                  >
                                    <p> {item.message}</p>
                                  </div>
                                  <p className="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300">
                                    {item.time.split("T")[1].substring(0, 5)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-start justify-end space-x-2.5 sm:space-x-5">
                              <div className="flex flex-col items-end space-y-3.5">
                                <div className="ml-4 max-w-lg sm:ml-10">
                                  <div
                                    style={{
                                      whiteSpace: "initial",
                                      wordWrap: "break-word",
                                    }}
                                    className=" text-ellipsis rounded-2xl text-left rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
                                  >
                                    <p>{item.message}</p>
                                  </div>
                                  <p className="mt-1 ml-4 max-w-lg sm:ml-10 text-left text-xs text-slate-400 dark:text-navy-300">
                                    {item.time.split("T")[1].substring(0, 5)}
                                  </p>
                                </div>
                              </div>
                              <div className="avatar">
                                <img
                                  className="rounded-full"
                                  src={Avatar200x200}
                                  alt="avatar"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      ))
                    )
                  : ""} */
}
