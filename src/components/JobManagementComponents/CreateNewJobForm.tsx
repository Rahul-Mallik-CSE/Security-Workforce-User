/** @format */

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const CreateNewJobForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    location: "",
    date: "",
    duration: "",
    startTime: "",
    endTime: "",
    payType: "",
    payRate: "",
    payAmount: "",
    operativesRequired: "",
    licenseRequirements: "",
    minimumRating: "",
    accreditationRequirements: "",
    usePreferredGuards: "",
    genderRequirement: "",
    languageRequired: "",
    engagementType: "",
    jobDescription: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleCancel = () => {
    console.log("Form cancelled");
  };

  return (
    <div className="max-w-[1000px] bg-white rounded-xl p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Job Title/Role */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Job Title/Role
          </label>
          <input
            type="text"
            placeholder="Enter job title/role"
            value={formData.jobTitle}
            onChange={(e) =>
              setFormData({ ...formData, jobTitle: e.target.value })
            }
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Location
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Workplace location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              type="button"
              className="px-6 py-2.5 bg-orange-100 text-orange-600 rounded-md hover:bg-orange-200 transition-colors text-sm font-medium"
            >
              <MapPin className="w-4 h-4 mr-1" />
              Map
            </Button>
          </div>
        </div>

        {/* Date and Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Date
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="14 April, 2025"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Duration
            </label>
            <input
              type="text"
              placeholder="auto - 19ad"
              value={formData.duration}
              onChange={(e) =>
                setFormData({ ...formData, duration: e.target.value })
              }
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Start Time and End Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Start Time
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="12:30 PM"
                value={formData.startTime}
                onChange={(e) =>
                  setFormData({ ...formData, startTime: e.target.value })
                }
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              End Time
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="08:00 AM"
                value={formData.endTime}
                onChange={(e) =>
                  setFormData({ ...formData, endTime: e.target.value })
                }
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Pay Type and Pay Rate */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Pay Type
            </label>
            <select
              value={formData.payType}
              onChange={(e) =>
                setFormData({ ...formData, payType: e.target.value })
              }
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
            >
              <option value="">Select rate amount type</option>
              <option value="nominated">Nominated</option>
              <option value="award">Award</option>
              <option value="negotiation">By Negotiation</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Pay Rate{" "}
              <span className="text-gray-400 font-normal text-xs">
                (Per Operative and Allowances)
              </span>
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-700">
                  $
                </span>
                <input
                  type="text"
                  placeholder="30"
                  value={formData.payRate}
                  onChange={(e) =>
                    setFormData({ ...formData, payRate: e.target.value })
                  }
                  className="w-full pl-7 pr-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={formData.payAmount}
                onChange={(e) =>
                  setFormData({ ...formData, payAmount: e.target.value })
                }
                className="px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 bg-orange-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">/hour</option>
                <option value="/day">/day</option>
                <option value="/week">/week</option>
              </select>
            </div>
          </div>
        </div>

        {/* Operatives Required */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Operatives Required
          </label>
          <input
            type="text"
            placeholder="Enter Operative Require"
            value={formData.operativesRequired}
            onChange={(e) =>
              setFormData({ ...formData, operativesRequired: e.target.value })
            }
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Licence Requirements */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Licence Requirements
          </label>
          <select
            value={formData.licenseRequirements}
            onChange={(e) =>
              setFormData({ ...formData, licenseRequirements: e.target.value })
            }
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
          >
            <option value="">Select Licence Requirements</option>
            <option value="security">Security Operations</option>
            <option value="firearm">Firearm License</option>
            <option value="crowd">Crowd Control</option>
          </select>
        </div>

        {/* Minimum Rating Requirement */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Minimum Rating Requirement
          </label>
          <select
            value={formData.minimumRating}
            onChange={(e) =>
              setFormData({ ...formData, minimumRating: e.target.value })
            }
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
          >
            <option value="">Select minimum rating</option>
            <option value="none">No Minimum Required</option>
            <option value="1">⭐ 1</option>
            <option value="2">⭐ 2</option>
            <option value="3">⭐ 3</option>
            <option value="4">⭐ 4</option>
            <option value="5">⭐ 5</option>
          </select>
        </div>

        {/* Accreditation Requirements */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Accreditation Requirements
          </label>
          <select
            value={formData.accreditationRequirements}
            onChange={(e) =>
              setFormData({
                ...formData,
                accreditationRequirements: e.target.value,
              })
            }
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
          >
            <option value="">Select Accreditation requirements</option>
            <option value="first-aid">First Aid Certificate</option>
            <option value="cpr">CPR Certified</option>
            <option value="training">Security Training</option>
          </select>
        </div>

        {/* Use Preferred Guards List */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Use Preferred Guards List
          </label>
          <select
            value={formData.usePreferredGuards}
            onChange={(e) =>
              setFormData({ ...formData, usePreferredGuards: e.target.value })
            }
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
          >
            <option value="">Select preferred guards list or no</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Gender Requirement */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Gender Requirement{" "}
            <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <select
            value={formData.genderRequirement}
            onChange={(e) =>
              setFormData({ ...formData, genderRequirement: e.target.value })
            }
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
          >
            <option value="">Select required gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="any">Any</option>
          </select>
        </div>

        {/* Language Required */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Language Required
          </label>
          <select
            value={formData.languageRequired}
            onChange={(e) =>
              setFormData({ ...formData, languageRequired: e.target.value })
            }
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
          >
            <option value="">Select required language</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="mandarin">Mandarin</option>
          </select>
        </div>

        {/* Engagement Type */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Engagement Type
          </label>
          <select
            value={formData.engagementType}
            onChange={(e) =>
              setFormData({ ...formData, engagementType: e.target.value })
            }
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
          >
            <option value="">Select engagement type</option>
            <option value="casual">Casual</option>
            <option value="part-time">Part-time</option>
            <option value="permanent">Permanent</option>
          </select>
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Job Description
          </label>
          <textarea
            placeholder="enter Job description"
            value={formData.jobDescription}
            onChange={(e) =>
              setFormData({ ...formData, jobDescription: e.target.value })
            }
            rows={5}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <Button
            type="button"
            onClick={handleCancel}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="flex-1 px-6 py-3 bg-[#1e3a5f] text-white rounded-md hover:bg-[#152a47] transition-colors text-sm font-medium"
          >
            Submit Job Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewJobForm;
