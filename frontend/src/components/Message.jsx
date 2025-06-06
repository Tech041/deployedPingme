import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import useConversation from "../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useContext(AppContext);
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser.userData.userId;
  const chatClassName = fromMe ? " chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.userData.profilePic
    : selectedConversation?.profilePic;
  const bgColor = fromMe ? "bg-green-500" : "bg-white";
  const shakeClass = message.shouldShake ? "shake" : "";
  // const formattedTime = extractTime(message.createdAt);
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>

      <div className={`chat-bubble text-black ${shakeClass} ${bgColor}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {new Date(message.createdAt).toLocaleString()}
      </div>
    </div>
  );
};

export default Message;
