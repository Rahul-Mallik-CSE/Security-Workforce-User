/** @format */

"use client";

import { useState } from "react";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { TableColumn, ReferralUserData } from "@/types/AllTypes";
import { myReferralData } from "@/data/MyReferralData";
import { Eye, Trash2 } from "lucide-react";
import UserDetailsModal from "@/components/MyReferralComponents/UserDetailsModal";

const MyReferralUserPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<ReferralUserData | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns: TableColumn[] = [
    { key: "userName", label: "User Name", width: "20%" },
    { key: "email", label: "Email Address", width: "25%" },
    { key: "joinDate", label: "Join Date", width: "15%" },
    { key: "subscribed", label: "Subscribed", width: "12%" },
    { key: "status", label: "Status", width: "15%" },
    { key: "action", label: "Action", width: "13%" },
  ];

  const filteredData = myReferralData.filter(
    (user) =>
      user.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewUser = (user: ReferralUserData) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (userId: string) => {
    console.log("Delete user:", userId);
    // Add delete logic here
  };

  const renderCell = (item: ReferralUserData, columnKey: string) => {
    if (columnKey === "status") {
      return (
        <span
          className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
            item.status === "Earned"
              ? "bg-blue-100 text-blue-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {item.status}
        </span>
      );
    }

    if (columnKey === "action") {
      return (
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleViewUser(item)}
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="View details"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleDeleteUser(item.id)}
            className="text-gray-600 hover:text-red-600 transition-colors"
            aria-label="Delete user"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      );
    }

    return item[columnKey as keyof ReferralUserData];
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Referral User</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name, email or status..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Table */}
      <CustomTable
        columns={columns}
        data={filteredData}
        renderCell={renderCell}
      />

      {/* User Details Modal */}
      <UserDetailsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        user={selectedUser}
      />
    </div>
  );
};

export default MyReferralUserPage;
