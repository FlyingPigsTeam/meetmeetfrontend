import React, { useEffect } from "react";
import { w3cwebsocket } from "websocket";

const Chat_test = () => {
  const client = new w3cwebsocket("ws://127.0.0.1:8000");
  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
  }, [client]);
  return <div>Chat_test</div>;
};

export default Chat_test;
