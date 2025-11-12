/** @format */

export interface TableColumn {
  key: string;
  label: string;
  width?: string;
}

export interface PayrollData {
  id: string;
  jobId: string;
  operativeName: string;
  duration: string;
  payRate: string;
  total: string;
  date: string;
  status: "Paid" | "Unpaid";
}

export interface ReferralUserData {
  id: string;
  userName: string;
  email: string;
  joinDate: string;
  subscribed: "Yes" | "No";
  status: "Earned" | "Pending";
  address?: string;
  purchaseDate?: string;
}
