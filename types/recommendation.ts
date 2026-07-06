/**
 * ============================================================
 * Romo AI
 * Recommendation Domain Model
 * ------------------------------------------------------------
 * Recommendations turn insights into decisions.
 *
 * Romo AI should not just explain problems.
 * It should recommend clear, business-focused actions.
 *
 * Every recommendation should answer:
 * 1. What is the problem?
 * 2. What should we do?
 * 3. What is the estimated impact?
 * 4. What is the risk?
 * 5. Does the owner need to approve it?
 * ============================================================
 */

export type RecommendationStatus =
  | "draft"
  | "ready_for_review"
  | "approved"
  | "rejected"
  | "completed";

export type RecommendationRiskLevel =
  | "low"
  | "medium"
  | "high";

export type RecommendationCategory =
  | "revenue"
  | "expense"
  | "marketing"
  | "operations"
  | "customer_experience"
  | "supplier"
  | "growth"
  | "risk";

export interface RecommendationImpact {
  estimatedMoneySaved?: number;
  estimatedRevenueIncrease?: number;
  estimatedTimeSavedHours?: number;
  estimatedImpactSummary: string;
}

export interface Recommendation {
  id: string;
  businessId: string;

  insightId?: string;

  category: RecommendationCategory;
  status: RecommendationStatus;
  riskLevel: RecommendationRiskLevel;

  title: string;
  problem: string;
  recommendedAction: string;

  impact: RecommendationImpact;

  confidence: number;

  requiresApproval: boolean;

  createdAt: string;
  updatedAt?: string;
}