import React from "react";
import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import DarkModeToggle from "../../components/DarkModeToggle";
import MainSection from "../../components/MainSection";

import Avatar200x200 from "../../assets/images/200x200.png";


const Chat = () => {
    return (
        <>
            <PageWrapper>

                <Sidebar>
                    <Sidebar.Primary>
                        <Sidebar.Primary.Logo/>
                        <Sidebar.Primary.Middle>
                            <Sidebar.Primary.Middle.Home/>
                            {/* <Sidebar.Primary.Middle.LaterThings/> */}
                            <Sidebar.Secondary.Expanded.Body.Middle.Divider/>
                            <Sidebar.Primary.Middle.Rooms>
                                <Sidebar.Primary.Middle.Rooms.LoadItems/>
                                <Sidebar.Primary.Middle.Rooms.AddRoom/>

                                {/* <Sidebar.Primary.Middle.Rooms.AllItem/> */}
                            </Sidebar.Primary.Middle.Rooms>
                        </Sidebar.Primary.Middle>
                        <Sidebar.Primary.Bottom>
                            <Sidebar.Primary.Bottom.LogOut/>
                            <Sidebar.Primary.Bottom.Profile/>
                        </Sidebar.Primary.Bottom>
                    </Sidebar.Primary>
                    <Sidebar.Secondary>
                        <Sidebar.Secondary.Expanded>
                            <Sidebar.Secondary.Expanded.Header>
                                <Sidebar.Secondary.Expanded.Header.Title>
                                    <Sidebar.Secondary.Expanded.Header.Title.Icon/>
                                    <Sidebar.Secondary.Expanded.Header.Title.Text>
                                        Tabs
                                    </Sidebar.Secondary.Expanded.Header.Title.Text>
                                </Sidebar.Secondary.Expanded.Header.Title>
                                <Sidebar.Secondary.Expanded.Header.MinimizeButton/>
                            </Sidebar.Secondary.Expanded.Header>
                            <Sidebar.Secondary.Expanded.Body>
                                <Sidebar.Secondary.Expanded.Body.Tabs>
                                    <Sidebar.Secondary.Expanded.Body.Tabs.Chat/>
                                    <Sidebar.Secondary.Expanded.Body.Tabs.Todo/>
                                    <Sidebar.Secondary.Expanded.Body.Tabs.InfoTab/>
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
                            <Sidebar.Secondary.Minimized.Header/>
                            {/* <Sidebar.Secondary.Minimized.Body>
              <Sidebar.Secondary.Minimized.Body.Middle />
              <Sidebar.Secondary.Minimized.Body.MoreActions />
            </Sidebar.Secondary.Minimized.Body> */}
                        </Sidebar.Secondary.Minimized>
                    </Sidebar.Secondary>
                </Sidebar>
                <main className={"main-content h-100vh chat-app mt-0 flex w-full flex-col"}>

                    <Header>
                        <Header.Items>
                            <Header.SidebarToggle/>
                            <Header.Right>
                                <DarkModeToggle/>
                            </Header.Right>
                        </Header.Items>
                    </Header>
                    <div
                        class="grow overflow-y-auto px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s]"
                    >
                        <div

                            // x-transition:enter="transition-all duration-500 easy-in-out"
                            // x-transition:enter-start="opacity-0 [transform:translate3d(0,1rem,0)]"
                            // x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]"
                            className="space-y-5"
                        >
                            <div className="mx-4 flex items-center space-x-3">
                                <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                                <p>Yesterday</p>
                                <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                            </div>

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
                                        <div
                                            className="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-sm dark:bg-navy-700 dark:text-navy-100"
                                        >
                                            Hello My Dear. Lorem ipsum dolor sit amet, consectetur.
                                        </div>
                                        <p
                                            className="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300"
                                        >
                                            08:16
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start justify-end space-x-2.5 sm:space-x-5">
                                <div className="flex flex-col items-end space-y-3.5">
                                    <div className="ml-4 max-w-lg sm:ml-10">
                                        <div
                                            className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Assumenda necessitatibus, ratione. Voluptatum.
                                        </div>
                                    </div>
                                    <div className="ml-4 max-w-lg sm:ml-10">
                                        <div
                                            className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
                                        >
                                            And that’s why a 15th century
                                        </div>
                                        <p
                                            className="mt-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300"
                                        >
                                            08:16
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
                        </div>
                    </div>
                    <div
                        className="chat-footer relative flex h-12 w-full shrink-0 items-center justify-between border-t border-slate-150 bg-white px-[calc(var(--margin-x)-.25rem)] transition-[padding,width] duration-[.25s] dark:border-navy-600 dark:bg-navy-800"
                    >
                        <div className="-ml-1.5 flex flex-1 space-x-2">
                            <button
                                className="btn h-9 w-9 shrink-0 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                    />
                                </svg>
                            </button>

                            <input
                                type="text"
                                className="form-input h-9 border-none w-full bg-transparent placeholder:text-slate-400/70"
                                placeholder="Write the message"
                            />
                        </div>

                        <div className="-mr-1.5 flex">
                            <button
                                className="btn h-9 w-9 shrink-0 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </button>
                            <button
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
                        </div>
                    </div>
                </main>
            </PageWrapper>
        </>
    );
};

export default Chat;
