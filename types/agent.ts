/**
 * ============================================================
 * Romo AI
 * Agent Domain Model
 * ------------------------------------------------------------
 * Agents are specialized business workers.
 *
 * Agents are NOT the brain.
 * The Business Brain decides what matters.
 * Agents execute specific missions.
 *
 * Example:
 * - Marketing Agent finds weak campaigns.
 * - Sales Agent finds missed revenue.
 * - Operations Agent finds inefficiencies.
 * - Analytics Agent explains numbers.
 * ============================================================
 */

export type AgentType =
  | "marketing"
  | "sales"
  | "operations"
  | "customer_success"
  | "analytics";

export type AgentStatus =
  | "active"
  | "paused"
  | "waiting_for_approval"
  | "error";

export type AgentCapability =
  | "analyze"
  | "recommend"
  | "draft"
  | "monitor"
  | "report"
  | "execute_with_approval";

export interface AgentPerformance {
  tasksCompleted: number;
  recommendationsCreated: number;
  estimatedMoneySaved?: number;
  estimatedRevenueGenerated?: number;
  estimatedTimeSavedHours?: number;
}

export interface Agent {
  id: string;
  businessId: string;

  type: AgentType;
  name: string;
  mission: string;

  capabilities: AgentCapability[];

  status: AgentStatus;

  performance?: AgentPerformance;

  createdAt: string;
  lastActiveAt?: string;
  updatedAt?: string;
}