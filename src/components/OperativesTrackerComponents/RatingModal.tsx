/** @format */

"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Star } from "lucide-react";
import { RatingCategory } from "@/types/AllTypes";

interface RatingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  operativeName: string;
}

const RatingModal = ({
  open,
  onOpenChange,
  operativeName,
}: RatingModalProps) => {
  const [ratings, setRatings] = useState<RatingCategory[]>([
    { id: "1", category: "Presentation & grooming", rating: 0 },
    { id: "2", category: "Verbal & written communication", rating: 0 },
    { id: "3", category: "Reports & administration", rating: 0 },
    { id: "4", category: "Punctuality & reliability", rating: 0 },
    { id: "5", category: "Skills & attributes", rating: 0 },
  ]);

  const handleRating = (categoryId: string, rating: number) => {
    setRatings((prev) =>
      prev.map((item) => (item.id === categoryId ? { ...item, rating } : item))
    );
  };

  const handleSubmit = () => {
    console.log("Ratings submitted:", ratings);
    onOpenChange(false);
  };

  const handleLater = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Rate this Operative
          </DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-4">
          {ratings.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span className="text-sm text-gray-700">{item.category}</span>
              </div>
              <div className="flex items-center gap-2">
                {[5, 4, 3, 2, 1].map((starValue) => (
                  <button
                    key={starValue}
                    onClick={() => handleRating(item.id, starValue)}
                    className="relative group"
                  >
                    <Star
                      className={`w-6 h-6 transition-colors ${
                        item.rating >= starValue
                          ? "fill-orange-400 text-orange-400"
                          : "fill-none text-gray-300"
                      } group-hover:text-orange-400`}
                    />
                  </button>
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  {item.rating > 0 ? `${item.rating} ★` : ""}
                </span>
              </div>
            </div>
          ))}

          {/* Buttons */}
          <div className="flex items-center gap-3 pt-4">
            <button
              onClick={handleLater}
              className="flex-1 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 py-2.5 rounded-lg font-medium transition-colors"
            >
              Later
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white py-2.5 rounded-lg font-medium transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RatingModal;
