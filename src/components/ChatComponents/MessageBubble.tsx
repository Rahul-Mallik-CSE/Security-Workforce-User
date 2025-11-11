/** @format */

"use client";

import React from "react";

interface Props {
  text: string;
  fromMe?: boolean;
  time?: string;
}

export default function MessageBubble({ text, fromMe = false, time }: Props) {
  return (
    <div className={`flex ${fromMe ? "justify-end" : "justify-start"} py-1`}>
      <div
        className={`max-w-[80%] px-4 py-2 rounded-lg leading-5 ${
          fromMe ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-800"
        }`}
      >
        <div>{text}</div>
        {time && (
          <div className="text-xs text-gray-400 mt-1 text-right">{time}</div>
        )}
      </div>
    </div>
  );
}
