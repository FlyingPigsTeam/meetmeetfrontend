import React, { useState, useEffect, useContext } from 'react';
import Setting from "./Setting";
import '../../index.css';
import AuthContext from "../../context/AuthContext";
import ProfileCard from "./ProfileCard";

function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const { authTokens, user } = useContext(AuthContext);

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
    //   setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {isEditing ? (
            <Setting user={data} onUpdate={handleUpdate} onCancel={() => setIsEditing(false)} />
          ) : (
            <div>
              <ProfileCard handleEdit={handleEditClick} user={data} />
              {/* <button onClick={handleEditClick}>Edit</button> */}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Profile;
