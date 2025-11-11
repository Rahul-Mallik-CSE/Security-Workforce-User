/** @format */

import React from "react";
import StatCard from "@/components/HomeComponents/StatCard";
import JobActivityChart from "@/components/HomeComponents/JobActivityChart";
import CompanyRatingChart from "@/components/HomeComponents/CompanyRatingChart";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen py-6 bg-slate-50 px-4 md:px-8">
      <div className="max-w-[2000px] mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          <StatCard label="Unticked Jobs" value={14} />
          <StatCard label="Job in Progress" value={7} />
          <StatCard label="Completed Jobs" value={18} />
          <StatCard
            label="Average Rating"
            value={4.5}
            icon={<Star className="w-6 h-6 fill-yellow-500" />}
          />
          <StatCard
            label="Industry Rating"
            value={4.5}
            icon={<Star className="w-6 h-6 fill-yellow-500" />}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <JobActivityChart />
          </div>
          <div className="lg:col-span-1">
            <CompanyRatingChart />
          </div>
        </div>
      </div>
    </div>
  );
}
