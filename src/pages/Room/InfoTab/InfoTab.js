import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";

import DarkModeToggle from "../../../components/DarkModeToggle";
import PageWrapper from "../../../components/PageWrapper";
import MainSection from "../../../components/MainSection";

import AddRoom from "../AddRoom";

import InformationForm from "./InformationForm";
import InformationPage from "./InformationPage";
import Members from "./Members";

import Avatar200x200 from "../../../assets/images/200x200.png";

const InfoTab = () => {
  const { idroom } = useParams();
  return (
    <>
      <PageWrapper>
        <Header>
          <Header.Items>
            <Header.SidebarToggle />
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
        <MainSection>


          <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
            <div className="col-span-12 lg:col-span-6">
              {/* <VerticalNav />
              <AddRoom /> */}
              <InformationPage />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Members />
              {/* <div className="card"> */}
              {/* <InformationForm Title="Add" /> */}
              {/* </div> */}
            </div>
          </div>
        </MainSection>
      </PageWrapper>
    </>
  );
};

export default InfoTab;

const VerticalNav = () => {
  return (
    <>
      <div className="card p-4 sm:p-5">
        <div className="flex items-center space-x-4">
          <div className="avatar h-14 w-14">
            <img className="rounded-full" src={Avatar200x200} alt="avatar" />
          </div>
          <div>
            <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
              Travis Fuller
            </h3>
            <p className="text-xs+ text-left">Admin</p>
          </div>
        </div>
        <ul className="mt-6 space-y-1.5 font-inter font-medium">
          <li>
            <a
              className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent"
              href="#"
            >
              <i className="fa-solid fa-circle-info "></i>

              <span>Information</span>
            </a>
          </li>
          <li>
            <a
              className="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
              href="#"
            >
              <i className="fa-solid fa-users"></i>

              <span>Members</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
