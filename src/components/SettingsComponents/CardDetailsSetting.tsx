/** @format */

"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const CardDetailsSetting = () => {
  const cardData = {
    cardholderName: "John Smith",
    cardNumber: "**** **** **42 4242",
    expiryDate: "08 / 27",
    cvv: "***",
    billingAddress: "123 George Street, Sydney, Australia",
  };

  return (
    <div className="px-8 pb-16 max-w-md">
      <h2 className="text-lg font-semibold mb-6">
        For your Subscription to Securiverse
      </h2>

      <div className="space-y-4">
        {/* Cardholder Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cardholder Name
          </label>
          <input
            type="text"
            value={cardData.cardholderName}
            readOnly
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded text-sm text-gray-700 focus:outline-none"
          />
        </div>

        {/* Card Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card Number
          </label>
          <input
            type="text"
            value={cardData.cardNumber}
            readOnly
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded text-sm text-gray-700 focus:outline-none"
          />
        </div>

        {/* Expiry Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expiry Date (MM/YY)
          </label>
          <input
            type="text"
            value={cardData.expiryDate}
            readOnly
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded text-sm text-gray-700 focus:outline-none"
          />
        </div>

        {/* CVV */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            CVV
          </label>
          <input
            type="text"
            value={cardData.cvv}
            readOnly
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded text-sm text-gray-700 focus:outline-none"
          />
        </div>

        {/* Billing Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Billing Address
          </label>
          <input
            type="text"
            value={cardData.billingAddress}
            readOnly
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded text-sm text-gray-700 focus:outline-none"
          />
        </div>

        {/* Change Card Details Button */}
        <div className="pt-4">
          <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg text-sm font-medium">
            Change Card Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardDetailsSetting;
