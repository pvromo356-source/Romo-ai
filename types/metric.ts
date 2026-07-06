/**
 * ============================================================
 * Romo AI
 * Metric Domain Model
 * ------------------------------------------------------------
 * Metrics are how Romo AI remembers business performance.
 *
 * The AI should not guess results.
 * The AI should read metrics, compare periods, and explain changes.
 *
 * Metrics track important business facts:
 * revenue, expenses, profit, customers, reviews, time saved,
 * money saved, supplier cost, and operational performance.
 * ============================================================
 */

export type MetricCategory =
  | "revenue"
  | "expense"
  | "profit"
  | "customers"
  | "leads"
  | "reviews"
  | "time_saved"
  | "money_saved"
  | "operations"
  | "marketing"
  | "supplier_cost";

export type MetricUnit =
  | "usd"
  | "percent"
  | "count"
  | "hours"
  | "score";

export type MetricTrend =
  | "up"
  | "down"
  | "flat"
  | "unknown";

export interface MetricPeriod {
  startDate: string;
  endDate: string;
}

export interface MetricComparison {
  previousValue: number;
  currentValue: number;
  changeAmount: number;
  changePercent: number;
  trend: MetricTrend;
}

export interface BusinessMetric {
  id: string;
  businessId: string;

  category: MetricCategory;
  name: string;
  description?: string;

  value: number;
  unit: MetricUnit;
  period: MetricPeriod;

  comparison?: MetricComparison;

  source: string;
  confidence: number;

  createdAt: string;
  updatedAt?: string;
}