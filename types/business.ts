/**
 * ============================================================
 * Romo AI
 * Business Domain Model
 * ------------------------------------------------------------
 * A Business is the central object of Romo AI.
 *
 * The Business model represents the stable identity, goals,
 * health, preferences, and connection status of a real company.
 *
 * It does NOT contain customers, employees, suppliers,
 * transactions, UI logic, AI logic, or provider-specific logic.
 *
 * Those belong in their own models.
 *
 * Principle:
 * The business is the center. AI is only a tool.
 * ============================================================
 */

export type BusinessHealthStatus =
  | "healthy"
  | "watch"
  | "at_risk"
  | "critical";

export type BusinessSize =
  | "solo"
  | "small"
  | "medium"
  | "large"
  | "enterprise";

export interface BusinessLocation {
  city?: string;
  state?: string;
  country: string;
}

export interface BusinessIdentity {
  id: string;
  name: string;
  legalName?: string;
  industry: string;
  website?: string;
  timezone: string;
  size: BusinessSize;
  location: BusinessLocation;
}

export interface BusinessPreferences {
  preferredLanguage: string;
  currency: string;
}

export interface BusinessGoals {
  primaryGoal: string;
  revenueGoal?: number;
  customerGrowthGoal?: number;
  timeSavingGoalHoursPerMonth?: number;
}

export interface BusinessHealth {
  score: number;
  status: BusinessHealthStatus;
  summary: string;
  lastReviewedAt: string;
}

export interface BusinessConnectionSummary {
  websiteConnected: boolean;
  googleBusinessConnected: boolean;
  emailConnected: boolean;
  calendarConnected: boolean;
  paymentsConnected: boolean;
  accountingConnected: boolean;
}

export interface BusinessMetadata {
  createdAt: string;
  updatedAt: string;
  version: number;
}

export interface Business {
  identity: BusinessIdentity;
  preferences: BusinessPreferences;
  goals: BusinessGoals;
  health: BusinessHealth;
  connections: BusinessConnectionSummary;
  metadata: BusinessMetadata;
}