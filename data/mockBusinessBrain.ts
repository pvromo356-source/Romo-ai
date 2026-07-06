import type {
  Agent,
  Business,
  BusinessCost,
  BusinessDashboard,
  BusinessIntelligenceProfile,
  BusinessMetric,
  BusinessReport,
  Customer,
  DataRequest,
  DataSource,
  Insight,
  Integration,
  Recommendation,
  Supplier,
  Task,
} from "../types";

const businessId = "business-demo-001";

export const mockBusiness: Business = {
  identity: {
    id: businessId,
    name: "Romo's Tacos",
    legalName: "Romo's Tacos LLC",
    industry: "Restaurant",
    website: "https://romostacos.com",
    timezone: "America/Los_Angeles",
    size: "small",
    location: {
      city: "Tacoma",
      state: "WA",
      country: "United States",
    },
  },
  preferences: {
    preferredLanguage: "en",
    currency: "USD",
  },
  goals: {
    primaryGoal: "Increase monthly revenue while reducing supplier costs and wasted time.",
    revenueGoal: 25000,
    customerGrowthGoal: 15,
    timeSavingGoalHoursPerMonth: 20,
  },
  health: {
    score: 71,
    status: "watch",
    summary: "Business is operating, but revenue and supplier costs need attention.",
    lastReviewedAt: "2026-07-05T18:30:00.000Z",
  },
  connections: {
    websiteConnected: true,
    googleBusinessConnected: false,
    emailConnected: false,
    calendarConnected: false,
    paymentsConnected: false,
    accountingConnected: false,
  },
  metadata: {
    createdAt: "2026-07-05T18:00:00.000Z",
    updatedAt: "2026-07-05T18:30:00.000Z",
    version: 1,
  },
};

export const mockIntelligenceProfile: BusinessIntelligenceProfile = {
  businessId,
  currentLevel: "level_0_website_only",
  precision: "basic",
  connectedSourceCount: 1,
  missingCriticalSourceCount: 4,
  firstValueDelivered: true,
  firstValueDeliveredAt: "2026-07-05T18:05:00.000Z",
  recommendedNextConnection: {
    title: "Connect Google Business Profile",
    description: "Unlock review trends, local visibility insights, and customer trust analysis.",
    estimatedSetupTimeMinutes: 3,
    expectedPrecisionGain: "Basic to Directional",
    expectedBusinessValue: "Better understanding of reputation, reviews, and local discovery.",
  },
  createdAt: "2026-07-05T18:00:00.000Z",
  updatedAt: "2026-07-05T18:30:00.000Z",
};

export const mockDataSources: DataSource[] = [
  {
    id: "source-website-001",
    businessId,
    type: "website",
    name: "Business Website",
    status: "available",
    url: "https://romostacos.com",
    freshness: "today",
    confidenceLevel: "medium",
    confidenceScore: 72,
    lastUpdatedAt: "2026-07-05T18:05:00.000Z",
    createdAt: "2026-07-05T18:00:00.000Z",
  },
  {
    id: "source-public-001",
    businessId,
    type: "public_data",
    name: "Public Business Data",
    status: "available",
    freshness: "this_week",
    confidenceLevel: "low",
    confidenceScore: 48,
    createdAt: "2026-07-05T18:00:00.000Z",
  },
];

export const mockDataRequests: DataRequest[] = [
  {
    id: "request-google-business-001",
    businessId,
    category: "website",
    priority: "high",
    status: "open",
    title: "Connect Google Business Profile",
    reason: "Romo AI can analyze reviews, local visibility, customer trust, hours, and photos.",
    requestedData: "Google Business Profile access",
    acceptedSources: [
      {
        source: "integration",
        label: "Connect Google Business",
        estimatedTimeMinutes: 3,
      },
    ],
    expectedImprovement: "Improves accuracy for reputation, reviews, and local customer insights.",
    example: "Review rating dropped from 4.6 to 4.3 this month. Main complaint: wait time.",
    createdAt: "2026-07-05T18:10:00.000Z",
  },
  {
    id: "request-sales-001",
    businessId,
    category: "revenue",
    priority: "high",
    status: "open",
    title: "Upload or connect monthly sales",
    reason: "Without sales data, Romo AI can identify website problems but cannot calculate lost revenue accurately.",
    requestedData: "Monthly revenue, orders, and average ticket size",
    acceptedSources: [
      {
        source: "csv",
        label: "Upload CSV",
        estimatedTimeMinutes: 2,
      },
      {
        source: "excel",
        label: "Upload Excel",
        estimatedTimeMinutes: 2,
      },
      {
        source: "integration",
        label: "Connect payments or accounting",
        estimatedTimeMinutes: 5,
      },
    ],
    expectedImprovement: "Allows Romo AI to estimate revenue changes, lost sales, and growth opportunities.",
    example: "Revenue dropped 8%. Estimated monthly impact: -$1,600.",
    createdAt: "2026-07-05T18:12:00.000Z",
  },
];

export const mockMetrics: BusinessMetric[] = [
  {
    id: "metric-revenue-001",
    businessId,
    category: "revenue",
    name: "Estimated Monthly Revenue",
    description: "Demo revenue based on sample business data.",
    value: 18400,
    unit: "usd",
    period: {
      startDate: "2026-06-01",
      endDate: "2026-06-30",
    },
    comparison: {
      previousValue: 20000,
      currentValue: 18400,
      changeAmount: -1600,
      changePercent: -8,
      trend: "down",
    },
    source: "demo_sample",
    confidence: 0.72,
    createdAt: "2026-07-05T18:15:00.000Z",
  },
  {
    id: "metric-supplier-cost-001",
    businessId,
    category: "supplier_cost",
    name: "Chicken Supplier Cost Increase",
    description: "Supplier cost increase detected from sample invoice data.",
    value: 12,
    unit: "percent",
    period: {
      startDate: "2026-06-01",
      endDate: "2026-06-30",
    },
    comparison: {
      previousValue: 82,
      currentValue: 91.84,
      changeAmount: 9.84,
      changePercent: 12,
      trend: "up",
    },
    source: "demo_invoice",
    confidence: 0.78,
    createdAt: "2026-07-05T18:16:00.000Z",
  },
  {
    id: "metric-reviews-001",
    businessId,
    category: "reviews",
    name: "Google Rating",
    description: "Demo public reputation trend.",
    value: 4.3,
    unit: "score",
    period: {
      startDate: "2026-06-01",
      endDate: "2026-06-30",
    },
    comparison: {
      previousValue: 4.6,
      currentValue: 4.3,
      changeAmount: -0.3,
      changePercent: -6.52,
      trend: "down",
    },
    source: "public_demo",
    confidence: 0.61,
    createdAt: "2026-07-05T18:17:00.000Z",
  },
];

export const mockCosts: BusinessCost[] = [
  {
    id: "cost-chicken-001",
    businessId,
    supplierId: "supplier-001",
    name: "Chicken case",
    category: "supplier",
    type: "variable",
    amount: 91.84,
    currency: "USD",
    unit: "case",
    quantity: 1,
    totalAmount: 91.84,
    frequency: "weekly",
    effectiveDate: "2026-06-15",
    comparison: {
      previousAmount: 82,
      currentAmount: 91.84,
      changeAmount: 9.84,
      changePercent: 12,
    },
    source: "invoice",
    sourceReference: {
      sourceName: "Demo supplier invoice",
      fileName: "supplier_invoice_demo.pdf",
    },
    confidence: 0.78,
    notes: "Demo cost used for dashboard prototype.",
    createdAt: "2026-07-05T18:18:00.000Z",
  },
];

export const mockInsights: Insight[] = [
  {
    id: "insight-revenue-drop-001",
    businessId,
    category: "revenue",
    severity: "warning",
    title: "Revenue dropped 8%",
    summary: "Estimated monthly revenue dropped by $1,600 compared to the previous month.",
    evidence: [
      {
        label: "Previous revenue",
        value: "$20,000",
        source: "demo_sample",
      },
      {
        label: "Current revenue",
        value: "$18,400",
        source: "demo_sample",
      },
      {
        label: "Change",
        value: "-8%",
        source: "calculated_metric",
      },
    ],
    relatedMetricIds: ["metric-revenue-001"],
    confidence: 0.72,
    createdAt: "2026-07-05T18:20:00.000Z",
  },
  {
    id: "insight-supplier-cost-001",
    businessId,
    category: "supplier",
    severity: "critical",
    title: "Supplier cost increased 12%",
    summary: "Chicken cost increased from $82.00 to $91.84 per case. This may reduce monthly profit.",
    evidence: [
      {
        label: "Previous cost",
        value: "$82.00/case",
        source: "demo_invoice",
      },
      {
        label: "Current cost",
        value: "$91.84/case",
        source: "demo_invoice",
      },
      {
        label: "Change",
        value: "+12%",
        source: "calculated_metric",
      },
    ],
    relatedMetricIds: ["metric-supplier-cost-001"],
    confidence: 0.78,
    createdAt: "2026-07-05T18:21:00.000Z",
  },
];

export const mockRecommendations: Recommendation[] = [
  {
    id: "recommendation-supplier-review-001",
    businessId,
    insightId: "insight-supplier-cost-001",
    category: "supplier",
    status: "ready_for_review",
    riskLevel: "low",
    title: "Review supplier pricing this week",
    problem: "Chicken cost increased 12%, creating profit pressure.",
    recommendedAction: "Compare current supplier pricing with two alternatives and negotiate the next order.",
    impact: {
      estimatedMoneySaved: 1420,
      estimatedImpactSummary: "Potential savings of up to $1,420 per month if the cost increase is reduced or reversed.",
    },
    confidence: 0.76,
    requiresApproval: true,
    createdAt: "2026-07-05T18:23:00.000Z",
  },
  {
    id: "recommendation-google-business-001",
    businessId,
    category: "marketing",
    status: "ready_for_review",
    riskLevel: "low",
    title: "Connect Google Business Profile",
    problem: "Romo AI only has website and public demo data. Reputation and local visibility insights are limited.",
    recommendedAction: "Connect Google Business Profile to unlock review trends, customer complaints, photos, hours, and local ranking opportunities.",
    impact: {
      estimatedTimeSavedHours: 3,
      estimatedImpactSummary: "Improves precision for local marketing and customer trust recommendations.",
    },
    confidence: 0.9,
    requiresApproval: true,
    createdAt: "2026-07-05T18:24:00.000Z",
  },
];

export const mockAgents: Agent[] = [
  {
    id: "agent-analytics-001",
    businessId,
    type: "analytics",
    name: "Analytics Agent",
    mission: "Explain business numbers and identify changes that matter.",
    capabilities: ["analyze", "recommend", "report"],
    status: "active",
    performance: {
      tasksCompleted: 0,
      recommendationsCreated: 2,
      estimatedMoneySaved: 1420,
    },
    createdAt: "2026-07-05T18:00:00.000Z",
    lastActiveAt: "2026-07-05T18:25:00.000Z",
  },
  {
    id: "agent-operations-001",
    businessId,
    type: "operations",
    name: "Operations Agent",
    mission: "Find operational issues, supplier problems, and wasted time.",
    capabilities: ["analyze", "recommend", "monitor"],
    status: "waiting_for_approval",
    performance: {
      tasksCompleted: 0,
      recommendationsCreated: 1,
    },
    createdAt: "2026-07-05T18:00:00.000Z",
    lastActiveAt: "2026-07-05T18:26:00.000Z",
  },
];

export const mockTasks: Task[] = [
  {
    id: "task-supplier-review-001",
    businessId,
    recommendationId: "recommendation-supplier-review-001",
    agentId: "agent-operations-001",
    category: "supplier",
    priority: "high",
    status: "waiting_for_approval",
    title: "Compare chicken supplier pricing",
    description: "Check two supplier alternatives and compare price per case.",
    reason: "Supplier cost increased 12%, which may reduce monthly profit.",
    owner: {
      type: "romo_agent",
      name: "Operations Agent",
      agentId: "agent-operations-001",
    },
    impact: {
      estimatedMoneySaved: 1420,
      impactSummary: "Potential savings of up to $1,420 per month.",
    },
    requiresApproval: true,
    createdAt: "2026-07-05T18:27:00.000Z",
    dueDate: "2026-07-12",
  },
];

export const mockIntegrations: Integration[] = [
  {
    id: "integration-website-001",
    businessId,
    provider: "manual",
    category: "website",
    name: "Website scan",
    status: "connected",
    permissions: {
      canRead: true,
      canWrite: false,
      requiresApprovalBeforeWrite: true,
    },
    sync: {
      lastSyncAt: "2026-07-05T18:05:00.000Z",
      recordsSynced: 1,
      lastSyncStatus: "success",
    },
    connectedAt: "2026-07-05T18:05:00.000Z",
    createdAt: "2026-07-05T18:05:00.000Z",
  },
  {
    id: "integration-google-business-001",
    businessId,
    provider: "google",
    category: "marketing",
    name: "Google Business Profile",
    status: "not_connected",
    permissions: {
      canRead: true,
      canWrite: false,
      requiresApprovalBeforeWrite: true,
    },
    sync: {},
    createdAt: "2026-07-05T18:05:00.000Z",
  },
];

export const mockCustomers: Customer[] = [
  {
    id: "customer-001",
    businessId,
    name: "Demo Customer",
    status: "active",
    segment: "returning",
    source: "google",
    metrics: {
      lifetimeValue: 420,
      totalOrders: 6,
      averageOrderValue: 70,
      lastPurchaseAmount: 68,
    },
    firstSeenAt: "2026-01-12",
    lastInteractionAt: "2026-06-28",
    lastPurchaseAt: "2026-06-28",
    createdAt: "2026-07-05T18:00:00.000Z",
  },
];

export const mockSuppliers: Supplier[] = [
  {
    id: "supplier-001",
    businessId,
    name: "Demo Food Supplier",
    category: "food",
    status: "watch",
    costSummary: {
      averageMonthlySpend: 6200,
      lastOrderAmount: 91.84,
      costChangePercent: 12,
      costChangeSummary: "Chicken case cost increased from $82.00 to $91.84.",
    },
    lastOrderAt: "2026-06-15",
    nextReviewAt: "2026-07-12",
    notes: "Demo supplier used for business brain prototype.",
    createdAt: "2026-07-05T18:00:00.000Z",
  },
];

export const mockReports: BusinessReport[] = [
  {
    id: "report-website-scan-001",
    businessId,
    type: "website_scan",
    status: "ready",
    title: "Initial Business Scan",
    summary: {
      headline: "Romo AI found supplier cost pressure and limited data access.",
      keyTakeaways: [
        "Revenue is estimated to be down 8%.",
        "Supplier cost increased 12%.",
        "Google Business access would improve precision.",
      ],
      confidence: 0.72,
    },
    sections: [
      {
        id: "section-finance-001",
        title: "Financial Pressure",
        summary: "Revenue is down and supplier cost increased.",
        findings: [
          "Estimated revenue changed from $20,000 to $18,400.",
          "Chicken case cost increased from $82.00 to $91.84.",
        ],
        relatedMetricIds: ["metric-revenue-001", "metric-supplier-cost-001"],
        relatedInsightIds: ["insight-revenue-drop-001", "insight-supplier-cost-001"],
      },
    ],
    relatedRecommendationIds: ["recommendation-supplier-review-001"],
    relatedTaskIds: ["task-supplier-review-001"],
    createdAt: "2026-07-05T18:30:00.000Z",
  },
];

export const mockDashboard: BusinessDashboard = {
  business: mockBusiness,
  intelligence: mockIntelligenceProfile,
  timeRange: "this_month",
  summaryCards: [
    {
      id: "card-health-score",
      title: "Business Health",
      value: "71/100",
      changeSummary: "Watch status",
      status: "watch",
    },
    {
      id: "card-revenue",
      title: "Revenue",
      value: "$18,400",
      changeSummary: "-8% vs previous month",
      status: "at_risk",
    },
    {
      id: "card-supplier-cost",
      title: "Supplier Cost",
      value: "+12%",
      changeSummary: "Chicken case increased",
      status: "critical",
    },
    {
      id: "card-intelligence",
      title: "Intelligence Level",
      value: "Level 0",
      changeSummary: "Website only",
      status: "watch",
    },
  ],
  topMetrics: mockMetrics,
  topInsights: mockInsights,
  recommendations: mockRecommendations,
  tasks: mockTasks,
  dataRequests: mockDataRequests,
  actionPrompts: [
    {
      id: "prompt-supplier-approval",
      title: "Approve supplier price review",
      reason: "Supplier cost increased 12%. Estimated monthly impact: $1,420.",
      primaryActionLabel: "Approve Review",
      relatedTaskId: "task-supplier-review-001",
      relatedRecommendationId: "recommendation-supplier-review-001",
    },
    {
      id: "prompt-connect-google",
      title: "Connect Google Business Profile",
      reason: "This improves local visibility, review, and reputation insights.",
      primaryActionLabel: "Connect Google Business",
      relatedRecommendationId: "recommendation-google-business-001",
    },
  ],
  generatedAt: "2026-07-05T18:35:00.000Z",
};
