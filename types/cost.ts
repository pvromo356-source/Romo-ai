/**
 * ============================================================
 * Romo AI
 * Cost Domain Model
 * ------------------------------------------------------------
 * Costs are how Romo AI tracks what a business spends money on.
 *
 * Supplier tells Romo AI who the business buys from.
 * Cost tells Romo AI how much something costs, when it changed,
 * where the data came from, and how confident we are.
 *
 * Romo AI must never invent costs.
 * If cost data does not exist, Romo AI must ask for it.
 *
 * Example:
 * "Chicken cost increased 12% since January.
 * Estimated monthly impact: -$1,420."
 * ============================================================
 */

export type CostCategory =
  | "supplier"
  | "inventory"
  | "labor"
  | "rent"
  | "utilities"
  | "software"
  | "marketing"
  | "equipment"
  | "shipping"
  | "taxes"
  | "fees"
  | "other";

export type CostType =
  | "fixed"
  | "variable"
  | "one_time"
  | "recurring";

export type CostFrequency =
  | "daily"
  | "weekly"
  | "monthly"
  | "quarterly"
  | "yearly"
  | "one_time"
  | "unknown";

export type CostUnit =
  | "item"
  | "case"
  | "box"
  | "pound"
  | "kilogram"
  | "ounce"
  | "gallon"
  | "hour"
  | "month"
  | "order"
  | "service"
  | "unknown";

export type CostSource =
  | "manual"
  | "csv"
  | "excel"
  | "invoice"
  | "receipt"
  | "email"
  | "integration"
  | "unknown";

export interface CostPeriod {
  startDate: string;
  endDate: string;
}

export interface CostSourceReference {
  sourceName: string;
  documentId?: string;
  fileName?: string;
  integrationId?: string;
}

export interface CostComparison {
  previousAmount: number;
  currentAmount: number;
  changeAmount: number;
  changePercent: number;
}

export interface BusinessCost {
  id: string;
  businessId: string;

  supplierId?: string;

  name: string;
  category: CostCategory;
  type: CostType;

  amount: number;
  currency: string;

  unit?: CostUnit;
  quantity?: number;
  totalAmount?: number;

  frequency?: CostFrequency;
  period?: CostPeriod;

  effectiveDate: string;

  comparison?: CostComparison;

  source: CostSource;
  sourceReference?: CostSourceReference;

  confidence: number;

  notes?: string;

  createdAt: string;
  updatedAt?: string;
}