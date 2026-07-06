/**
 * ============================================================
 * Romo AI
 * Intelligence Level Domain Model
 * ------------------------------------------------------------
 * Intelligence Levels define how much value Romo AI can provide
 * based on how much information the business has shared.
 *
 * Core Principle:
 * Romo AI must provide value immediately with available data,
 * then become more precise as the customer connects more sources.
 *
 * The customer should feel progress in minutes, not after setup.
 * ============================================================
 */

export type IntelligenceLevelId =
  | "level_0_website_only"
  | "level_1_public_data"
  | "level_2_google_business"
  | "level_3_email_calendar"
  | "level_4_payments_accounting"
  | "level_5_pos_inventory"
  | "level_6_full_business_brain";

export type IntelligencePrecision =
  | "basic"
  | "directional"
  | "useful"
  | "strong"
  | "high"
  | "executive_grade";

export type ValueSpeed =
  | "instant"
  | "under_3_minutes"
  | "under_5_minutes"
  | "under_15_minutes"
  | "under_30_minutes";

export type UnlockCategory =
  | "website"
  | "marketing"
  | "sales"
  | "operations"
  | "customer_experience"
  | "finance"
  | "supplier"
  | "inventory"
  | "executive_decisions";

export interface IntelligenceUnlock {
  category: UnlockCategory;
  title: string;
  description: string;
  exampleOutput: string;
}

export interface IntelligenceLimitation {
  title: string;
  reason: string;
  dataNeededToImprove: string[];
}

export interface NextBestConnection {
  title: string;
  description: string;
  estimatedSetupTimeMinutes: number;
  expectedPrecisionGain: string;
  expectedBusinessValue: string;
}

export interface IntelligenceLevel {
  id: IntelligenceLevelId;

  levelNumber: number;
  name: string;
  description: string;

  precision: IntelligencePrecision;
  valueSpeed: ValueSpeed;

  requiredInputs: string[];
  optionalInputs: string[];

  unlocks: IntelligenceUnlock[];
  limitations: IntelligenceLimitation[];

  nextBestConnections: NextBestConnection[];
}

export interface BusinessIntelligenceProfile {
  businessId: string;

  currentLevel: IntelligenceLevelId;
  precision: IntelligencePrecision;

  connectedSourceCount: number;
  missingCriticalSourceCount: number;

  firstValueDelivered: boolean;
  firstValueDeliveredAt?: string;

  recommendedNextConnection?: NextBestConnection;

  createdAt: string;
  updatedAt?: string;
}
