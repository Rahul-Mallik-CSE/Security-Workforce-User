/** @format */

"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReferralUserData } from "@/types/AllTypes";

interface UserDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: ReferralUserData | null;
}

const UserDetailsModal = ({
  open,
  onOpenChange,
  user,
}: UserDetailsModalProps) => {
  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            User Details
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {/* User Name */}
          <div className="space-y-1">
            <label className="text-sm text-gray-500">User Name</label>
            <div className="text-base font-medium">{user.userName}</div>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm text-gray-500">Email</label>
            <div className="text-base font-medium">{user.email}</div>
          </div>

          {/* Address */}
          {user.address && (
            <div className="space-y-1">
              <label className="text-sm text-gray-500">Address</label>
              <div className="text-base font-medium">{user.address}</div>
            </div>
          )}

          {/* Join Date */}
          <div className="space-y-1">
            <label className="text-sm text-gray-500">Join Date</label>
            <div className="text-base font-medium">{user.joinDate}</div>
          </div>

          {/* Subscription */}
          <div className="space-y-1">
            <label className="text-sm text-gray-500">Subscription</label>
            <div className="text-base font-medium">{user.subscribed}</div>
          </div>

          {/* Purchase Date */}
          {user.purchaseDate && (
            <div className="space-y-1">
              <label className="text-sm text-gray-500">Purchase Date</label>
              <div className="text-base font-medium">{user.purchaseDate}</div>
            </div>
          )}

          {/* Status */}
          <div className="space-y-1">
            <label className="text-sm text-gray-500">Status</label>
            <div>
              <span
                className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                  user.status === "Earned"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {user.status}
              </span>
            </div>
          </div>

          {/* Message Button */}
          <div className="pt-4">
            <button className="w-full bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white py-2.5 rounded-lg font-medium transition-colors">
              Message
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserDetailsModal;
