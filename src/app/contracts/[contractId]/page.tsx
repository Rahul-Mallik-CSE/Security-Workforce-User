/** @format */

"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import EmploymentContractDetails from "@/components/ContractComponents/EmploymentContractDetails";
import PartiesSection from "@/components/ContractComponents/PartiesSection";
import EngagementDetailsSection from "@/components/ContractComponents/EngagementDetailsSection";
import RemunerationSection from "@/components/ContractComponents/RemunerationSection";
import ComplianceConfirmation from "@/components/ContractComponents/ComplianceConfirmation";
import PrivacyDataSection from "@/components/ContractComponents/PrivacyDataSection";
import AcceptanceSignature from "@/components/ContractComponents/AcceptanceSignature";

const ContractDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const contractId = params.contractId as string;

  // Sample data - in a real app, this would be fetched based on contractId
  const contractData = {
    employment: {
      name: "John Doe",
      dob: "Show On the Document of The Service",
      address: "123 Main Street, London",
      postcode: "SW1A 1AA",
      nationality: "United Kingdom",
      licenseExpiry: "31 Dec 2026",
      licenseNumber: "UK-123456",
      sharingCode: "ABC123XYZ",
      insuranceProvidedBy: "Security Guard 1",
      accountName: "John Doe",
      sortCode: "12-34-56",
      accountNumber: "12345678",
    },
    parties: {
      partyAName: "Security Guard 1 Ltd",
      partyASignature: "Show On the Document of The Service",
      partyADOB: "01 Jan 2010",
      partyBName: "John Doe",
      partyBDOB: "15 Mar 1990",
      partyBSignature: "Show On the Document of The Service",
    },
    engagement: {
      roleType: "Ground Controller",
      startDate: "01 Nov 2025",
      companyName: "Security Guard 1 Ltd",
      branch: "London",
      duration: "8 hours",
    },
    remuneration: {
      baseHourlyRate: "£15",
      supplementation: "10%",
      overtime: "£22",
      statutory: "£12",
    },
    acceptance: {
      partyAEmployeeName: "Michael Gray",
      partyASignDate: "12 Oct 2025, 10:25",
      partyBEmployerName: "John Doe",
      partyBSignDate: "12 Oct 2025, 10:25",
    },
  };

  return (
    <div className="min-h-screen py-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Back Button and Title */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Employment Contract Details
          </h1>
        </div>

        {/* Contract Sections */}
        <div className="space-y-6">
          {/* Employment Contract Details */}
          <EmploymentContractDetails {...contractData.employment} />

          {/* Parties */}
          <PartiesSection {...contractData.parties} />

          {/* Engagement Details */}
          <EngagementDetailsSection {...contractData.engagement} />

          {/* Remuneration */}
          <RemunerationSection {...contractData.remuneration} />

          {/* Compliance Confirmation */}
          <ComplianceConfirmation />

          {/* Privacy & Data */}
          <PrivacyDataSection />

          {/* Acceptance & Signature */}
          <AcceptanceSignature {...contractData.acceptance} />
        </div>
      </div>
    </div>
  );
};

export default ContractDetailsPage;
