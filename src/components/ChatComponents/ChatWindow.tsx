/** @format */

"use client";

import React, { useState } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

interface Message {
  id: string;
  fromMe?: boolean;
  text: string;
  time?: string;
}

interface Props {
  contactName: string;
  initialMessages?: Message[];
}

export default function ChatWindow({
  contactName,
  initialMessages = [],
}: Props) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSend = (text: string) => {
    const msg: Message = {
      id: String(Date.now()),
      fromMe: true,
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((s) => [...s, msg]);
    // auto-reply simulation
    setTimeout(() => {
      setMessages((s) => [
        ...s,
        {
          id: String(Date.now() + 1),
          text: "Thanks for your message, we'll check and reply soon.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 800);
  };

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-4rem)]">
      <div className="px-6 py-4 border-b border-gray-100 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">{contactName}</div>
            <div className="text-sm text-gray-500">Active now</div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6 space-y-2 bg-slate-50">
        {messages.length === 0 ? (
          <div className="text-center text-gray-400 mt-8">
            No messages yet. Start the conversation.
          </div>
        ) : (
          messages.map((m) => (
            <MessageBubble
              key={m.id}
              text={m.text}
              fromMe={!!m.fromMe}
              time={m.time}
            />
          ))
        )}
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  );
}
