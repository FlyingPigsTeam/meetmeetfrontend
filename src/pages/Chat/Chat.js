import React from "react";
import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import DarkModeToggle from "../../components/DarkModeToggle";
import MainSection from "../../components/MainSection";

const Chat = () => {
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
              <Sidebar.Primary.Bottom.LogOut />
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
        <MainSection></MainSection>
      </PageWrapper>
    </>
  );
};

export default Chat;
