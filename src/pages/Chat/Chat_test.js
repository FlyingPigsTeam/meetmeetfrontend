import axios from "axios";
import React, { useEffect, useState } from "react";
import { w3cwebsocket } from "websocket";

const Chat_test = () => {
  //const client = new w3cwebsocket("ws://localhost:8080/1");
  // const client = new w3cwebsocket("ws://localhost:8080/1");

  // const [message, setmessage] = useState([]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log(event.target.msg.value);
  //   // console.log(event.target.id.value);
  //   client.send(
  //     JSON.stringify({
  //       username: "sobhankazemi",
  //       user_id: parseInt(event.target.id.value),
  //       message: event.target.msg.value,
  //     })
  //   );
  // };

  // useEffect(() => {
  //   client.onopen = () => {
  //     console.log("WebSocket Client Connected");
  //   };
  //   client.onmessage = (message) => {
  //     const dataFromServer = JSON.parse(message.data);
  //     setmessage((e) => [...e, dataFromServer]);
  //     console.log("got reply! ", dataFromServer);
  //   };
  //   client.onclose = () => {
  //     console.log("WebSocket Client disConnected");
  //   };
  // }, [client.onmessage, client.onopen, client.onclose]);
  //https://meet-meet.ir/history/api/history/4
  const [history, setHistory] = useState([]);
  const [history2, setHistory2] = useState([]);
  const reqForGettingAll = async () => {
    const { data } = await axios
      .get(`https://meet-meet.ir/history/api/history/5`)
      .then((response) => response);
    setHistory(data);
  };
  const reqForGettingAll2 = async () => {
    const { data } = await axios
      .get(`https://meet-meet.ir/backend/api/category`)
      .then((response) => response);
    setHistory2(data);
  };
  useEffect(() => {
    reqForGettingAll();
    reqForGettingAll2();
  }, []);
  console.log(history);
  console.log(history2);
  return (
    <div>
      <form>
        <input type="text" id="msg" name="msg" placeholder="Enter msg" />
        <input type="text" id="id" name="id" placeholder="Enter id" />
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Chat_test;
