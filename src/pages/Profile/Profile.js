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
            <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
          
          { (
            <div className="flex justify-center space-x-2">
              <button onClick={()=>navigate("/change-password")} className="badge space-x-2 bg-error text-white">
                <span>ChangePassword</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              
              <button onClick={handleEditClick} className="badge space-x-2 bg-slate-150 text-slate-800 dark:bg-navy-500 dark:text-navy-100">
                <span>Edit</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
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
                      {/* <button
                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 mr-2"
                        onClick={()=>navigate("/change-password")}
                      >
                        Change Password
                      </button> */}
                    
                    </div>
                  </div>
                  {isEditing ? (
                    <Setting
                      user={data}
                      onUpdate={handleUpdate}
                      onCancel={() => setIsEditing(false)}
                    />
                  ) : (
                    
                        <ProfileCard handleEdit={handleEditClick} user={data} />
                      
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
