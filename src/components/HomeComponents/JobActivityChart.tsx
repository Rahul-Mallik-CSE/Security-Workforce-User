/** @format */

"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Sun", jobs: 80 },
  { day: "Mon", jobs: 120 },
  { day: "Tue", jobs: 100 },
  { day: "Wed", jobs: 180 },
  { day: "Thu", jobs: 140 },
  { day: "Fri", jobs: 130 },
  { day: "Sat", jobs: 125 },
];

export default function JobActivityChart() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        This Week&apos;s Job Activity
      </h2>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f0f0f0"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            ticks={[0, 50, 100, 150, 200]}
          />
          <Tooltip
            cursor={{ fill: "rgba(59, 130, 246, 0.1)" }}
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "none",
              borderRadius: "8px",
              color: "white",
              fontSize: "12px",
            }}
            labelStyle={{ color: "white" }}
          />
          <Bar
            dataKey="jobs"
            fill="#475569"
            radius={[6, 6, 0, 0]}
            barSize={40}
            activeBar={{ fill: "#1E3A5F" }}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center mt-4">
        <span className="text-xs text-gray-500">Active Jobs</span>
      </div>
    </div>
  );
}
