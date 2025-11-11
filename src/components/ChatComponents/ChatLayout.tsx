/** @format */

"use client";

import React, { useState } from "react";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";

const seedContacts = [
  {
    id: "c1",
    name: "Jhon Marcel",
    lastMessage: "Thanks, see you",
    avatar: "/logo.png",
    unread: 2,
  },
  {
    id: "c2",
    name: "Lisa Brown",
    lastMessage: "Ok I'll check",
    avatar: "/logo.png",
  },
  {
    id: "c3",
    name: "Support Team",
    lastMessage: "How can we help?",
    avatar: "/logo.png",
  },
];

export default function ChatLayout() {
  const [active, setActive] = useState<string | null>(seedContacts[0].id);

  const activeContact =
    seedContacts.find((c) => c.id === active) || seedContacts[0];

  return (
    <div className="flex bg-white shadow-sm rounded-md overflow-hidden">
      <ChatList
        contacts={seedContacts}
        activeId={active}
        onSelect={(id) => setActive(id)}
      />
      <ChatWindow
        contactName={activeContact.name}
        initialMessages={[
          { id: "m1", text: "Hello! How can I help you today?", time: "10:02" },
        ]}
      />
    </div>
  );
}
