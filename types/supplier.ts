/**
 * ============================================================
 * Romo AI
 * Supplier Domain Model
 * ------------------------------------------------------------
 * Suppliers belong outside the Business model.
 *
 * Romo AI should track suppliers because supplier changes can
 * directly affect profit, pricing, operations, and customer experience.
 *
 * Example:
 * "Supplier cost increased 12%. Estimated monthly impact: -$2,143."
 * ============================================================
 */

export type SupplierStatus =
  | "active"
  | "inactive"
  | "watch"
  | "problem";

export type SupplierCategory =
  | "food"
  | "inventory"
  | "software"
  | "marketing"
  | "equipment"
  | "shipping"
  | "services"
  | "other";

export interface SupplierContactInfo {
  email?: string;
  phone?: string;
  website?: string;
}

export interface SupplierCostSummary {
  averageMonthlySpend?: number;
  lastOrderAmount?: number;
  costChangePercent?: number;
  costChangeSummary?: string;
}

export interface Supplier {
  id: string;
  businessId: string;

  name: string;
  category: SupplierCategory;
  status: SupplierStatus;

  contact?: SupplierContactInfo;

  costSummary?: SupplierCostSummary;

  lastOrderAt?: string;
  nextReviewAt?: string;

  notes?: string;

  createdAt: string;
  updatedAt?: string;
}