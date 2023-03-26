import React, { useState } from "react";
import { Form } from "react-bootstrap";
import style from "./HomePage.module.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import AddRoom from "./AddRoom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleChangeSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleChangeCount = (e) => {
    setcountOfPeople(e.target.value);
  };
  const handleChangeDuration = (e) => {
    setduration(e.target.value);
  };
  const [modalShow, setModalShow] = useState(false);
  const [sort, setSort] = useState("None");
  const [subject, setSubject] = useState("None");
  const [countOfPeople, setcountOfPeople] = useState("None");
  const [duration, setduration] = useState("None");
  console.log(sort);
  console.log("Subject: ", subject);
  console.log(countOfPeople); 
  console.log(duration);
  return (
    <>
      <div>
        <div className={style.page}>
          <Header />
          <div className={style.PageGrid}>

            <div className={style.leftMenu}>
              <div className={style.navHome}>
                <div className={style.navHomeIcon}>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "1.5em" }}
                  >
                    house
                  </span>
                  <span>Home</span>
                </div>
              </div>
              <div>
                <div className={style.navRoomTitle}>Active Rooms</div>
                <div className={style.navRooms}>
                  <div className={style.navActive} onClick={() => navigate("/room")}>Room1</div>
                  <div className={style.navActive} onClick={() => navigate("/room")}>Room2</div>
                  <div className={style.navActive} onClick={() => navigate("/room")}>Room3</div>
                  <div className={style.navActive} onClick={() => navigate("/room")}>Room4</div>
                  <div className={style.navActive} onClick={() => setModalShow(true)}>Add Rooms</div>

                </div>
              </div>
            </div>
            <div className={style.events}>
              <div className={style.pageTitle}>Events</div>
              <div>
                <div className={style.pageFilter}>Sort Based On:</div>
                <Form>
                  <div key={"inline-radio"} className={style.filterBox}>
                    <Form.Check
                      inline
                      label="Nearest Events"
                      name="group1"
                      type="radio"
                      id={`inline-radio-1`}
                      className={style.filter}
                      onChange={() => setSort("NearestEvent")}
                    />
                    <Form.Check
                      inline
                      label="Number of Visits"
                      name="group1"
                      type="radio"
                      id={`inline-radio-2`}
                      className={style.filter}
                      onChange={() => setSort("NumberOfVisits")}
                    />
                    <Form.Check
                      inline
                      label="Unfinished Tasks"
                      name="group1"
                      type="radio"
                      id={`inline-radio-2`}
                      className={style.filter}
                      onChange={() => setSort("UnfinishedTasks")}
                    />
                    <Form.Check
                      inline
                      label="None"
                      name="group1"
                      type="radio"
                      id={`inline-radio-2`}
                      className={style.filter}
                      onChange={() => setSort("None")}
                    />
                  </div>
                </Form>
                <div className={style.pageFilter}>Filters</div>
                <div
                  style={{ width: "60vw", textAlign: "left", marginLeft: "3vw" }}
                >
                  <div style={{ marginTop: "2vh" }}>
                    <span
                      className={style.selectTitle}
                      style={{ marginRight: "15vw" }}
                    >
                      Select The Subject:
                    </span>
                    <Form.Select
                      aria-label="Default select example"
                      className={style.filterSelect}
                      value={subject}
                      onChange={handleChangeSubject}
                    >
                      <option value="None">None</option>
                      <option value="Sport">Sport</option>
                      <option value="Religious">Religious</option>
                      <option value="Culrural">Cultural</option>
                    </Form.Select>
                  </div>
                  <div style={{ marginTop: "2vh" }}>
                    <span
                      className={style.selectTitle}
                      style={{ marginRight: "1.5vw" }}
                    >
                      The number of people attending the event:
                    </span>
                    <Form.Select
                      aria-label="Default select example"
                      className={style.filterSelect}
                      style={{ marginLeft: "1.1vw" }}
                      value={countOfPeople}
                      onChange={handleChangeCount}
                    >
                      <option value="None">Doesn't Matter</option>
                      <option value="1-10">1-10</option>
                      <option value="10-20">10-20</option>
                      <option value="20<">More than 20</option>
                    </Form.Select>
                  </div>
                  <div style={{ marginTop: "2vh" }}>
                    <span
                      className={style.selectTitle}
                      style={{ marginRight: "1vw" }}
                    >
                      Duration of the Event:{" "}
                    </span>
                    <Form.Select
                      aria-label="Default select example"
                      className={style.filterSelect}
                      style={{ marginLeft: "12.25vw" }}
                      value={duration}
                      onChange={handleChangeDuration}
                    >
                      <option value="None">Doesn't Matter</option>
                      <option value="<1">Less Than 1 Hour</option>
                      <option value="1-2">1 - 2 Hours</option>
                      <option value="2<">More Than 2 Hours</option>
                    </Form.Select>
                  </div>
                </div>
                <div className={style.allEvents}>
                  <div className={style.everyEvent}>Event Number 1</div>
                  <div className={style.everyEvent}>Event Number 2</div>
                  <div className={style.everyEvent}>Event Number 3</div>
                  <div className={style.everyEvent}>Event Number 4</div>
                  <div className={style.everyEvent}>Event Number 5</div>
                  <div className={style.everyEvent}>Event Number 6</div>
                  <div className={style.everyEvent}>Event Number 7</div>
                  <div className={style.everyEvent}>Event Number 8</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AddRoom
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    </>
  );
};

export default HomePage;
