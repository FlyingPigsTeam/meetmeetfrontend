import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "./components/Chat";
import Task from "./components/Tasks";
import Member from "./components/Members";
import style from "./Room.module.css";
import Header from "./Header";

function Room() {
  return (
    <div>
      <Header/>
      <Tabs
        defaultActiveKey="Chat"
        id="uncontrolled-tab-example"
        className="mb-3"
        style={{paddingTop:"10vh", position:"fixed"}}
      >
        <Tab
          eventKey="Chat"
          title="Chat"
          style={{ backgroundColor: "#3da2c3",paddingTop:"20vh" }}
        >
          <Chat />
        </Tab>
        <Tab eventKey="Tasks" title="Tasks" style={{ backgroundColor: "#3da2c3",paddingTop:"20vh" }}>
          <Task />
        </Tab>
        <Tab eventKey="Member" title="Member" className={style.backG} style={{paddingTop:"20vh" }}>
          <Member />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Room;
