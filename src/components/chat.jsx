import React, { useState } from "react";
import {
  Search,
  Send,
  Phone,
  Video,
  MoreVertical,
  Image,
  Paperclip,
} from "lucide-react";

function Chat() {
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: 1,
      name: "Rohit Sharma",
      msg: "White paint available?",
      time: "2 min",
      active: true,
    },
    {
      id: 2,
      name: "Amit Interior",
      msg: "Need texture catalog",
      time: "10 min",
    },
    {
      id: 3,
      name: "Raj Paint House",
      msg: "Send price list",
      time: "1 hr",
    },
  ];

  const messages = [
    {
      id: 1,
      text: "Hello sir 👋",
      sender: "other",
    },
    {
      id: 2,
      text: "White paint available?",
      sender: "other",
    },
    {
      id: 3,
      text: "Yes available. Asian, Berger & Nerolac.",
      sender: "me",
    },
    {
      id: 4,
      text: "Price kya hai?",
      sender: "other",
    },
  ];

  return (
    <div className="h-screen bg-gray-100 flex overflow-hidden">

      {/* SIDEBAR */}
      <div className="hidden md:flex w-[340px] bg-white border-r flex-col">

        {/* Top */}
        <div className="p-4 border-b">
          <h1 className="text-2xl font-bold text-orange-500">
            Paint Shop Chat
          </h1>

          {/* Search */}
          <div className="mt-4 flex items-center bg-gray-100 rounded-xl px-3 py-2">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search chats..."
              className="bg-transparent outline-none text-sm ml-2 w-full"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center gap-3 p-4 cursor-pointer border-b hover:bg-orange-50 transition ${chat.active ? "bg-orange-50" : ""
                }`}
            >
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                {chat.name.charAt(0)}
              </div>

              <div className="flex-1">
                <h2 className="font-semibold">{chat.name}</h2>
                <p className="text-sm text-gray-500 truncate">
                  {chat.msg}
                </p>
              </div>

              <span className="text-xs text-gray-400">
                {chat.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <div className="bg-white border-b px-4 py-3 flex items-center justify-between shadow-sm">

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
              R
            </div>

            <div>
              <h2 className="font-semibold">
                Rohit Sharma
              </h2>
              <p className="text-xs text-green-500">
                Online
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-600">
            <Phone size={20} className="cursor-pointer" />
            <Video size={20} className="cursor-pointer" />
            <MoreVertical size={20} className="cursor-pointer" />
          </div>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "me"
                  ? "justify-end"
                  : "justify-start"
                }`}
            >
              <div
                className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm shadow ${msg.sender === "me"
                    ? "bg-orange-500 text-white rounded-br-md"
                    : "bg-white text-gray-700 rounded-bl-md"
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="bg-white border-t p-3">

          <div className="flex items-center gap-2 bg-gray-100 rounded-2xl px-3 py-2">

            <Paperclip
              size={20}
              className="text-gray-500 cursor-pointer"
            />

            <Image
              size={20}
              className="text-gray-500 cursor-pointer"
            />

            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm"
            />

            <button className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center shadow-md active:scale-95 transition">
              <Send size={18} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;