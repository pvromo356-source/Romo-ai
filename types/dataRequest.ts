/**
 * ============================================================
 * Romo AI
 * Data Request Domain Model
 * ------------------------------------------------------------
 * Data Requests are how Romo AI asks for missing information.
 *
 * If Romo AI does not have enough data, it should not guess.
 * It should explain what is missing, why it matters,
 * and the fastest ways to provide it.
 *
 * Example:
 * "I need supplier invoices to calculate profit impact."
 * ============================================================
 */

export type DataRequestStatus =
  | "open"
  | "fulfilled"
  | "dismissed"
  | "expired";

export type DataRequestPriority =
  | "low"
  | "medium"
  | "high"
  | "critical";

export type DataRequestCategory =
  | "revenue"
  | "expense"
  | "supplier_cost"
  | "customer_data"
  | "marketing"
  | "operations"
  | "accounting"
  | "inventory"
  | "website"
  | "other";

export type AcceptedDataSource =
  | "manual"
  | "csv"
  | "excel"
  | "invoice"
  | "receipt"
  | "email"
  | "integration"
  | "website";

export interface DataRequestOption {
  source: AcceptedDataSource;
  label: string;
  estimatedTimeMinutes: number;
}

export interface DataRequest {
  id: string;
  businessId: string;

  category: DataRequestCategory;
  priority: DataRequestPriority;
  status: DataRequestStatus;

  title: string;
  reason: string;
  requestedData: string;

  acceptedSources: DataRequestOption[];

  expectedImprovement: string;
  example?: string;

  createdAt: string;
  fulfilledAt?: string;
  updatedAt?: string;
}
