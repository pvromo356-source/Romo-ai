/**
 * ============================================================
 * Romo AI
 * Dashboard Domain Model
 * ------------------------------------------------------------
 * The Dashboard is not the business brain.
 * The Dashboard is a view of what the Business Brain knows.
 *
 * It should show:
 * - Business health
 * - Intelligence level
 * - Key metrics
 * - Insights
 * - Recommendations
 * - Tasks
 * - Missing data requests
 * ============================================================
 */

import type { Business } from "./business";
import type { BusinessMetric } from "./metric";
import type { Insight } from "./insight";
import type { Recommendation } from "./recommendation";
import type { Task } from "./task";
import type { BusinessIntelligenceProfile } from "./intelligenceLevel";
import type { DataRequest } from "./dataRequest";

export type DashboardTimeRange =
  | "today"
  | "this_week"
  | "this_month"
  | "this_quarter"
  | "this_year"
  | "custom";

export type DashboardCardStatus =
  | "good"
  | "watch"
  | "at_risk"
  | "critical";

export interface DashboardSummaryCard {
  id: string;
  title: string;
  value: string;
  changeSummary?: string;
  status: DashboardCardStatus;
}

export interface DashboardActionPrompt {
  id: string;
  title: string;
  reason: string;
  primaryActionLabel: string;
  relatedTaskId?: string;
  relatedRecommendationId?: string;
}

export interface BusinessDashboard {
  business: Business;
  intelligence: BusinessIntelligenceProfile;

  timeRange: DashboardTimeRange;

  summaryCards: DashboardSummaryCard[];

  topMetrics: BusinessMetric[];
  topInsights: Insight[];
  recommendations: Recommendation[];
  tasks: Task[];
  dataRequests: DataRequest[];

  actionPrompts: DashboardActionPrompt[];

  generatedAt: string;
}
