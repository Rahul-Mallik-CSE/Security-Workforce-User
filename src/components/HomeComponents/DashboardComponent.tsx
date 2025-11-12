/** @format */

import React from "react";
import StatCard from "./StatCard";
import { Star } from "lucide-react";
import JobActivityChart from "./JobActivityChart";
import CompanyRatingChart from "./CompanyRatingChart";

const DashboardComponent = () => {
  return (
    <div>
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
  );
};

export default DashboardComponent;
