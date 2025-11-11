/** @format */

"use client";

import React from "react";
import Image from "next/image";

interface Contact {
  id: string;
  name: string;
  lastMessage: string;
  avatar?: string;
  unread?: number;
}

interface Props {
  contacts: Contact[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

export default function ChatList({ contacts, activeId, onSelect }: Props) {
  return (
    <div className="w-80 bg-white border-r border-gray-100 h-[calc(100vh-4rem)] overflow-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Chats</h2>
      </div>

      <div className="space-y-1 px-2 pb-6">
        {contacts.map((c) => {
          const active = c.id === activeId;
          return (
            <button
              key={c.id}
              onClick={() => onSelect(c.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors text-left ${
                active ? "bg-orange-50" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src={c.avatar || "/logo.png"}
                  alt={c.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-800">{c.name}</div>
                  {c.unread ? (
                    <div className="text-xs bg-orange-500 text-white rounded-full px-2 py-0.5">
                      {c.unread}
                    </div>
                  ) : null}
                </div>
                <div className="text-sm text-gray-500 truncate">
                  {c.lastMessage}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
