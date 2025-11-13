/** @format */

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { selectedApplicantsData } from "@/data/JobManagementData";
import { MessageSquare, Trash2, Star } from "lucide-react";
import DeleteModal from "@/components/CommonComponents/DeleteModal";

const SelectedApplicantsPage = ({ params }: { params: { jobId: string } }) => {
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedApplicantId, setSelectedApplicantId] = useState<string | null>(
    null
  );

  const handleDeleteClick = (id: string) => {
    setSelectedApplicantId(id);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    console.log("Deleting applicant:", selectedApplicantId);
    setShowDeleteModal(false);
    setSelectedApplicantId(null);
  };

  const handleBackToDetails = () => {
    router.push(`/job-management/${params.jobId}`);
  };

  return (
    <div className="w-full p-6 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-[#1e293b]">
            Selected Applicants
          </h1>
          <button
            onClick={handleBackToDetails}
            className="px-6 py-2 border border-gray-300 text-[#1e293b] rounded-md hover:bg-gray-50 transition-colors"
          >
            Back to Job Details
          </button>
        </div>

        {/* Applicants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {selectedApplicantsData.map((applicant) => (
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
              <p className="text-xs text-gray-600 mb-2">{applicant.jobRole}</p>

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
                  onClick={() => handleDeleteClick(applicant.id)}
                  className="flex-1 px-3 py-2 bg-red-500 text-white rounded-md flex items-center justify-center gap-2 text-xs hover:bg-red-600 transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delete Modal */}
      <DeleteModal
        open={showDeleteModal}
        onOpenChange={setShowDeleteModal}
        onConfirm={handleDeleteConfirm}
        title="Remove Applicant"
        description="Are you sure you want to remove this applicant from the selected list?"
        itemName="This applicant"
      />
    </div>
  );
};

export default SelectedApplicantsPage;
