import React, { useState } from "react";

const Messages = () => {
  const [showChat, setShowChat] = useState(false);

  const openChat = () => {
    setShowChat(true);
  };

  const closeChat = () => {
    setShowChat(false);
  };

  return (
    <div className={`relative ${showChat ? "h-[80vh] max-h-[100vh]" : "h-[95vh]"}`}>
      <p className="text-3xl">Messages</p>

      {/* Messages List */}
      {!showChat && (
        <div className="h-screen overflow-y-scroll flex flex-col gap-5 scrollbar-hide">
          {Array(4)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="h-fit bg-yellow-300 flex items-center justify-between px-4 py-5 cursor-pointer"
                onClick={openChat}
              >
                <img src="/avatar.jpg" className="w-8 h-8 rounded-full" alt="Avatar" />
                <p className="font-semibold">John Doe</p>
                <p className="text-sm">Lorem ipsum dolor sit amet consecte</p>
              </div>
            ))}
        </div>
      )}

      {/* Chat Popup */}
      {showChat && (
        <div className="absolute inset-0 bg-white rounded-lg shadow-lg border flex flex-col">
          {/* Header */}
          <div className="flex items-center p-4 border-b">
            <img src="/avatar.jpg" className="w-10 h-10 rounded-full" alt="Avatar" />
            <p className="ml-4 font-semibold">John Doe</p>
            <button
              className="ml-auto text-gray-500 hover:text-gray-800"
              onClick={closeChat}
            >
              ✕
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow overflow-y-scroll p-4 flex flex-col gap-3">
            <div className="bg-gray-200 p-3 rounded-md self-start">
              Hello! How can I help you?
            </div>
            <div className="bg-blue-500 text-white p-3 rounded-md self-end">
              I was wondering about your services.
            </div>
            <div className="bg-gray-200 p-3 rounded-md self-start">
              Sure! Let me know what you'd like to know.
            </div>
          </div>

          {/* Input Field */}
          <div className="flex items-center p-4 border-t">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-grow border rounded-md p-2"
            />
            <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
