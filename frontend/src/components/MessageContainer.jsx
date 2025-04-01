import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";

const MessageContainer = () => {
  const noChat = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChat ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text pr-2">To</span>
            <span className="text-gray-900 font-bold">John Doe</span>
          </div>
          {/* Messages */}
          <Messages />
          {/* <MessageInput /> */}
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
