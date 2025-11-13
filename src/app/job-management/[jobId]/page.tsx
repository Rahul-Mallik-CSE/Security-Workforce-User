/** @format */

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { jobDetailsData, applicantsData } from "@/data/JobManagementData";
import { MessageSquare, Star } from "lucide-react";
import JobRequirementsCard from "@/components/JobManagementComponents/JobRequirementsCard";

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
                <div
                  key={applicant.id}
                  className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center"
                >
                  {/* Profile Image */}
                  <div className="w-16 h-16 bg-gray-300 rounded-full mb-3 flex items-center justify-center text-gray-600 font-semibold text-lg">
                    {applicant.operativeName.charAt(0)}
                  </div>

                  {/* Operative Name */}
                  <h3 className="text-sm font-semibold text-[#1e293b] mb-1">
                    {applicant.operativeName}
                  </h3>

                  {/* Job Role */}
                  <p className="text-xs text-gray-600 mb-2">
                    {applicant.jobRole}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-[#f97316] text-[#f97316]" />
                    <span className="text-sm font-medium text-[#1e293b]">
                      {applicant.rating}
                    </span>
                  </div>

                  {/* Job Experience */}
                  <p className="text-xs text-gray-600 mb-4">
                    {applicant.jobExperience}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-2 w-full">
                    <button className="flex-1 px-3 py-2 border border-gray-300 rounded-md flex items-center justify-center gap-2 text-xs text-gray-700 hover:bg-gray-50 transition-colors">
                      <MessageSquare className="w-3 h-3" />
                      Chat
                    </button>
                    <button
                      onClick={() => handleSelect(applicant.id)}
                      className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                        selectedApplicants.includes(applicant.id)
                          ? "bg-green-500 text-white hover:bg-green-600"
                          : "bg-[#f97316] text-white hover:bg-[#ea580c]"
                      }`}
                    >
                      {selectedApplicants.includes(applicant.id)
                        ? "Selected"
                        : "Select"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
