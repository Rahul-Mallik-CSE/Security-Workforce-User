/** @format */

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { jobDetailsData, applicantsData } from "@/data/JobManagementData";
import JobRequirementsCard from "@/components/JobManagementComponents/JobRequirementsCard";
import ApplicantsCard from "@/components/JobManagementComponents/ApplicantsCard";

const JobDetailsPage = ({ params }: { params: { jobId: string } }) => {
  const router = useRouter();
  const [selectedApplicants, setSelectedApplicants] = useState<string[]>([]);

  const handleSelect = (id: string) => {
    setSelectedApplicants((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleViewSelected = () => {
    router.push(`/job-management/${params.jobId}/selected-applicants`);
  };

  return (
    <div className="max-w-[2000px] py-6  min-h-screen">
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-[#1e293b]">Job Details</h1>
        <button
          onClick={handleViewSelected}
          className="px-6 py-2 bg-[#f97316] text-white rounded-md hover:bg-[#ea580c] transition-colors"
        >
          View Selected Applicants
        </button>
      </div>
      <div className="bg-white mx-auto p-6 rounded-xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Job Requirements */}
          <JobRequirementsCard jobDetails={jobDetailsData} />

          {/* Right Column - Applicants View */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-[#1e293b] mb-6">
              Applicants View
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {applicantsData.map((applicant) => (
                <ApplicantsCard
                  key={applicant.id}
                  applicant={applicant}
                  isSelected={selectedApplicants.includes(applicant.id)}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
