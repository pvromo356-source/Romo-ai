/**
 * ============================================================
 * Romo AI
 * Insight Domain Model
 * ------------------------------------------------------------
 * Insights explain what is happening inside a business.
 *
 * Metrics tell Romo AI the numbers.
 * Insights explain what those numbers mean.
 *
 * An Insight should be direct, evidence-based, and useful.
 *
 * Example:
 * "Revenue dropped 8% because supplier cost increased 12%."
 * ============================================================
 */

export type InsightSeverity =
  | "info"
  | "opportunity"
  | "warning"
  | "critical";

export type InsightCategory =
  | "revenue"
  | "expense"
  | "profit"
  | "customers"
  | "marketing"
  | "operations"
  | "reviews"
  | "supplier"
  | "risk"
  | "growth";

export interface InsightEvidence {
  label: string;
  value: string;
  source: string;
}

export interface Insight {
  id: string;
  businessId: string;

  category: InsightCategory;
  severity: InsightSeverity;

  title: string;
  summary: string;

  evidence: InsightEvidence[];

  relatedMetricIds?: string[];

  confidence: number;

  createdAt: string;
  updatedAt?: string;
}