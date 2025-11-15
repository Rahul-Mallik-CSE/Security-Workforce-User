/** @format */

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { selectedApplicantsData } from "@/data/JobManagementData";
import DeleteModal from "@/components/CommonComponents/DeleteModal";
import ApplicantsCard from "@/components/JobManagementComponents/ApplicantsCard";

const SelectedApplicantsPage = ({ params }: { params: { jobId: string } }) => {
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedApplicantId, setSelectedApplicantId] = useState<string | null>(
    null
  );
  const [selectedApplicants, setSelectedApplicants] = useState<string[]>(
    selectedApplicantsData.map((app) => app.id)
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

  const handleSelect = (id: string) => {
    // For selected applicants page, this would handle deselection
    handleDeleteClick(id);
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
            <ApplicantsCard
              key={applicant.id}
              applicant={applicant}
              isSelected={selectedApplicants.includes(applicant.id)}
              onSelect={handleSelect}
              showDelete={true}
              onDelete={handleDeleteClick}
            />
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
