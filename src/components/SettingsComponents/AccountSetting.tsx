/** @format */

"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Download, PenLine, Share2 } from "lucide-react";

const AccountSetting = () => {
  const accountData = {
    companyName: "Apex Security Solutions Pty Ltd",
    email: "Name@gmail.com",
    phoneNumber: "(213) 555-4927",
    stateTerritory: "Sydney",
    address: "35 Park Ave, Sydney NSW 2000",
  };

  const documents = [
    { name: "Security Operations", file: "assets.zip", expiry: "02 Sep, 2025" },
    { name: "Crowd Control", file: "assets.zip", expiry: "29 Sep, 2025" },
    { name: "Crowd Control", file: "assets.zip", expiry: "19 Sep, 2025" },
  ];

  const referralLink =
    "https://example.com/signin?refer_token=p8zVBu3Ox8Rtz2yMDa11fVVcL3kL7h5aSgRf2vEBuUq";

  return (
    <div className="px-8 pb-16">
      {/* Form Fields */}
      <div className="space-y-6">
        <div className="flex items-center justify-end  border-border  -mt-14">
          {/* Edit Button */}
          <Button className="bg-blue-900 hover:bg-blue-800 text-white gap-2 rounded-lg flex items-center">
            Edit <PenLine className="w-2 h-2" />
          </Button>
        </div>

        {/* Company Name */}
        <div className="flex items-center justify-between border-b border-border pb-2">
          <label className="text-foreground font-medium w-32">
            Company Name
          </label>
          <div className="flex-1 ml-8">
            <p className="bg-gray-100 text-foreground px-4 py-2 rounded text-sm">
              {accountData.companyName}
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center justify-between border-b border-border pb-2">
          <label className="text-foreground font-medium w-32">Email</label>
          <div className="flex-1 ml-8">
            <p className="bg-gray-100 text-foreground px-4 py-2 rounded text-sm">
              {accountData.email}
            </p>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center justify-between border-b border-border pb-2">
          <label className="text-foreground font-medium w-32">
            Phone Number
          </label>
          <div className="flex-1 ml-8">
            <p className="bg-gray-100 text-foreground px-4 py-2 rounded text-sm">
              {accountData.phoneNumber}
            </p>
          </div>
        </div>

        {/* State/Territory */}
        <div className="flex items-center justify-between border-b border-border pb-2">
          <label className="text-foreground font-medium w-32">
            State/Territory
          </label>
          <div className="flex-1 ml-8">
            <p className="bg-gray-100 text-foreground px-4 py-2 rounded text-sm">
              {accountData.stateTerritory}
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center justify-between  border-border pb-2">
          <label className="text-foreground font-medium w-32">Address</label>
          <div className="flex-1 ml-8">
            <p className="bg-gray-100 text-foreground px-4 py-2 rounded text-sm">
              {accountData.address}
            </p>
          </div>
        </div>
      </div>

      {/* All Documents Section */}
      <div className="pt-4 flex  justify-between">
        <label className="text-foreground font-medium w-32">
          All Documents
        </label>
        <div className="bg-gray-50 rounded-lg p-6 space-y-4 flex-1 ml-8">
          {documents.map((doc, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <span className="text-foreground text-sm">• {doc.name}</span>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-blue-600" />
                  <a href="#" className="text-blue-600 text-sm hover:underline">
                    {doc.file}
                  </a>
                </div>
              </div>
              <div className="text-right">
                <span className="text-foreground text-sm">
                  Expiry Date: <span className="ml-2">{doc.expiry}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Referral Link Section */}
      <div className="pt-4 flex  justify-between">
        <label className="text-foreground font-medium w-32">
          Referral Link
        </label>
        <div className="flex items-center gap-2 flex-1 ml-8 ">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="flex-1 bg-gray-100  text-sm text-blue-500 px-4 py-2 rounded border border-gray-300"
          />
          <Button className="bg-orange-500 hover:bg-orange-600 text-white gap-2 rounded-lg">
            <Share2 className="w-4 h-4" />
            Share Link
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
