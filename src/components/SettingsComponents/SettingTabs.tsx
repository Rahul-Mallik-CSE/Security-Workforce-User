/** @format */

"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Share2, User } from "lucide-react";
import { FiCreditCard } from "react-icons/fi";

export function SettingTabs() {
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
    <div className="py-1.5 ">
      {/* Tabs */}
      <div className="flex justify-between items-center mb-8">
        <Tabs defaultValue="account" className="w-auto">
          <TabsList className="bg-transparent border-b border-border rounded-none p-0 h-auto gap-8">
            <TabsTrigger
              value="account"
              className="cursor-pointer bg-transparent border-b-2 border-transparent data-[state=active]:border-b-orange-500 data-[state=active]:text-orange-500 text-foreground rounded-none px-0 py-0"
            >
              <span className="flex items-center gap-2 pl-3">
                <User />
                Account
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="billings"
              className="cursor-pointer bg-transparent border-b-2 border-transparent data-[state=active]:border-b-orange-500 data-[state=active]:text-orange-500 text-foreground rounded-none px-0 py-0"
            >
              <span className="flex items-center gap-2 pl-3">
                <FiCreditCard />
                Billings
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="card"
              className="cursor-pointer bg-transparent border-b-2 border-transparent data-[state=active]:border-b-orange-500 data-[state=active]:text-orange-500 text-foreground rounded-none px-0 py-0"
            >
              <span className="flex items-center gap-2 pl-3">
                <FiCreditCard />
                Card Details
              </span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Edit Button */}
        <Button className="bg-blue-900 hover:bg-blue-800 text-white gap-2 rounded-lg">
          Edit <span>✏️</span>
        </Button>
      </div>

      {/* Content */}
      <Tabs defaultValue="account" className="w-full">
        <TabsContent value="account" className="space-y-6">
          {/* Form Fields */}
          <div className="space-y-6">
            {/* Company Name */}
            <div className="flex items-center justify-between border-b border-border pb-4">
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
            <div className="flex items-center justify-between border-b border-border pb-4">
              <label className="text-foreground font-medium w-32">Email</label>
              <div className="flex-1 ml-8">
                <p className="bg-gray-100 text-foreground px-4 py-2 rounded text-sm">
                  {accountData.email}
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center justify-between border-b border-border pb-4">
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
            <div className="flex items-center justify-between border-b border-border pb-4">
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
            <div className="flex items-center justify-between border-b border-border pb-4">
              <label className="text-foreground font-medium w-32">
                Address
              </label>
              <div className="flex-1 ml-8">
                <p className="bg-gray-100 text-foreground px-4 py-2 rounded text-sm">
                  {accountData.address}
                </p>
              </div>
            </div>
          </div>

          {/* All Documents Section */}
          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="text-foreground font-semibold mb-4">
              All Documents
            </h3>
            <div className="space-y-3">
              {documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-white border border-border rounded-lg p-4"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <Download className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <p className="text-foreground font-medium text-sm">
                        • {doc.name}
                      </p>
                      <a
                        href="#"
                        className="text-blue-600 text-xs hover:underline"
                      >
                        {doc.file}
                      </a>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-foreground text-xs font-medium">
                      Expiry Date:
                    </p>
                    <p className="text-foreground text-sm">{doc.expiry}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Referral Link Section */}
          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="text-foreground font-semibold mb-4">
              Referral Link
            </h3>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 bg-gray-100 text-foreground text-sm px-4 py-2 rounded border border-gray-300"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white gap-2 rounded-lg">
                <Share2 className="w-4 h-4" />
                Share Link
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="billings" className="text-center py-8">
          <p className="text-foreground">Billings content coming soon</p>
        </TabsContent>

        <TabsContent value="card" className="text-center py-8">
          <p className="text-foreground">Card Details content coming soon</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
