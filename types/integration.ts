/**
 * ============================================================
 * Romo AI
 * Integration Domain Model
 * ------------------------------------------------------------
 * Integrations connect Romo AI to the tools a business already uses.
 *
 * Romo AI should not force a business to change systems.
 * Romo AI should connect, read, understand, and help.
 *
 * Examples:
 * - Google Business Profile
 * - Gmail
 * - Google Calendar
 * - Stripe
 * - QuickBooks
 * - Shopify
 * - Square
 * - Excel / CSV uploads
 * ============================================================
 */

export type IntegrationProvider =
  | "google"
  | "microsoft"
  | "stripe"
  | "quickbooks"
  | "shopify"
  | "square"
  | "meta"
  | "manual"
  | "csv"
  | "excel";

export type IntegrationCategory =
  | "website"
  | "email"
  | "calendar"
  | "payments"
  | "accounting"
  | "marketing"
  | "customer_data"
  | "operations"
  | "manual_upload";

export type IntegrationStatus =
  | "connected"
  | "not_connected"
  | "needs_attention"
  | "syncing"
  | "error";

export interface IntegrationSyncSummary {
  lastSyncAt?: string;
  nextSyncAt?: string;
  recordsSynced?: number;
  lastSyncStatus?: "success" | "partial" | "failed";
  errorMessage?: string;
}

export interface IntegrationPermissions {
  canRead: boolean;
  canWrite: boolean;
  requiresApprovalBeforeWrite: boolean;
}

export interface Integration {
  id: string;
  businessId: string;

  provider: IntegrationProvider;
  category: IntegrationCategory;

  name: string;
  status: IntegrationStatus;

  permissions: IntegrationPermissions;
  sync: IntegrationSyncSummary;

  connectedAt?: string;
  disconnectedAt?: string;

  createdAt: string;
  updatedAt?: string;
}
