/** @format */

"use client";

import React from "react";
import { MessageSquare, Star } from "lucide-react";
import { ApplicantData } from "@/types/AllTypes";

interface ApplicantsCardProps {
  applicant: ApplicantData;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const ApplicantsCard = ({
  applicant,
  isSelected,
  onSelect,
}: ApplicantsCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
      {/* Profile Image */}
      <div className="w-16 h-16 bg-gray-300 rounded-full mb-3 flex items-center justify-center text-gray-600 font-semibold text-lg">
        {applicant.operativeName.charAt(0)}
      </div>

      {/* Operative Name */}
      <h3 className="text-sm font-semibold text-[#1e293b] mb-1">
        {applicant.operativeName}
      </h3>

      {/* Job Role */}
      <p className="text-xs text-gray-600 mb-2">{applicant.jobRole}</p>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-2">
        <Star className="w-4 h-4 fill-[#f97316] text-[#f97316]" />
        <span className="text-sm font-medium text-[#1e293b]">
          {applicant.rating}
        </span>
      </div>

      {/* Job Experience */}
      <p className="text-xs text-gray-600 mb-4">{applicant.jobExperience}</p>

      {/* Action Buttons */}
      <div className="flex gap-2 w-full">
        <button className="flex-1 px-3 py-2 border border-gray-300 rounded-md flex items-center justify-center gap-2 text-xs text-gray-700 hover:bg-gray-50 transition-colors">
          <MessageSquare className="w-3 h-3" />
          Chat
        </button>
        <button
          onClick={() => onSelect(applicant.id)}
          className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
            isSelected
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-[#f97316] text-white hover:bg-[#ea580c]"
          }`}
        >
          {isSelected ? "Selected" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default ApplicantsCard;
