import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { w3cwebsocket } from "websocket";
import { useQueryClient } from "react-query";
const NotifContext = React.createContext(null);

// const NotifContext = {
//     notif: notif,
//     setnotif: setnotif,
//     loginUser: loginUser,
//   };
export default NotifContext;

export function NotifProvider({ children }) {
  const queryClient = useQueryClient();
  const { user } = useContext(AuthContext);
  const [notif, setnotif] = useState(null);
  const [Newnotif, setNewnotif] = useState(false);
  useEffect(() => {
    console.log(user);
    if (user) {
      if (!notif) {
        const con_notif = new w3cwebsocket(
          `ws://meet-meet.ir/notification/${user.user_id}`
        );
        while (!con_notif) {
          con_notif = new w3cwebsocket(
            `ws://meet-meet.ir/notification/${user.user_id}`
          );
        }
        con_notif.onopen = () => {
          console.log("notif Client Connected");
        };
        con_notif.onmessage = (message) => {
          console.log("notif recived");
          setNewnotif(true);
          queryClient.invalidateQueries({ queryKey: ["notification"] });
        };
        con_notif.onclose = () => {
          console.log("notif  Client disConnected");
        };
        setnotif(con_notif);
        console.log(con_notif);
      }
    } else {
      if (notif && notif.readyState === w3cwebsocket.OPEN) {
        notif.close();
        console.log("closing the notif part");
      }
      setnotif(null);
    }
    return () => {
      if (notif && notif.readyState === w3cwebsocket.OPEN) {
        notif.close();
        console.log("closing the notif part");
      }
      setnotif(null);
    };
  }, [user]);
  const contextVAlue = {
    Newnotif: Newnotif,
    setNewnotif: setNewnotif,
  };
  return (
    <NotifContext.Provider value={contextVAlue}>
      {children}
    </NotifContext.Provider>
  );
}
