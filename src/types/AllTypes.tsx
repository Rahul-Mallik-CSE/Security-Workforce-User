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

export interface OperativeTrackerData {
  id: string;
  jobId: string;
  operativeName: string;
  jobRole: string;
  jobDate: string;
  location: string;
  status: "Shift Complete" | "On-Duty" | "Not Started";
  rating: number | null;
  duration?: string;
  ratePerHour?: string;
  checkIn?: string;
  checkOut?: string;
}

export interface RatingCategory {
  id: string;
  category: string;
  rating: number;
}

export interface PreferredOperativeData {
  id: string;
  operativeId: string;
  operativeName: string;
  licences: string;
  accreditations: string;
  rating: number;
  status: "Interested" | "Hired";
  profileImage?: string;
  state?: string;
  jobExperience?: string;
  licenceNumber?: string;
  licenceExpiryDate?: string;
  securityOperations?: string[];
  firearms?: string[];
  otherNotes?: string;
}
