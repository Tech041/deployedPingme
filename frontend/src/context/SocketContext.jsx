import { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import io from "socket.io-client";

export const SocketContext = createContext();
export const useSocketContext = () => {
  return useContext(SocketContext);
};
export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { authUser } = useContext(AppContext);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (authUser) {
      const socket = io("https://pingme-chatapp-0hsx.onrender.com", {
        query: {
          userId: authUser.userData.userId,
        },
      });
      setSocket(socket);
      //   socket.on is used for listening for events on both client and server side

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
  const value = {
    socket,
    onlineUsers,
    setOnlineUsers,
  };
  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};
