/** @format */

"use client";

import React, { useState } from "react";

interface Props {
  onSend: (text: string) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("");

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  };

  return (
    <form onSubmit={submit} className="p-4 border-t border-gray-100 bg-white">
      <div className="flex gap-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a message"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-orange-600"
        >
          Send
        </button>
      </div>
    </form>
  );
}
