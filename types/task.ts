/**
 * ============================================================
 * Romo AI
 * Task Domain Model
 * ------------------------------------------------------------
 * Tasks are the actions Romo AI prepares, recommends,
 * assigns, or executes with approval.
 *
 * A Task is not just a to-do item.
 * It is an operational action connected to business value.
 *
 * Every task should answer:
 * 1. What needs to be done?
 * 2. Why does it matter?
 * 3. Who or what is responsible?
 * 4. What is the expected business impact?
 * 5. Does this require approval?
 * ============================================================
 */

export type TaskStatus =
  | "pending"
  | "waiting_for_approval"
  | "approved"
  | "in_progress"
  | "completed"
  | "rejected"
  | "cancelled";

export type TaskPriority =
  | "low"
  | "medium"
  | "high"
  | "urgent";

export type TaskCategory =
  | "marketing"
  | "sales"
  | "operations"
  | "customer_success"
  | "analytics"
  | "finance"
  | "supplier"
  | "admin";

export type TaskOwnerType =
  | "business_owner"
  | "team_member"
  | "romo_agent"
  | "system";

export interface TaskOwner {
  type: TaskOwnerType;
  name: string;
  agentId?: string;
  userId?: string;
}

export interface TaskImpact {
  estimatedMoneySaved?: number;
  estimatedRevenueIncrease?: number;
  estimatedTimeSavedHours?: number;
  impactSummary: string;
}

export interface Task {
  id: string;
  businessId: string;

  recommendationId?: string;
  agentId?: string;

  category: TaskCategory;
  priority: TaskPriority;
  status: TaskStatus;

  title: string;
  description: string;
  reason: string;

  owner: TaskOwner;

  impact?: TaskImpact;

  requiresApproval: boolean;

  createdAt: string;
  dueDate?: string;
  completedAt?: string;
  updatedAt?: string;
}
