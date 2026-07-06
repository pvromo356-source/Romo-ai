/**
 * ============================================================
 * Romo AI
 * User Domain Model
 * ------------------------------------------------------------
 * Users are the people who access Romo AI.
 *
 * A user is not the same as a Business.
 * A user can own, manage, or work inside a business.
 * ============================================================
 */

export type UserRole =
  | "owner"
  | "admin"
  | "manager"
  | "team_member"
  | "viewer";

export type UserStatus =
  | "active"
  | "invited"
  | "disabled";

export interface UserPreferences {
  preferredLanguage: string;
  timezone: string;
  currency: string;
}

export interface User {
  id: string;
  businessId?: string;

  name: string;
  email: string;

  role: UserRole;
  status: UserStatus;

  preferences: UserPreferences;

  createdAt: string;
  updatedAt?: string;
}
