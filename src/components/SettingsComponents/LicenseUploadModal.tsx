/** @format */

"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
=======
import { Upload, X } from "lucide-react";
>>>>>>> a7dcf38f0a0063f0d7a760c7a821a0f9e098c25f

interface LicenseUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LicenseUploadModal: React.FC<LicenseUploadModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [expiryDate, setExpiryDate] = useState("");
  const [licenseType, setLicenseType] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Handle license upload logic here
    console.log("License Type:", licenseType);
    console.log("Expiry Date:", expiryDate);
    console.log("File:", selectedFile);
    onClose();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
<<<<<<< HEAD
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold">
            License Upload
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5 py-2">
          {/* License Type(s) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              License Type(s)
=======
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Upload License
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* License Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              License Type
>>>>>>> a7dcf38f0a0063f0d7a760c7a821a0f9e098c25f
            </label>
            <select
              value={licenseType}
              onChange={(e) => setLicenseType(e.target.value)}
<<<<<<< HEAD
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your company licence type</option>
=======
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select license type</option>
>>>>>>> a7dcf38f0a0063f0d7a760c7a821a0f9e098c25f
              <option value="security-operations">Security Operations</option>
              <option value="crowd-control">Crowd Control</option>
              <option value="bodyguard">Bodyguard</option>
              <option value="armed-security">Armed Security</option>
            </select>
          </div>

<<<<<<< HEAD
          {/* License Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              License Upload
            </label>
            <div className="flex items-center gap-2">
              {!selectedFile ? (
                <>
                  <input
                    type="text"
                    placeholder="Upload your Security Agent licence"
                    readOnly
                    className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-400 focus:outline-none"
                  />
                  <label className="cursor-pointer">
                    <Button
                      type="button"
                      className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded text-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("file-upload")?.click();
                      }}
                    >
                      Upload
                    </Button>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.png,.jpg,.jpeg"
                  />
                </>
              ) : (
                <>
                  <input
                    type="text"
                    value={selectedFile.name}
                    readOnly
                    className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:outline-none"
                  />
                  <Button
                    onClick={handleRemoveFile}
                    variant="outline"
                    className="px-6 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded text-sm"
                  >
                    Remove
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* License Expiry Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              License Expiry Date
            </label>
            <input
              type="text"
              placeholder="Enter your licence expiry date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => !e.target.value && (e.target.type = "text")}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <Button
            onClick={handleSubmit}
            className="bg-blue-900 hover:bg-blue-800 text-white px-16 py-2 rounded text-sm"
            disabled={!licenseType || !expiryDate || !selectedFile}
          >
            Submit
=======
          {/* Expiry Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expiry Date
            </label>
            <input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Document
            </label>
            {!selectedFile ? (
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PDF, PNG, JPG (Max 10MB)
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.png,.jpg,.jpeg"
                />
              </label>
            ) : (
              <div className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg">
                <div className="flex items-center gap-3">
                  <Upload className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">
                    {selectedFile.name}
                  </span>
                </div>
                <button
                  onClick={handleRemoveFile}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <Button
            onClick={onClose}
            variant="outline"
            className="px-6 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-lg"
            disabled={!licenseType || !expiryDate || !selectedFile}
          >
            Upload
>>>>>>> a7dcf38f0a0063f0d7a760c7a821a0f9e098c25f
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LicenseUploadModal;
