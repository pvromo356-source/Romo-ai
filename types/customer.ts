/**
 * ============================================================
 * Romo AI
 * Customer Domain Model
 * ------------------------------------------------------------
 * Customers belong outside the Business model.
 *
 * A Business can have many customers.
 * Romo AI should use customer data to understand retention,
 * lifetime value, lost revenue, follow-ups, and opportunities.
 *
 * This model should stay simple, useful, and privacy-conscious.
 * ============================================================
 */

export type CustomerStatus =
  | "active"
  | "inactive"
  | "lost"
  | "lead"
  | "unknown";

export type CustomerSegment =
  | "new"
  | "returning"
  | "vip"
  | "at_risk"
  | "lost"
  | "unknown";

export type CustomerSource =
  | "website"
  | "google"
  | "referral"
  | "social_media"
  | "walk_in"
  | "email"
  | "manual"
  | "unknown";

export interface CustomerContactInfo {
  email?: string;
  phone?: string;
}

export interface CustomerMetrics {
  lifetimeValue?: number;
  totalOrders?: number;
  averageOrderValue?: number;
  lastPurchaseAmount?: number;
}

export interface Customer {
  id: string;
  businessId: string;

  name: string;
  contact?: CustomerContactInfo;

  status: CustomerStatus;
  segment: CustomerSegment;
  source: CustomerSource;

  metrics?: CustomerMetrics;

  firstSeenAt?: string;
  lastInteractionAt?: string;
  lastPurchaseAt?: string;

  notes?: string;

  createdAt: string;
  updatedAt?: string;
}