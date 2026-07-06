/**
 * ============================================================
 * Romo AI
 * Report Domain Model
 * ------------------------------------------------------------
 * Reports summarize business performance, risks, opportunities,
 * and recommended actions.
 *
 * Reports should be clear enough for a business owner to understand
 * quickly and detailed enough to support real decisions.
 * ============================================================
 */

export type ReportType =
  | "website_scan"
  | "business_health"
  | "weekly_review"
  | "monthly_review"
  | "quarterly_review"
  | "custom";

export type ReportStatus =
  | "draft"
  | "ready"
  | "sent"
  | "archived";

export interface ReportSummary {
  headline: string;
  keyTakeaways: string[];
  confidence: number;
}

export interface ReportSection {
  id: string;
  title: string;
  summary: string;
  findings: string[];
  relatedMetricIds?: string[];
  relatedInsightIds?: string[];
}

export interface BusinessReport {
  id: string;
  businessId: string;

  type: ReportType;
  status: ReportStatus;

  title: string;
  summary: ReportSummary;
  sections: ReportSection[];

  relatedRecommendationIds?: string[];
  relatedTaskIds?: string[];

  createdAt: string;
  updatedAt?: string;
}
