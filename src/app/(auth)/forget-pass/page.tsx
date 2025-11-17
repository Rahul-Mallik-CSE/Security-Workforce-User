/** @format */

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForgetPassPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle find account logic here
    console.log("Find account for:", emailOrPhone);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Find Your Account
          </h1>
          <p className="text-sm text-gray-600">
            Please enter your email address or mobile number to search for your
            account.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleNext} className="space-y-6">
          {/* Email/Phone Input */}
          <div>
            <Input
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Enter your email or phone number"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg text-sm"
              required
            />
          </div>

          {/* Next Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg font-medium text-base"
          >
            Next
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassPage;
