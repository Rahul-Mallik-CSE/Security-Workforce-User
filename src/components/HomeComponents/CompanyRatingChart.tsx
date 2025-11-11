/** @format */

"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const ratingData = [
  { name: "Communication", value: 2.5, color: "#EF4444", maxValue: 5 },
  { name: "Payment reliability", value: 4.5, color: "#3B82F6", maxValue: 5 },
  { name: "Fairness", value: 3.0, color: "#8B5CF6", maxValue: 5 },
  { name: "Professionalism", value: 2.5, color: "#F59E0B", maxValue: 5 },
  { name: "Job Support", value: 3.5, color: "#10B981", maxValue: 5 },
];

// Data for the donut chart (average rating)
const averageRating = 4.5;
const donutData = [
  { value: averageRating, color: "#10B981" },
  { value: 5 - averageRating, color: "#EF4444" },
];

export default function CompanyRatingChart() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Company Rating Performance
      </h2>

      {/* Circular Rating Chart */}
      <div className="relative flex items-center justify-center mb-6">
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={donutData}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
            >
              {donutData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-xs text-gray-500">Average</p>
          <p className="text-xs text-gray-500">Rating</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">
            {averageRating}/5
          </p>
        </div>
      </div>

      {/* Rating List */}
      <div className="space-y-3">
        {ratingData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-1">
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
            <span className="text-sm font-semibold text-gray-900 ml-4">
              {item.value}/{item.maxValue}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
