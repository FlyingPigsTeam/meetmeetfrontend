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

  const [history, setHistory] = useState([]);
  const reqForGettingAll = async () => {
    const { data } = await axios
      .get(`http://166.0.162.72/history/api/history/4`)
      .then((response) => response);
    setHistory(data);
  };
  useEffect(() => {
    reqForGettingAll();
  }, []);
  console.log(history);
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
