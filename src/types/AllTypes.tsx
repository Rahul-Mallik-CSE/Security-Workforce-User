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
