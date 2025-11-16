/** @format */

"use client";

import React from "react";

const BillingSetting = () => {
  const invoices = [
    { id: "Invoice 001", date: "05 Sep, 2025", plan: "Starter", price: "$49" },
    { id: "Invoice 001", date: "05 Sep, 2025", plan: "Starter", price: "$49" },
    { id: "Invoice 001", date: "05 Sep, 2025", plan: "Starter", price: "$49" },
    { id: "Invoice 001", date: "05 Sep, 2025", plan: "Starter", price: "$49" },
    { id: "Invoice 001", date: "05 Sep, 2025", plan: "Starter", price: "$49" },
    { id: "Invoice 001", date: "05 Sep, 2025", plan: "Starter", price: "$49" },
  ];

  return (
    <div className="px-8 pb-16 ">
      <h2 className="text-lg font-semibold mb-6">Previous Invoice</h2>

      {/* Table */}
      <div className=" rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 bg-white border-b border-gray-200 px-6 py-3">
          <div className="text-sm font-medium text-gray-700">Invoice Id</div>
          <div className="text-sm font-medium text-gray-700">Date</div>
          <div className="text-sm font-medium text-gray-700">Plan</div>
          <div className="text-sm font-medium text-gray-700">Price</div>
        </div>

        {/* Table Body */}
        <div className="bg-white">
          {invoices.map((invoice, idx) => (
            <div
              key={idx}
              className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-gray-200 last:border-b-0"
            >
              <div className="text-sm text-gray-700">{invoice.id}</div>
              <div className="text-sm text-gray-700">{invoice.date}</div>
              <div className="text-sm text-gray-700">{invoice.plan}</div>
              <div className="text-sm text-gray-700">{invoice.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BillingSetting;
