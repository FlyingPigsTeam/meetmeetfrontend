import React, { useState, useEffect, useContext } from "react";
import { Route, Link, Routes } from "react-router-dom";
import Setting from "./Setting";
import ChangePassword from "./ChangePassword";
import ProfileCard from "./ProfileCard";
import "../../index.css";
import AuthContext from "../../context/AuthContext";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MainSection from "../../components/MainSection";
import PageWrapper from "../../components/PageWrapper";
import DarkModeToggle from "../../components/DarkModeToggle";
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate=useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const { authTokens, user } = useContext(AuthContext);
  const [newPassword, setNewPassword] = useState("");
  const [showChangePassword, setShowChangePassword] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/profile", {
        headers: {
          Authorization: `Bearer ${authTokens.access}`,
        },
      });
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = async (updatedUser) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`,
        },
        body: JSON.stringify(updatedUser),
      });
      const data = await response.json();
      setData(data);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleShowChangePassword = () => {
    setShowChangePassword(true);
    setIsEditing(false);
  };

  const handleCancelChangePassword = () => {
    setShowChangePassword(false);
  };
  const handleBackToProfile = () => {
    setShowChangePassword(false);
  };
  // const handleSubmitNewPassword = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://127.0.0.1:8000/api/change-password', {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${authTokens.access}`,
  //       },
  //       body: JSON.stringify({ password: newPassword }),
  //     });
  //     const data = await response.json();
  //     // handle response data
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
                {/* <Sidebar.Primary.Middle.Rooms.Item /> */}
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
        </Sidebar>
        <MainSection>
          <div
            className=" w-full card dark:bg-navy-800"

          >
            <div>
              {showChangePassword ? (
                <div className="relative">
                  <button
                    className="absolute top-0 right-0 p-4 text-white bg-blue-500 rounded-full hover:bg-blue-600 mr-2"
                    onClick={handleBackToProfile}
                  >
                    Back
                  </button>
                  <ChangePassword onUpdate={handleUpdate} />
                </div>
              ) : (
                <div className=" rounded-lg  p-6">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <h2 className="text-2xl font-bold">Profile</h2>
                    <div>
                      <button
                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 mr-2"
                        onClick={()=>navigate("/change-password")}
                      >
                        Change Password
                      </button>
                      {isEditing ? (
                        <button
                          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                          onClick={() => setIsEditing(false)}
                        >
                          Cancel
                        </button>
                      ) : (
                        // <button
                        //   className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                        //   onClick={handleEditClick}
                        // >
                        //   Edit
                        // </button>
                        <div></div>
                      )}
                    </div>
                  </div>
                  {isEditing ? (
                    <Setting
                      user={data}
                      onUpdate={handleUpdate}
                      onCancel={() => setIsEditing(false)}
                    />
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="mt-6">
                        <ProfileCard handleEdit={handleEditClick} user={data} />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </MainSection>
      </PageWrapper>
    </>
  );
}

export default Profile;
