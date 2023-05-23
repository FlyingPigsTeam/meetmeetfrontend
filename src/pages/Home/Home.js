import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { BASEURL } from "../../data/BASEURL";

const Home = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []); 

  let getNotes = async () => {
    let response = await fetch(BASEURL + "/auth/home/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setNotes(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  return (
    <div>
      <Link className="link-btn" onClick={logoutUser} to={"/login"}>
        logout!
      </Link>
      <p>You are logged to the home page!</p>

      <ul>
        <li>
          {notes.email}
          {notes.username}
          {notes.first_name}
        </li>
      </ul>
    </div>
  );
};

export default Home;
