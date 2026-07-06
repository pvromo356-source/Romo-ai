/**
 * ============================================================
 * Romo AI
 * Data Source Domain Model
 * ------------------------------------------------------------
 * Data Sources tell Romo AI where business information came from.
 *
 * Romo AI must never treat all data equally.
 * A synced accounting integration is stronger than a manual note.
 * A recent invoice is stronger than an old estimate.
 *
 * This model helps Romo AI answer with honesty, precision,
 * confidence, and evidence.
 * ============================================================
 */

export type DataSourceType =
  | "manual"
  | "csv"
  | "excel"
  | "invoice"
  | "receipt"
  | "email"
  | "integration"
  | "website"
  | "google_business"
  | "public_data"
  | "unknown";

export type DataSourceStatus =
  | "available"
  | "connected"
  | "needs_attention"
  | "missing"
  | "outdated"
  | "error";

export type DataFreshness =
  | "real_time"
  | "today"
  | "this_week"
  | "this_month"
  | "outdated"
  | "unknown";

export type DataConfidenceLevel =
  | "low"
  | "medium"
  | "high"
  | "verified";

export interface DataSource {
  id: string;
  businessId: string;

  type: DataSourceType;
  name: string;
  status: DataSourceStatus;

  integrationId?: string;
  fileName?: string;
  documentId?: string;
  url?: string;

  freshness: DataFreshness;
  confidenceLevel: DataConfidenceLevel;
  confidenceScore: number;

  lastUpdatedAt?: string;

  createdAt: string;
  updatedAt?: string;
}
